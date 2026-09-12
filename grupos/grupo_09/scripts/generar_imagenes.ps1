# ============================================================
#  generar_imagenes.ps1 — fábrica de imágenes Monstrix
#
#  Qué hace: arma el prompt del atlas a partir de una plantilla
#  (ficha de NODI + mundo + bloque de estilo SIEMPRE fijos) y lo
#  manda a un proveedor de imágenes. Guarda las imágenes + una
#  ficha JSON con el prompt exacto usado (documentación del proceso).
#
#  Proveedor gratis:   pollinations (Flux, sin key, sin cuenta)
#  Proveedor pago:     gemini     (nano banana; necesita API key)
#
#  Uso (desde esta carpeta):
#    1) En config.json elegí el proveedor (default: pollinations)
#    2) Editá lo que quieras cambiar: escena, densidad, ratio...
#    3) Corré:   .\generar_imagenes.ps1
#
#  Para pollinations no hace falta nada. Para gemini sí: la API key
#  (por -ApiKey, variable $env:GEMINI_API_KEY o archivo gemini.key).
# ============================================================

[CmdletBinding()]
param(
  [string]$Config     = "config.json",   # archivo de configuración
  [string]$ApiKey     = "",              # para el proveedor gemini
  [string]$Proveedor  = "",              # fuerza un proveedor (opcional)
  [int]   $Variantes  = 0                # cuántas imágenes (0 = lo que dice config)
)

$ErrorActionPreference = "Stop"

# raíz de la herramienta = carpeta donde vive este script
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

function Join-Script([string]$p) { return Join-Path $scriptDir $p }

function Get-Mime([string]$ext) {
  switch ($ext.ToLower()) {
    ".jpg"  { "image/jpeg" }
    ".jpeg" { "image/jpeg" }
    ".webp" { "image/webp" }
    ".gif"  { "image/gif" }
    ".heic" { "image/heic" }
    default { "image/png" }
  }
}

# ---------------- 1) config -------------------------------------
if (-not (Test-Path -LiteralPath (Join-Script $Config))) {
  Write-Host "No encuentro el archivo de configuración '$Config'." -ForegroundColor Red
  Write-Host "Corré el script desde su propia carpeta (grupo_09/scripts)." -ForegroundColor Yellow
  exit 1
}
$cfg = Get-Content -LiteralPath (Join-Script $Config) -Raw -Encoding UTF8 | ConvertFrom-Json

$proveedor = if ($Proveedor) { $Proveedor } else { $cfg.proveedor }
if ($proveedor -notin @('pollinations', 'gemini')) {
  Write-Host "Proveedor desconocido: '$proveedor' (usá 'pollinations' o 'gemini')." -ForegroundColor Red
  exit 1
}
Write-Host "Proveedor: $proveedor" -ForegroundColor Cyan

# ---------------- 2) plantilla del prompt ------------------------
$plantilla = Join-Script $cfg.plantillaPrompt
if (-not (Test-Path -LiteralPath $plantilla)) { throw "No existe la plantilla: $plantilla" }
$prompt = Get-Content -LiteralPath $plantilla -Raw -Encoding UTF8
$prompt = $prompt.Replace("{{ESCENA}}", $cfg.escena).Replace("{{DENSIDAD}}", $cfg.densidad)

# ---------------- 3) preparar el proveedor -----------------------
if ($proveedor -eq 'gemini') {
  # la API key es una contraseña: nunca va hardcodeada
  $key = $ApiKey
  if (-not $key) { $key = $cfg.apiKey }
  if (-not $key) { $key = $env:GEMINI_API_KEY }
  if (-not $key) {
    $keyFile = Join-Script "gemini.key"
    if (Test-Path -LiteralPath $keyFile) { $key = (Get-Content -LiteralPath $keyFile -Raw).Trim() }
  }
  if (-not $key) {
    Write-Host "Falta la API key de Gemini." -ForegroundColor Red
    Write-Host "  · variable:  `$env:GEMINI_API_KEY = 'tu-key'"
    Write-Host "  · archivo:   crea 'gemini.key' (solo la key) al lado del script"
    Write-Host "  · parámetro: .\generar_imagenes.ps1 -ApiKey 'tu-key'"
    exit 1
  }

  # cuerpo del pedido: texto + imagen de referencia opcional
  $parts = @(@{ text = $prompt })
  if ($cfg.referencia) {
    $ref = Join-Script $cfg.referencia
    if (-not (Test-Path -LiteralPath $ref)) { throw "No existe la imagen de referencia: $ref" }
    $mime = Get-Mime ([System.IO.Path]::GetExtension($ref))
    $b64  = [Convert]::ToBase64String([System.IO.File]::ReadAllBytes($ref))
    $parts += @{ inline_data = @{ mime_type = $mime; data = $b64 } }
  }
  $bodyObj = @{
    contents = @(@{ parts = $parts })
    generationConfig = @{
      responseModalities = @("IMAGE")
      imageConfig = @{ aspectRatio = $cfg.ratio }
    }
  }
  $jsonBody = [System.Text.Encoding]::UTF8.GetBytes(($bodyObj | ConvertTo-Json -Depth 12))
  $uri      = "https://generativelanguage.googleapis.com/v1beta/models/$($cfg.modelo):generateContent"
  $headers  = @{ "x-goog-api-key" = $key }
}

