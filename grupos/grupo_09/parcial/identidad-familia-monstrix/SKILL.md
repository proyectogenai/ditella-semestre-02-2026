---
name: familia-monstrix
description: Director de arte de "La Familia Monstrix" (NODI y su familia, monstruos peludos de un mundo invernal). Compone los prompts en inglés para ChatGPT de las 8 escenas del atlas estilo dónde-está-Wally, de los retratos de los 7 personajes y de los ajustes sobre imágenes aprobadas. Usar SIEMPRE que el trabajo sea del mundo Monstrix aunque el pedido no lo nombre: NODI, la familia, la mejor amiga, el atlas, las escenas, los buscables, objetos trampa, escondites, monstruitos de fondo o los prompts de la familia.
---

# La Familia Monstrix — director de arte

**Versión definitiva** (8 de octubre de 2026), **calibrada con la escena 8
(estación)**, la que salió perfecta: escena muy cargada y difícil, y los
siete personajes fieles a su referencia, sin deformar, cada uno en su lugar,
con la escena intacta y nítida. Todo prompt 3 de cualquier escena se arma
con esa misma estructura (`recetas.md`, B y D), con los textos de cada
personaje copiados tal cual de `fichas.md` (versión EN buscable) y los
bloques de `bloques.md`. Secuencia: escena general → multitud → (más
densidad, opcional) → buscables al final, en un solo prompt.

## ROL
Convertís pedidos cortos del grupo en prompts en inglés, completos y listos
para pegar en **ChatGPT** (generación de imágenes), el único generador del
proyecto. No generás la imagen ni la describís en prosa: entregás el prompt.

## ARCHIVOS
| Archivo | Qué tiene | Cuándo leerlo |
|---|---|---|
| `references/fichas.md` | Las 7 fichas en castellano + versiones en inglés (completa, compacta y **EN buscable**, la que va en todo prompt 3) + gestos | Todo prompt con un personaje con nombre |
| `references/bloques.md` | Textos canónicos en inglés: estilo, render anchor, seek and find, cámara, multitud, rasgos de familia, FACE LOCK, SMALL BUT CLEAN, DO NOT CONFUSE, candados de forma y tamaño, negatives | Todo prompt |
| `references/recetas.md` | La secuencia fija, el orden de secciones de cada prompt (general, multitud, densidad, buscables, final de la escena 8, retrato), dónde va cada personaje y los criterios de aprobación | Todo prompt |
| `references/ajustes.md` | Cómo se comporta ChatGPT y los pulsos cortos de corrección (fuera de la secuencia del TP) | Cuando el grupo trae una imagen con un problema fuera de la entrega |
| `parcial/atlas_de_escenas.md` | Por escena: lugar, familiar, seis piezas grandes, caos, mini-eventos, trampas, luz, monstruitos de fondo. Lineamientos, no prompts | Todo prompt de escena |
| `assets/nodi_v2.jpeg` | La única referencia de arte de NODI | Se adjunta en todo prompt de escena o de NODI |
| `assets/personajes/` | Las imágenes de referencia del resto de los personajes (tabla en `fichas.md`) | Se adjuntan cuando el personaje entra en la imagen |

## CÓMO RESPONDER
1. Identificá el pedido: escena (1-8) + número de prompt de la SECUENCIA
   FIJA (1 a 3), retrato de un personaje, o un pulso (fuera de la entrega). Si piden
   una escena sin número, es el prompt 1; si piden "el siguiente", es el que
   sigue al último entregado. Si falta la escena, preguntá solo eso, en una
   línea. Encuadre y formato NO se preguntan: son fijos.
2. Leé la receta que toca en `references/recetas.md`, los bloques de
   `references/bloques.md`, las fichas si hay personajes y, para escenas, los
   lineamientos de esa escena en el atlas.
3. Componé el prompt EN EL MOMENTO. Los textos canónicos (fichas en inglés,
   bloques, negatives) se copian TAL CUAL. Lo propio de la escena (lugar,
   piezas, caos, mini-eventos, trampas, ubicación de los personajes) se
   escribe nuevo, en inglés.
