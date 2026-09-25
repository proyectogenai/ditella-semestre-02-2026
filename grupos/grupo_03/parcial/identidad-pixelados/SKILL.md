---
name: identidad-pixelados
description: Genera escenas del universo Pixelados — mundos colapsados dentro de una computadora vieja, en pixel art denso tipo "¿Dónde está Wally?" — y las lleva a la grilla y la paleta del proyecto. Usar para producir cualquier página del atlas, los Bitsies disfrazados, o para verificar que una pieza pertenece al sistema.
---

# Pixelados · sistema de identidad

Grupo 03 · Donna Liporace · Luca Fernández Ciatti · Lucía Medina
IA Generativa y Diseño · UTDT · Clase 06

---

## 1 · Universo

Luca y Donna desarrollaban una IA generativa de modelado de personajes en una
computadora vieja: un sistema capaz de producir la versión Pixel Art de
cualquier personaje. El punto de partida de todo modelo era **Bitsy**, el
esqueleto base, el maniquí sobre el que la IA vestía cada personaje nuevo.

El dataset estaba ordenado: una carpeta por mundo y, adentro de cada una,
subcarpetas por escenario, por personaje, por objeto.

Un café volcado sobre el teclado los absorbió hacia adentro de la máquina y
reventó las subcarpetas. **Los mundos no se mezclaron entre sí: cada uno
colapsó sobre sí mismo.** Todos los escenarios, personajes y objetos de un
mismo mundo conviven ahora en un solo plano imposible.

**Qué se ve.** Todo transcurre dentro de la pantalla de esa computadora:
pasado digital, baja resolución, interfaces antiguas, color de fósforo de CRT.
La señal de que el sistema está roto **no es el caos** —el caos ya está
ocupado haciendo de juego de búsqueda— sino **la repetición**: los personajes
de cada mundo aparecen varias veces en la misma escena, porque son archivos
apilados, no una multitud.

**Qué nunca es.** Una escena limpia sobre fondo liso. Una ilustración con
degradados suaves. Una mezcla de dos mundos en la misma página. Un cuadrante
vacío.

---

## 2 · Bloque de estilo

Las capas 2 a 5. Se pegan sin cambiar una palabra en toda generación.

**El bloque es texto puro y se sostiene solo.** No menciona adjuntos ni archivos:
la cátedra tiene que poder correrlo y obtener una escena de este universo aunque
su entorno no acepte imágenes. Las referencias mejoran el resultado, no lo
sostienen. La instrucción de qué adjuntar vive en el campo 3, que es operación,
no sistema.

```
full bleed illustration that fills the entire frame edge to edge: no screen
frame, no monitor bezel, no rounded corners, no vignette, no border of any kind,

retro pixel art, clearly visible chunky pixels, hard aliased edges,
no anti-aliasing, no smooth gradients, shading built from 3 or 4 flat tones
per surface, soft internal shading with several tones per garment,
realistic body proportions,

reuse the same character models across the scene: about 46 distinct characters,
and each one of them appears three times in different places and poses, so that
the crowd is visibly made of repeated copies rather than of unique individuals,

a limited palette of 24 colors, high chroma saturated color, strong overall
contrast and readability, with enough local contrast to keep figures visible
against the ground behind them,

include deep dark accents and strong shadow tones so that the image keeps a full
range from very light to very dark,

4:3 composition, around 140 figures in total, at least 24 simultaneous separate
actions, a standing person is about 1/12 of the image height, layered foreground,
middle ground and background,

the world is built in five or more stacked vertical levels connected by stairs,
ladders, ramps and bridges, with structures continuing past the top and the
bottom of the frame,

no open sky and no horizon visible: the world fills the frame completely,

distribute the figures, objects, props, micro-architecture and actions evenly
across the entire frame, edge to edge and corner to corner, equal density in the
upper third and in the lower third, no empty quadrant, only very small and
occasional breathing spaces, keep the scene dense, crowded and active but still
readable,

every roof, platform, walkway, bridge, tunnel mouth and corner contains either
a character, a prop, an object cluster or a small action, break large planes
into smaller occupied zones,

fill the environment with many secondary and tertiary elements: platforms,
ladders, stairways, bridges, balconies, railings, arches, tunnels, windows,
doors, ledges, hanging elements, ropes, crates, fences, narrow passages,
alcoves, rooftop details, small machinery, repeated architectural fragments,
and clusters of the small repeated props and collectible objects that belong
to this world,

keep important elements away from the extreme edges, interface elements appear
only as architecture and props, never as an overlay, no written words, no
legible signage, no logos, no watermark
```

