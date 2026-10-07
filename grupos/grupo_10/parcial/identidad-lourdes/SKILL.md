---
name: identidad-lourdes
description: >
  Genera una escena nueva del atlas "Lourdes" — un libro ilustrado de
  "buscar y encontrar" donde Lourdes, una chica muy fiestera, se esconde
  en fiestas de todo el mundo, dibujado en el estilo plano y de línea de
  pluma de The Parisianer. Entrega el prompt de imagen listo para pegar en
  ChatGPT (solo texto), el prompt del objeto que Lourdes pierde en esa
  fiesta, las notas para colocar a Lourdes y el objeto a mano en Figma, y
  la postal del pie de página. Usala cuando pidan "una escena nueva de
  Lourdes", "la novena fiesta", "otra página del atlas" o adaptar una
  fiesta (un tren, una boda, un mercado…) a este universo.
---

# Identidad Lourdes — atlas de fiestas

## Qué es este universo

**Lourdes** es una chica muy fiestera, con mucha onda y personalidad
propia, que recorre el mundo yendo de fiesta en fiesta. El libro consiste
en encontrarla, escondida entre la gente, en cada una. Narra una amiga
que la persigue de fiesta en fiesta y siempre llega un rato tarde: el
tono es divertido, con humor y con ganas de sumarse.

- **Dónde transcurre:** en fiestas multitudinarias, cada una con su lugar
  propio y reconocible (un carnaval, un barco, un rooftop, el Obelisco…).
  Siempre hay mucha gente, muchas cosas pasando a la vez y una arquitectura
  o un paisaje con carácter.
- **Cómo se ve:** ilustración editorial europea plana, en el ADN de *The
  Parisianer* (Éditions de la Martinière): línea de pluma fina y un poco
  irregular, colores planos y mate, fachadas vistas de frente como casas
  de muñecas, figuras flacas y angulosas con caras caricaturescas.
- **Luz:** no hay iluminación realista. La hora del día se expresa con la
  paleta y con colores planos (ventanas amarillas, neón en colores planos),
  nunca con sombras, degradés ni brillos.
- **Atmósfera:** festiva, cómica, caótica y cálida. Cada escena tiene un
  momento de caos (algo que se cae, se derrama, se persigue).
- **Lo que nunca es:** un vector moderno genérico, un look de "ilustración
  de IA", anime o webtoon, fotorrealista, brillante o con degradés; ni
  una fiesta genérica de stock sin personalidad.

## Cómo usar esta skill

Cuando te pidan una escena nueva, seguí estos pasos.

1. **Conseguí el pedido.** Hace falta saber cuál es la fiesta (lugar,
   momento, situación). Si el usuario no lo dio, proponé una opción que
   cumpla la regla de variación (más abajo) y seguí.
2. **Escribí la sección 04 (la plantilla de escena).** Es lo único que
   cambia entre escena y escena. Mirá las reglas de escritura.
3. **Armá el prompt completo:** secciones 01-03 fijas + tu sección 04 +
   secciones 05-07 fijas, sin tocar una coma de las fijas.
4. **Armá el prompt del objeto perdido** (ver "Objetos perdidos").
5. **Escribí las notas de colocación** de Lourdes y del objeto.
6. **Escribí la postal** del pie de página.
7. **Antes de entregar, revisá la lista de control** (al final). Esa
   lista es para vos: nunca va dentro del prompt de imagen.

### Reglas para escribir la sección 04

La sección 04 tiene este formato exacto:

```
04 — SCENE TEMPLATE
LOCATION: [lugar específico de la fiesta]
MOMENT: [momento del día o estación]
SITUATION: [tipo de fiesta o celebración]
SPECIFIC ACTIVITIES: [5-8 microacciones concretas y simultáneas]
ENVIRONMENTAL / CULTURAL ELEMENTS: [objetos, decoración y comida propios de esa fiesta]
REMINDER: [opcional, ver abajo]
```

Reglas, todas aprendidas de fallas reales:

- **Un elemento central grande y concreto.** En SPECIFIC ACTIVITIES va un
  elemento visual grande que ancla la composición, nombrado con forma
  definida (una carroza con un pájaro gigante, un arco floral, un corazón
  de neón). **Nunca palabras ambiguas** como "sculpture" o "inflatable"
  sin decir qué forma: el modelo inventa un cliché (una vez dibujó un
  flamenco).
- **Un momento de caos en curso:** algo que se cae, se derrama, se
  persigue o se rompe a mitad de camino. Va incluso en fiestas elegantes.