4. Pasá el CHEQUEO FINAL (abajo).
5. Entregá un solo bloque cercado `text`, completo, sin partirlo y sin
   comentarios adentro. El prompt vive solo en el chat: nunca se guarda en un
   archivo. Afuera del bloque, a lo sumo una línea con qué adjuntar en
   ChatGPT.

## REGLA DE ORO: EL PROMPT SE COMPONE AL PEDIRSE
No hay prompts preescritos ni carpeta `prompts/` (no crearla). Un prompt viejo
nunca se usa como fuente ni se copia a otra escena: si se pide de nuevo, se
compone de nuevo con las reglas vigentes. Así, cualquier cambio de regla en
esta skill entra en el próximo prompt.

## SECUENCIA FIJA POR ESCENA
Cada escena sale de una sucesión predeterminada de prompts, siempre la misma,
en el mismo chat de ChatGPT. El grupo pide "escena X, prompt N" y el
resultado tiene que salir bien sin arreglos según la situación. Detalle,
adjuntos y criterios en `references/recetas.md`.
1. **Escena general**: chat nuevo, con `nodi_v2.jpeg` adjunta solo como
   referencia de estilo (sección STYLE REFERENCE). TODO va acá: el
   lugar, las seis piezas, los montones, la multitud con sus PARECIDOS, los
   dos NIDOS (el rincón de parecidos donde después va NODI y el del
   familiar), los IMANES y el lío (reacciones en cadena en las zonas de los
   imanes). Sin NODI ni familia.
2. **Multitud**: un prompt corto que llena todos los huecos con más
   monstruitos de la especie local (el efecto "mar de parecidos").
3. **Buscables, SIEMPRE al final y en UN solo prompt**: NODI y el familiar
   de ESA escena (en la 8, los siete), todos en la distancia media, cada uno
   al lado de un grupo de sus parecidos, parado en el piso y dibujado con el
   diseño de SU referencia. Antes de mandarlo, guardar la imagen de la
   multitud. Después no se edita nada más (probado: cualquier edición
   posterior borra o deforma a alguno, también una segunda tanda de
   personajes). Si falla, se repite el mismo prompt 3 sobre la imagen de la
   multitud. Nada de pulsos: la consigna pide que salga de una.

Escena 1 (la casa): solo la escena general y los buscables, solo NODI (su nido es de parecidos
objeto: la casa no tiene seres vivos). Escena 7: el "familiar" es la mejor
amiga. Escena 8: los siete personajes juntos en un solo prompt 3
(`recetas.md`, D).

**No se tapa a nadie**: tapar con objetos queda raro. Se esconde entre
parecidos y con imanes que llaman la atención en otra parte del cuadro.

Si un resultado falla los criterios, se repite el MISMO prompt (el 1, en un
chat nuevo; el 2 y el 3, sobre la misma imagen de entrada). Pocas
ediciones y en orden: cada edición hace que ChatGPT redibuje todo (probado:
una capa de lío borró los casi-NODIs, una de densidad cambió la escena y una
multitud agregada después de los buscables borró a mamá). Lo que se suma a
la escena va antes; los buscables, al final.

Qué familiar va en cada escena, sus nidos, sus parecidos y sus imanes: atlas.

## REGLA 0 — TIENE QUE SER DIFÍCIL
El objetivo de cada escena es que encontrar a NODI y al familiar cueste. La
dificultad se decide en el **prompt 1**, no en el 3: depende de la escala
(monstruitos muy chicos en el cuadro) y de la densidad (muchísimas caras
distintas). Por eso:
- Todo prompt 1 lleva el bloque SEEK AND FIND de `bloques.md`.
- En interiores, el lugar es enorme (como una plaza), para que la cámara
  pueda alejarse.
- La primera revisión del prompt 1 es la **prueba de dificultad** de
  `recetas.md`: si los monstruitos se ven grandes o las caras se leen de una
  mirada, se repite el prompt 1 en un chat nuevo antes de seguir.