**Capa 1 — la única que cambia por pieza:**

```
<el mundo>, every location, character and object of this world collapsed
together into one impossible plane, the same characters reappearing several
times across the scene,
```

### Valores del sistema

| | Valor |
| --- | --- |
| Escena lógica | 787 × 590 px (4:3) → recorte a 787 × 526 (3:2) |
| Resolución de generación | 4K, sin reescalado posterior |
| Pantalla en la doble página | 3:2, 40 × 26,7 cm |
| Persona | 1/12 del alto de la imagen generada |
| Bitsy | ~35 px lógicos |
| Paleta | 24 colores por escena |

**La paleta es libre de tono pero no de comportamiento.** Cada mundo elige sus
24 colores. Lo que se mantiene igual en las ocho páginas es el **rango de
valor** (mismo negro más oscuro, mismo blanco más claro) y el **techo de
saturación**. Dos mundos pueden no compartir un solo tono y leerse igual como
el mismo libro; lo que los partiría es que uno salga pastel y el otro neón.

Quedan fijos, porque los usan los personajes: el blanco de la camisa de Luca,
el negro de la ropa de Donna, sus tonos de piel, y el blanco de Bitsy.

---

## 3 · Modelo y parámetros

Pensada para **Gemini 3 Pro Image (Nano Banana Pro)**.

- **Relación:** se genera en 4:3 y se recorta a 3:2, sacando 5,5% arriba
  y 5,5% abajo. La app no siempre ofrece 3:2, y 4:3 es la más cercana:
  el recorte cae donde el bloque ya declara que las estructuras siguen
  fuera del cuadro.
- **Resolución:** 4K para escenas de imprenta.
- **Referencias adjuntas.** No hay casilleros de slot en la app: se adjuntan las
  imágenes y se dice con palabras qué hacer con ellas. Antes del prompt va esta
  línea de operación:

  > The attached images are STYLE REFERENCES ONLY. Take from them the drawing
  > style: soft internal shading with several tones per garment, no black
  > outlines, realistic body proportions. Do NOT include these characters in
  > the scene.

  Para escenas: `referencias/luca.png` y `referencias/donna.png`, más la imagen
  madre una vez que exista. De ellas se toma **el dibujo**, nunca los
  personajes, que no se generan sino que se componen.

  Para Bitsies: además `referencias/bitsy-base.png`. **Esta es la única
  referencia indispensable del sistema** — la silueta de Bitsy es un dibujo y no
  se reconstruye desde texto por más que se la describa. Viaja adentro de la
  carpeta, así que la skill sigue siendo autosuficiente.
- **Negative prompt:**
  `smooth gradients, anti-aliasing, blur, depth of field, photorealistic,
  3D render, empty background, single subject, text, letters, HUD overlay,
  isometric`

**Un límite conocido del sistema.** El modelo devuelve una imagen que *parece*
pixel art pero no lo es: no tiene grilla y trae cientos de miles de colores.
Medido sobre las primeras generaciones: 279.000 y 842.000 colores únicos, y una
alineación de grilla de 1,1 donde 1,0 es puro azar — es decir, ninguna. Los
"píxeles" son formas de tamaños distintos con los bordes suavizados.

Eso no se corrige con palabras en el prompt: se corrige cuantizando después, y
el grupo decidió no incorporar ese paso. Queda registrado como límite asumido,
no como algo que se nos pasó. La consecuencia práctica es que el tamaño de píxel
no es constante entre escenas, así que **hay que generar siempre en 4K**: es lo
único que sostiene el detalle a tamaño de impresión.

---

## 4 · El monitor

Todas las escenas se ven dentro de un monitor retro que ocupa la doble página
entera: bisel, rejillas, luces, y el reflejo de la habitación en los bordes.

**El monitor no se genera nunca.** Es un asset fijo que se compone en Figma
encima de cada escena. Si lo dibujara el modelo, lo redibujaría distinto cada
vez y se perdería el dispositivo de consistencia más fuerte del proyecto: ocho
mundos sin un solo color en común se leen como el mismo libro porque están
todos dentro de la misma pantalla.

De ahí salen dos reglas de composición: nada importante pegado al borde,
porque el bisel y el reflejo se apoyan encima; y **nada escondido en la franja
central**, porque el doblez del libro pasa por el medio de la pantalla.

---

## 5 · Los personajes

### Bitsy — el guía visible

