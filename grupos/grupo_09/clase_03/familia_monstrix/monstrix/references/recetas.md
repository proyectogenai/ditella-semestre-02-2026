# Recetas de prompt

Cada prompt se escribe en inglés, en el orden de secciones de su receta, con
cada encabezado en mayúsculas. Los textos canónicos salen de `bloques.md` y
`fichas.md`; lo propio de la escena sale del atlas.

**Prompt autosuficiente**: el chat de ChatGPT no conoce el proyecto. El
prompt no presupone nada ni usa jerga de producción ("master", "paso",
"pulso", "stage"): describe el lugar en sí mismo ("A round plush museum hall
made of soft fuzzy felt..."). Frases como "same as before" solo valen dentro
del mismo chat, con la imagen adjunta.

---

## A. ESCENA GENERAL (paso 1)
Chat nuevo. Adjuntar `assets/nodi_v2.jpeg` solo como guía de estilo.

1. **Apertura**: el lugar y su arquitectura de felpa, en un párrafo.
2. **CAMERA AND FOCUS**: amplia, frontal a tres cuartos, a la altura de los
   monstruitos, horizonte cerca del borde superior, piso visible, tres bandas
   (cerca / medio / lejos), todo nítido, 16:9 apaisado.
3. **CHARACTERS**: los monstruitos de fondo enumerados uno por uno (rasgo +
   color + qué hace), en grupos desiguales. Cerrar con "no main character,
   no central group, nobody looking at the camera".
4. **UNIVERSE AND MATERIALS**: todo felpa, sin materiales duros, superficies
   escritas en blanco, pelaje liso sin puntos ni picos.
5. **BIG SET PIECES**: las seis del atlas, cada una nombrada, blanda, de 3 a
   6 veces un monstruito, con objetos apilados contra ella.
6. **CHAOS**: el desorden propio del lugar (atlas), blando, inofensivo y
   apoyado.
7. **THE OBJECT FIELD**: el campo de objetos que llena el cuadro: de todos
   los tamaños, formas y colores de la paleta, amontonados en 4-5 planos,
   cayéndose de las piezas grandes hasta el piso, en grupos desiguales. Incluir
   los muchos objetos del ice blue #91d3eb exacto, sin rojo y sin cara.
8. **HIDING SPOTS**: los escondites de cada zona, abiertos y bien
   iluminados, vacíos de seres vivos; en varios, un objeto-hipótesis (un
   peluche quieto con ojos de botón, una trampa, un montón #91d3eb); otros
   vacíos y limpios.
9. **MICRO-EVENTS**: los mini-eventos enumerados, uno por frase, casi todos
   de objetos, todos distintos (semillas en el atlas).
10. **COMPOSITION**: cada zona con su evento, nada en fila, sin foco único,
    sin zona vacía.
11. **SCALE**: todo chico salvo las seis piezas grandes y las pilas; "no
    giant or oversized figures".
12. **SNOW AND LIGHT**: nieve solo afuera, interiores cálidos, luz de día
    invernal blanca + centros ámbar, sin fuego. Cerrar con "bright warm white
    winter daylight, snow glowing softly, nothing dark or cold".
13. **PALETTE**: paleta cerrada repartida; el rojo en muchos elementos.
14. **DECOY PROPS**: las trampas enumeradas, una por frase, celeste hielo +
    rojo, sin anatomía, mezcladas en los montones.
15. **REFERENCE IMAGE**: "The attached image is an art guide only, for
    materials, plush fur, palette and light. Do not copy its composition,
    its character or its objects."
16. **STYLE BLOCK + RENDER ANCHOR**.
17. **NEGATIVE**: base + agregados de pasos 1 y 2.

**Escena 1 (la casa vacía)**: mismo esqueleto con tres cambios. La sección 3
se llama "NO CHARACTERS" (sin criaturas ni personajes). La 9 se llama "EVERY
CORNER IN ITS OWN MINI-EVENT" (todos los eventos son de objetos). En la casa
no hay peluches con cara: los objetos-hipótesis de los escondites son solo
trampas y montones #91d3eb. El NEGATIVE suma el agregado de la casa.

## B. AGREGAR DENSIDAD (paso 2)
Mismo chat, con la última imagen aprobada adjunta.

1. **SOURCE IMAGE**: "The attached image is the approved base: <el lugar en
   una línea>. Keep it exactly as it is: same wide frontal three-quarter
   camera, same framing, same horizon, same deep focus, same soft white
   winter daylight, same warm amber accents, same palette, same textures,
   same six big set pieces (<las seis por nombre>). Do not move, remove,
   resize, rotate or redesign any existing object, and do not change the
   composition, the camera or the color balance."
2. **ADD A NEW LAYER OF OBJECTS**: objetos blandos nuevos de tamaños y formas
   distintos (algunos tan grandes como las piezas, otros del tamaño de un
   monstruito), en la paleta ya presente, amontonados contra las seis piezas
   sin taparlas, por todo el cuadro hasta los bordes, con muchos del #91d3eb
   exacto. Algunos monstruitos nuevos, chicos, del mismo tamaño que los que
   ya están (en la casa, ninguno).
3. **NEW MICRO-EVENTS**: mini-eventos nuevos enumerados, casi todos de
   objetos (semillas del paso 2 en el atlas), sin repetir los anteriores.
4. **EVERYTHING STAYS SOFT, GROUNDED AND SHARP**: todo apoyado, todo nítido,
   todo felpa, sin fuego, texto en blanco, las seis piezas siempre visibles.
5. **PALETTE**: la paleta ya presente; el rojo nunca solo.
6. **FILL EVERY ZONE**: "no empty region, no blank patch of <el piso>, no
   spotlight, no reserved space".
7. "Keep the same style as before."
8. **NEGATIVE**: base + agregado de densidad (+ el de la casa en la escena
   1).

Si la imagen sigue pobre después de una capa, no se corrige con un pulso: se
agrega otra capa, o se regenera la escena general con más ítems en THE
OBJECT FIELD y MICRO-EVENTS.

## C. BUSCABLES (paso 3, escenas 2 a 7)
Sobre la imagen aprobada. Adjuntar la imagen aprobada, `nodi_v2.jpeg` y la
referencia del familiar de la escena.

1. **SOURCE IMAGE**: el mismo congelamiento de B.1.
2. **FAMILY TRAITS** (va siempre, también en la escena 7: la figura celeste
   es Monstrix).
3. **FORM LOCK**.
4. **ADD TWO SMALL FIGURES**: un párrafo por figura, siempre en este orden:
   lugar → tamaño → ficha compacta → qué hace → qué la tapa → camuflaje →
   anti-clon. Plantilla para la figura celeste:
   > "In the <left/right> third of the image, in the middle distance, at the
   > base of <un montón concreto> beside <una pieza grande>: a tiny figure,
   > no taller than the small background monsters and shorter than the
   > <objeto concreto> next to him — <ficha compacta de NODI>. He is
   > <sitting / standing> there, <una acción con los objetos de su zona>.
   > <Uno o dos objetos concretos> stand in front of him, so only the top of
   > his head, one earmuff and the edge of his scarf show above them.
   > Plush objects of exactly his ice blue rest all around him. There is
   > exactly one of him in the whole image: he is the only living thing
   > wearing a red scarf and red earmuffs together."

   Plantilla para el familiar: igual, en el otro tercio lateral, en su lugar
   de trabajo o actividad, con objetos del color exacto de su pelaje
   alrededor, y solo un fragmento a la vista (un borde de la cara, una punta
   del accesorio rojo). Cierra con "exactly one of <her/him> in the whole
   image".

   Reglas de esta sección:
   - Posturas relajadas: sentados o parados, apoyados, ocupados con los
     objetos (revolviendo una pila, acomodando mercadería, mirando algo que
     sostienen). Nunca agachados escondiéndose, espiando, con la mano en
     alto, señalando, mirando alrededor como perdidos ni mirando a cámara.
   - El que lo tapa siempre es un objeto DELANTE. Vocabulario: REGLA 1 de
     SKILL.md.
   - Los escondites siguen vacíos salvo donde están ellos dos; los
     monstruitos de fondo siguen todos en su lugar.
5. **SIZE LOCK** (versión con monstruitos).
6. **EVERYTHING ELSE STAYS EXACTLY AS IT IS**: misma cámara, campo de
   objetos, seis piezas, luz, paleta y nitidez; los monstruitos de fondo
   intactos; el rojo nunca como único acento.
7. "Keep the same style as before." (si es un chat nuevo: STYLE BLOCK +
   RENDER ANCHOR).
8. **NEGATIVE**: base + agregado de paso 3.

### Escena 1: paso 3 en dos partes
- **3a ESCONDITES Y TRAMPAS** (bajo pedido): SOURCE IMAGE + "ADD HIDING SPOTS
  AND DECOYS" con los escondites y trampas del atlas (escena 1, 3a) + "the
  house stays empty of any living being" + estilo + NEGATIVE con el agregado
  de la casa. Solo si faltan escondites o trampas.
- **3b LA FIGURA CELESTE EN SU CASA**: receta C con una sola figura (sin
  familiar), en el lugar que dice el atlas (escena 1, 3b) y con el SIZE LOCK
  de la casa. Es el único ser vivo de la imagen, pero igual va tapado y
  rodeado de objetos de su color: nunca en un espacio libre.

## D. ESCENA 8: EL FINAL (paso 3)
Sobre la imagen aprobada de la plaza. Los siete personajes están en la
plaza, desperdigados, cada uno disfrutando el festival en su propio rincón.
Se busca a los siete: todos chicos y difíciles de encontrar. Adjuntar la
imagen aprobada y las siete referencias.

1. **SOURCE IMAGE** (como B.1).
2. **FAMILY TRAITS** + **FORM LOCK**.
3. **ADD SEVEN SMALL FIGURES SCATTERED AROUND THE SQUARE**: un párrafo corto
   por figura con la misma plantilla de C.4 (lugar → tamaño → ficha compacta
   → qué hace → qué la tapa → anti-clon). Reglas:
   - Cada uno en una zona distinta, lejos de los otros: nunca dos juntos,
     nunca un grupo, nunca un abrazo central.
   - Repartidos por los dos tercios laterales y la banda lejana. Nadie en el
     primer plano. La figura celeste en un tercio lateral, nunca en el
     centro.
   - Cada uno con una acción de festival con los objetos de su zona y, si
     conviene, uno de sus gestos felices de la ficha (salvo saltar: nada en
     el aire).
   - Cada uno tapado en parte por un objeto delante y rodeado de objetos de
     su propio color.
   - "exactly one of each of these seven figures in the whole image".
4. **SIZE LOCK** (versión con monstruitos).
5. **EVERYTHING ELSE STAYS EXACTLY AS IT IS** (como C.6).
6. Estilo, como en C.7.
7. **NEGATIVE**: base + agregado de paso 3. Sacar del base cualquier "no
   family members".

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
   desenfocado apenas para que el personaje se lea solo.
6. **STYLE BLOCK + RENDER ANCHOR**.
7. **NEGATIVE**: "no text, no logos, no extra arms, no extra legs, no extra
   limbs, no distorted bodies, no changed proportions, no distorted faces, no
   dots, no spikes, no bristles on the fur, no photorealism, no painting".

En el retrato sí se permite el centro, el fondo levemente desenfocado y el
gesto de saltar: no es una escena del atlas.

---

## CRITERIOS DE APROBACIÓN (los aplica el grupo mirando la imagen)
**Pasos 1 y 2**
- Cámara, encuadre y luz según la REGLA WALLY; todo nítido.
- Lo que domina son los objetos, no la gente; las seis piezas se ven.
- Hay escondites en cada zona y muchos objetos del celeste de NODI.
- Ningún texto legible, ningún color fuera de la paleta en el escenario.

**Paso 3 y escena 8**
- Contar: exactamente una figura celeste con bufanda y orejeras rojas, y
  exactamente uno de cada familiar que corresponda.
- Antes de encontrar a cada uno, el ojo pasa por varios escondites y
  trampas. Si alguno se ve en los primeros segundos, está en el centro o es
  el único lugar ocupado, se repite el paso desde la imagen aprobada.
- Ninguno más grande que los monstruitos chicos de fondo.
- Formas y proporciones iguales a la referencia: si alguno sale deformado,
  se repite el paso (no se corrige con pulso).