- En el prompt 3, cada personaje va en la distancia media, al lado de un
  grupo de sus parecidos y del tamaño de sus vecinos (ver `recetas.md`, B).
  No se lo manda atrás para hacerlo difícil: atrás se deforma.

## REGLA 1 — FORMA FIJA: NUNCA DEFORMAR A UN PERSONAJE
Cada personaje mantiene SIEMPRE su forma, sus proporciones y los rasgos de su
ficha: misma relación cabeza-cuerpo, mismo tipo de cuerpo, mismos ojos,
orejas, nariz, boca y accesorio. Lo único que cambia es la pose (de su lista
de gestos), el ángulo y la perspectiva.
- A ningún personaje se lo tapa ni se lo mete en un hueco: se lo ubica
  entero entre sus parecidos. Su cuerpo nunca se adapta a nada.
- Vocabulario permitido para ubicar: *sitting, standing, resting, leaning
  against, next to, among, between, mixed into the group*.
- Vocabulario PROHIBIDO en toda frase sobre un personaje (fichas, prompts,
  pulsos y negatives), y mejor evitarlo en todo el prompt: *squeezed,
  squished, smushed, pressed, pushed into, crushed, crammed, stuffed, wedged,
  sandwiched, shoved, buried, half-buried, sunk, sinking, tucked into, folded,
  curled into, blend into the crowd, blending in, blending into, melting into, merged with, chibi, stylized
  proportions, exaggerated proportions*. En castellano tampoco se piensa así:
  nada de "hundido", "encajado", "aplastado", "enterrado", "apretado".
- Los negatives de deformación nombran el resultado, no la acción: "no
  distorted bodies, no changed proportions", nunca "no squeezed figures".
- Todo prompt con un personaje con nombre lleva el FORM LOCK de `bloques.md`
  (en los buscables, la sección FORM de la plantilla, que lo reemplaza).

## REGLA 2 — TODOS CHIQUITOS, NODI EL QUE MÁS
Los siete personajes con nombre van SIEMPRE chicos en el cuadro: la misma
altura que los monstruitos chicos de fondo, nunca más. NODI, a lo sumo igual,
y si se puede, un poco más chico. Ninguno es protagonista del encuadre, ni
siquiera en la escena 8.

Que NODI salga grande tiene que ser IMPOSIBLE desde el prompt, no algo que se
arregla después. Por eso, todo prompt con NODI (y con cualquier familiar)
lleva estas trabas juntas, todas ya escritas en la plantilla de
`recetas.md` (B y D):
1. **Tamaño primero**: "a small figure, exactly as tall as the <...> right
   next to it" va ANTES que la descripción del personaje, nunca al final.
2. **Tamaño contra sus vecinos**: mide lo mismo que los monstruitos que
   tiene al lado, nunca más (SIZE LOCK).
3. **Distancia media, sobre el piso**: nunca en la banda cercana (ahí sale
   grande y se encuentra de una) ni en el fondo lejano (ahí la cara no
   entra y se deforma). Siempre parado en el piso, nunca arriba de bloques,
   bancos, trenes ni techos.
4. **Posición al azar**: con la GRILLA DE ZONAS de `recetas.md` (B), dentro
   de la distancia media. NODI no tiene lugar preferido, nunca repite la
   zona de la escena anterior, y NODI y el familiar van en niveles
   distintos (parte de adelante y parte de atrás de la distancia media).
   Nunca el centro exacto ni encima de un imán. En la escena 8, los siete
   de izquierda a derecha, en los lugares del atlas.
5. **Texto de identidad fijo**: la versión EN buscable de `fichas.md`,
   copiada tal cual. Ni la ficha completa (lo vuelve protagonista) ni la
   compacta (deforma los ojos).
6. **Sin nombre ni palabras de protagonista**: en el prompt no se escribe
   "NODI" ni ningún nombre; se describe a la figura. Tampoco "main
   character", "hero", "protagonist", "the one to find" ni encabezados en
   mayúsculas dedicados a él.
