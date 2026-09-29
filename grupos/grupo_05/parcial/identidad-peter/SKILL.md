---
name: identidad-peter
description: >
  Genera una escena nueva del atlas "Los pequeños mundos de Peter Rabbit":
  un mundo pastoral en miniatura escondido en la naturaleza, con la lógica
  de "¿Dónde está Wally?". Usar cada vez que haga falta una escena
  adicional del mismo universo — para el libro, o para que la cátedra
  pruebe que el sistema es reproducible.
---

# Los pequeños mundos de Peter Rabbit

## El universo
Un mundo pastoral inglés en miniatura, habitado por animales antropomorfos
naturalistas (conejos, ratones, patos, erizos, ardillas, aves) que
conservan anatomía, proporciones y pelaje reales de su especie, pero se
comportan como personas a través de la postura, la ropa y sus actividades
cotidianas — nunca por expresiones faciales de caricatura. Ambientado en
un período rural, artesanal e íntimo, ligeramente antiguo: ropa simple
(sacos, vestidos, delantales, cofias, pañuelos), objetos hechos a mano,
arquitectura de cottage, huertas y bosque. Nunca objetos modernos,
tecnología ni ropa contemporánea.

Cada escena es uno de los "pequeños mundos" que Peter descubre al cruzar
puertas escondidas en la naturaleza: un jardín, una aldea subterránea, un
mercado de flores, una ciudad en un árbol, un pueblo flotante, una villa
de hongos, un bosque de noche, una aldea nevada — y el gran picnic final,
donde se revela que todos son, en realidad, un mismo bosque.

## Bloque de estilo (va siempre, sin modificar)
```
FIXED COMPOSITION — KEEP IDENTICAL THROUGHOUT THE SERIES
Compose the image as an extremely dense panoramic seek-and-find storybook
illustration, inspired by the visual logic of classic "Where's Wally?"
double-page spreads. Use a wide, elevated three-quarter bird's-eye
viewpoint, looking slightly downward onto the entire environment. The
camera should feel far enough away to reveal a large amount of the
setting at once, but close enough that individual characters, clothing,
objects and actions remain clearly readable. Maintain exactly the same
camera height, viewing angle, visual scale and approximate character size
throughout the entire series. Avoid cinematic perspective, close-ups,
dramatic foreground characters, portrait compositions or a single
dominant focal point. The composition must be densely populated from
foreground to background, with dozens of small characters distributed
naturally throughout the entire image. Characters should be relatively
small in relation to the overall environment — no single character
should dominate. Organize the density into many simultaneous
micro-scenes: conversations, accidents, games, work, domestic activities,
animals carrying objects, eating, gardening, helping one another, hiding
behind things, interacting with architecture, plants and objects. Create
multiple visual paths through the image so the viewer's eye constantly
discovers new details. No obvious central protagonist, no immediate focal
point. Controlled density, readable silhouettes, overlapping layers, many
tiny narratives and discoveries across the entire panorama.

FIXED STORYBOOK WORLD — KEEP IDENTICAL THROUGHOUT THE SERIES
The entire series belongs to the same miniature pastoral English animal
world, populated by naturalistic anthropomorphic rabbits, mice, ducks,
hedgehogs, squirrels, birds and other small countryside animals.
Anthropomorphism comes primarily through posture, clothing, gestures and
everyday activities rather than cartoon facial expressions. Handcrafted,
rural, intimate, slightly old-fashioned. Clothing: tiny cotton jackets,
dresses, aprons, bonnets, waistcoats, scarves. Environments filled with
abundant botanical detail and handcrafted objects: wildflowers,
vegetables, hedges, trees, wooden furniture, baskets, tools, fences,
stone walls, cottage architecture. No modern objects, contemporary
clothing, technology or anachronistic visual elements.

FIXED ILLUSTRATION STYLE — KEEP IDENTICAL THROUGHOUT THE SERIES
Traditional late-19th-century / early-20th-century English children's
storybook illustration aesthetic. Delicate hand-drawn pen-and-ink
linework combined with transparent watercolor washes on warm ivory paper.
Fine, slightly irregular outlines, broken contours, tiny observational
strokes, visible handmade imperfections. Keep the underlying ink drawing
clearly visible beneath the watercolor. Sparse, translucent watercolor,
uneven pigment density, subtle blooms, delicate granulation, occasional
imperfect edges, small areas of untouched paper visible. Soft muted
natural palette: sage green, moss green, olive, dusty blue, faded
turquoise, warm cream, ochre, raw sienna, earthy beige, dusty rose,
restrained brick red. Minimal shadows, subtle modeling — forms described
through ink marks and transparent watercolor layers, not digital
gradients. No digital painting, no vector art, no 3D rendering, no
photorealism, no anime, no thick outlines, no cel shading, no glossy
surfaces, no smooth digital gradients, no hyper-saturated colors, no
dramatic cinematic lighting, no contemporary children's-animation
aesthetic.
```

