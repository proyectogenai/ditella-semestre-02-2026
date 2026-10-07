# Atlas de Escenas — La Familia Monstrix

Registro de las 8 escenas del atlas (dónde-está-Wally del mundo Monstrix):
qué es cada lugar, qué familiar se busca ahí y qué lineamientos guían su
prompt. Las reglas que gobiernan todas las escenas están en `../SKILL.md`
(REGLA WALLY) y el orden de cada prompt en `../references/recetas.md`.

## REGLA DE ORO: ACÁ HAY LINEAMIENTOS, NO PROMPTS

Este archivo dice **QUÉ** poner en cada escena. El prompt en inglés **NO está
escrito acá ni en ningún otro archivo**: se compone AL MOMENTO en que el grupo
pide un prompt de una escena, con la receta de `references/recetas.md` + los
lineamientos de la escena de abajo. No existe (ni
hay que crear) la carpeta `prompts/`, ni archivos `escena_0X_*.md`.

Por qué: si el prompt ya estuviera escrito, cualquier cambio de regla que se
haga en la skill quedaría sin efecto en las escenas ya redactadas. Así, toda
mejora de regla se refleja en el próximo prompt que se componga. Un prompt
viejo nunca se usa como fuente ni se copia textual a otra escena.

Cada escena tiene 2 pasos, siempre compuestos al pedirse y SIN NODI ni familia
(ver FLUJO POR ESCENA en SKILL.md):
1. **ESCENA GENERAL** — genera el lugar completo desde cero.
2. **AGREGAR DENSIDAD** — capa nueva de objetos sobre la imagen aprobada; se
   repite las veces que haga falta.
Y un paso 3 opcional, SOLO bajo pedido del grupo: NODI + el familiar de esa
escena, dos personajes, sin acumulación (en la casa, primero escondites y
trampas y después NODI solo; en la plaza, los siete desperdigados).

Formato de todas las escenas: 16:9 apaisado panorámico, cámara amplia frontal
tres cuartos a la altura de los monstruitos.

| # | Lugar | Familiar (buscable) | Pasos |
|---|-------|--------------------|-------|
| 1 | Casa de la familia | — (lugar vacío; NODI solo) | general + densidad |
| 2 | Mercado de la aldea | Mamá | general + densidad |
| 3 | Campo de recolección de hielo | Papá | general + densidad |
| 4 | Parque de la aldea | Hermana menor | general + densidad |
| 5 | Universidad | Hermano mayor | general + densidad |
| 6 | Museo | Abuelo | general + densidad |
| 7 | Tienda de ropa | Mejor amiga (no es de la familia) | general + densidad |
| 8 | Plaza central: festival invernal | los siete personajes, desperdigados (final) | general + densidad |

**El caos de cada escena lo hacen los OBJETOS, no la gente.** Hay unos pocos
monstruitos de fondo (la escena 1 no tiene ninguno), pero el cuadro se llena
de objetos blandos amontonados, que son los que generan el desorden y la
confusión al buscar. La columna "Familiar" dice a quién le toca el lugar en el paso 3.

La escena 8 es el final: en el paso 3 están los siete personajes en la plaza,
cada uno disfrutando el festival en su propio rincón, desperdigados, chicos
y difíciles de encontrar (receta D de `references/recetas.md`).

## Las seis piezas grandes de cada escena

Cada escena lleva seis estructuras grandes propias del lugar (de 3 a 6 veces
el tamaño de un monstruito, blandas y de felpa), que generan la acción, la
variedad y el volumen. En la casa son el mobiliario gigante.

| # | Lugar | Las seis piezas grandes |
|---|-------|--------------------------|
| 1 | Casa | mesón de cocina + olla gigante, escalera curva con baranda, sillón, mesa de comedor con banco, araña de luces, placard |
| 2 | Mercado | puesto de comida con toldo a rayas, pirámide de frutas, olla de sopa gigante, ovillo de lana con huso, carrito cubierto, arco de faroles |
| 3 | Campo de hielo | grúa con polea y cuerda, rampa de bloques, máquina de cortar con rueda gigante, escalera de hielo, cúpula de almacenamiento, carrete de cuerda |
| 4 | Parque | calesita, tobogán gigante, muralla de nieve con torres, pórtico de columpios, rodillo de nieve, laberinto de nieve |
| 5 | Universidad | estantería gigante, escalera rodante, pizarrón gigante, escalera de libros, globo terráqueo, dispensador |
| 6 | Museo | huevo gigante sobre pedestal, mamut fósil, rampa espiral, barrera de terciopelo, mapa mural desenrollado, mostrador con bandeja de peluches |
| 7 | Tienda | rack gigante, montón de ropa, carrete de hilo gigante, máquina de coser, escalera de biblioteca, cabina de probador |
| 8 | Plaza | árbol con plataforma, escenario, muralla de nieve, campana gigante, carrusel de trineos, pila de cajas |

---

## 1. Casa de la familia — lineamientos

