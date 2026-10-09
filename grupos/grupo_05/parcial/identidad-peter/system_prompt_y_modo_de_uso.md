# Los pequeños mundos de Peter Rabbit

## System prompt y modo de uso

Grupo 5 · IA Generativa y Diseño · UTDT · Parcial Identidad Generativa

Este es el sistema de prompts con el que generamos las escenas del atlas. Funciona en capas:
un párrafo descriptivo que cambia en cada escena, y cinco bloques fijos que se pegan
siempre, sin modificar, para que todas las láminas se lean como una sola serie.

---

## 1. El system prompt

### 1 · Párrafo descriptivo de la escena

Es lo único que cambia de una escena a otra. Se completan los cuatro corchetes: lugar,
elementos del espacio, acciones y tema.

```
Create a scene taking place in [DESCRIBIR LUGAR / SITUACIÓN GENERAL]. The scene should
include [ELEMENTOS IMPORTANTES DEL ESPACIO: arquitectura, vegetación, muebles, puestos,
caminos, objetos, etc.]. Populate it with many small animal characters engaged in different
simultaneous activities: [DESCRIBIR ALGUNAS ACCIONES PROPIAS DE ESTA ESCENA]. Include small
visual stories, humorous incidents and environmental details related specifically to [TEMA
DE LA ESCENA]. Everything should feel busy, lively and full of discoveries.
```

### 2 · Composición fija

Cámara, escala y densidad: igual en las nueve láminas.

```
Compose the image as an extremely dense panoramic seek-and-find storybook illustration,
inspired by the visual logic of classic “Where’s Wally?” double-page spreads. Use a wide,
elevated three-quarter bird's-eye viewpoint, looking slightly downward onto the entire
environment. The camera should feel far enough away to reveal a large amount of the setting
at once, but close enough that individual characters, clothing, objects and actions remain
clearly readable. Maintain exactly the same camera height, viewing angle, visual scale and
approximate character size throughout the entire series. Every illustration should feel as
though it were observed through the same imaginary camera. Avoid cinematic perspective,
close-ups, dramatic foreground characters, portrait compositions or a single dominant focal
point. The composition must be densely populated from foreground to background, with dozens
of small characters distributed naturally throughout the entire image. Fill almost every
area with meaningful visual information while preserving enough separation for individual
figures and actions to remain readable. Characters should be relatively small in relation to
the overall environment. No single character should dominate the composition. Organize the
density into many simultaneous micro-scenes: conversations, accidents, games, work, domestic
activities, animals carrying objects, eating, gardening, helping one another, hiding behind
things, interacting with architecture, plants and objects. Create multiple visual paths
through the image so the viewer's eye constantly discovers new details. There should be no
obvious central protagonist and no immediate focal point. The result should feel visually
abundant and intricate, but never chaotic or illegible: controlled density, readable
silhouettes, overlapping layers, many tiny narratives and discoveries across the entire
panorama.
```

### 3 · Mundo fijo

Quién vive en este universo y qué nunca aparece.

```
The entire series belongs to the same miniature pastoral English animal world. It is
populated by naturalistic anthropomorphic rabbits, mice, ducks, hedgehogs, squirrels, birds
and other small countryside animals. Animals retain believable real-world anatomy,
proportions, fur, feathers, paws, muzzles and species-specific characteristics while subtly
behaving like humans. Anthropomorphism comes primarily through posture, clothing, gestures
and everyday activities rather than cartoon facial expressions. The world feels handcrafted,
rural, intimate and slightly old-fashioned. Clothing consists of tiny cotton jackets,
dresses, aprons, bonnets, waistcoats, scarves and other simple traditional garments.
Environments are filled with abundant botanical details and small handcrafted objects:
wildflowers, vegetables, grasses, hedges, trees, wooden furniture, baskets, tools, fences,
stone walls, paths, cottage architecture and humble everyday objects. Everything belongs to
the same coherent miniature universe and historical period. No modern objects, contemporary
clothing, technology or visual elements should appear.
```

### 4 · Estilo de ilustración fijo

Técnica, paleta y qué evitar. Es el prompt de estilo que surgió de describir el moodboard.

```
Traditional late-19th-century / early-20th-century English children's storybook illustration
aesthetic. Delicate hand-drawn pen-and-ink linework combined with transparent watercolor
washes on warm ivory paper. Fine, slightly irregular outlines, broken contours, tiny
observational strokes and visible handmade imperfections. Naturalistic animal drawing rather
than modern cartoon anatomy. Keep the underlying ink drawing clearly visible beneath the
watercolor. Use sparse, translucent watercolor, uneven pigment density, subtle watercolor
blooms, delicate granulation and occasional imperfect edges. Leave small areas of untouched
paper visible throughout the illustration. Use a soft, muted natural palette: sage green,
moss green, olive, dusty blue, faded turquoise, warm cream, ochre, raw sienna, earthy beige,
dusty rose and restrained brick red. Minimal shadows and very subtle modeling. Forms are
described mainly through delicate ink marks, small hatching strokes and transparent
watercolor layers rather than digital gradients. Botanical elements should feel carefully
observed from nature while remaining loose and handmade. Despite the unusually high density
of the scene, preserve the delicacy, transparency and handmade quality of a traditional
watercolor storybook illustration. No digital painting appearance, no vector art, no 3D
rendering, no photorealism, no anime, no thick outlines, no cel shading, no glossy surfaces,
no smooth digital gradients, no hyper-saturated colors, no dramatic cinematic lighting, no
oversized cartoon eyes and no contemporary children's-animation aesthetic.
```