## Modelo y parámetros
- **Modelo:** ChatGPT (gpt-image). La escena en sí se genera a partir de
  texto puro, sin imágenes de referencia — la única excepción es la
  imagen de referencia de Peter, que se adjunta aparte para el elemento
  oculto (ver esa sección).
- **Formato:** panorámico horizontal, ~3:2. Confirmado: probada en un
  chat limpio, la skill sostiene este aspect ratio sola, sin que haga
  falta pedirlo.
- **Seed:** no se fijó.
- **Negative prompt:** implícito en el bloque de estilo (ver la lista de
  "no..." arriba) en vez de un campo de negative prompt separado.

## Regla de variación
Cada escena cambia **solo**: el lugar/situación puntual (jardín, mercado,
aldea subterránea, ciudad del árbol, pueblo flotante, villa de hongos,
bosque nocturno, picnic final), los elementos propios de ese espacio, y
las acciones y micro-historias de los personajes en esa escena. El
universo, la composición y el estilo del bloque de arriba **nunca
cambian** entre escenas — eso es lo que hace que las 8 se lean como una
sola serie y no como piezas sueltas.

**Plantilla para pedir una escena nueva:**
```
Create a scene taking place in [LUGAR / SITUACIÓN GENERAL]. The scene
should include [ELEMENTOS DEL ESPACIO: arquitectura, vegetación,
muebles, puestos, caminos, objetos]. Populate it with many small animal
characters engaged in different simultaneous activities: [ACCIONES
PROPIAS DE ESTA ESCENA]. Include small visual stories, humorous
incidents and environmental details related specifically to [TEMA DE LA
ESCENA]. Everything should feel busy, lively and full of discoveries.
```
(seguido siempre por los tres bloques fijos de arriba: composición,
mundo y estilo)

## Cómo se inserta el elemento oculto
Adjuntar la imagen de referencia de Peter Rabbit e indicar: incluirlo una
sola vez, preservando su especie, proporciones, color de pelaje y
vestimenta (saco celeste, pañuelo) exactos de la referencia. Integrarlo
de forma natural en una actividad de la escena, sin que se sienta pegado
encima — tiene que sentirse un habitante genuino de ese mundo, no un
elemento superpuesto.

Dificultad de búsqueda media: no debe ser obvio a primera vista, pero sí
identificable después de recorrer la imagen con atención. Silueta
completa o casi completa visible; tamaño consistente con los animales
cercanos; nunca en el centro de la composición, aislado en espacio vacío,
más cerca del espectador que el resto, ni en una zona de mayor contraste.
Otros conejos y animales de tamaño similar alrededor sirven de camuflaje,
pero ninguno repite su vestimenta exacta. El objetivo es el momento
"¡ahí está!" — ni instantáneo ni imposible.

**Excepción — escena de cierre ("El gran picnic"):** en la última escena
de la serie Peter NO se esconde. Aparece a la vista, como anfitrión de la
reunión que conecta a todos los mundos anteriores — es el cierre
narrativo, no otra ronda del juego de búsqueda.

## Restricciones
- Ningún personaje domina la composición; nunca hay un protagonista único
  evidente ni un foco central obvio.
- Nada de objetos modernos, tecnología o ropa contemporánea en ninguna
  escena.
- Nada de perspectiva cinematográfica, primeros planos ni personajes en
  primer plano dominando la imagen.
- El estilo de ilustración (tinta + acuarela tradicional) no se reemplaza
  nunca por look digital, 3D, anime o fotorrealismo.
- Formato panorámico horizontal siempre, información visual de borde a
  borde del cuadro.
