# Pixelados · concepto

**Entregable Clase 5** — Grupo 03 · Donna Liporace · Luca Fernández Ciatti · Lucía Medina

---

## El concepto, en una oración

**Pixelados** es un atlas de búsqueda dentro de una computadora vieja: dos
personas quedaron atrapadas adentro de la IA que estaban construyendo, y el
lector tiene que encontrarlas en los ocho mundos de un dataset corrompido.

## El universo

Luca y Donna estaban desarrollando una IA generativa de modelado de personajes
en una computadora vieja: un sistema capaz de producir la versión Pixel Art de
cualquier personaje. El punto de partida de todo modelo era **Bitsy**, el
esqueleto base — el maniquí sobre el que la IA vestía cada personaje nuevo.

El dataset estaba ordenado: una carpeta por mundo y, adentro de cada una,
subcarpetas por escenario, por personaje, por objeto.

Un café volcado sobre el teclado hizo un cortocircuito que rompió el sistema de
dos maneras a la vez. Absorbió a Luca y a Donna hacia adentro de la máquina y
los dispersó entre los mundos. Y reventó las subcarpetas de cada mundo: los
mundos **no** se mezclaron entre sí, cada uno colapsó sobre sí mismo. Todos los
escenarios, personajes y objetos de un mismo mundo conviven ahora en un solo
plano imposible.

Adentro, los dos quedan convertidos en versiones pixeladas de sí mismos, porque
la máquina es vieja y todo lo que hay ahí dentro está hecho de pasado digital:
monitor CRT, baja resolución, interfaces antiguas, glitch y error.

Desde afuera, el usuario ve la pantalla. Cada vez que los encuentra recupera una
parte de la señal; al completar los ocho mundos, la salida se desbloquea.

## Lugares y situaciones posibles

Cada página es **un** mundo colapsado sobre sí mismo, nunca una mezcla de
mundos. Esa regla es la que mantiene las ocho páginas distinguibles entre sí.

1. Un mundo de plataformas: todos sus niveles, enemigos y objetos apilados en el
   mismo plano.
2. Un mundo de ciudad nocturna y vigilantes enmascarados, con sus guaridas y
   vehículos superpuestos.
3. Un mundo de misterio y pandilla detectivesca, con sus casas embrujadas.
4. El adentro de la propia máquina: escritorios, ventanas de error, íconos y
   barras de progreso amontonados.
5. *(pendientes cuatro mundos más)*

## El elemento oculto y el guía

### Bitsy — el guía visible

**Qué es:** el esqueleto base de la IA, el maniquí sobre el que se vestía cada
personaje nuevo.

**Por qué pertenece a este universo:** nació adentro de él. Y es el único que
puede moverse entre los mundos colapsados, porque fue hecho justamente para que
cualquiera de ellos lo vista.

**Qué hace en cada escena:** aparece visible, acompaña al lector y deja pistas.
En cada mundo lleva el disfraz que le corresponde.

**Tres rasgos invariables:** la silueta (cabeza circular grande, cuerpo
redondeado, brazos y piernas de línea fina); los dos ojos ovalados negros,
siempre visibles, que ningún disfraz tapa; y la piel blanca `#F9F9F9` asomando
en toda zona que el disfraz no cubre.

### Luca y Donna — los escondidos

**Qué son:** los creadores de la IA, ahora contenidos por ella.

**Por qué pertenecen:** son lo único ajeno a la página en la que están. Todo lo
demás de esa escena pertenece a ese mundo; ellos no. Por eso no se camuflan por
pertenecer sino por ubicación.

**Qué hacen:** se esconden. Van idénticos en las ocho escenas —misma ropa,
mismos colores, misma escala relativa—; lo único que cambia es la pose y el
ángulo. Nunca se generan con IA: se componen.

**Tres rasgos:** Luca de camisa blanca de manga corta, pantalón cargo gris
oscuro y pelo castaño corto y rizado. Donna de campera negra con capucha sobre
musculosa negra, jean negro ancho y pelo castaño oscuro largo y lacio. El
blanco de la camisa de Luca es lo más luminoso de las dos figuras: es la perilla
de dificultad del libro.

## El bloque madre

Capas 2 a 5. Se pegan sin cambiar una palabra en toda generación del proyecto.

```
pixel art, 8-bit sprite aesthetic, hard aliased edges, no anti-aliasing,
flat sprite lighting, two-tone shading with no gradients,
limited palette of 48 colors, high color contrast between figure and ground,
dense crowded composition, many small figures and objects at different depths,
old CRT screen feel, low resolution, subtle glitch artifacts,
high detail, no text, no watermark, no signature
```

**Negative prompt:** `smooth gradients, anti-aliasing, blur, depth of field,
photorealistic, 3D render, empty background, single subject, text, letters,
elements from other worlds, crossover`

## Valores concretos del sistema

| | Valor |
| --- | --- |
| Paleta | 48 colores congelados en `referencias/paleta.txt` |
| Altura de una persona | 72 px lógicos |
| Altura de Bitsy | 45 px lógicos |
| Escena | ~830 × 585 px lógicos |
| Escala de imprenta | ×6, vecino más cercano |
| Modelo | Gemini 3 Pro Image (Nano Banana Pro), 4K para escenas |

## Qué falta

- La **imagen madre**: el bloque de estilo está escrito pero no probado sobre
  una escena real.
- Los **cuatro mundos** restantes.
- El **model sheet** de Luca y Donna en varias poses.
- Definir qué es el **virus** y qué forma gráfica tiene **la señal**.