### 5 · Personaje oculto

Se adjunta la imagen de referencia de Peter junto con el prompt. En la escena 9 (El gran
picnic) este bloque se omite: Peter no se esconde.

```
I am attaching a reference image of Peter Rabbit, the character that must appear inside the
scene. Include this exact referenced character once and only once in the illustration.
Preserve his recognizable appearance, species, facial characteristics, body proportions, fur
coloration and especially his clothing exactly as shown in the attached reference image.
Integrate him naturally into one of the many activities occurring within the scene. He must
feel like a genuine inhabitant of this world rather than an element pasted on top of the
composition. Treat Peter Rabbit as the seek-and-find character of the illustration. Medium
hiding difficulty: Peter should NOT be immediately noticeable at first glance, but he should
be clearly identifiable after carefully scanning the image. Do not make him impossibly tiny,
completely obscured or hidden behind an object. Keep his full or mostly full silhouette
visible and recognizable. He may be surrounded by other characters, partially overlapped by
environmental elements, or placed within a visually busy area so that he naturally blends
into the crowd. Do not place Peter in the center of the composition, isolated in empty
space, closest to the viewer, or in an area with strong visual contrast. Do not enlarge him
relative to the other characters. His size must be consistent with nearby animals. His
recognizability should come from his distinctive appearance and clothing rather than from
scale or compositional emphasis. Include several other rabbits and similarly sized animals
throughout the scene to create visual camouflage, but do not duplicate Peter's exact
distinctive outfit or appearance. The viewer should experience a satisfying moment of
recognition — “There he is!” — rather than spotting him instantly or struggling to determine
whether he is present at all.
```

### 6 · Consistencia de serie

Cierre que repite lo que tiene que mantenerse igual entre láminas.

```
This illustration belongs to a larger collection of seek-and-find storybook panoramas.
Maintain exactly the same visual language across the entire series: same elevated three-
quarter viewpoint, same camera distance, same approximate character scale, same high
population density, same degree of visual complexity, same watercolor transparency, same
fine ink line weight, same muted palette, same paper texture, same degree of naturalism and
the same balance between environment and characters. The illustration must be a wide
panoramic scene with visual information extending throughout the entire frame, from
foreground to background and from left edge to right edge.
```

---

## 2. Modo de uso

1. **Definir la escena nueva.** Completar los cuatro corchetes del párrafo descriptivo: dónde transcurre, qué elementos
tiene el espacio, qué acciones simultáneas hacen los animales y cuál es el tema de la
escena.

2. **Armar el prompt completo.** Párrafo descriptivo + los cinco bloques fijos, pegados tal cual, sin modificar, en ese
orden.

3. **Generar en ChatGPT (gpt-image).** Adjuntar la imagen de referencia de Peter (imagenes/referencia_peter.png), pegar el prompt y
pedir formato panorámico horizontal, aproximadamente 3:2. Las escenas se generan solo a
partir del texto; la única imagen que se adjunta es la de Peter.

4. **Revisar el resultado.** Mirar densidad, estilo y coherencia con las otras láminas. Si falta densidad (poca gente,
espacios vacíos) o el estilo se corre hacia lo digital, regenerar.

5. **Resolver el escondite a mano.** La IA no sabe esconder: suele repetir a Peter, dejarlo demasiado grande o en primer plano, o
rodearlo de conejos casi idénticos. Por eso se elimina el Peter generado y se vuelve a
colocar la imagen de referencia en Photoshop (o similar), con tamaño parecido al de los
animales vecinos, fuera del centro y lejos del primer plano. Se ajusta caso por caso:
cambiar el color de su ropa para integrarlo al entorno, bajar el brillo para que no resalte,
o eliminar personajes demasiado parecidos a él.

6. **Escena de cierre.** En El gran picnic Peter no se esconde: aparece a la vista, como anfitrión. Se genera sin el
bloque de personaje oculto y no se edita.


### Parámetros

| Campo | Valor |
| --- | --- |
| Modelo | ChatGPT (gpt-image) |
| Formato | Panorámico horizontal, aproximadamente 3:2 |
| Seed | No se fijó |
| Negative prompt | Va dentro del bloque de estilo (lista de “no…”), no como campo aparte |
| Imagen de referencia | Solo la de Peter, para el personaje oculto |

---

## 3. La skill

El mismo sistema está empaquetado como skill: identidad-peter/SKILL.md. Reúne el universo,
el bloque de estilo, el modelo y los parámetros, la regla de variación, cómo se inserta el
elemento oculto (incluida la corrección manual) y las restricciones.

Para usarla: copiar la carpeta identidad-peter dentro de ~/.claude/skills/ (Claude Code),
abrir un chat nuevo y pedir una escena en lenguaje natural, sin nombrar la skill. Por
ejemplo: “necesito una escena nueva para el atlas de Peter Rabbit, una biblioteca escondida
en un tronco hueco”. La skill responde con el prompt completo, listo para pegar en ChatGPT
junto con la imagen de Peter.

Probada en un chat limpio, la skill se carga sola, mantiene los bloques fijos palabra por
palabra, inventa un lugar nuevo coherente con el universo y sostiene el formato 3:2 sin que
se lo pidan.