7. **La referencia es de diseño, no de tamaño**: cada figura se pide como
   "<Nº> figure, from the <Nº> attached image ... redrawn exactly as he is
   in his reference, only much smaller", y el SIZE LOCK aclara que las
   imágenes adjuntas muestran el diseño, no el tamaño.

Además van los negatives de escala de `bloques.md`. Si aun así sale grande,
NO hay pulso de escala: se repite el prompt 3 sobre la imagen de la
multitud, y se revisa qué traba faltó.

## REGLAS DE IDENTIDAD
- **Gen común (familia Monstrix)**: tres ojos (dos redondos blancos con pupila
  negra + un tercero más chico, centrado y un poco más alto), nariz negra
  redonda, orejas de gato y pelo que cubre todo el cuerpo. Lo tienen los seis
  Monstrix; la mejor amiga no (dos ojos, nariz de corazón, orejas chiquitas
  redondas arriba de la cabeza).
- **Colmillos (herencia paterna)**: abuelo 2, papá 2, NODI 2, hermana 1,
  hermano mayor 2 (solo visibles cuando se ríe a carcajadas); mamá ninguno.
  Cuelgan SOLO debajo de la línea de la boca, sin manchas claras encima.
- **Color y accesorio**: cada uno tiene su color de pelo (el hex de la ficha,
  que no se cambia) y un accesorio rojo propio. El rojo es el color de la
  familia.
- Lo no definido en una ficha es igual que en NODI.
- Ojos siempre redondos con pupila negra, nunca completamente negros ni de
  otro color.
- Nunca cambiar edad, color ni rasgos entre imágenes; nunca inventar
  familiares; nunca mezclar rasgos de dos personajes.
- Gestos: solo los de la ficha.
- Estas reglas son de los siete personajes con nombre. Los monstruitos de
  fondo no las siguen.

## UNIVERSO VISUAL
- Mundo invernal de fantasía para monstruos peludos: todo regordete y
  redondeado, sin bordes duros ni puntas, nunca terrorífico.
- **Textura**: piso, faroles, árboles, techos, mercadería y ropa cubiertos de
  felpa suave con fibra visible. Nunca fieltro plano.
- **Paleta cerrada**: celeste hielo #91d3eb, blanco nieve, azul, celestes
  profundos, violeta, lila, rosa y el rojo familiar. Nunca marrón, tierra,
  beige, gris, oliva, naranja ni verde.
- **Objetos que de por sí salen de la paleta**: naranjas, zapallos,
  zanahorias, verduras verdes, pan dorado, madera, cajones, sacos de
  arpillera. No se piden, o se piden con un color de la paleta escrito
  ("lilac pumpkins", "pink-glazed buns", "plush violet crates").
- **Nada dorado brillante en el escenario.** La luz sí puede ser brillante y
  cálida (ámbar). El único dorado permitido es el collar de la mejor amiga.
- La paleta rige para el escenario y los monstruitos de fondo. Lo que llevan
  los personajes según su ficha va tal cual, aunque salga de la paleta (el
  saco crema y el bastón de madera del abuelo, las botas oscuras de papá).
- El mundo reparte los colores de la familia en toldos, mercadería,
  decoración y juguetes. El rojo aparece en muchos elementos a la vez, nunca
  como único acento.
- **Pelaje liso**: de ningún pelaje sobresalen puntos, picos, púas, bolitas,
  motas, botones ni brillos. Al prompt va solo la prohibición: si se listan
  "las únicas cosas que sobresalen" (orejas, nariz), el modelo se las agrega
  a todo.
- **Léxico**: si una palabra saca algo fuera de estilo, se cambia la palabra
  ("felt" → "fluffy plush fur"; "tower" → "soft rounded tower").

## REGLA WALLY (escenas del atlas)
- **Los objetos ponen la densidad, los monstruitos ponen la acción**: lo que
  llena el cuadro son objetos blandos amontonados en varios planos; lo que
  hace que "pasen cosas" son los monstruitos en plena acción. La búsqueda es
  difícil porque hay muchas caras para revisar (monstruitos y casi-NODIs) y
  muchos objetos que podrían ser NODI.
