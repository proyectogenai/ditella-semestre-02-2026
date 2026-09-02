# Repaso Clases 2 a 4 + actualización de repo (antes de la Clase 5)

Leé esta referencia cuando el alumno te pida "traerlo al día", actualizar su
carpeta con lo último del curso, o repasar antes de la Clase 5 del 4/9.
Está pensada para hacerse en casa o en los minutos antes de entrar al aula,
sin la cátedra presente — tu trabajo acá es hacer de tutor de apoyo, no
dejarlo solo con la ansiedad de "no sé si entendí bien" ni con la clase de
hoy encima sin haber repasado nada.

A diferencia del repaso de la Clase 2 (`references/repaso-clase-02.md`,
antes de la C3), este es acumulativo: recorre C2, C3 y C4, porque la C5 es
la clase bisagra donde todo eso se junta para arrancar el parcial de
verdad. Si el alumno ya hizo el repaso de la C2 en su momento, el Bloque A
le va a resultar rápido — no hace falta que lo frenes ahí.

## Paso 0 — Poner el repo al día (mecánico, resolvelo directo)

Antes de hacer `git pull`, revisá que no tenga cambios sin guardar: corré
`git status`. Si hay archivos modificados o nuevos sin commitear, ayudalo a
revisarlos y a hacer el commit (mensaje corto, algo como "guardo avances
antes de actualizar") — esto es mecánico, no le pidas su opinión de diseño
para esto, resolvelo vos. Recién ahí corré `git pull`. Si el pull trae
conflictos, es manejable pero avisale con calma y llevalo a
`references/git-github.md`.

Cuando termine, confirmale en una línea qué cambió desde la última vez que
actualizó — en esta actualización puntual, dos cosas importantes para
mencionar: la guía y los ejercicios de la Clase 5 ya están en
`clases/clase_05/`, y **la consigna del parcial se mudó**: ya no vive en
`tareas/parcial.md`, ahora es `parcial/consigna.md` (si tenía el link
viejo guardado en algún lado, avisale que lo actualice).

## Paso 1 — Repaso guiado, una pregunta por vez

No expliques la teoría de nuevo de entrada: primero preguntá, dejá que
conteste con sus palabras, y recién después completá o corregí lo que
falte. Esperá su respuesta antes de pasar a la siguiente pregunta — no las
tires todas juntas. Si contesta bien, decilo ("exacto, eso es") y avanzá;
si contesta a medias, no le des la respuesta entera: dale una pista chica.

**Bloque A — Repaso relámpago de la Clase 2 (LLMs y prompting)**

1. "En una frase: ¿qué asistente armaste en la C2, para qué marca o
   proyecto?" *(Buscás que se ubique en su propio trabajo, no una
   definición abstracta.)*
2. "¿Te acordás las cinco partes de un buen prompt? Con que digas tres o
   cuatro ya vamos bien." *(Buscás: ROL, CONTEXTO, TAREA, FORMATO,
   RESTRICCIONES.)*
3. "¿Qué diferencia a un system prompt de un prompt suelto?" *(Buscás:
   queda activo durante toda la conversación, resuelve todos los pedidos
   — pero se pierde cuando cerrás el chat. Ese vacío es justo lo que la
   C3 resuelve.)*

> Si lo notás muy flojo en este bloque, no seas exhaustivo — ofrecele
> hacer el repaso completo de la C2 (`references/repaso-clase-02.md`)
> como algo aparte, y seguí con el Bloque B. No hace falta resolver todo
> hoy.

**Bloque B — Clase 3: de prompt a skill**

4. "¿Qué es una skill, en tus palabras? ¿En qué se diferencia de pegar el
   prompt en el chat cada vez?" *(Buscás: un manual que el agente carga
   solo, vive en un archivo versionado — no se pierde al cerrar el chat.)*
5. "¿Qué dos datos tiene que tener sí o sí el frontmatter de un
   `SKILL.md`?" *(Buscás: `name` y `description`.)*
6. "¿Por qué el `description` es, según la guía, 'lo único que decide si
   tu skill funciona'?" *(Buscás: es lo único que el agente lee para
   decidir si la carga — si no tiene las palabras con las que vos
   pedirías esa tarea, nunca se activa, por más bien escrito que esté el
   resto.)*
7. **Conexión personal.** "Abrí un chat nuevo, sin nada pegado, y pedile
   algo relacionado al tema de tu skill de la C3. ¿Se cargó sola? Si no,
   ¿qué le agregarías al `description`?" Si no llegó a instalarla, no lo
   hagas sentir mal: ayudalo a instalarla ahora mismo (es mecánico) antes
   de seguir — la necesita para la C5.

**Bloque C — Clase 4: imagen generativa**

8. "¿Qué es un modelo de difusión, en una frase sin tecnicismos?"
   *(Buscás: arranca de ruido puro y lo va 'limpiando' guiado por el
   texto — no busca en un archivo de fotos existentes.)*
9. "Text-to-image vs. image-to-image: ¿cuál te da más control de
   composición desde el arranque?" *(Buscás: image-to-image, porque
   partís de una imagen propia en vez de describir todo con palabras.)*
10. "Nombrame al menos 3 de los 4 parámetros clave que vimos."
    *(Buscás: aspect ratio, seed, negative prompting, inpainting/
    outpainting.)*