Interior de una casa redonda, blanda y completamente tapizada de felpa. La
cámara está dentro de la sala y mira diagonalmente hacia la cocina, el
recibidor y la escalera conectados por puertas reales. Mostrar piso y parte
del techo; nunca la fachada, el techo exterior, una maqueta, un corte de
dollhouse ni una vista aérea.

**Las seis piezas (mobiliario gigante):** mesón de cocina redondo enorme con
una olla gigante con tapa arriba · escalera curva con baranda acolchada gruesa
que sube fuera del cuadro · sillón redondo sobredimensionado que llena un
rincón · mesa de comedor muy redonda con un banco largo alrededor · araña de
luces enorme colgando baja de una cadena visible sobre la mesa · placard
gigante de puertas redondas contra el muro del fondo.

**Caos propio:** desorden hogareño vivido, no de almacén — desayuno a medio
hacer, muebles movidos, cosas fuera de su sitio. Encimeras con objetos que se
deslizan; líquidos y migas derramados; cosas subidas a altura (techo, estantes)
y otras caídas al piso; puertas de placard abiertas con lo que sale rodando;
textiles (mantas, mantel, alfombra) enredados en el mobiliario; todo apoyado y
sin nada peligroso.

**Semillas de mini-eventos** (el prompt general enumera unas 20; todas de
objetos, cada zona con la suya):
- hilera de cuencos de desayuno por el piso de la cocina, dos más en el borde
  de la encimera y uno ladeado;
- la olla gigante volcada de costado en la encimera, arrastrando una estela de
  cucharones y cucharas;
- un cojín al pie de la escalera tras resbalar, con tres objetos distintos
  tirados en los escalones de arriba;
- placard abierto con una línea de platos rodando hacia la encimera;
- jarra boca abajo junto a la tostadora, con su tapa apoyada encima;
- panqueque pegado al techo, con una silla debajo y el mantel tirado a medio
  de la mesa;
- manta medio desenrollada del sillón, arrastrando un cojín por el piso;
- manojo de cucharones y cucharas enredados al pie de la araña;
- dos sillones inclinados uno contra otro como conversando;
- alfombra enrollada apoyada en la escalera con una escoba atravesada;
- pila de platos inclinada en el borde de la mesa, con la silla retirada;
- cajón medio abierto con una cuchara y un paño asomando;
- juego de té servido para tres: una silla empujada atrás y otra caída;
- línea curva de fichas por el piso que se quiebra donde una pelota las
  golpeó;
- trineo y pala de nieve junto a la puerta abierta, con la deriva entrada y
  la huella del trineo en la estera;
- montón de cojines tapando la puerta de la cocina, con una mesa baja contra
  ella;
- repisa de frascos inclinados todos en el mismo ángulo, uno a punto de caer;
- mantel extendido por el recibidor con una silla parada encima;
- cesta de juguetes volcada en la esquina, contenido en abanico y una pelota
  sobre un cojín;
- abrigo y bufanda colgados de los ganchos de la puerta, izados por la
  corriente, con el gorro caído abajo.