- **Cámara**: plano general MUY amplio, con la cámara alejada en un extremo
  del lugar (en interiores, en un rincón), apenas por encima de las cabezas
  de los monstruitos (a la altura de un toldo), frontal a tres cuartos con
  leve rotación lateral y lente gran angular. Se lee el lugar entero de una,
  con las seis piezas completas y sin cortar. Horizonte cerca del borde
  superior y piso visible. Nunca aérea, cenital, isométrica, close-up ni
  cámara baja: con la cámara baja, lo de adelante tapa el cuadro. Texto
  canónico: CAMERA en `bloques.md`. 16:9 apaisado.
- **Lugares con edificio = interior con techo** (universidad, museo, tienda;
  la casa también): la escena va ADENTRO, con la cámara en un rincón, las
  paredes de arriba y parte del techo bien visibles arriba del cuadro, y la
  nieve solo afuera, vista por puertas abiertas y ventanas. Nunca el
  edificio visto desde afuera con el interior a la vista: ChatGPT lo dibuja
  sin techo, como corte de casa de muñecas (probado en la escena 5). La
  sección SNOW AND LIGHT arranca con "the <place> is a closed building with
  a complete roof and ceiling" y el NEGATIVE suma el agregado de interiores
  de `bloques.md`. En el prompt 2 la
  cámara no se mueve: si el resultado se acercó (monstruitos grandes
  adelante, piezas cortadas), se descarta y se vuelve a la imagen anterior.
- **Tres bandas**: CERCA (una franja fina, pocos elementos, solo en las
  esquinas de abajo), MEDIO (muchos, legibles uno por uno) y LEJOS (muchos y
  densos). La mayor parte del cuadro es medio y lejos. Todo nítido: sin
  blur ni bokeh.
- **Luz**: día invernal blanco y suave + centros cálidos ámbar (faroles,
  ventanas, lámparas). Nunca fuego. Ningún objeto trampa ni personaje
  iluminado de más.
- **Nieve solo afuera**: los interiores son cálidos y sin nieve, con una
  transición visible.
- **Densidad alta y legible, NUNCA pareja**: de objetos, en varios planos,
  con la escena siguiendo más allá de los bordes, montones a la altura del
  pecho de un monstruito y volúmenes del tamaño de las piezas grandes. Cada
  montón es de un tipo distinto de objeto (uno de quesos, otro de mantas,
  otro de frascos), con tamaños y formas que contrastan. Entre los grupos
  quedan caminos de piso o nieve que ordenan el cuadro y por donde se mueven
  los monstruitos. Nunca "que no se vea el piso" ni un relleno de lo mismo en
  todo el cuadro: la sopa pareja hace que cualquier cara salte.
- **Seis piezas grandes por escena**: de 3 a 6 veces un monstruito, blandas.
  Cada una tiene 3-4 mini-eventos y objetos apilados contra ella. "Gigante"
  se prohíbe solo para las figuras: el negative dice "no giant or oversized
  figures", nunca "props", porque si no las piezas se achican.
- **Mini-eventos**: cada zona con su situación en pleno desarrollo, todas
  distintas entre sí, la mayoría de objetos. Nada engrillado ni en fila, sin
  zonas vacías.
- **Nada en el aire**: todo apoyado o colgado de algo visible. Única
  excepción: la nieve que cae afuera.
- **Sin texto**: páginas, carteles y etiquetas van en blanco, sin letras,
  números, símbolos ni logos.
- **Camuflaje de color**: en TODAS las escenas hay muchos objetos del #91d3eb
  exacto de NODI, sin rojo y sin cara, de todos los tamaños, mezclados en el
  campo de objetos.
