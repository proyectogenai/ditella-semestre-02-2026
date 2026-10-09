# Recetas de prompt

Cada prompt se escribe en inglés, en el orden de secciones de su receta, con
cada encabezado en mayúsculas. Los textos canónicos salen de `bloques.md` y
`fichas.md`; lo propio de la escena sale del atlas (incluidos sus NIDOS,
sus PARECIDOS y sus IMANES).

**Prompt autosuficiente**: el chat de ChatGPT no conoce el proyecto. El
prompt no presupone nada ni usa jerga de producción ("master", "paso",
"pulso", "stage"): describe el lugar en sí mismo. Frases como "same as
before" solo valen dentro del mismo chat, con la imagen adjunta.

---

## LA SECUENCIA FIJA (todas las escenas)
Cada escena se hace SIEMPRE con estos tres prompts, en este orden y en el
mismo chat de ChatGPT. Ninguno depende de cómo salió el anterior: todo lo que
nombran (piezas, parecidos, imanes) lo construyó el prompt 1, porque está
escrito en el atlas.

| # | Prompt | Receta | Qué adjuntar |
|---|---|---|---|
| 1 | Escena general | A | `nodi_v2.jpeg`, solo como referencia de estilo |
| 2 | Multitud | C | la imagen del 1 |
| 3 | Buscables | B (escenas 1 a 7) / D (escena 8) | la imagen del 2 + las referencias de los personajes, en el orden de la receta |

Escena 1 (la casa): solo el 1 y el 3 (con solo NODI); la casa no tiene
multitud. Escena 8 (la estación): 1, 2 y el 3 con la receta D (los siete
en UN solo prompt).

**El prompt 3 es el último y es uno solo.** Probado: toda edición posterior
a meter a los personajes borra o deforma a alguno (la multitud agregada
después borró a mamá; en la escena 8, una segunda tanda de personajes
deformó a los cuatro de la primera). Por eso los personajes entran todos
juntos, en un único prompt 3, y después no se edita nada más.

**Nada de pulsos ni retoques en la secuencia** (la consigna del TP pide que
todo salga de una, sin arreglos según la situación). Los pulsos de
`ajustes.md` quedan fuera de la entrega.

**Una sola edición = escena intacta.** Probado en el mercado: cada edición
hace que ChatGPT redibuje la imagen entera. Una capa de lío borró los
casi-NODIs, y una capa de densidad cambió la escena en vez de sumarle cosas.
Por eso casi todo (densidad, lío, multitud, parecidos, imanes) va en el
prompt 1, que es una generación desde cero. Después hay solo dos ediciones,
en este orden: la multitud (corta, suma solo monstruitos) y, al final, los
buscables. Si al prompt 1 le falta densidad o lío, no se edita: se vuelve a
mandar el prompt 1 en un chat nuevo, con más ítems en THE OBJECT FIELD y
MICRO-EVENTS.

Cuando el grupo pide "escena X, prompt N" (o "el siguiente"), se compone ese.

**Cómo se esconde a alguien** (la idea de toda la secuencia): nunca se lo
tapa con objetos, porque queda raro. Se lo esconde de dos maneras:
1. **Entre parecidos**: va al lado de un grupo de parecidos suyos (vivos y
   objetos). Se lo ve entero, pero hay que revisar uno por uno para dar con
   él.
2. **Con imanes en otro lado**: en las otras zonas del cuadro hay IMANES,
   situaciones y objetos que llaman la atención (lo más gracioso, lo más
   grande, lo más rojo). El ojo va primero ahí.

**Si un resultado falla los criterios** (abajo), se vuelve a mandar EL MISMO
prompt sobre la MISMA imagen de entrada (el 1, en un chat nuevo). Por eso,
antes de mandar el 2 y el 3, se guarda la imagen de entrada. Si el mismo
personaje falla dos veces de la misma manera, el problema está en la regla:
se corrige el texto canónico en la skill (`fichas.md` o `bloques.md`) y
recién ahí se compone el prompt de nuevo. Nunca se parcha un prompt suelto.

---