**Objetos trampa de la escena** (además de los genéricos de REGLA WALLY; los
15-20 de esta escena, todos celeste #91d3eb + rojo y sin anatomía): par de
orejeras de felpa a la puerta (una torcida), una orejera suelta en la mesa del
comedor, dos enganchadas en el pasamanos de la escalera, cinta celeste con dos
pompones rojos sobre la encimera, capucha celeste con dos pompones, gorro
celeste con pompón en el piso junto al perchero, bulto rechoncho con dos
lóbulos entre cojines, almohada con dos muñones redondos caída en el
recibidor, bolso suave con asas rojas colgado de un pomo, farolillo redondo con
pompón junto a la escalera, seis bolas de felpa atadas con cordón rojo (una
rodó a la alfombra), trivet de tres patas en triángulo contra el muro, dos
manoplas unidas por cinta roja colgadas del riel del mesón, rodillo con franja
roja en cada punta entre sillón y mesa, mochila pequeña con correas rojas bajo
el banco, gorro tejido con dos borlas rojas enganchado en la baranda, puf
redondo con borla roja bajo la ventana.

**Luz y nieve:** el interior se mantiene cálido y casi sin nieve; la nieve
solo entra por la puerta frontal abierta (se posa en la estera, y por el umbral
se ve un fragmento de jardín nevado con trineos escapados y bolas rodando —
nunca la fachada ni el techo). Luz cálida de ventanas redondas y de la araña;
luz blanca fría de invierno entrando por la puerta. Sin fuego real.

**La casa está VACÍA (variante propia):**
- Punto CHARACTERS → **NO CHARACTERS**: sin monstruos, personas, animales,
  siluetas, retratos, manos, ojos, caras ni criaturas escondidas; ni muñecos
  con cara o anatomía de animal. Solo objetos. El cuadro se cuenta solo: la
  casa parece abandonada a media mañana.
- Punto MICRO-EVENTS → **EVERY CORNER IN ITS OWN MINI-EVENT**: todas las
  microescenas son eventos de OBJETOS; ninguna de personajes.
- En los pasos 1 y 2, el negative agrega: "no monsters, no people, no animals,
  no creatures, no silhouettes, no portraits, no hands, no eyes, no faces, no
  toys with faces or animal anatomy".
- Es el modelo de referencia de una escena con el caos hecho solo de objetos.

**Paso 2 — AGREGAR DENSIDAD (solo objetos):** la capa nueva se apila contra
las seis piezas sin taparlas: bandejas que resbalan de la encimera y se abren
en abanico en el piso de la cocina; torre de fichas junto a la escalera que
baja los escalones de a una; pila de libros que se desliza del banco y se abre
en el piso; hilera de frascos que cae en dominó; montón de pelotas que rueda y
se junta contra el placard; ropa doblada del banco que colapsa en deriva larga;
manojo de cucharas que baja por el pasamanos y se junta en un escalón; guantes
que salen a chorros de una cesta; columna de latas junto al mesón que se
vuelca; pila de ollas del piso que se tira y repica contra el muro; bufandas
que se desenrollan del pasamanos y trepan las escaleras; deriva de nieve que
entra más y entierra la esquina de la alfombra. La casa sigue vacía.

**Paso 3a — ESCONDITES Y TRAMPAS (bajo pedido, sobre la imagen aprobada):**
suma dos cosas y nada más: huecos VACÍOS y bien iluminados desde adentro donde
un monstruito chico podría meterse (la cuña entre el sillón y el muro con
cojines encajados; bajo la mesa entre las patas del banco, con la punta del
mantel levantada y sostenida por una tetera; detrás de la puerta del placard
de cocina abierta; adentro del placard con una puerta salida y una manta
aplanada en la esquina; el hueco bajo la escalera, despejado; detrás del
sillón apoyado, donde se ve una franja de piso; el espacio detrás del mesón
con una hilera de barrilitos; entre la heladera y el muro, con una escoba
apoyada adelante; la esquina del recibidor detrás de la cesta volcada; bajo el
escalón más bajo, medio tapado por la alfombra enrollada; adentro de la olla
gigante, con la tapa ladeada y sin cerrar; detrás de la cortina de la ventana
redonda, con el tejido juntando pliegues en el piso; la repisa del placard del
recibidor, despejada en su tercio del medio; entre los dos sillones que se
apoyan el uno al otro; el fondo del cajón abierto del placard, con el relleno
empujado a un lado) + MÁS trampas en el celeste exacto de NODI (la lista de
arriba, más una bola de felpa con lazo rojo en los pliegues de la cortina del
recibidor), repartidas en grupos desparejos, dentro de los montones. La casa
sigue sin ningún ser vivo. Solo sirve si faltan escondites o trampas; si la
imagen está borrosa u oscura, va un pulso de luz/nitidez, no este paso.

**Paso 3b — NODI EN SU CASA (bajo pedido, después de 3a):** NODI aparece una
única vez, en el rincón del salón, sentado entre los cojines apilados al lado
del sillón, contra el muro, en el tercio lateral y en la banda media. Es más
chico que un cojín del sillón: un cojín grande parado delante de él le tapa
casi todo el cuerpo, y solo asoman la parte de arriba de la cabeza, una
orejera y el borde de la bufanda. Una manta apoyada al lado y cojines del
celeste exacto de su pelaje alrededor hacen que, a primera vista, se lea como
parte de la pila. Mira hacia la sala con curiosidad alegre, con una mano
tocándose una orejera. Es el único ser vivo de la imagen y el único que lleva
bufanda roja y orejeras rojas juntas: hay muchos objetos de su celeste
exacto (camuflaje), pero ninguno con sus dos rojos. Exactamente uno en toda
la imagen. Los escondites quedan vacíos salvo donde está él.

---

## 2. Mercado de la aldea — lineamientos

Calle de mercado invernal en la aldea: puestos redondeados de felpa con
toldos, que venden comida, lana, juguetes y recuerdos; los interiores cálidos
se ven desde la calle. Cámara a nivel de calle, mostrando la calle nevada y
varios puestos a la vez, con 4-5 bandas de profundidad.

**Las seis piezas:** puesto de comida con toldo a rayas enorme y mostrador
largo · pirámide escalonada de frutas y verduras sobre mesa ancha · olla
gigante de sopa con tapa hundida en un mostrador redondo · madeja gigante de
lana sobre huso alto · carrito cubierto estacionado en medio de la calle ·
arco gigante de farolillos entre dos postes sobre la calle.

**Caos propio:** toldos que se hunden en arcos redondeados; pirámides de frutas
que se deslizan de las mesas a la calle; cestas volcadas que ruedan; carritos
que giran sobre la nieve; lana que se desenrolla en alfombras por la calle;
sopa que se derrama del mostrador hacia la nieve; farolillos que oscilan en sus
postes; la nieve empuja gorros, manzanas y lana junto al suelo.

**Semillas de mini-eventos:**
- la pirámide de frutas se ladea y las manzanas ruedan hasta juntarse contra
  una pata del puesto;
- cestas volcadas ruedan en onda por la calle, dos quedan boca abajo;
- bolas de lana se desenrollan y se envuelven alrededor de un poste;
- un carrito de panecillos se vuelca, los panecillos se esparcen y algunos se
  hunden en un montículo de nieve;
- pila de bufandas dobladas se desliza del mostrador y se abre en abanico;
- montón de naranjas empujado por la nieve, acumulado contra el carrito;
- la olla gigante se ladea y una onda redondeada de sopa baja a la nieve;
- columna de frascos apilados cae en dominó, el último sobre un cojín;
- atado de bolsas de lana se hunde y derrama paquetitos en todas direcciones;
- bandeja de tortas redondas se desliza de la mesa y queda en diagonal contra
  una cesta;
- alfombra enrollada se desenrolla sola por la calle y sigue sobre una banca;
- derrumbe de gorros que rueda, uno cayendo boca abajo sobre un poste.

**Objetos trampa sugeridos:** orejeras celestes de felpa colgadas de un poste
(una torcida); atado rechoncho con dos lóbulos medio tapado por lana; gorro
tejido con pompón rojo boca abajo sobre la nieve; farolillo redondo con pompón
sobre un barril; seis bolas celestes atadas con cordón rojo, una rodada en la
calle; bolso blando con asas rojas caído junto a un cajón.

**Luz y nieve:** nieve en la calle, techos, toldos y cajones; los interiores
de los puestos cálidos y sin nieve, con transición visible. Luz diurna blanca
y suave de invierno con brillo ámbar cálido desde ventanas, arco de farolillos
y postes.

**Personajes de fondo:** los ~12 genéricos de REGLA WALLY, repartidos en
grupos desiguales (dos en un mostrador, tres sobre cestos, uno empujando un
carrito, uno sentado en un cajón, uno medio oculto tras lana), cada uno con su
microescena.

**Paso 2 — DENSIDAD:** nombra las seis piezas y agrega capa nueva contra ellas:
torre de cestas que se inclina y suelta las dos de arriba; hilera de manzanas
rodando hacia el carrito; tres alfombras que se desenrollan desde un montón
nuevo; frascos en dominó; saco blando de lana que se derrama; columna de trapos
doblados que colapsa en abanico; pila de peluches que se vuelca del mostrador a
la calle; carretilla de panecillos que vuelca; montón de naranjas empujado por
la nieve; fila de cuencos que avanza por la nieve.

---

## 3. Campo de recolección de hielo — lineamientos

Campo de recolección de hielo al aire libre, afuera del pueblo: bloques
redondeados de hielo blando, plataformas bajas acolchadas, poleas, carritos de
hielo, sopladores de nieve y una cabaña refugio de ventanas redondas cálidas
(con interior mayormente sin nieve). Horizonte cerca del borde superior, piso
visible.

**Las seis piezas:** grúa acolchada con polea gigante y cuerda gruesa sobre
plataforma amplia · rampa larga de bloques sobre rodillos blandos · máquina
redonda gigante de corte con rueda festoneada · escalera alta de bloques
apilados · domo redondo gigante de almacenamiento con puerta baja · bobina
gigante de cuerda sobre huso alto.

**Caos propio:** bloques que se separan y rotan al deslizarse; trineos
cargados que se vuelcan y dejan bloques rodando en fila; cuerdas que se
desenrollan, serpentean y se anudan a un poste; sopladores que empujan ondas
de nieve; cubos que ruedan en cadena; pilas de cajones y mantas que se
deslizan de las plataformas; esculturas redondeadas que se vuelcan en dominó
lento.

**Semillas de mini-eventos:**
- pila de bloques que se separa y se desliza en todas direcciones, girando
  cada uno sobre sí mismo;
- trineo que se vuelca y los bloques ruedan uno tras otro por la rampa;
- bobina que se desenrolla del huso, serpentea por el campo y se anuda a un
  poste;
- nube de bolas de nieve que rebota entre las máquinas y se asienta en fila;
- hilera de cubos que rueda en cadena y se acumula contra un banco de nieve;
- saco blando de virutas de hielo tirado de lado, con las virutas saliendo
  rodando;
- torre de cajones que colapsa y las virutas se derraman en abanico;
- fila de farolillos en un reborde que se desliza de a uno, el último lejos;
- montón de almohadillas que cae de una plataforma y sigue hasta el piso;
- trineo que se desliza solo por el hielo y frena contra un banco de nieve;
- derrumbe de guantes, gorros y bufandas sobre la nieve;
- canal de bloques chicos que se amontona contra el domo.

**Objetos trampa sugeridos:** orejeras celestes acolchadas en un poste de la
grúa (una torcida); atado con dos lóbulos medio tapado por virutas; gorro
con dos borlas rojas enganchado en el riel de la rampa; farolillo redondo sobre
un bloque de hielo; seis bolas atadas con cordón rojo, una rodada en el hielo;
mochila pequeña con correas rojas detrás de un trineo.

**Luz y nieve:** nieve en todo el exterior; el interior de la cabaña refugio
cálido y libre de nieve, con transición visible. Luz diurna blanca suave +
ámbar desde ventanas de la cabaña, farolillos y máquinas.

**Personajes de fondo:** los ~12 genéricos, en grupos desiguales (dos junto a
la máquina de corte, tres en la plataforma de carga, uno en la rampa, uno
sentado sobre un bloque, uno medio oculto tras virutas).

**Paso 2 — DENSIDAD:** capa nueva contra las seis piezas: torre de bloques en
la rampa que se separa girando; pila de cajones que se abre en abanico de
virutas; bobina nueva que serpentea y se anuda; fila de cubos en cadena; almohadillas
que caen de la plataforma; columna de bloques en dominó; nube de bolas
rebotando; saco de virutas tirado de lado; fila de farolillos que se desliza;
trineo nuevo hasta un banco de nieve.

---

## 4. Parque de la aldea — lineamientos

Parque invernal de la aldea: pista redondeada de patinaje sobre hielo,
estanque helado, toboganes acolchados, columpios, juegos blandos, árboles de
tela y quioscos cálidos. Zonas: pista/estanque, área de juegos (tobogán,
columpios, fortaleza, laberinto), picnic/quioscos y arboleda.

**Las seis piezas:** calesita gigante con toldo a rayas y ocho asientos
acolchados · gran tobogán curvo de nieve con escalera acolchada · muralla de
fortaleza de nieve con torres redondeadas y puerta baja · pórtico de columpios
con tres cadenas de un arco de ramas · rodillo gigante de nieve (del alto de un
monstruito) · laberinto grande de muros de nieve compactados.

**Caos propio:** patines que aceleran en espirales por la pista; la pulidora
que extiende neblina blanda; bolas de nieve que rebotan entre árboles;
resortes blandos que ruedan bolas; cestas, trineos y mantas que se deslizan
por toboganes y bancas; mantas que se desenrollan y arrastran cosas; cometas
enredadas con sus cuerdas entre ramas; muros de nieve que colapsan en ondas.

**Semillas de mini-eventos:**
- montón de bolas de nieve que rueda por el camino en hilera y choca contra el
  muro del laberinto;
- pila de cubos sobre la mesa de picnic que se vuelca uno a uno por el banco;
- trineos y esquís que se deslizan de un estante y caen en abanico;
- fajo de cometas que se desliza por una rama y las cuerdas arrastran por los
  montículos;
- manta enrollada que se desenrolla sola por el camino y sigue sobre una banca;
- muro de bolas que colapsa hacia adelante y entierra una fila de cubos;
- cesta de manzanas que baja por el gran tobogán y se abre en río;
- resortes blandos que se desenrollan y hacen rodar bolas en varias direcciones;
- gorros y bufandas arrastrados por el suelo, acumulados al pie del tobogán;
- el rodillo empuja nieve formando un muro largo que se inclina sobre el
  camino;
- aro largo que rueda por todo el parque y frena contra un banco de nieve;
- cojines de la plataforma del carrusel que se deslizan y caen en montón.

**Objetos trampa sugeridos:** orejeras celestes colgadas de una cadena del
columpio; bulto con dos lóbulos sobre la banca de picnic entre cojines; gorro
con pompón boca abajo en nieve; farolillo redondo sobre un trineo; seis bolas
con cordón rojo, una rodada por el camino; mochila con correas rojas detrás de
un banco de nieve.

**Luz y nieve:** nieve en suelo, caminos, bancas y techos; interiores de
quioscos cálidos sin nieve, con transición. Luz blanca suave + ámbar de
ventanas de quioscos, farolillos y postes.

**Personajes de fondo:** los ~12 genéricos, en grupos desiguales (dos en la
pista, tres en la mesa de picnic, uno en la escalera del tobogán, uno en un
escalón de la calesita, uno medio oculto tras bolas de nieve).

**Paso 2 — DENSIDAD:** capa nueva contra las seis piezas: muro de bolas que
colapsa; pila de cubos que baja por el banco; fajo de cometas que se desliza;
cesta de manzanas que baja por el tobogán; cojines que se deslizan de la
calesita; nieve que el rodillo empuja en muro inclinado; trineos y esquís que
salen de un estante; manta que se desenrolla; gorros arrastrados al pie del
tobogán; aro que rueda hasta un banco.

---

## 5. Universidad — lineamientos

Campus redondeado: biblioteca, aulas abiertas, comedor, amplia escalera frontal
y cálidos interiores visibles desde afuera. Vista panorámica a la altura de
los monstruitos, con la transición nieve afuera / interiores templados bien
visible.

**Las seis piezas:** estantería gigante de libros de felpa (5× la altura de
una figura) · escalera rodante con plataforma acolchada · pizarra enorme blanda
sobre marco redondo · ancha escalera frontal hecha de libros apilados · globo
terráqueo enorme sobre soporte redondo · dispensador redondo de snacks y
bebidas.

**Caos propio:** libros blandos que bajan la escalera y se apilan; pizarras en
blanco que resbalan como rampas apoyadas; lápices que escapan de cajones;
aviones de papel que planean por la biblioteca; mochilas que se mueven en
grupos; globos atados con hilo visible a escritorios y barandas; atriles que
giran; sillas que se apilan solas; bandejas del comedor que resbalan;
posters que se enrollan en columnas; libros abiertos con páginas en blanco
regadas.

**Semillas de mini-eventos:**
- torre inclinada de libros que baja por el corredor y se abre en abanico;
- carrito de libros que se vuelca y los libros ruedan saliendo de a uno;
- almohadones que se desploman del banco del aula y botan escalón abajo;
- muro de pizarras que resbala por los escalones del atrio;
- montón de mochilas que se derrama y rueda por la escalinata frontal;
- torre de bandejas y tazas que se tira y aterriza en abanico;
- el globo enorme se desengancha, cruza el piso y frena contra un montón
  de libros;
- monte de páginas sueltas que se levanta y se esparce;
- rollo de posters que se desenrolla en espiral por el corredor;
- escalera de libros que colapsa escalón por escalón;
- fila de taburetes que resbala en dominó desde los bancos;
- fila de libros de un estante que se tira en dominó.

**Objetos trampa sugeridos:** par de orejeras acolchadas celestes sobre pila de
libros (una torcida); gorro con pompón boca arriba en un banco del aula;
farolillo redondo sobre un escritorio; mochila con correas rojas detrás de un
carrito; almohada con dos muñones caída en el corredor; trivet de tres patas
contra un carrito de libros.

**Luz y nieve:** nieve solo afuera (piso, escaleras, techos, repisas);
interiores cálidos y casi sin nieve. Luz blanca suave de invierno + resplandor
ámbar de ventanas, lámparas y dispensador; sin fuego real.

**Personajes de fondo:** hasta una docena, en grupos chicos irregulares (dos
en la escalera frontal, tres entre estantes, uno en el mostrador del comedor,
uno en un banco, uno medio escondido tras un montón de libros); todos
distintos y haciendo cosas distintas, parados en el piso entre los montículos,
nunca encima de ellos.

**Paso 2 — DENSIDAD:** capa nueva en estantes, escritorios, mesas del comedor,
escalones, nieve afuera y corredores: libros de felpa, páginas en blanco,
carpetas, almohadones, posters, mochilas, taburetes, tazas, bandejas, lápices
gigantes, aviones de papel, globos con hilo. Microescenas nuevas (torre de
libros en abanico, carrito que se vuelca, pizarras por la escalera, mochilas
rodando la escalinata, columna de tazas del dispensador, páginas que se
esparcen, rollo de posters contra una columna, etc.). Las seis piezas siguen
visibles.

---

## 6. Museo — lineamientos

Museo redondo con cúpula blanda, columnas acolchadas, vitrinas de peluche,
exhibiciones de felpa, entrada y hall separados, interior cálido y luminoso.

**Las seis piezas:** huevo gigante liso y en blanco del alto de cuatro figuras
sobre pedestal redondo · fósil de esqueleto de mamut enorme en el hall · rampa
en espiral al segundo nivel · barrera de cuerda de terciopelo entre postes
redondos · mapa mural gigante en blanco desenrollado por el piso · mostrador
de la tienda con bandeja gigante de pelotas de peluche.

**Negativo propio de la escena:** cero esqueletos, calaveras o huesos reales,
dientes afilados, horror o gore. Los fósiles son juguetes redondos blandos y
los huevos gigantes son suaves, lisos y amigables.

**Caos propio:** vitrinas que se deslizan de una sala a otra; cuerdas de
terciopelo que se anudan en el piso; huevos gigantes que ruedan por los
corredores; fósiles de juguete junto a sus plataformas; un cepillo grande que
barre; esculturas que se estiran y se inclinan; bancos que se extienden en
puentes; luces que resbalan de las repisas; mapas que se enrollan; pelotas de
la tienda que botan hacia la entrada.

**Semillas de mini-eventos:**
- pelotas de peluche que se derraman de la bandeja del shop y ruedan en abanico
  por el hall;
- vitrina de esculturas que baja por la rampa y su contenido queda en montón;
- pila de monedas redondas que se tira y rueda en todas direcciones;
- el huevo gigante baja del pedestal, rueda por dos salas y aparta un
  montón de pelotas;
- muro de cuerdas de terciopelo que se desliza de los postes y se anuda;
- mapa que se desenrolla solo por el hall y envuelve un banco y una columna;
- montón de huesos blandos que se desploma de la plataforma;
- lamparitas que resbalan de la repisa una a una;
- columna de huevos que sale de a uno y cae en montón;
- deriva de monedas que rueda hacia la salida y se junta en la nieve;
- el cepillo blando que empuja una ola de pelotas por el piso;
- postes de barrera que se vuelcan en dominó lento.

**Objetos trampa sugeridos:** orejeras celestes sobre un pedestal (una
torcida); gorro con pompón sobre un banco; farolillo sobre una vitrina; bolso
con asas rojas junto a un poste de la barrera; almohadón con franja roja entre
dos pedestales; capucha con pompones sobre un montón de monedas.

**Luz y nieve:** nieve solo afuera (escalones, piso junto a la puerta, techo);
interior cálido casi sin nieve. Luz blanca suave + ámbar de lamparitas y
farolillos interiores.

**Personajes de fondo:** hasta una docena (dos en el vestíbulo, tres entre
columnas, uno entre vitrinas, uno sentado en un banco, uno medio escondido
detrás de un montón de pelotas), cada uno distinto y con su acción.

**Paso 2 — DENSIDAD:** capa nueva en vestíbulo, columnas, suelos de vitrinas,
rampa, superficie del mapa y mostrador: fósiles blandos, conchas, huevos,
cristales, plumas, hojas redondeadas, pedestales, paneles, etiquetas en
blanco, réplicas de peluche, mapas enrollados, banderas, cuerdas, cestas,
pilas de merchandising. Microescenas nuevas (vitrina de huevos en abanico,
conchas resbalando, huesos que bajan en fila por la rampa, piedras en cadena,
pedestales en dominó, cesta de merchandising que se derrama, etc.). Las seis
piezas siguen visibles.

---

## 7. Tienda de ropa — lineamientos

Boutique redonda con estantes, percheros, probadores, mostrador, maniquíes
redondos sin cara y ventana abierta a la calle nevada. La cámara está DENTRO
de la tienda, en diagonal hacia la entrada y la ventana, a la altura de los
monstruitos; nunca desde arriba ni desde afuera del edificio.

**Las seis piezas:** perchero redondo gigante del alto del techo, sobre
ruedas blandas · montón gigante de ropa doblada tan profundo como la altura de
una figura · carrete enorme de hilo con un hilo que cruza toda la tienda ·
máquina de coser grande sobre mesa larga · escalera alta sobre rieles a lo
largo del muro de estantes · cabina de cambios grande de tela contra el fondo.

**Caos propio:** bufandas que se estiran y se anudan en bolas blandas; gorras
que se multiplican; percheros de ganchos blandos que resbalan con la ropa al
piso; rollos de tela que se desenrollan; botones que ruedan; zapatos que
forman olas redondeadas; cinturones que forman lazadas; maniquíes que giran;
bolsos que ruedan; lana que envuelve columnas; accesorios que se derraman de
cajones.

**Semillas de mini-eventos:**
- el perchero gigante rueda por el pasillo y se le va tirando la ropa;
- pila de ropa doblada que resbala de un estante y se abre en abanico;
- muro de bufandas que se desliza del perchero y se anuda en montón;
- montón de zapatos que colapsa y rueda en ola ancha;
- rollo de tela que se desenrolla por el pasillo y sigue bajo el mostrador;
- cascada de botones que se derrama de un cajón abierto;
- pila de gorras que se tira y rueda, una aterrizando en la mesa de coser;
- bola de lana que cae del estante y se desenrolla al rodar, dejando rastro;
- el carrete gigante gira solo y el hilo arrastra cosas chicas;
- un bolso se cierra y rueda hasta chocar con una cesta;
- guantes y medias que salen a chorros de una cesta;
- cinturones que caen y cada uno forma una lazada donde aterriza;
- carrito de ropa que rueda solo y vuelca su carga en avalancha lenta.

**Objetos trampa sugeridos:** orejeras celestes enganchadas en un perchero (una
torcida); gorro con pompón boca arriba en el mostrador; farolillo redondo sobre
un estante; almohadón con franja roja entre dos montones; mochila con correas
rojas detrás de una cesta; almohada con dos muñones caída en el piso.

**Luz y nieve:** nieve solo en la calle, el alféizar y el piso junto a la
puerta; interior cálido casi sin nieve, con transición por ventana y puerta.
Luz blanca de invierno por la ventana + ámbar de las lámparas de la tienda.

**Particularidades de la escena:** los maniquíes son redondos y SIN cara, sin
ojos, boca, pelo ni anatomía: son objetos, no criaturas. Ganchos y rieles
blandos y redondeados, nunca afilados. Los monstruitos de fondo visten ropa
simple de colores mezclados, no hay dos con la misma combinación, y NINGUNO
lleva un accesorio rojo de firma (ni gorro, ni bufanda, ni orejeras, ni bolso,
ni tutú, ni corbata rojos): el rojo de firma es solo de la familia.

**Personajes de fondo:** hasta una docena (dos entre percheros, tres en el
pasillo de probadores, uno en el mostrador, uno sentado en un almohadón, uno
medio escondido detrás de un montón de ropa doblada).

**Paso 2 — DENSIDAD:** capa nueva en estantes, mostrador, mesa larga, piso,
percheros y contra la cabina: prendas dobladas en pilas de alturas variadas,
prendas colgadas, gorros, bufandas, guantes, cinturones, bolsos, zapatos,
cintas, botones, carretes, hilos, paños, almohadones, cestas, cajas, rollos de
papel de regalo. Microescenas nuevas (pila de ropa que se vuelca de la mesa,
torre de gorros que se derrama, cesta de cintas en enredo largo, bufandas que
se desenrollan del riel sobre el mostrador, zapatos que caen en cadena, etc.).
Las seis piezas siguen visibles.

---

## 8. Plaza central: festival invernal — lineamientos

Plaza nevada del pueblo con festival: árbol de peluche grande, escenario chico,
puestos de mercado, postes de farolillos, guirnaldas y mucha decoración
invernal. Todo al aire libre y nevado, con los puestos cálidos por dentro.

**Las seis piezas:** árbol decorado gigante con plataforma alrededor del
tronco · escenario grande con escalera ancha blanda · muralla de fuerte de
nieve con torres redondas · campana gigante colgada de un poste con cuerda
gruesa · carrusel de trineos chicos · pila enorme de cajas de regalo gigantes.

**Particularidades de la escena:** el muñeco de nieve debe ser redondo y
amigable, sin cara tallada ni detalles amenazantes. Detrás del árbol grande,
destellos redondeados suaves y luminosos en el cielo como luces invernales —
solo formas de luz suaves, sin fuego, sin chispas quemando ni humo. Negativos
propios: sin atmósfera oscura, sin escena nocturna, sin fuegos artificiales.
**El final (paso 3)**: entran los siete personajes (NODI, mamá, papá,
hermana, hermano, abuelo y la mejor amiga), desperdigados por la plaza, cada
uno en una zona distinta y disfrutando el festival con los objetos de su
rincón: nunca juntos, nunca en grupo, nunca un abrazo central. Todos chicos,
del tamaño de los monstruitos de fondo, nadie en primer plano, cada uno tapado
en parte por un objeto. Lugares sugeridos: NODI entre las cajas de regalo al
pie de la pila; mamá en un puesto de comida; papá junto al poste de la
campana; la hermana en el carrusel de trineos; el hermano en la escalera del
escenario; el abuelo en un banco junto al árbol; la mejor amiga junto a la
muralla del fuerte. Receta D de `references/recetas.md`. En los pasos 1 y 2
el negative suma "no family members, no reunion, no central hug"; en el paso
3 eso se saca.

**Caos propio:** guirnaldas y decoraciones en arcos y lazadas sobre postes;
guirnaldas que se desenrollan y serpentean; cajas de regalo que ruedan
alejándose de los puestos; tambores, campanas y maracas que botan; trineos
que describen giros imposibles; paneles del escenario que se pliegan en
toboganes; piezas de muñeco de nieve que se desarman y quedan dispersas; el
carrito de palomitas derrama pompones blandos; el confeti se vuelve esferas
blandas de nieve.

**Semillas de mini-eventos:**
- muro de cajas de regalo que se tira de lo alto y aterriza en montón;
- guirnalda larga que se desenrolla del árbol y serpentea juntando bolas de
  nieve;
- pila de farolillos en la repisa de un poste que resbala de a uno;
- piezas de muñeco de nieve que se desarman y ruedan cada una a un lado;
- tambores y campanas que bajan los escalones del escenario en avalancha;
- deriva de paquetes que resbala del mostrador de un puesto;
- fila de trineos que se tira de su soporte en abanico;
- pila de almohadones que se desploma del escenario y tapa un banco;
- cesta de palos blandos y maracas que se derrama;
- bombo acostado que rueda despacio por la nieve apartando cosas chicas;
- pila de bloques del fuerte que se desmorona en montón largo y bajo;
- cinta de regalo que se desenvuelve en curvas por los escalones;
- carrito de regalos que rueda solo y suelta una caja en cada vuelta;
- bandeja de palomitas que se desliza y se esparce sobre la nieve.

**Objetos trampa sugeridos:** orejeras celestes sobre una caja de regalo (una
torcida); gorro con pompón boca abajo en la nieve; farolillo sobre el
mostrador de un puesto; almohadón con franja roja entre dos cajas; capucha con
pompones sobre un montón de paquetes; gorro con pompón sobre un tambor; trivet
contra una pieza del muñeco de nieve.

**Luz y nieve:** la plaza entera nevada (suelo, puestos, techos, bancos,
árbol); solo los interiores de los puestos cálidos y sin nieve. Luz blanca
suave de invierno + ámbar de ventanas de puestos, guirnaldas de farolillos y
postes.

**Personajes de fondo:** hasta una docena (dos alrededor del árbol, tres en
los escalones del escenario, uno entre puestos, uno sentado en un banco, uno
medio escondido detrás de un montón de cajas), todos distintos y cada uno
celebrando algo distinto.

**Paso 2 — DENSIDAD:** capa nueva alrededor y debajo del árbol, sobre el
escenario, en mostradores, contra la muralla y el poste de la campana: cajas de
regalo de todos los tamaños, paquetes, rollos de cinta, farolillos, guirnaldas,
adornos, tambores, cornetas, tazas de bebida caliente, trineos, almohadones,
mantas, piezas de muñeco de nieve, gorros, bufandas, derivas de nieve.
Microescenas nuevas (torre de cajas en el mostrador, adornos que se deslizan
en abanico, farolillos que ruedan fila abajo, guirnalda que se anuda en un
banco, cesta de bebidas que se vuelca, tambores que ruedan del escenario,
campanas de a una, etc.). Las seis piezas siguen visibles.

---

## Pendientes

- Terminar de renderizar las 8 escenas (pasos 1 y 2).
- Paso 3 de cada escena, cuando el grupo lo pida.
