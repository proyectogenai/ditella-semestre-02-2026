# Concepto — Los pequeños mundos de Peter Rabbit

Grupo 5 · Mercedes Fernandez Lahore, Pilar Gallino

---

## D.1 — Concepto y universo

**¿Qué elegimos?** ~~Marca~~ / ~~Producto~~ / **Personaje**

**Concepto en 1 oración:**
Peter Rabbit sale de su jardín y descubre que la naturaleza esconde
docenas de pequeños mundos habitados —aldeas, mercados, pueblos— uno
dentro del otro, y el libro consiste en encontrarlo mientras los recorre.

**Las 9 escenas** (las primeras 8 son el atlas "busca a Peter"; la 9na es
el cierre, sin el mecanismo de búsqueda — ver nota más abajo). Texto
completo de cada página, con la pregunta de búsqueda, en
[`textos_libro.md`](textos_libro.md):

1. **El jardín secreto** — Peter sigue a una mariposa dorada y atraviesa
   una puerta escondida entre las raíces del jardín. Conoce a una eriza
   jardinera.
2. **La aldea subterránea** — Un pueblo entero bajo tierra, entre túneles
   y despensas. Conoce a Pip, un ratón que conoce los túneles como nadie.
3. **El mercado de las flores** — Puestos de fruta, semillas y miel bajo
   flores gigantes. Conoce a Miel, una abeja, que vio a la mariposa volar
   hacia el roble.
4. **La ciudad del árbol** — Una ciudad entera construida sobre las ramas
   de un roble. Conoce a Nuez, una ardilla aventurera.
5. **El pueblo flotante** — Ranas y patos viven sobre nenúfares en un
   estanque. Conoce a Lila, una rana, que le presta un bote.
6. **La villa de los hongos** — Se larga a llover y Peter se refugia en un
   pueblo donde los hongos son casas y paraguas. Conoce a Tilo, un ratón.
7. **El bosque nocturno** — Anochece y un camino de luciérnagas guía a
   Peter entre búhos y polillas. Conoce a Luz, una luciérnaga.
8. **La aldea nevada** — Una aldea entre montañas, con trineos y muñecos
   de nieve. Conoce a Copo, un ciervo, que le presta una bufanda.
9. **El gran picnic** *(cierre, Peter no está escondido)* — Todos los
   amigos que conoció en el camino —Pip, Miel, Nuez, Lila, Tilo, Luz,
   Copo y la eriza— se reúnen en un claro. Peter entiende que todos esos
   mundos eran, en realidad, uno solo — y que aunque se perdió en el
   camino, ahora tiene amigos que pueden ayudarlo a volver a casa.

---

## D.2 — El elemento oculto

**¿Quién es?**
Peter Rabbit: un conejo curioso, algo torpe, que se mete en cada mundo sin
pedir permiso.

**¿Por qué pertenece a este universo y no a otro?**
Él ES quien conecta las 8 escenas: cada mundo es una parada de su
recorrido, y el hilo narrativo completo (el jardín → la vuelta al mismo
bosque en el picnic final) es, literalmente, su viaje.

**¿Qué hace en cada escena — observa, se esconde, interviene?**
Varía según la escena, nunca de la misma manera: a veces observa desde un
costado, a veces se mete de lleno en la actividad del lugar (regatea en el
mercado, rema mal en el estanque, se refugia de la lluvia en la villa de
hongos). Nunca está aislado del resto — siempre en medio de la actividad
de esa escena, no al margen.

**Excepción — escena 9 (El gran picnic):** ahí Peter no está escondido.
Es la escena de cierre, generada con IA como las demás pero sin el
mecanismo de búsqueda: aparece a la vista, como anfitrión de la reunión
que conecta a los ocho mundos anteriores. Es la única de las 9 donde no
aplica la regla de dificultad media del punto siguiente.

**¿Qué tiene tu universo que "vaya a juego" con este personaje?**
El resto de los animales del universo están dibujados de forma más
naturalista —más parecidos a animales reales—, mientras que Peter está
levemente más humanizado en postura y actitud que sus vecinos. Esa
diferencia de grado (no de especie) es la que, sumada al color, permite
distinguirlo del resto sin que deje de sentirse parte del mismo mundo.

**3 rasgos distintivos:**

1. **Color:** camperita azul + pañuelo rojo — es su combinación fija, la
   única que ningún otro personaje de las escenas repite.
2. **Escala:** nunca es el más chico ni el más grande del cuadro — tamaño
   intermedio y constante entre escena y escena, para que el ojo lo
   reconozca por diseño y no por tamaño relativo.
3. **Grado de humanización:** postura y actitud más "humanas" que las del
   resto de los animales de cada escena, que se acercan más a un animal
   real.

**Referencia visual:** imagen de referencia de Peter Rabbit usada como
input del prompt para fijar su apariencia en las 8 escenas.
*(agregar el archivo en `parcial/identidad-peter/referencia_peter.jpg`)*

---

## D.3 — Bloque madre

| Campo | Respuesta |
| --- | --- |
| **Concepto del universo** | Mundo pastoral inglés en miniatura, animales antropomorfos naturalistas, escondido dentro de elementos reales de la naturaleza (raíces, flores, árboles, estanques) |
| **Técnica de ilustración** | Ilustración de libro infantil inglés de fines del s. XIX / principios del XX: línea de tinta fina y ligeramente irregular + acuarela transparente sobre papel color marfil, tinta visible debajo del color, manchas de acuarela desparejas |
| **Paleta** | Verde salvia, verde musgo, oliva, azul apagado, turquesa desaturado, crema cálido, ocre, siena tostado, beige tierra, rosa polvoriento, rojo ladrillo contenido |
| **Referencia artística** | Ilustración tradicional de cuento infantil inglés + lógica compositiva de "¿Dónde está Wally?" para la densidad y el punto de vista |
| **Parámetros de calidad** | Vista elevada a 3/4, panorámica horizontal, decenas de personajes con micro-acciones simultáneas distintas, sin foco central único, sin elementos modernos |

**PROMPT MADRE** (texto exacto, igual para las 8 escenas — el detalle
completo está en `SKILL.md`, sección "Bloque de estilo"): se arma
concatenando la plantilla de escena (lugar + elementos + acciones
puntuales) con los tres bloques fijos de composición, mundo y estilo.

---

## D.4 — Lo que presentamos al curso

**Feedback que recibimos de la cátedra:**
Que el mundo y la estética funcionaban bien y rendían para generar mundos
densos. Nos sugirieron una edición de tapa dura para el libro, dado el
universo elegido. Y, como es un libro pensado para chicos, nos plantearon
no hacer extremadamente difícil encontrar a Peter en cada escena.

**Qué ajustamos del concepto después del feedback:**
La skill ya quedó escrita con dificultad de búsqueda **media** (silueta
completa visible, tamaño consistente, nunca imposible de encontrar) —
coincide con lo que pidió la cátedra, así que no hubo que cambiar la
regla, solo confirmarla. Pendiente: definir tapa dura con la imprenta.

---

## D.5 — Arrancar la skill

**¿Le pediste al agente que arme el `SKILL.md`?** Sí.

**¿Qué campos quedaron completos hoy?**

- [x] Universo
- [x] Bloque de estilo
- [x] Modelo y parámetros *(falta confirmar el aspect ratio real)*
- [x] Regla de variación
- [x] Cómo se inserta el elemento oculto
- [x] Restricciones

**Lo que falta, ¿para cuándo lo completás?**
Confirmar aspect ratio exacto usado en ChatGPT — esta semana, antes de
mandar a imprenta.
