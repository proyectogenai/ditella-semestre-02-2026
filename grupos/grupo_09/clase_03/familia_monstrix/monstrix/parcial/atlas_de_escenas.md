# Atlas de Escenas — La Familia Monstrix

Registro de las 8 escenas del atlas (dónde-está-Wally del mundo Monstrix):
qué es cada lugar, qué familiar se busca ahí y en qué estado está el prompt.
Las reglas que gobiernan todas las escenas (cámara, nitidez, luz, paleta,
textura, multitud, objetos trampa) están en `SKILL.md`, sección "REGLA
WALLY". Los prompts finales en inglés están en `../prompts/`.

Formato de todas las escenas: 16:9 apaisado panorámico, cámara amplia frontal
tres cuartos a la altura de los monstruitos.

| # | Lugar | Familiar (buscable) | Prompts |
|---|-------|--------------------|---------|
| 1 | Casa de la familia | — (lugar vacío) | base + edición |
| 2 | Mercado de la aldea | Mamá | base + edición |
| 3 | Campo de recolección de hielo | Papá | base + edición |
| 4 | Parque de la aldea | Hermana menor | base + edición |
| 5 | Universidad | Hermano mayor | base + edición |
| 6 | Museo | Abuelo | base + edición |
| 7 | Tienda de ropa | Mejor amiga (no es de la familia) | base + edición |
| 8 | Plaza central: festival invernal | ninguno: la familia completa junta (desenlace) | base + edición |

Todas las escenas se están produciendo SIN el familiar y SIN NODI: esos se
insertan al final, sobre las imágenes aprobadas. Ningún prompt base nombra a
la familia.

La escena 8 es la excepción: NODI no busca a nadie ahí, porque la familia
completa está junta y feliz. Es el final de la historia. Su paso 3 no es un
buscable camuflado sino el reencuentro de los siete, y es la única escena
donde el grupo puede ser el foco del encuadre.

## 1. Casa de la familia

Interior de una casa redonda, blanda y completamente tapizada de felpa. La
cámara está dentro de la sala y mira diagonalmente hacia la cocina, el
recibidor y la escalera conectados por puertas reales. Mostrar piso y parte
del techo; nunca la fachada, el techo exterior, una maqueta, un corte de
dollhouse ni una vista aérea.

- PERSONAJES: ninguno. La casa está completamente vacía de seres vivos: no
  NODI, no familiares, no monstruos, no personas, no animales, no siluetas,
  no retratos, no manos, no ojos ni criaturas ocultas. No toys with faces or
  animal anatomy.
- CAOS: decenas de objetos de felpa chicos, de escala similar, claramente
  organizados en foreground, middle ground y background, con grupos de eventos
  distintos: Cups and breakfast bowls stacked and sliding on counters; milk
  and cereal spilled across surfaces; pancakes stuck to the ceiling; plush
  spoons and ladles tangled around a chandelier; cupboard doors open;
  kettles, pans and toasters tipped over or piled on the floor; sofas and
  armchairs leaning together; rugs rolling on the floor; pillows slumping and
  stacking; blankets knotting around furniture; toys and cushions scattered,
  wedged and hung from visible hooks. Every prop remains small, sharp,
  recognizable, rounded, lightweight, grounded and harmless. No prop flies,
  levitates, jumps, floats or hangs in midair.
- SNOW: la puerta frontal abierta deja entrar una ráfaga de snow made from
  wool felt, pero el interior permanece cálido y principalmente sin nieve.
  Through the doorway show only a small snowy garden fragment with runaway
  sleds, rolling snowballs and tangled toys; never the façade or roof.
- COMPOSITION: every zone has a different readable micro-event. Spread the
  action organically across left, center and right; no rows, grids, central
  focal point, empty zone, motion blur or exterior viewpoint.
- INSERCIÓN: no dejar un hueco, placeholder ni spotlight vacío. La inserción
  de una figura posterior se hace como una edición localizada sobre la imagen
  aprobada.
- OBJETOS TRAMPA: small blue felt balls tied with red cloth, soft blue
  lanterns with red pom-poms, pale-blue bundles with red loops and small blue
  bags with red handles. Todos son objetos concretos sin ojos, cara, boca,
  pelo, brazos, patas ni anatomía.
- NEGATIVE: no photorealism, no live action, no realistic house, no human
  furniture proportions, no hard materials, no sharp edges, no realistic
  icicles, no giant or oversized props, no flying, no levitation, no airborne
  objects, no catastrophic destruction, no exterior house view, no readable
  text and no logos.

## 2. Mercado de la aldea