Aparece en cada escena, deja pistas desde el cuadro de diálogo, y lleva el
disfraz del mundo que le toca. **Invariable:** la silueta (cabeza circular
grande, cuerpo redondeado, brazos y piernas de línea fina), los dos ojos
ovalados negros —que ningún disfraz tapa, ni máscara ni casco ni pelo— y la
piel blanca asomando donde el disfraz no cubre.

Cada disfraz se escribe una vez en `disfraces/<nombre>.txt` y queda congelado:

```
nombre:   <el personaje a imitar>
mundo:    <en qué mundo transcurre esa escena>
disfraz:  <el texto exacto que va en el prompt>
paleta:   <los colores de ese mundo en hex>
cubre:    <cabeza, cuello, torso, piernas>
```

### Luca y Donna — los escondidos

Aparecen **una sola vez por escena**, y son lo único de la página que no
pertenece a ese mundo.

**Invariable:** la cara y el outfit base — Donna de negro con campera, Luca de
pantalón negro y camisa blanca. **Variable:** accesorios del mundo, colgados
encima del outfit, nunca reemplazándolo.

Esa adaptación parcial es deliberada: si fueran completamente ajenos al mundo,
el lector los encontraría barriendo la escena en busca de "lo raro", sin
mirarlos. Los accesorios los devuelven al terreno de la observación.

**No se generan nunca: se componen** desde `referencias/luca.png` y
`referencias/donna.png`. Por eso el bloque madre pide que **la multitud se
parezca a ellos** —sombreada, sin contorno negro, de proporciones realistas— y
no al revés: el prompt no manda sobre los escondidos, manda sobre todo lo demás.
Si la multitud lleva contorno y ellos no, se leen pegados encima.

**Dónde nunca:** en la franja central del doblez, pegados al borde, ni sobre
una masa de color plano donde queden obvios.

---

## 6 · Regla de variación

Entre una escena y la siguiente cambia **una sola** de estas perillas:

- **El mundo** — siempre uno distinto, nunca mezclado con otro.
- **El punto de vista** — contrapicado, a la altura del ojo, cenital.
- **La dominante de color** — dentro del mismo rango de valor y saturación.
- **La dificultad** — una página fácil, después una difícil. La camisa blanca
  de Luca es la perilla: a la vista en la fácil, detrás de algo blanco en la
  difícil.

Nunca dos mundos parecidos en páginas enfrentadas, ni dos escondites en zonas
similares seguidos.

---

## 7 · Restricciones

1. **Un mundo por página.** Nada de una escena con elementos de dos mundos.
2. **Los ojos de Bitsy no se tapan ni se redibujan.**
3. **El outfit base de Luca y Donna no se reemplaza**, solo se le agregan
   accesorios.
4. **El monitor no se genera.** Se compone.
5. **La tipografía no la genera la IA.** Títulos, folios, cartelas, cuadro de
   diálogo y colofón se componen en Figma con tipografías reales.
6. **Toda escena se genera en 4K.** Es lo único que sostiene el detalle a
   tamaño de impresión, dado que el píxel no está fijado por post-proceso.
7. **Ninguna escena vacía ni ningún cuadrante muerto.** Si no hay dónde
   esconderse, se descarta.
8. **Los mundos se describen, no se nombran.** El campo `mundo` va en términos
   genéricos —arquetipo, prendas, paleta, props—, no como marca real.

---

## Estado

**Cerrado:** universo, bloque madre completo, densidad, formato de pantalla y
reglas de los tres personajes.

**Pendiente:**

- La **imagen madre** definitiva. Las pruebas fueron: primero isométricas y
  con figuras chicas (se sacó eBoy), después con el tamaño de figura correcto
  pero con un dibujo incompatible con las fichas de Luca y Donna — multitud con
  contorno negro contra personajes sin contorno. Se sacó Paul Robertson por
  eso. Falta regenerar con las fichas adjuntas como referencia de dibujo.
- El **punto de vista fijo** del sistema, que hoy no está declarado.
- Los **cuatro mundos** que faltan para llegar a ocho.
- Qué es **el virus** y qué forma gráfica tiene **la señal**.
- Dónde va el **cuadro de diálogo** sin tapar zona de búsqueda, y cómo se
  resuelve el **reflejo** sin bajar el contraste donde hay que buscar.
- **Model sheet** de Luca y Donna en varias poses: hoy hay una sola vista
  frontal, y ocho escenas con la misma pose se leen como calcomanías.
- Re-normalizar los personajes a 56 px (están a 72) y re-exportar los Bitsies
  sin pedestal ni cartela.