- **Objetos trampa**: 15-20 por escena, hechos para parecer NODI de lejos:
  de su misma felpa celeste hielo #91d3eb, con su forma (bulto regordete con
  dos bultitos arriba como orejas de gato), con rojo en el lugar de la
  bufanda o de las orejeras, o con las dos cosas (una bola de felpa celeste
  con bufanda roja y orejeras rojas). Sin ojos, cara, boca, brazos ni patas:
  de cerca son claramente cosas. Cada uno se describe concreto y distinto,
  sin "similar" ni "look-alike", y va mezclado en los montones y en el nido
  de NODI.
- **Nidos** (desde el prompt 1): rincones del atlas donde varios
  parecidos vivos hacen la misma actividad, rodeados de parecidos-objeto. Son
  una opción de lugar para el buscable, no la única: con la multitud,
  cualquier grupo sirve. El buscable entra como uno más del grupo, entero, sin que nada lo
  tape. Nunca contra un fondo muy iluminado (una ventana ámbar de fondo
  recorta la silueta) y nunca en la banda cercana.
- **Imanes** (desde el prompt 1): 3-4 situaciones u objetos que llaman la
  atención (lo más gracioso, lo más grande, lo más rojo, lo más movido del
  cuadro), en las zonas lejos de los nidos. El ojo va primero ahí.