- **Arquitectura o paisaje con carácter.** Si la escena no tiene
  edificios o estructuras propias, sale genérica. Describí la fachada, la
  cubierta, el escenario o el paisaje (arcos, balcones, toldos, mástiles,
  etc.). Los edificios se piensan como fachadas frontales planas.
- **Cosas concretas, sin relleno.** Cada elemento tiene que pertenecer a
  esa fiesta. Sin objetos sueltos ni marcas reales.
- **Monumentos reales:** nombralos y describí su forma real, sin
  agregados.
- **Agua u otras superficies grandes:** describilas como bloques planos de
  un color con líneas onduladas simples, y si hace falta dar el color en
  hex (la pileta usa #2C7C94). Si el tema es una pileta o el mar, sumá
  "No underwater, scuba or snorkeling content."
- **Escenas de noche, de atardecer o de entornos naturalmente pastel**
  (playa, jardín, festival): agregá una línea REMINDER que diga que se mantiene la
  paleta plana de la sección 03 y no se cae en un look fotográfico o de
  acuarela. En la noche, usá la paleta como colores encendidos (neón,
  luces), no como un boliche oscuro fotorrealista.
- **Sin rosa** como color de paleta.
- **Anatomía:** nunca pidas proporciones "elásticas", "bendy" o
  "elongated" ni nada parecido: el modelo lo lee como permiso para
  deformar.
- **Cantidad de gente:** la fija la sección 05 (100 a 150), contando
  también a la gente que se ve dentro de vagones, cabinas o ventanas. No
  la subas.
- **Colores fuera de la paleta:** el vapor, la espuma o el humo se piden
  en crema ("cream"). No existe el blanco puro en la paleta.
- **Idioma:** la sección 04 se escribe en inglés, igual que el resto del
  prompt.

## El bloque madre (texto exacto)

El prompt final se arma pegando estas secciones **sin modificarlas**. En
el medio va la sección 04 que escribiste.

```
01 — PURPOSE
You are generating a page for an illustrated "search and find" storybook. The recurring character, Lourdes, travels the world attending parties. Each page is a densely populated scene where the reader must find her, hidden among a lively, specific, characterful crowd — not a generic stock party photo, but a rich inhabited world with its own personality and internal logic.

02 — FIXED VISUAL UNIVERSE
Flat European editorial illustration that closely imitates the look of "The Parisianer" (Éditions de la Martinière) — a hand-drawn comic-book / gouache screen-print look, NOT a digital vector look. Linework: thin, dark, slightly irregular hand-inked pen lines (like a fine felt-tip or dip pen, with a natural hand wobble; NOT perfectly smooth, NOT thick, NOT glossy). Color: solid flat matte fills applied as clean shapes inside the lines, with NO shading gradients, NO cel-shading highlights, NO gloss, NO painterly brush texture, NO paper grain. Between the busy groups of people, leave calm areas of one single flat color (the sky as one uniform flat tone, large walls as flat cream, roofs as flat slate-blue) so the page breathes.

Buildings and structures are drawn as flat, straight-on frontal elevations, like a dollhouse cutaway: large flat-colored walls and roofs, details only as thin parallel ink lines (shutters, railings, roof tiles, planks, bricks), no realistic perspective rendering, no lighting effects. Windows and doorways glow with a flat warm yellow and each one shows a small funny story happening inside, so several levels of activity are visible at once. Add two or three small animals in the whole scene, each with one head and four legs, clearly separate from the people around them.

Characters have natural, coherent anatomy — every figure has one head, two arms and two legs, with joints in the right places — drawn slim, lanky and slightly angular, with slightly long arms and legs and sharp elbows and knees, in mostly calm, clear poses with a few dynamic mid-motion poses (running, falling, reaching, chasing). Each face is a witty caricature of a specific eccentric type: tiny dot eyes, expressive eyebrows, a prominent angular nose, many faces in profile or three-quarter view. The result must feel like a page from a real published illustrated book — witty, graphically confident, editorial — NEVER a generic modern flat-vector cartoon, NEVER a generic "AI illustration" look, NEVER glossy or anime-styled, NEVER photorealistic.

EVERY character in the scene must share this exact graphic DNA: the same thin wobbly ink line, the same flat fills, the same caricatured faces (a dot or dash for the eyes, a simple line or open shape for the mouth — NOT detailed anime eyes, NOT eyelashes, NOT glossy highlights, NOT cel-shaded blush) and natural, well-formed limbs. Bodies are drawn with minimal, simple detail: plain straight-ish shapes, no exaggerated curves, a natural variety of ordinary body types (slim, stocky, tall, short, round), and clothing as plain flat shapes with few folds. NEVER default to a generic modern anime/webtoon face. Most characters stand, talk, watch or hold a drink in simple, clear poses; only a few key characters per group are caught in dramatic mid-action. Each character still distinct via clothing color, hairstyle, body shape and specific action, but all recognizably belonging to the same flat, witty "Parisianer" graphic family. Vary hairstyles, hair colors, skin tones and body types widely across the crowd — no repeated identical figures.

03 — MOTHER PALETTE
Flat matte palette: mustard yellow, brick red, olive/forest green, burnt orange, dusty blue-grey, warm cream — NO gloss, NO neon, NO pastel-candy softness.

[ACÁ VA LA SECCIÓN 04 — SCENE TEMPLATE]

05 — SEARCH-AND-FIND SYSTEM
Include 3-4 secondary discoverable details (a small visual joke, a recurring prop, an odd character moment) scattered through the scene. Approximately 100-150 individually distinct characters overall. Characters in the foreground and middle ground must have clean, anatomically correct, complete bodies with clearly separated limbs. Characters far in the background may simplify into a dense, textured crowd.

06 — COMPOSITION
Wide panoramic composition, built for a full A3 horizontal double-page spread, with a slightly elevated, comfortable wide-angle viewpoint (like looking down a street or across a venue from a bit above eye level), NOT a fully aerial top-down shot. The camera stays close enough that every figure is large enough for its face and hands to read clearly, and the scene has moderate depth — a short street or venue rather than a deep, distant one. Clear foreground, middle ground and background, with figures shrinking gently with distance. Activity extends toward the edges of the frame. Landscape format, 1414x1000px.

07 — OUTPUT / EXCLUSIONS
High-resolution hand-inked, flat-color editorial illustration in "The Parisianer" style described above. NO text. NO logos. NO watermark. NO photorealism. NO gloss or anime look. NO random unrelated filler objects. NO real brand names.
```

Notas: el prompt es en inglés a propósito, porque así se probó y funcionó.
Las partes en inglés no se traducen.

## Modelo y parámetros

- **Modelo:** generación de imágenes de ChatGPT (plan gratuito).
- **Entrada:** solo texto. **Sin imágenes de referencia**, ni de
  Lourdes ni de otras escenas ni del libro real.
- **Un chat nuevo por escena.** Pegá el prompt completo tal cual.
- **Formato:** apaisado, 1414 × 1000 px (proporción 1,414:1, la del A3
  horizontal). Va escrito en la sección 06.
- **Seed:** no se puede fijar en este modelo.
- **Negative prompt:** este modelo no tiene un campo aparte. Los
  negativos van dentro del prompt, como cláusulas "NO …" en las secciones
  02 y 07. Hay que dejarlas.
- **Vocabulario prohibido en el prompt:** ninguna palabra de revisión o
  edición (*verify, check, fix, redo, before returning, reference image*).
  El modelo lo lee como "editar una imagen que ya existe" y pide que la
  subas en vez de generar. Si pasa, sacá esas frases.
- **Después de generar:** la imagen sale de unos 1500 px de ancho, que en
  un A3 son unos 85 dpi. Para imprimir hay que agrandarla (Upscayl, modelo
  de ilustración, 3× o 4×) hasta unos 3300 px de ancho como mínimo.

## Regla de variación

Lo que **no cambia** entre escenas: las secciones 01-03 y 05-07, la
paleta, la línea, las caras, la cantidad de gente y el formato.

Lo que **sí cambia** en cada escena, y tiene que ser distinto de las
anteriores:

| Eje | Regla |
| --- | --- |
| Lugar | Un tipo de lugar que no se repita (calle, cubierta, terraza, playa, azotea, campo, plaza, jardín…) |
| Elemento central | Una silueta y una forma distintas de las ya usadas |
| Hora del día | Variar entre día, atardecer, amanecer y noche |
| Arquitectura | Una estructura o paisaje propios (una fachada, un barco, un escenario) |
| Acciones | 5-8 microacciones propias de esa fiesta, con un momento de caos |

Escenas ya hechas — la nueva no puede repetir su lugar ni su elemento
central:

| # | Escena | Hora | Elemento central |
| --- | --- | --- | --- |
| 1 | Carnaval | Tarde | Carroza con un pájaro gigante |
| 2 | Fiesta en un barco | Tarde, con mucho sol | La cubierta de un yate con barra y DJ |
| 3 | Pool party | Mediodía | Villa frente al mar con fachada y barra flotante |
| 4 | Amanecer en la playa | Amanecer | Fogata con escultura de madera de playa |
| 5 | Rooftop de noche | Noche | Corazón de neón gigante |
| 6 | Festival al aire libre | Tarde | Escenario principal y escultura gigante |
| 7 | Obelisco de Buenos Aires | Noche | El Obelisco |
| 8 | Garden party | Tarde dorada | Arco floral enorme |

Las horas que menos se usaron son el mediodía y el atardecer anaranjado;
la noche ya se usó dos veces.

## El elemento oculto: Lourdes

**Lourdes no se genera con la IA.** Se dibuja a mano y se coloca después
en Figma sobre la escena ya generada. El prompt de imagen no describe
su aspecto ni pide que aparezca: pedírselo al modelo hacía que la dibujara
mal, le cambiara el outfit o no la dibujara. La sección 01 la nombra
solo como contexto narrativo, y se deja como está.

**Cómo se la reconoce, siempre igual:**
- Silueta: pelo corto tipo bob castaño, top corto y pollera larga y fluida.
- Color: top rojo; labios rojos como único acento fuerte.
- Objetos: un vaso en la mano, cartera chica con dije de corazón (la
  "nunca suelta"), cinturón ancho con hebilla grande y botas.
- Referencia visual para colocarla: `lourdes_referencia_parisianer.png`
  (su versión en el estilo de la escena). Los archivos `boceto_lourdes.png`
  y `lourdes_color.png` son el origen a mano.

**Dónde puede aparecer:**
- En el plano medio o en el fondo.
- Metida en el bullicio, **20-40% tapada** por alguien o por algo.
- Con una actitud que cambia en cada escena (baila, observa desde un
  costado o está en el medio con su trago). Esta skill no guarda qué
  actitud tuvo en cada escena: elegí una y anotala en `concepto.md`; si no
  hay registro, elegí libremente.
- "20-40% tapada" se mide sobre su silueta: tiene que quedar visible la
  cabeza con el bob y buena parte del top rojo, para que se la pueda
  encontrar.

**Dónde nunca:**
- En primer plano ni en el centro de la composición.
- Sobre el elemento central ni bajo una luz o un color que la destaque.
- Aislada, en un espacio vacío.
- Pegada al objeto perdido de esa misma escena.

**Cómo se integra (criterio gráfico):**
- **Escala:** la misma altura que las figuras vecinas del mismo plano,
  con una diferencia de hasta 10%.
- **Perspectiva:** los pies apoyados en el mismo suelo que los demás.
- **Color y línea:** que se lea parte de la escena, con la misma línea
  fina y colores planos que las figuras de alrededor.

## Objetos perdidos (la búsqueda secundaria)

En cada escena Lourdes pierde un objeto. Se genera aparte, uno por uno,
y se coloca a mano en Figma. Nadie sabe qué buscar durante el libro: se
revelan en la página final ("Lo que Lourdes dejó atrás").

| # | Escena | Objeto perdido |
| --- | --- | --- |
| 1 | Carnaval | Zapato de taco dorado |
| 2 | Barco | Sombrero de paja de ala ancha |
| 3 | Pool party | Pareo |
| 4 | Amanecer en la playa | Antiparras de natación |
| 5 | Rooftop de noche | Llaves con llavero de pompón |
| 6 | Festival | Cámara descartable |
| 7 | Obelisco | Mate con bombilla |
| 8 | Garden party | Sombrilla de encaje |

**Cómo elegir el objeto de una escena nueva:**
- Silueta clara, que se lea aunque mida 40-60 px dentro de la escena.
- Que no se parezca a nada que ya haya en esa escena (nada de lentes de
  sol en una fiesta de lentes de sol).
- Que sea de una categoría distinta a las ya usadas (calzado, sombrero,
  tela, lentes, llaves, cámara, bebida, sombrilla).
- Que no sea la cartera con dije de corazón, que es de Lourdes y nunca
  la suelta.
- Que tenga sentido en esa fiesta (algo que se pierde ahí).

**Prompt del objeto** (un chat nuevo por objeto, solo texto). Es el
bloque de abajo con la sección "04 — OBJECT" completada: el objeto, el
ángulo desde el que mejor se reconoce (el de perfil o de frente según su
silueta) y 2 o 3 colores de la paleta. Todo lo demás se pega tal cual:

```
01 — PURPOSE
A single isolated object illustration for an illustrated "search and find" storybook. The object will be cut out and placed by hand into a larger scene, so it must read clearly even when shrunk very small.

02 — STYLE
Flat European editorial illustration in the look of "The Parisianer" (Éditions de la Martinière): thin, dark, slightly irregular hand-inked pen outline (natural hand wobble, NOT perfectly smooth, NOT thick, NOT glossy) and solid flat matte color fills applied as clean shapes inside the lines. NO shading gradients, NO cel-shading highlights, NO gloss, NO painterly texture, NO paper grain, NO cast shadow.

03 — PALETTE
Use only two or three of these flat matte colors plus the dark ink line: mustard yellow, brick red, olive/forest green, burnt orange, dusty blue-grey, warm cream. NO pink, NO neon.

04 — OBJECT
ONE single [OBJETO], seen from [ÁNGULO MÁS RECONOCIBLE]. [Forma, partes y colores, en pocas palabras.] Instantly recognizable by its silhouette.

05 — COMPOSITION
The object alone, centered, filling about 70% of a square frame, on a perfectly plain pure white background. No ground, no floor, no shadow, no hands, no people, no other objects. Simplified shapes with minimal detail and a bold, high-contrast silhouette. Square format, 1024x1024px.

06 — EXCLUSIONS
NO text. NO logos. NO watermark. NO photorealism. NO gloss or 3D rendering look. NO decoration around the object.
```

## Paleta (valores de referencia)

El prompt usa nombres de colores y es lo que entiende el modelo. Estos
son los valores de referencia para el trabajo en Figma y la maquetación:

| Color | Hex |
| --- | --- |
| Amarillo mostaza | #E0A82E |
| Rojo ladrillo | #A8402E |
| Verde oliva | #5F6B35 |
| Naranja quemado | #C8681F |
| Azul grisáceo | #6F83A0 |
| Crema cálido | #F4EBD8 |

Excepción: el agua de la pool party usa #2C7C94.

## La postal del pie de página

Cada escena lleva al pie una postal de 2 o 3 oraciones, en la voz de la
amiga que persigue a Lourdes: llega siempre un rato tarde, sigue rumores,
mensajes de voz de las 4 de la mañana y objetos que Lourdes deja tirados.
Humor y complicidad, sin revelar dónde está Lourdes ni cuál es el objeto
perdido.

Ejemplo (Carnaval): *"Me dijeron que la vieron bailando arriba de una
carroza con plumas hasta las cejas. Llegué y solo quedaba confeti.
Típico."*

## Restricciones (límites duros)

- El prompt de imagen no describe a Lourdes ni pide que aparezca (la sección 01 la nombra solo como contexto).
- Las secciones fijas del bloque madre no se editan ni se traducen.
- Solo texto, sin imágenes de referencia.
- Sin vocabulario de revisión o edición dentro del prompt.
- Sin texto, logos ni marcas reales en la imagen.
- Sin rosa como color de paleta.
- Sin degradés, brillos ni sombras proyectadas pedidos en el estilo.
- Entre 100 y 150 personajes; anatomía natural, sin pedir deformaciones.
- Un elemento central concreto y un momento de caos en toda escena.
- El elemento oculto y los objetos perdidos se colocan a mano.

## Entregable de la skill

Entregá, en este orden:

1. **Prompt de la escena**, completo, en un bloque de código.
2. **Prompt del objeto perdido**, en un bloque de código.
3. **Notas de colocación:** dónde va Lourdes (plano, zona de la
   composición, qué la tapa y qué actitud tiene) y dónde va el objeto.
4. **Postal** del pie de página.

## Lista de control (para vos, antes de entregar)

- [ ] Las secciones 01-03 y 05-07 están idénticas al bloque madre.
- [ ] La sección 04 tiene lugar, momento, situación, 5-8 acciones, un
  elemento central concreto y un momento de caos.
- [ ] La arquitectura o el paisaje están descritos.
- [ ] El prompt no describe a Lourdes ni pide dibujarla (más allá de la sección 01 fija).
- [ ] No hay palabras de revisión o edición (*verify, check, fix, redo,
  reference image*).
- [ ] El lugar y el elemento central no repiten los de las 8 escenas
  anteriores.
- [ ] No hay marcas reales ni rosa en la paleta.
- [ ] El objeto perdido es de una categoría nueva y se lee de lejos.
- [ ] Si la escena es de noche o de entorno pastel, tiene su línea REMINDER.
