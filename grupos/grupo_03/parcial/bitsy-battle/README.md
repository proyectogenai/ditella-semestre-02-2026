# Bitsy Battle

App complementaria de **Pixelados**: un RPG de batallas por turnos 4v4. Cada página resuelta de la revista desbloquea una variante de Bitsy.

## Cómo abrirla

La app lee archivos JSON, así que **no anda con doble clic sobre `index.html`**. Hay que abrirla desde un servidor:

- **GitHub Pages:** subí la carpeta `bitsy-battle` al repo, en GitHub andá a Settings → Pages y publicá la rama. Queda en `https://<usuario>.github.io/<repo>/.../bitsy-battle/`.
- **En tu compu:** en VS Code instalá la extensión "Live Server", abrí la carpeta y tocá "Go Live". O en una terminal, dentro de la carpeta: `python -m http.server` y abrí `http://localhost:8000`.

## Carpetas

```
bitsy-battle/
├── index.html          todas las pantallas
├── css/estilo.css      estética CRT y colores de la paleta de Pixelados
├── js/
│   ├── datos.js        carga los JSON y guarda el progreso (localStorage)
│   ├── audio.js        sonidos chiptune con Web Audio (no hay archivos de audio)
│   ├── sprites.js      carga los PNG y arma las versiones infectado / desconectado
│   ├── batalla.js      motor de batalla, CPU y dibujo en el canvas
│   ├── pantallas.js    menús: inicio, señal, colección, mapa, equipo, resultado
│   └── main.js         arranque
├── data/
│   ├── bitsies.json    stats y movimientos
│   ├── mundos.json     códigos de cada página, fondos y equipos rivales
│   └── textos.json     lo que dice Bitsy y los mensajes del sistema
└── assets/
    ├── bitsies/        sprites (salidos de pixelar.py, 45 px de alto)
    ├── mundos/         fondos de batalla (las escenas reducidas a 384×256)
    └── personajes/     Luca y Donna para la pantalla final
```

## Códigos de cada página

Estos son los 4 símbolos que hay que imprimir **al lado de Luca y Donna** en cada escena:

| Página | Mundo | Código | Desbloquea |
| --- | --- | --- | --- |
| 1 | Mario | ▲ ● ✦ ▲ | Bitsy Mario |
| 2 | Batman | ▲ ✖ ■ ■ | Bitsy Batman |
| 3 | Scooby-Doo | ▲ ▲ ♥ ▲ | Bitsy Dafne |
| 4 | Hello Kitty | ✦ ✖ ■ ✦ | Bitsy Hello Kitty |
| 5 | Los Simpsons | ♥ ▲ ✦ ■ | Bitsy Lisa Simpson |
| 6 | Pucca y Garu | ✦ ▲ ■ ✖ | Bitsy Puca |
| 7 | Dragon Ball | ● ♥ ✦ ✦ | (sin variante todavía) |
| 8 | Harry Potter | ✦ ✖ ■ ✖ | (sin variante todavía) |

**Código maestro (modo demo):** `✖ ✖ ✖ ✖` desbloquea todas las páginas. Para la entrega conviene cambiarlo o no mostrarlo.

## Cómo cambiar cosas

**Un código:** en `data/mundos.json`, cambiá `"codigo"` del mundo. Usá solo ■ ▲ ● ✦ ♥ ✖ y que no se repita con otro mundo. El maestro está en `"codigo_maestro"`.

**El orden de las páginas:** cambiá `"pagina"` y el orden de la lista en `mundos.json`.

**Stats de un Bitsy:** en `data/bitsies.json`, `"stats": { "pv", "atq", "def", "vel" }`. VEL decide quién actúa primero.

**Un movimiento:** cada Bitsy tiene 3, con:
- `objetivo`: `rival`, `rivales` (todos), `dos_rivales`, `aliado`, `aliados` (todo el equipo) o `propio`.
- `poder`: daño base (entre 6 y 20). Sin `poder` no hace daño.
- `golpes`: cuántas veces pega (default 1).
- `efectos`: lista de `cura {pct}`, `veneno {turnos}`, `aturdir {turnos}`, `mod {stat, cambio}` (sube o baja ATQ/DEF/VEL), `esquiva`, `al_final`, `copiar`. Con `"a": "propio"` el efecto va a quien lo usa.

**La dificultad:** en `mundos.json`, `"nivel"` de cada rival multiplica sus PV y ATQ (1 = normal).

**Un sprite:** poné el PNG en `assets/bitsies/` y apuntalo desde `"sprite"` en `bitsies.json`. Los sprites de la app se generan con `herramientas/normalizar_bitsies.py` (usa las funciones de `pixelar.py`). Desde la carpeta Pixelados:

```
python bitsy-battle/herramientas/normalizar_bitsies.py
```

A diferencia de `pixelar.py`, que lleva cada figura a 45 px de alto total, este script usa **la misma escala para todos** (la de la Bitsy Base). Así las orejas de Batman o el pelo de Lisa suman altura en vez de achicar el cuerpo. Tampoco usa la paleta congelada de 48 colores (que no tiene amarillo ni violeta): cada sprite lleva sus colores originales un poco más saturados. Para un Bitsy nuevo, agregá su JPG al diccionario `ARCH` del script.

Si un sprite falta o no carga, la app muestra la silueta de la Base con glitch.

**Agregar un Bitsy para Dragon Ball o Harry Potter:** sumalo a `bitsies.json` (copiá uno y cambiá `id`, nombre, sprite, stats y movimientos) y en `mundos.json` poné ese `id` en `"variante"` del mundo. Para que el guardián de ese mundo sea el nuevo Bitsy, cambiá `"bitsy": "archivo"` por el nuevo id.

## Reglas de batalla

- 4 contra 4. Cada ronda actúan todos los vivos, ordenados por VEL (en empate, el jugador primero).
- Daño = máx(1, poder × ATQ / DEF × azar de 0,9 a 1,1).
- Veneno: pierde 8% de PV al empezar su turno. Aturdido: pierde un turno y no puede quedar aturdido dos turnos seguidos.
- Desde la ronda 9 "la señal se degrada" y todos los golpes pegan más fuerte, para que ninguna batalla quede trabada.
- La Bitsy Base se puede repetir en el equipo; las variantes, no.
- El progreso se guarda en el navegador. Se borra desde Ajustes.