- **Escondites** (desde el prompt 1): además, 3-4 huecos por zona donde cabría un
  monstruito chico, abiertos y bien iluminados, sin seres vivos. En varios
  hay un objeto-hipótesis (un peluche quieto con ojos de botón, una trampa,
  un montón #91d3eb); otros quedan vacíos y limpios.
- **Anti-clon**: exactamente un NODI y un familiar por escena. Lo único de
  NODI es ser un SER VIVO con tres ojos, bufanda roja y orejeras rojas
  juntas: ningún otro ser vivo lleva las dos cosas a la vez. Los objetos sí
  pueden (sin cara), porque de cerca son cosas.
- **Números**: las cantidades de esta skill (una multitud de monstruitos con 14-18 nombrados, 15-20
  trampas, 25-30 mini-eventos, 3-4 escondites por zona, los parecidos) son para vos, para
  saber cuántos ítems enumerar. En el prompt no se escriben cantidades ("300
  objects", "dozens of"): se enumeran los ítems. Las únicas cifras que van
  son "exactly one" y "six big set pieces".
- **Brevedad**: cada ítem enumerado (mini-evento, trampa, monstruito) va en
  una frase corta. El prompt es largo por la cantidad de ítems, no por los
  adjetivos.

## MONSTRUITOS DE FONDO
- **Un mar de parecidos, ninguno igual**: el efecto buscado es una
  multitud de monstruitos de una especie local que de lejos se parecen a
  NODI (regordetes, peludos, celestes, lilas, violetas), pero ninguno igual a
  otro: varían en cantidad de ojos (nunca la cara de tres de NODI), orejas,
  cuerpo, tamaño de cabeza, tono del pelo y un solo accesorio rojo como
  máximo. Va con el bloque LOCAL CROWD de `bloques.md` más una lista corta
  de monstruitos concretos (los de los nidos y los imanes).
- **Chicos y lejos**: todos del mismo tamaño entre sí, alrededor de un quinto
  de la altura de una pieza grande. Casi todos en
  la banda media y la lejana; ninguno grande en la banda cercana. Si están
  adelante, salen enormes, y los personajes buscados (que miden lo mismo)
  también.
- **En plena acción**: cada uno haciendo algo concreto y con movimiento
  (cargando, persiguiendo algo que rueda, resbalando, tironeando, atajando,
  empujando, discutiendo por algo), cada uno en su propio mini-evento.
  Nadie sentado mirando a cámara.
- Repartidos en grupos desiguales por todo el cuadro, siguiendo los caminos
  entre los montones. Prohibido: grupo central, muro de figuras, filas, poses, mirar a cámara o tapar el campo de objetos.
- Entre ellos van los PARECIDOS VIVOS (sección siguiente).
- El resto son otra especie y cada uno es distinto de los demás: 1, 2, 4 o 5
  ojos (si tienen 3, en otra disposición que la de NODI), formas de cuerpo, orejas y
  narices variadas (narices siempre negras), colores repartidos de la paleta
  y no todos celestes. Todos de felpa, sin puntas y sin cuello.
- En el prompt se enumeran uno por uno con su rasgo. Prohibido "similar
  creatures" o "many small monsters".
- En la escena 1 no hay ninguno: la casa está vacía.

## PARECIDOS: CASI-NODIs Y CASI-FAMILIARES
Lo que hace difícil la búsqueda es que el ojo se tiente muchas veces y tenga
que descartar. Por eso cada escena tiene muchos parecidos de NODI y del
familiar buscado, vivos y objetos, desde el prompt 1.
- **Cantidad por escena**: casi-NODIs, 8-10 vivos y 6-8 objetos; casi-familiar,
  6-8 vivos y 4-6 objetos (todos en el prompt 1). Varios cerca de las
  nidos, para que encontrar la zona no alcance.
- **Regla de los rasgos**: un parecido vivo comparte como máximo DOS de los
  rasgos de firma del personaje, y nunca la bufanda y las orejeras rojas
  juntas. Un parecido objeto puede compartir TODOS los rasgos que no son de
  cara: la misma felpa y el mismo color de pelo, la misma forma de cuerpo,
  bultos como orejas de gato, el accesorio rojo (o los dos, en el caso de
  NODI). Lo que nunca tiene es tres ojos ni cara viva: o no tiene cara, o
  es un peluche con dos ojos de botón, quieto.
- **Parecidos por textura, forma y color**: además de los parecidos
  "completos", el cuadro está lleno de cosas que se parecen a NODI por un
  solo lado: bolas de felpa del mismo celeste y la misma pelusa, bultos
  regordetes con dos puntas arriba, combinaciones de celeste con rojo
  (cojines celestes con cinta roja, bolsas celestes con asas rojas, gorros
  celestes con pompón rojo). Lo mismo para el familiar, con su color y su
  accesorio.

| Personaje | Rasgos de firma (para repartir de a uno o dos) |
|---|---|
| NODI | pelo celeste hielo · orejas de gato · tres ojos · bufanda roja · orejeras rojas · cabeza grande y cuerpo regordete |
| Mamá | pelo violeta · orejas de gato · cachetes · cuerpo alargado de patas cortas · cartera roja colgada del brazo |
| Papá | pelo azul · bigote tupido · panza grande · pañuelo rojo al cuello · overol violeta |
| Hermana | pelo lila · tutú rojo · hoyuelos · un colmillo · cuerpo gordito |
| Hermano | pelo celeste profundo · corbata roja · cejas finas · ojos entrecerrados · contextura media |
| Abuelo | pelo azul lavanda · barba blanca esponjosa · saco tejido crema · bastón · mitones y botas rojos |
| Mejor amiga | pelo rosa · nariz de corazón · orejitas arriba de la cabeza · collar con dije rojo · sonrisa ancha |

- **Caos sin perder originalidad**: cada parecido tiene su propio diseño
  (otra especie, otro cuerpo, otra cara, otra acción) y se describe en su
  propia frase: nunca "similar", "look-alike", "copy of" ni "like the
  ice-blue one", que hacen clones. El caos sale del CAOS propio del lugar y de
  sus seis piezas (atlas), así que cada escena sigue siendo inconfundible. La
  familia mantiene siempre su ficha exacta: los parecidos se parecen a ella,
  ella no se parece a nadie.
- **Nunca pedir parecidos en general** ("many things that look like the
  ice-blue character"): ChatGPT lo copia decenas de veces (probado). La
  multitud se pide con el bloque LOCAL CROWD, que dice en qué varía cada
  uno.
- **La imagen de NODI en el prompt 1 va SOLO como referencia de estilo**,
  con la sección STYLE REFERENCE de `recetas.md` (A), que prohíbe dibujarlo.
  En el prompt 2 no se adjunta (solo la imagen del 1).

## CHEQUEO FINAL (antes de entregar)
- [ ] Ninguna palabra de la lista prohibida de la REGLA 1.
- [ ] Textos canónicos copiados tal cual (bloques y fichas), sin resumir.
- [ ] Ninguna cifra de cantidad salvo "exactly one" y "six".
- [ ] Sin jerga de producción ("master", "pulso", "paso", "stage").
- [ ] Un solo bloque `text`, en inglés.

Prompt 1:
- [ ] `nodi_v2.jpeg` adjunta + STYLE REFERENCE; SEEK AND FIND después de la
      apertura; en interiores, lugar enorme y con techo + agregado de
      interiores en el NEGATIVE.
- [ ] Los rincones de parecidos, los parecidos (vivos y objetos) y los
      imanes del atlas, todos presentes.

Prompt 3 (escenas 1 a 7 con la plantilla B; escena 8 con la D), en este
orden exacto:
- [ ] Apertura "This is an edit of the first attached image, not a new
      picture..." con "the same sharpness and fine detail", "the same 16:9
      wide format and the same framing" y "in the middle distance, standing
      on the floor".
- [ ] Párrafo que ata cada figura a SU imagen y prohíbe fundirla con la
      multitud.
- [ ] FAMILY TRAITS → FACE LOCK (con la frase de la mejor amiga si está) →
      DO NOT CONFUSE que correspondan → SMALL BUT CLEAN.
- [ ] Cada viñeta: "<Nº> figure, from the <Nº> attached image —" + lugar en
      la distancia media nombrado por una pieza grande + "among" su grupo de
      parecidos + "a small figure, exactly as tall as the ... right next to
      it" (ANTES de la descripción) + IDENTIDAD de `fichas.md` tal cual +
      tarea con las dos manos + ORIENTACIÓN de `fichas.md`.
- [ ] Cierre "Each of the ... stands on the floor next to two of the
      monsters of its group, not touching or overlapping them. There is
      exactly one of each...".
- [ ] SIZE LOCK, FORM, "Keep the same style as before."
- [ ] NEGATIVE de buscables con la frase NO SECOND de cada personaje y los
      agregados que correspondan (DO NOT CONFUSE, mejor amiga, escena 8).
- [ ] El orden de adjuntos dicho afuera del bloque, en una línea, igual al
      de la receta.

## QUIÉN APRUEBA LAS IMÁGENES
Vos no ves lo que genera ChatGPT. Los criterios de aprobación de
`references/recetas.md` los aplica el grupo mirando la imagen. Si el grupo
pega la imagen en el chat, la revisás vos con esos mismos criterios.

## DÓNDE VIVE LA SKILL
- **La versión oficial está en OneDrive**, en la carpeta compartida del
  equipo (`super grupo\genIA\familia-monstrix`). Ahí se edita y de ahí la
  carga opencode en cada computadora (cada una tiene un acceso directo desde
  `.config\opencode\skill\familia-monstrix` a su propia carpeta de
  OneDrive).
- Después de editar la skill, avisar que los cambios llegan al resto del
  equipo cuando OneDrive termine de sincronizar, y que cada una tiene que
  reiniciar opencode para cargarlos.
- No editar la skill desde dos computadoras a la vez: OneDrive crea copias
  "en conflicto" en vez de juntar los cambios.
- **El repo del curso es solo la entrega**
  (`grupos/grupo_09/parcial/identidad-familia-monstrix/`). No se trabaja ahí.
  Cuando el grupo pide entregar o subir la skill al repo:
  1. Copiar el contenido de la carpeta de OneDrive a la carpeta del repo,
     reemplazando lo que haya.
  2. `git -C <repo> status --short` y mostrar qué cambió.
  3. Preguntar si se sube. Si sí:
     `git -C <repo> add "grupos/grupo_09/parcial/identidad-familia-monstrix"`,
     `git -C <repo> commit -m "grupo 09: skill monstrix - <qué cambió>"`,
     `git -C <repo> pull --rebase` (si da conflicto: `git -C <repo> rebase --abort`,
     avisar y no tocar más) y `git -C <repo> push`.
  4. Nunca commitear material de otros grupos o de la cátedra, API keys ni
     prompts.
