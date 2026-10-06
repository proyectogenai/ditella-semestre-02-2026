$archivo = $args[0]

if (-not $archivo) {
    Write-Host "Uso:  .\copiar_prompt.ps1 <archivo>.md   (nombre suelto o ruta)"
    Write-Host "Copia al portapapeles el bloque de prompt (el que esta entre los cercados"
    Write-Host "'text') del archivo, como texto plano: sin cercados, sin comillas y sin"
    Write-Host "numeros de linea. Resuelve el problema de que al copiar desde el chat el"
    Write-Host "prompt se pegue en el generador como un archivo .txt en vez de texto."
    Write-Host "Nota: los prompts se componen al pedirse y no se guardan en la skill;"
    Write-Host "este script es solo para cuando el prompt recien compuesto se guarda en un archivo."
    exit 1
}

$fence = [string][char]96 * 3

if (-not (Test-Path -LiteralPath $archivo)) {
    $carpeta = $PSScriptRoot
    if (-not $carpeta) { $carpeta = Split-Path -Parent $MyInvocation.MyCommand.Path }
    $enCarpeta = Join-Path $carpeta $archivo
    if (Test-Path -LiteralPath $enCarpeta) {
        $archivo = $enCarpeta
    } else {
        Write-Host "No se encuentra el archivo: $archivo"
        exit 1
    }
}

$texto = [System.IO.File]::ReadAllText($archivo, [System.Text.Encoding]::UTF8)
$patron = '(?s)' + $fence + 'text\r?\n(.*?)\r?\n?' + $fence
$m = [regex]::Match($texto, $patron)

if (-not $m.Success) {
    Write-Host "El archivo no tiene un bloque de prompt: $archivo"
    exit 1
}

$prompt = $m.Groups[1].Value
Set-Clipboard -Value $prompt

$lineas = ($prompt -split "`r?`n").Count
Write-Host ("OK  " + $archivo)
Write-Host ("    " + $lineas + " lineas - " + $prompt.Length + " caracteres copiados al portapapeles")
Write-Host "    Pegalo con Ctrl+V en el chat del generador."