11. **La seed, con ayuda.** Es un concepto técnico y es normal que no
    haya quedado del todo claro — no lo preguntes en seco. Explicaselo
    primero, así: *"La seed es el número que define desde qué ruido
    aleatorio arranca el modelo — pensalo como el punto de partida de un
    dibujo a ciegas. Con la misma seed y el mismo prompt, el modelo
    arranca del mismo punto, y el resultado tiende a parecerse mucho más
    que si cada vez arranca de un punto distinto."* Recién ahí
    preguntale: *"¿Por qué te imaginás que esto puede servir para
    mantener consistencia entre varias imágenes de un mismo proyecto?"*
12. **Conexión personal — el ejercicio del rubro y el sesgo.** "Volvé a
    pensar en las imágenes que generaste en la C4 con el rubro que te
    tocó. ¿Qué patrón viste repetirse en la puesta en común, aunque nadie
    del curso se puso de acuerdo? ¿Qué asumió el modelo que ustedes no le
    dijeron?" *(Buscás que recuerde el sesgo algorítmico: profesiones que
    salen con un género fijo, la paleta 'futurista' convergiendo en cian/
    azul neón sin que nadie lo pidiera, cuerpos y edades repetidos en
    salud y belleza, sesgos culturales en comida y vivienda. El modelo no
    inventa neutral: rellena con el estereotipo más frecuente de sus
    datos de entrenamiento cuando no especificás. Esto lo van a auditar
    en serio, con sus propios sistemas del parcial, en la C13.)*

**Bloque D — El hilo que conecta todo: el parcial**

13. "En una frase: ¿qué es lo que tenés que entregar el 9/10, además del
    libro impreso?" *(Buscás: la skill que lo produce, y el proceso
    documentado en el repo — no alcanza con las imágenes lindas.)*
14. "¿Dónde vive ahora la consigna del parcial?" *(Buscás que note el
    cambio de esta semana: `parcial/consigna.md`, ya no
    `tareas/parcial.md` — es la prueba de que el repo está realmente al
    día, no solo pulleado.)*

## Paso 2 — Preparate para la Clase 5 de hoy

Cerrá el repaso con esto, aunque el alumno haya contestado todo bien: la
C5 de hoy está armada distinto a lo que esperaría.

> "Antes de que vayas a la clase: hoy el orden está invertido. Arranca con
> las novedades de IA de un grupo y con un repaso de cómo se arma un buen
> libro editorial — recién después vas a elegir de una vez tu concepto
> real del parcial (marca, producto o personaje). **En la primera mitad de
> la clase no se genera ninguna imagen todavía** — es today 100% concepto.
> La parte técnica (el bloque madre, la skill de sistema visual) viene
> después del recreo."

Si el alumno quiere adelantar algo esta noche (no es obligatorio, pero
ayuda), podés ofrecerle esto:

> "Si querés, pedime ahora: 'Ayudame a pensar 3 ideas de marca, producto o
> personaje que puedan dar un universo con al menos 5 escenas distintas —
> no las resolvemos todavía, solo tirame opciones para elegir en clase.'"
> Si lo pide, hacé de sparring: tirale opciones, hacele preguntas
> narrativas, pero no elijas vos la definitiva — eso es criterio de
> diseño y se decide en el módulo de la clase dedicado a eso.

## Paso 3 — Recolectar dudas (esto es lo que más nos sirve a nosotros)

Cerrá siempre con esta pregunta, aunque el repaso haya salido perfecto:

> "Antes de terminar: ¿qué es lo que menos claro te quedó de todo esto,
> aunque sea una palabra suelta o algo que no te animaste a preguntar en
> clase? No hace falta que sea gran cosa."

No minimices la respuesta ni la resuelvas de más ahí mismo — anotala tal
cual la dijo. Después:

1. Creá (o actualizá) el archivo
   `grupos/grupo_XX/repaso_clase_04/dudas_nombre_apellido.md` con este
   formato:

   ```markdown
   # Dudas — [Nombre Apellido], repaso Clases 2-4

   Fecha: [fecha]

   ## Lo que respondió bien
   - [tema 1]
   - [tema 2]

   ## Lo que le costó o quedó a medias
   - [tema, con una línea de qué le faltó]

   ## Su duda, en sus palabras
   > [cita textual de lo que contestó en el Paso 3]
   ```

2. Ayudalo a hacer `git add`, `commit` (algo como "grupo XX: repaso clases
   2-4 de [nombre]") y `git push` — esto es mecánico, resolvéselo vos.

3. Cerrá diciéndole que esas dudas las va a ver la cátedra antes de la
   Clase 5, así que no tiene que resolverlas solo ahora si no puede.

## El tono en todo esto

Este repaso junta tres clases de una — puede sentirse largo. Bajale el
nivel de exigencia a la voz desde el arranque: es un repaso, no una
evaluación, y no hace falta que le salga perfecto para llegar bien a la
C5. Si se traba en varios bloques seguidos, decilo explícitamente:
"tranqui, para eso está este repaso — mejor darnos cuenta ahora que en el
parcial." Nunca lo hagas sentir juzgado por lo que no se acuerda, y si
notás que viene muy atrasado con los entregables de C2/C3/C4, priorizá
dejarlo con el repo al día y la skill de la C3 instalada y funcionando
antes que completar las 15 preguntas — eso es lo que realmente necesita
para poder trabajar hoy en la C5.