Mercado nevado con puestos redondos de comida, lana, juguetes y recuerdos, con
interiores cálidos visibles. La cámara permanece a nivel de la calle y
muestra la calle y varios puestos a la vez.

- PERSONAJES: anonymous random background monsters, variados, pequeños y
  reactivos; nunca NODI ni un miembro de la familia. Son testigos
  secundarios, no el sujeto central.
- CAOS: toldos de rayas se inflan y forman arcos redondeados sobre los
  puestos; las pirámides de frutas y verduras se desmoronan sobre mesas y
  piso; las cestas dan vuelcos; los carritos giran sobre el suelo; los ovillos
  se desenrollan en alfombras redondeadas; las ollas de sopa se derraman
  sobre las mesas; los faroles se envuelven alrededor de postes; cucharas,
  cuencos, cestas y cajas se desplazan y rebotan sobre el piso; la nieve de la
  calle empuja gorros, manzanas y lana junto al suelo. Todos son objetos
  blandos, redondeados, chicos y claramente legibles, nunca suspendidos en el
  aire.
- COMPOSITION: cada zona tiene una minisituación distinta; los productos y las
  personas se reparten orgánicamente, sin filas ni un centro focal único.
- INSERCIÓN: no dejar un hueco, placeholder ni spotlight vacío. La inserción
  posterior se hace como edición localizada.
- OBJETOS TRAMPA: small blue fabric bundles, red-tied felt balls, lanterns
  with red accents y small blue sled props. No tienen caras, ojos ni
  anatomía.
- NEGATIVE: no photorealism, no realistic market building, no hard materials,
  no sharp edges, no readable text and no logos.

## Prompts de cada escena

El detalle completo de cada escena (lugar, caos propio del lugar, las seis
piezas grandes, lista de microescenas, objetos trampa y negative) ya está
escrito en los prompts de inglés, que son la versión de uso:

- `../prompts/escena_01_casa.md` + `escena_01_edicion_objetos.md`
- `../prompts/escena_02_mercado.md` + `escena_02_edicion_gente.md`
- `../prompts/escena_03_campo_de_hielo.md` + `escena_03_edicion_gente.md`
- `../prompts/escena_04_parque.md` + `escena_04_edicion_gente.md`
- `../prompts/escena_05_universidad.md` + `escena_05_edicion_gente.md`
- `../prompts/escena_06_museo.md` + `escena_06_edicion_gente.md`
- `../prompts/escena_07_tienda_de_ropa.md` + `escena_07_edicion_gente.md`
- `../prompts/escena_08_plaza_festival.md` + `escena_08_edicion_gente.md`

## Pendientes

- Paso 3 de todas las escenas: insertar el familiar y NODI sobre las imágenes
  aprobadas. En la escena 8, insertar la familia completa junta.

Ya no quedan decisiones del grupo pendientes: el pañuelo rojo de papá está
confirmado y la escena 8 tiene su desenlace definido.

## Las seis piezas grandes de cada escena

Cada escena con gente lleva seis estructuras grandes propias del lugar (de 3 a
6 veces el tamaño de un monstruito, blandas y de felpa), que son las que
generan la acción variedada. La 1, que está vacía, lleva las seis piezas
grandes del mobiliario.

| # | Lugar | Las seis piezas grandes |
|---|-------|--------------------------|
| 1 | Casa | mesón de cocina + olla gigante, escalera curva con baranda, sillón, mesa de comedor con banco, araña de luces, placard |
| 2 | Mercado | puesto de comida con toldo a rayas, pirámide de frutas, olla de sopa gigante, ovillo de lana con huso, carretto cubierto, arco de faroles |
| 3 | Campo de hielo | grúa con polea y cuerda, rampa de bloques, máquina de cortar con rueda gigante, escalera de hielo, cúpula de almacenamiento, carrete de cuerda |
| 4 | Parque | calesita, tobogán gigante, muralla de nieve con torres, pórtico de columpios, rodillo de nieve, laberinto de nieve |
| 5 | Universidad | estantería gigante, escalera rodante, pizarrón gigante, escalera de libros, globo terráqueo, dispensador |
| 6 | Museo | huevo gigante sobre pedestal, mamut fósil, rampa espiral, barrera de terciopelo, mapa mural desenrollado, mostrador con bandeja de peluches |
| 7 | Tienda | rack gigante, montón de ropa, carrete de hilo gigante, máquina de coser, escalera de biblioteca, cabina de probador |
| 8 | Plaza | árbol con plataforma, escenario, muralla de nieve, campana gigante, carrusel de trineos, pila de cajas |