# ---------------- 4) carpeta de salida ---------------------------
$salida = Join-Script $cfg.carpetaSalida
New-Item -ItemType Directory -Path $salida -Force | Out-Null

$n = if ($Variantes -gt 0) { $Variantes } else { [int]$cfg.variantes }

# ---------------- 5) generar -------------------------------------
for ($i = 1; $i -le $n; $i++) {
  Write-Host ""
  Write-Host "Generando imagen $i / $n ..." -ForegroundColor Cyan
  try {
    if ($proveedor -eq 'gemini') {
      # ---------- gemini: POST y la imagen llega en base64 ----------
      $resp = Invoke-RestMethod -Method Post -Uri $uri -Headers $headers -ContentType 'application/json' -Body $jsonBody
      $imgs = 0
      foreach ($part in $resp.candidates[0].content.parts) {
        if ($part.inlineData) {
          $ext   = if ($part.inlineData.mimeType -eq 'image/jpeg') { 'jpg' } else { 'png' }
          $nombre = "{0}_{1:D2}.{2}" -f $cfg.prefijo, $i, $ext
          [System.IO.File]::WriteAllBytes((Join-Path $salida $nombre), [Convert]::FromBase64String($part.inlineData.data))

          $doc = @{
            fecha      = (Get-Date).ToString('s')
            proveedor  = $proveedor
            modelo     = $cfg.modelo
            ratio      = $cfg.ratio
            densidad   = $cfg.densidad
            archivo    = $nombre
            prompt     = $prompt
          } | ConvertTo-Json
          [System.IO.File]::WriteAllText((Join-Path $salida ("{0}_{1:D2}.prompt.json" -f $cfg.prefijo, $i)), $doc, (New-Object System.Text.UTF8Encoding($false)))

          Write-Host "  OK: $nombre" -ForegroundColor Green
          $imgs++
        } elseif ($part.text) {
          Write-Host "  el modelo devolvió texto: $($part.text)"
        }
      }
      if ($imgs -eq 0) { Write-Host "  Esta respuesta no trajo imagen." -ForegroundColor Yellow }
    } else {
      # ---------- pollinations: GET directo, la imagen baja sola ----------
      $seed  = $cfg.seedBase + $i
      $enc   = [Uri]::EscapeDataString($prompt)
      $url   = "https://image.pollinations.ai/prompt/$enc" +
               "?width=$($cfg.ancho)&height=$($cfg.alto)&model=$($cfg.modeloPollinations)" +
               "&seed=$seed&nologo=true"

      $wc = New-Object System.Net.WebClient
      $bytes = $wc.DownloadData($url)
      $ct = [string]$wc.ResponseHeaders['Content-Type']
      $ext = if ($ct -match 'jpeg') { 'jpg' } elseif ($ct -match 'webp') { 'webp' } else { 'png' }

      "seed:$seed url:$url" | Out-File -LiteralPath (Join-Path $salida "ultima_url.txt") -Encoding utf8

      $nombre = "{0}_{1:D2}.{2}" -f $cfg.prefijo, $i, $ext
      [System.IO.File]::WriteAllBytes((Join-Path $salida $nombre), $bytes)

      $doc = @{
        fecha      = (Get-Date).ToString('s')
        proveedor  = $proveedor
        modelo     = $cfg.modeloPollinations
        seed       = $seed
        ancho      = $cfg.ancho
        alto       = $cfg.alto
        densidad   = $cfg.densidad
        archivo    = $nombre
        url        = $url
        prompt     = $prompt
      } | ConvertTo-Json
      [System.IO.File]::WriteAllText((Join-Path $salida ("{0}_{1:D2}.prompt.json" -f $cfg.prefijo, $i)), $doc, (New-Object System.Text.UTF8Encoding($false)))

      Write-Host "  OK: $nombre" -ForegroundColor Green
    }
  } catch {
    Write-Host "  Falló: $($_.Exception.Message)" -ForegroundColor Red
  }
  if ($i -lt $n) {
    # pollinations gratis tira ~1 pedido cada 15s: respetamos la fila
    if ($proveedor -eq 'pollinations') { Start-Sleep -Seconds 16 } else { Start-Sleep -Milliseconds 700 }
  }
}

Write-Host ""
Write-Host "Listo. Tus imágenes quedaron en: $salida" -ForegroundColor Green