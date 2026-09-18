---
name: identidad-mei
description: "Genera escenas densas de viaje por Japón —ilustración 2D plana tipo libro infantil— para el atlas de búsqueda visual de Mei, una joven diseñadora japonesa-estadounidense que recorre el país guiada por el diario de su abuela. Usar para crear o ampliar las ocho paradas del viaje, escondiendo a la protagonista en cada escena."
---

# Identidad Mei

## Propósito

Crear una serie de imágenes cuadradas, densas y coherentes para un atlas de
búsqueda visual estilo "¿Dónde está Wally?". Cada escena es una parada del
viaje de Mei por Japón, multitudinaria y llena de historias pequeñas, y en
cada una de ellas se esconde a la propia Mei. El lector debe perderse
buscando y encontrar detalles nuevos en la segunda o tercera pasada.

## Universo

El mundo es el recorrido real de Mei por Japón, guiada por el diario de
viaje que le dejó su abuela. Las ocho paradas:

1. Aeropuerto internacional de Tokio
2. Templo Senso-ji en Asakusa (Tokio)
3. El cruce de Shibuya (Tokio)
4. Centro de esquí en Nikkō
5. Bosque de bambú de Arashiyama (Kioto)
6. Mercado nocturno de Dotonbori (Osaka)
7. Festival de verano (matsuri) en Kioto
8. Estación de tren bala shinkansen

No hay texto legible, logotipos ni carteles con nombres: la identidad
japonesa se expresa solo mediante arquitectura, clima, actividades y
atmósfera. El universo nunca es fotografía, nunca es 3D y nunca es un plano
limpio y vacío: siempre hay multitud, objetos y acciones que se cruzan.

La identidad completa de Mei está en `referencias/personaje-mei.md`.

## Bloque de estilo

Mantener este bloque sin cambios entre imágenes:

```text
Flat 2D vector-style children's-book illustration with a contemporary
editorial look. Fine dark organic contour lines; flat colors with a subtle
dry-brush grain texture; minimal, soft shadows; no complex gradients, no
photorealism, no 3D. Cohesive limited palette: charcoal black #1a1a1a,
navy blue #223a70, sky blue #8ec5e0, warm red #e2392f, sunflower yellow
#f5c518, warm white #fbf3e6 and warm peach skin tones. Square 1:1 frame,
populated with 70 to 100 distinct figures and 15 or more simultaneous
everyday actions, with layered foreground, middle ground and distant
background and dense details that only appear on a second look. No written
words, no logos, no legible signs, no watermark, no UI.
```

## Paleta y luz

Paleta madre: `#1a1a1a` negro carbón (líneas y cabello) · `#223a70` azul
marino (sombras y ropa) · `#8ec5e0` celeste (cielo y jeans) · `#e2392f`
rojo cálido (acento) · `#f5c518` amarillo (acento y linternas) ·
`#fbf3e6` blanco cálido (base) · tonos piel durazno.

Cada parada tiene su propia luz, y la luz debe distinguir claramente cada
sitio sin alterar la técnica plana:

- **Aeropuerto de Tokio:** luz de mañana fría y uniforme; acero, blanco,
  azul grisáceo y acentos rojos de señalética.
- **Senso-ji, Asakusa:** mediodía cálido; bermellón, negro, dorado, piedra
  gris y cielo celeste.
- **Cruce de Shibuya:** día con leves nubes; gris urbano, azul acero y
  neón en rojo y amarillo.
- **Nikkō:** invierno brillante; blanco nieve, azul hielo, azul marino y
  acentos cálidos en la ropa de esquí.
- **Arashiyama:** sol tamizado por el bambú; verdes y dorados cálidos.
- **Dotonbori:** noche; azul noche, rojo neón, naranja de puestos de
  comida y amarillo.
- **Matsuri de Kioto:** noche de verano; índigo de atardecer, rojo de
  linternas, naranja y dorado.
- **Shinkansen:** interior moderno; gris acero, azul marino, blanco y
  acentos rojos del tren.

## Modelo y parámetros

Generar una imagen por escena en relación cuadrada **1:1**. Modelo de
referencia: **Flux** (Flux.1 / Flux Kontext); el grupo confirma el
definitivo tras la primera tanda de pruebas. Conservar el bloque de estilo
madre y cambiar únicamente la descripción de la parada y su luz. Usar un
**seed fijo por escena** para iterar sin que el resto se mueva. Negative
prompt: `photography, 3D render, realistic skin, glossy, heavy gradients,
text, letters, logos, watermark, UI`.

## Regla de variación

Cambiar solo la Capa 1: lugar, hora del día, clima, arquitectura y
acciones de la multitud. Mantener el formato cuadrado, la técnica plana 2D,
la densidad de 70 a 100 figuras y la paleta madre. Nunca repetir la misma
composición ni el mismo escondite entre escenas.

## Personaje oculto

Mei es la protagonista y se esconde **una única vez** en cada escena, y se
genera dentro de la propia imagen con IA (en el prompt junto a la multitud,
o por inpainting sobre la imagen madre).

Identidad fija (no modificar): jovencita bajita tipo ilustración, cabeza
grande y piernas largas; bob negro azabache con flequillo irregular;
anteojos grandes redondos de montura cobre oscuro; ojos grandes y redondos;
mejillas rosadas marcadas; piel durazno; nariz y boca mínimas; hebilla de
estrella amarilla; buzo oversize azul marino, remera blanca, jeans
celestes anchos con dobladillo, zapatillas blancas con rojo y bolso rojo
bandolera; siempre con una cámara analógica y el diario de su abuela. El
detalle completo está en `referencias/personaje-mei.md`.

Regla de inserción: ocupar **menos del 4% del ancho** de la imagen, de pie
en una actividad cotidiana (haciendo fila, mirando un puesto, esperando el
tren, caminando con la multitud), integrada por escala, perspectiva y la luz
de cada escena. **Nunca** en el centro exacto, **nunca** aislada en primer
plano, **nunca** en pose heroica ni mirando a la cámara, y **nunca** repetir
el mismo escondite entre páginas.

## Restricciones

- Priorizar multitud, acciones y detalle por encima de un plano heroico
  vacío.
- No repetir composición ni escondite entre escenas.
- No introducir letras o símbolos legibles.
- No incluir logos, nombres, títulos ni retratos realistas.
- No cambiar la identidad visual de Mei entre escenas.
- Mantener siempre el estilo plano 2D: nunca fotografía, 3D ni pintura
  realista.
- Una sola Mei por escena.
- Escena clara a distancia y descubrible al acercarse.