## A. ESCENA GENERAL (prompt 1)
Chat nuevo. **Se adjunta SIEMPRE `nodi_v2.jpeg`** como referencia de
estilo (decisión del grupo, 7/10/2026: sin la imagen, en la escena 4 el
estilo salió cualquier cosa). Como ChatGPT tiende a copiar al personaje de
la imagen adjunta, el prompt lleva la sección STYLE REFERENCE (abajo, justo
antes del STYLE BLOCK) y el NEGATIVE ya prohíbe las copias. Si aun así la
multitud sale llena de copias de NODI, se repite el prompt 1 en un chat
nuevo.

1. **Apertura**: el lugar y su arquitectura de felpa, en un párrafo. Cerrar
   con "The place is in full bustle: everything is happening at once."
1b. **SEEK AND FIND**: el bloque de `bloques.md`, tal cual. En interiores,
   el párrafo de apertura dice además que el lugar es enorme ("a huge
   department-store hall as big as a town square"): si el cuarto es chico,
   la cámara no tiene cómo alejarse y los monstruitos salen grandes.
2. **CAMERA AND FOCUS**: el bloque CAMERA de `bloques.md`, completando el
   lugar y por dónde corre la vista.
3. **THE LOCAL CROWD**: el bloque LOCAL CROWD de `bloques.md` (un mar de
   monstruitos de una especie local que de lejos se parecen a NODI, pero
   ninguno igual a otro), completado con los colores del familiar de la
   escena. Después, una lista corta de 14-18 monstruitos concretos, una
   línea cada uno (rasgo + color + acción con movimiento + dónde): los
   PARECIDOS VIVOS de los dos nidos (atlas) y los de los imanes. Cerrar con
   "no main character, no central group, nobody looking at the camera,
   nobody wearing a red scarf and red earmuffs together".
4. **UNIVERSE AND MATERIALS**: todo felpa, sin materiales duros, superficies
   escritas en blanco, pelaje liso sin puntos ni picos.
5. **BIG SET PIECES**: las seis del atlas, cada una nombrada, blanda, de 3 a
   6 veces un monstruito, con objetos apilados contra ella.
6. **THE LOOK-ALIKE CORNERS**: los dos NIDOS del atlas (el de NODI y el
   del familiar), cada uno en la posición que le da el atlas: un
   rincón concreto donde varios parecidos vivos hacen la misma actividad,
   rodeados de parecidos-objeto. Se describen como parte del lugar ("in the
   left third, in the middle distance, a teacup stall where several small
   ice-blue and cat-eared monsters are buying cups, among button-eyed plush
   toys with red scarves on the counter"). En la escena 8, los siete
   rincones del atlas, uno por personaje, repartidos por todo el cuadro.
6b. **ATTENTION MAGNETS**: los IMANES del atlas (3-4), en las zonas lejos de
   los nidos (el centro, el otro lado, el fondo): las situaciones más
   graciosas, grandes y coloridas del cuadro, con mucho rojo y mucho
   movimiento. Son los que el ojo ve primero.
7. **CHAOS**: el desorden propio del lugar (atlas), blando e inofensivo.
8. **THE OBJECT FIELD**: 14-18 montones distintos (los de la escena y los de
   "Más montones" del atlas), cada uno de un tipo de objeto (se nombran), con tamaños y formas que contrastan, cayéndose de las piezas
   grandes, y caminos de piso o nieve entre los grupos. Todo en colores de
   la paleta (los objetos que de por sí salen de ella, con el color escrito).
   Incluir muchos objetos del ice blue #91d3eb exacto, y muchas cosas que se
   parecen a NODI por un solo lado: la misma pelusa celeste, bultos
   regordetes con dos puntas arriba, celeste combinado con rojo.
   Nunca "until no ground is visible".
9. **LOOK-ALIKE TOYS AND DECOYS**: los PARECIDOS-OBJETO del atlas: 8-10
   casi-NODIs y 4-5 casi-familiares (peluches con ojos de botón, muñecos,
   gorros con orejas, maniquíes sin cara), más las trampas: objetos de la
   misma felpa celeste hielo que NODI, con su forma regordete y dos bultitos
   como orejas, con rojo donde él lleva bufanda u orejeras, sin cara ni
   patas. Una frase por ítem, cada uno distinto. La mayoría
   de los parecidos-objeto van en los nidos.
10. **HIDING SPOTS**: 3-4 huecos más por zona, vacíos de seres vivos, varios
    con un peluche quieto o una trampa adentro.
11. **MICRO-EVENTS AND CHAIN REACTIONS**: 20-25 mini-eventos, uno por
    frase, todos distintos: mitad de objetos y mitad de monstruitos en
    plena acción. Entre ellos, 7-10 reacciones en cadena (algo choca con algo
    que tira otra cosa, avalanchas blandas, cosas que se enganchan y
    arrastran a otras, monstruitos enredados o tapados de cosas hasta la
    cintura), siempre en las zonas de los imanes, nunca en los nidos.
    Cerrar con "nothing hangs in the air; nobody is hurt; everything is
    soft".
12. **COMPOSITION**: cada zona con su evento, nada en fila, sin foco único,
    sin zona vacía, caminos legibles entre los montones.
13. **SCALE**: todo chico salvo las seis piezas grandes y los montones; "no
    giant or oversized figures".
14. **SNOW AND LIGHT**: nieve solo afuera, interiores cálidos, luz de día
    invernal blanca + centros ámbar, sin fuego. Cerrar con "bright warm white
    winter daylight, snow glowing softly, nothing dark or cold".
15. **PALETTE**: paleta cerrada repartida; el rojo en muchos elementos.
16. **STYLE REFERENCE**, tal cual: "STYLE REFERENCE: the attached image shows the visual style only — the 3D render, the plush fur texture, the soft light and the round, cute shapes. Do not draw the character from the attached image anywhere in this picture: no ice-blue monster with a red scarf and red earmuffs, no monster with his face, no copies or variations of him. Every monster in this picture is a new, different design."
17. **STYLE BLOCK + RENDER ANCHOR**.
18. **NEGATIVE**: base + agregado de interiores (si es interior) + agregado
    sin familia. En la escena 8 se suma "no reunion, no central hug". Si el
    lugar tiene comida, bebida, equipaje o muebles que suelen salir marrones,
    se suman sus prohibiciones ("no brown food, no brown luggage").

**Escena 1 (la casa vacía)**: la sección 3 se llama "NO CHARACTERS" (sin
seres vivos); los parecidos son solo objetos (peluches con ojos de botón,
quietos), y la 11 tiene todos los mini-eventos de objetos. El NEGATIVE suma el
agregado de la casa.

## B. BUSCABLES (prompt 3; escenas 1 a 7)
Mismo chat, sobre la imagen del prompt 2 (la multitud, sin personajes).
Adjuntos SIEMPRE en este orden: 1 la imagen del prompt 2, 2 `nodi_v2.jpeg`,
3 la referencia del familiar.

**Plantilla oficial.** Tiene la misma estructura, bloque por bloque, que el
prompt que salió perfecto en la escena 8 (estación, 8/10/2026: siete
personajes sin deformar, cada uno en su lugar, la escena intacta y nítida).
Se copia TAL CUAL, sin sacar ni resumir ninguna frase, y se completa solo lo
que está entre `<...>`:

```
This is an edit of the first attached image, not a new picture. Keep it exactly as it is: same camera, same composition, <lo fijo del lugar: "same roof arches and walls, same open arches" / "same stalls and awnings">, same crowd with the same designs and accessories, same six big set pieces, same heaps, same light, same palette, the same sharpness and fine detail, the same 16:9 wide format and the same framing: do not crop, extend or add anything at the edges. Do not add any new objects and do not move or redraw anything that is already there. Add only the two small figures described below, both in the middle distance, standing on the floor, far apart from each other.

Each of the two figures is copied from its own attached image only: the second image is only for the first figure below, and the third image only for the second figure. Never mix two references in one figure, and never merge a figure with a monster that is already in the picture.

<FAMILY TRAITS de bloques.md>

<FACE LOCK de bloques.md; con la frase de la mejor amiga solo en la escena 7>

<solo en la escena 7: DO NOT CONFUSE de la mejor amiga, de bloques.md, con "(from the third image)">

<SMALL BUT CLEAN de bloques.md; con "(a heart shape for the pink figure)" solo en la escena 7>

ADD TWO SMALL FIGURES, BOTH IN THE MIDDLE DISTANCE:
- First figure, from the second attached image — <lugar de NODI según la grilla, nombrado por una pieza grande>, among <un grupo de sus parecidos: small ice-blue children with red scarves or red earmuffs>: a small figure, exactly as tall as the <children> right next to it, redrawn exactly as he is in his reference, only much smaller — <IDENTIDAD de NODI, de fichas.md>. He is holding <algo chico del lugar> in both hands, <ORIENTACIÓN de NODI, de fichas.md>.
- Second figure, from the third attached image — <lugar del familiar según la grilla>, among <un grupo de sus parecidos>: a small figure, exactly as tall as the <...> right next to it, redrawn exactly as <she/he> is in <her/his> reference, only much smaller — <IDENTIDAD del familiar, de fichas.md>. <She/He> is <tarea con las dos manos>, <ORIENTACIÓN del familiar, de fichas.md>.
Each of the two stands on the floor next to two of the monsters of its group, not touching or overlapping them. There is exactly one of each of these two figures in the whole image, and they are not near each other.

<SIZE LOCK de bloques.md>

FORM: each figure is drawn in the clean design of its own reference, not in the style of the monsters around it and not mixed with any other reference. Shrinking them keeps them exactly as cute and well-proportioned as in their references: the whole figure gets smaller evenly, with nothing squeezed, stretched, simplified or merged. Clean, round, soft shapes. Only the pose and the viewing angle may change. Both are busy and relaxed among their neighbors, absorbed in what they are doing: not waving, not facing or looking at the camera, nothing highlighting them.

Keep the same style as before.

NEGATIVE: <negativo de buscables de bloques.md, con las frases NO SECOND de los dos personajes y, en la escena 7, los agregados de la mejor amiga>
```

**Escena 1 (la casa, solo NODI)**: la misma plantilla con una sola figura
("Add only the one small figure described below, in the middle distance,
standing on the floor", "the second image is only for this figure", sin
"Each of the two..."), al lado de los peluches de su nido en vez de entre
monstruitos ("exactly as tall as the plush toys right next to it"), con el
SIZE LOCK de la escena 1, y el NEGATIVE sin "no changed crowd".

### Dónde va cada uno (todas las escenas)
**Siempre en la DISTANCIA MEDIA**, nunca en la banda cercana ni en el fondo
lejano. Probado en las escenas 3 a 8: atrás, a ese tamaño, la cara tiene
pocos píxeles y ChatGPT la deforma (escena 8: los cuatro de la fila de atrás
salieron deformados; puestos en la distancia media, los siete salieron
bien). La dificultad la ponen la escala, la densidad y los parecidos del
prompt 1, no la distancia.

**GRILLA DE ZONAS** (escenas 2 a 7). NODI no tiene lugar preferido
(decisión del grupo) y NODI y el familiar van en niveles distintos, pero los
dos niveles quedan DENTRO de la distancia media:

| | izquierda | centro-izquierda | centro-derecha | derecha |
|---|---|---|---|---|
| **parte de adelante de la distancia media** ("in the middle distance") | A1 | A2 | A3 | A4 |
| **parte de atrás de la distancia media** ("in the back part of the middle distance") | B1 | B2 | B3 | B4 |

Cómo se sortea, siempre igual y SIN mirar la imagen (decisión del grupo):
1. Con el layout del prompt 1 (la sección CAMERA dice qué pieza está en cada
   lado), se descartan los casilleros donde cae un imán.
2. Entre los que quedan, se sortea de verdad (con un número al azar, no a
   ojo) uno para NODI, sin repetir su casillero de la escena anterior, y
   otro para el familiar en la OTRA fila (si NODI cae en A, el familiar va
   en B, y al revés).
3. El casillero no se escribe en el prompt: se traduce a palabras ("in the
   middle distance, on the right", "in the back part of the middle
   distance, left of the center") más la pieza grande que el prompt 1 puso
   en esa zona ("on the platform beside the plush locomotive"). Las piezas
   grandes son lo único seguro en cualquier versión de la imagen.

Escena 8: los siete, todos en la distancia media, de izquierda a derecha
(receta D).

### Reglas de la plantilla (todas probadas)
- **Cada figura atada a SU imagen**: "First figure, from the second attached
  image", y el párrafo "Each of the figures is copied from its own attached
  image only... never merge a figure with a monster that is already in the
  picture". Sin eso, ChatGPT mezcla referencias o funde al personaje con un
  parecido de la multitud (escena 8).
- **Tamaño primero**: la frase "a small figure, exactly as tall as the ...
  right next to it" va ANTES de la descripción. Con el tamaño solo al final,
  salieron gigantes (escena 7).
- **Identidad copiada de `fichas.md`** (versión EN buscable), con la cara
  escrita entera y "the same two arms and two legs". Con "the family's three
  eyes", papá salió con los tres ojos en fila; sin brazos escritos, salió
  sin brazos (escena 3).
- **FACE LOCK + SMALL BUT CLEAN siempre** (y DO NOT CONFUSE cuando toca):
  sin ellos, caras de mapache u osito, pelo gris, tercer ojo como un punto
  (escenas 5 a 8).
- **Al lado de sus parecidos y separado de ellos**: "among <grupo de
  parecidos>" + "next to two of the monsters of its group, not touching or
  overlapping them". Pegados, ChatGPT los funde.
- **Orientación según la ficha**: por defecto de costado, cara a tres
  cuartos. Papá y la mejor amiga, con la cara girada hacia el lado de la
  cámara para que se vean bigote y pañuelo, o nariz de corazón y cadenita
  (de espaldas o de costado se confundían con la multitud, escena 8). Nunca
  de espaldas; nunca mirando a cámara.
- **Siempre en el piso**: nunca arriba de bloques, bancos, trenes ni techos
  (arriba de unos bloques NODI salió más grande; "beside the rear carriage"
  lo puso sobre el techo del tren). Si el lugar está junto a algo donde se
  podría subir, se dice "on the floor at ground level ..., never on <eso>".
- **Nunca nombrar algo que en la imagen quedó adelante**: si la pieza
  elegida está en la banda cercana, ChatGPT acerca la cámara y redibuja todo
  (escena 5). Si la pieza está del lado de la cámara, se dice "a little
  further back than <pieza>".
- **Una tarea con las dos manos** con algo chico del lugar (una valija, un
  boleto, una llave): da poses naturales y brazos completos.
- **Nitidez y formato**: la apertura pide "the same sharpness and fine
  detail" y "the same 16:9 wide format and the same framing" (sin eso salió
  borrosa, o 4:3 y recortada).
- **Vocabulario**: nunca "tiny" (deforma), nunca "big enough to see his
  face" (agranda), nunca "blend into the crowd" (los dibuja como la
  multitud).

## C. MULTITUD (prompt 2)
Mismo chat, con la imagen del prompt 1 y nada más. Da el efecto de "mar de
parecidos": la multitud llena todos los huecos. Prompt CORTO: suma solo
monstruitos, nada de objetos ni eventos (probado: así no cambia la escena).

1. **SOURCE IMAGE**: "Keep this image exactly as it is: same camera, same
   composition, <lo fijo del lugar: same roof arches and walls / same
   stalls>, same six big set pieces, same heaps, same spills, same light,
   same palette, and every monster already there with its design and
   accessories."
2. **FILL THE GAPS WITH THE LOCAL CROWD**: "Add many more small monsters of
   the same local species into every gap: <todos los lugares del sitio,
   nombrados: along the platforms, among the luggage heaps, at the
   benches...>, in the far distance — until the place teems with them,
   like a sea of small fuzzy creatures." + las reglas de variación del
   bloque LOCAL CROWD (ojos, orejas, cuerpo, tono, un accesorio como máximo;
   nunca la cara de tres ojos de NODI; nunca bufanda y orejeras rojas
   juntas) + qué hace cada uno + "All the same small size as the others,
   very small in the picture, none in the foreground."
3. "Keep the same style as before."
4. **NEGATIVE**: base + agregado de interiores (si es interior) + agregado
   sin familia + agregado de edición. Si en el prompt 1 salió algún color
   fuera de paleta (marrón), se suma su prohibición ("no brown benches, no
   brown luggage").

**Más densidad (opcional, se puede repetir; siempre ANTES del prompt 3)**:
si después del prompt 2 la escena sigue con huecos, va este prompt corto
sobre la última imagen, sin otros adjuntos. Corto a propósito: los prompts
largos de densidad rearman la escena (probado).
```
Keep this image exactly as it is: same camera, same composition, same six big set pieces, same heaps, same light, same palette, and every monster already there with its design and accessories. Change only one thing: fill every remaining bare patch — the edges of the walkways, the spaces between the heaps, the bases of the set pieces, the counters, shelves and ledges — with more of the same: small soft heaps of plush objects (folded blankets, cushions, yarn balls, knitted hats, jars, snow globes, baskets) in violet, lilac, pink, ice blue and red, and more small monsters of the same local species, each different from the others in eyes, ears, body, fur shade and single accessory (never two eyes with a smaller third eye above them, never a red scarf and red earmuffs together), all the same small size as the ones already there. Everything rests on the ground or on a surface. Keep the walkways readable. Do not move, redraw or cover anything that is already there.
Keep the same style as before.
NEGATIVE: no changed camera, no new composition, no camera moved closer, no changed set pieces, no changed monsters, no large monsters in the foreground, no large objects in the foreground, no identical monsters, no monster with two eyes and a smaller third eye above them, no figure wearing a red scarf and red earmuffs together, no floating objects, no readable text, no logos, no blur, no darkening
```

## D. ESCENA 8: EL FINAL (prompt 3, los siete en UN solo prompt)
**La receta que salió perfecta** (estación, 8/10/2026). Mismo chat, sobre
la imagen del prompt 2. Adjuntos SIEMPRE en este orden: 1 la imagen del
prompt 2, 2 `nodi_v2.jpeg`, 3 `mama.jpg`, 4 `papa.jpg`, 5 `hermana.jpg`,
6 `hermano.jpg`, 7 `abuelo.jpg`, 8 `mejor_amiga.jpg`.

Probado: con los siete en dos tandas (3a y 3b), la segunda deformó a los de
la primera. Con los siete en un solo prompt y esta estructura, salieron
todos bien. La plantilla es la de B, con estos cambios:
- Apertura: "Add only the seven small figures described below, all seven
  in the middle distance, standing on the floor, spread far apart from left
  to right across the whole width of the picture."
- Atadura a las imágenes: "Each of the seven figures is copied from its own
  attached image only: the second image is only for the first figure below,
  the third image only for the second figure, and so on. Never mix two
  references in one figure, and never merge a figure with a monster that is
  already in the picture." Y cada viñeta arranca con "<Nº> figure, from the
  <Nº> attached image —", con el número de imagen que le corresponde según
  el orden de adjuntos (las viñetas van de izquierda a derecha, así que los
  números de imagen no van en orden).
- Después del FACE LOCK (con la frase de la mejor amiga): los DOS bloques
  DO NOT CONFUSE de `bloques.md` (los azules: "from the fourth image" y
  "from the sixth image"; la mejor amiga: "from the eighth image"), y
  después SMALL BUT CLEAN con "(a heart shape for the pink figure)".
- Encabezado: "ADD SEVEN SMALL FIGURES, ALL IN THE MIDDLE DISTANCE, FROM
  LEFT TO RIGHT:" y siete viñetas, una por personaje, con su IDENTIDAD,
  ORIENTACIÓN y extras de `fichas.md`, en los lugares del atlas (escena 8,
  "El final"). Papá y el hermano, lejos uno del otro.
- Cierre de la lista: "Each of the seven stands on the floor next to two of
  the monsters of its group, not touching or overlapping them. There is
  exactly one of each of these seven figures in the whole image, and no two
  of them are near each other."
- FORM: "All seven are busy..." en vez de "Both are busy...".
- NEGATIVE: el de buscables con las siete frases NO SECOND, los agregados
  de los DO NOT CONFUSE y de la mejor amiga, y "no group of these figures,
  no two of these figures together, no reunion, no central hug".

## E. RETRATO DE UN PERSONAJE
Un personaje solo, chat nuevo, formato 1:1.414 vertical. Adjuntar su
referencia.

1. Apertura: "A full-body character portrait of one furry monster, standing
   in a cozy snowy winter setting with soft rounded plush scenery."
2. **CHARACTER**: ficha EN completa.
3. **FAMILY TRAITS** (si es Monstrix) + **FORM LOCK**.
4. **POSE**: uno de sus gestos de la ficha, o parado de frente a tres
   cuartos.
5. **FRAMING**: cuerpo entero centrado, con aire alrededor, fondo simple y
   apenas desenfocado para que el personaje se lea solo.
6. **STYLE BLOCK + RENDER ANCHOR**.
7. **NEGATIVE**: "no text, no logos, no extra arms, no extra legs, no extra
   limbs, no distorted bodies, no changed proportions, no distorted faces, no
   dots, no spikes, no bristles on the fur, no photorealism, no painting".

En el retrato sí se permite el centro, el fondo levemente desenfocado y el
gesto de saltar.

---

## CRITERIOS DE APROBACIÓN (los aplica el grupo mirando la imagen)
Si un criterio falla, se repite el MISMO prompt sobre la MISMA imagen de
entrada (ver "Si un resultado falla", arriba).

**Prompt 1 — prueba de dificultad (la primera que se mira)**
- Cada monstruito de la banda media mide más o menos un veinteavo del alto
  de la imagen, nunca un décimo o más. Si las caras se leen de una mirada,
  la imagen es fácil: se descarta y se repite el prompt 1 en un chat nuevo,
  ANTES de seguir. Probado en la escena 7: con la tienda chica y la cámara
  cerca, el prompt 3 salió bien dibujado pero facilísimo, y eso ya no se
  arregla en el prompt 3.
- Hay muchísimas caras distintas en todo el cuadro, de borde a borde.

**Prompt 1**
- La multitud es variada: ningún monstruito igual a otro, ninguno con la
  cara de tres ojos de NODI.
- Cámara abierta, con las seis piezas enteras y nada grande adelante.
- Los rincones de parecidos y los imanes están donde dice el atlas.
- Montones distintos con caminos entre ellos; muchos monstruitos en acción.
- Interiores con techo; nieve solo afuera.
- Ningún texto legible, ningún color fuera de la paleta en el escenario.

**Prompt 2**
- Misma cámara y mismo encuadre que el 1, la multitud llena los huecos y
  nadie grande adelante.

**Prompt 3**
- Exactamente uno de cada personaje que corresponda, y ningún otro ser vivo
  con bufanda Y orejeras rojas.
- Cada uno en la distancia media, en el piso, al lado de sus parecidos y
  del mismo tamaño que ellos; ninguno sobre un mueble, un tren o un techo.
- Cara igual a la referencia y nítida: en los Monstrix, dos ojos grandes al
  lado y uno más chico arriba (nunca tres en fila, nunca un punto), orejas
  de gato, sin hocico de oso ni antifaz; la mejor amiga con dos ojos, nariz
  de corazón, orejitas arriba y cadenita dorada.
- Ninguno de espaldas ni fundido con un monstruito de la multitud; papá y
  el hermano, cada uno con sus rasgos y sin mezclarse.
- Cuerpo completo: dos brazos y dos patas, y lo que sostienen, en sus manos.
- La escena no cambió: misma cámara, mismo formato 16:9, mismo encuadre y
  misma nitidez que la imagen del prompt 2.
- El ojo va primero a los imanes y pasa por varios parecidos antes de
  encontrar a cada uno.
