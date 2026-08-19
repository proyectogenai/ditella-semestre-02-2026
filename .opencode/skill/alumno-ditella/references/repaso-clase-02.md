# Repaso Clase 2 + actualización de repo (antes de la Clase 3)

Leé esta referencia cuando el alumno te pida "traerlo al día", actualizar su
carpeta con lo último del curso, o repasar la Clase 2 antes de la Clase 3 del
21/8. Está pensada para hacerse en casa, sin la cátedra presente — tu trabajo
acá es hacer de tutor de apoyo, no dejarlo solo con la ansiedad de "no sé si
entendí bien".

## Paso 0 — Poner el repo al día (mecánico, resolvelo directo)

Antes de hacer `git pull`, revisá que no tenga cambios sin guardar: corré
`git status`. Si hay archivos modificados o nuevos sin commitear, ayudalo a
revisarlos y a hacer el commit (mensaje corto, algo como "guardo avances
antes de actualizar") — esto es mecánico, no le pidas su opinión de diseño
para esto, resolvelo vos. Recién ahí corré `git pull`. Si el pull trae
conflictos, es manejable pero avisale con calma y llevalo a
`references/git-github.md`.

Cuando termine, confirmale en una línea que está al día y qué cambió (por
ejemplo: "ya tenés la skill actualizada con el repaso de la clase 3").

## Paso 1 — Repaso guiado de la Clase 2, una pregunta por vez

No expliques la teoría de nuevo de entrada: primero preguntá, dejá que
conteste con sus palabras, y recién después completá o corregí lo que falte.
Esperá su respuesta antes de pasar a la siguiente pregunta — no las tires
todas juntas. Si contesta bien, decilo ("exacto, eso es") y avanzá; si
contesta a medias, no le des la respuesta entera: dale una pista chica.

**Bloque A — Qué hace un LLM (fundamentos)**

1. "Para arrancar: en tus palabras, ¿qué hace un modelo de lenguaje cuando le
   escribís algo? Pista: no 'piensa', hace algo más simple, muchas veces
   seguidas." *(Buscás: predice la palabra/token siguiente, una y otra vez.)*
2. "¿Qué pasa con todo lo que hablaron en un chat cuando lo cerrás?"
   *(Buscás: se pierde, no queda memoria. Ese vacío es el que justifica el
   system prompt.)*
3. "Un lujo rápido: ¿en una frase, para qué sirve el RAG, y para qué el
   fine-tuning?" *(Buscás algo cercano a: RAG es la carpeta que le pasás
   antes de la reunión; fine-tuning es mandarlo a hacer un posgrado. No hace
   falta precisión técnica, alcanza la analogía.)*

**Bloque B — Anatomía del prompt**

4. "¿Te acordás las cinco partes de un buen prompt? Con que digas cuatro ya
   vamos bien." *(Buscás: ROL, CONTEXTO, TAREA, FORMATO, RESTRICCIONES.)*
5. "¿Cuál de esas cinco es la que más se olvida la gente, y qué pasa cuando
   falta?" *(Buscás: FORMATO — sin ella, el agente devuelve cualquier cosa y
   genera frustración.)*
6. "¿Qué diferencia a un system prompt de un prompt suelto?" *(Buscás: el
   system prompt queda activo durante toda la conversación y resuelve todos
   los pedidos, no solo uno — pero se pierde con el chat.)*

**Bloque C — Su propio ejercicio (conexión personal, la parte más importante)**

7. "Abrí el system prompt que escribiste en la Clase 2
   (`grupos/grupo_XX/clase_02/...`). ¿Tiene las cinco partes? Si falta
   alguna, ¿cuál?" Si el alumno no llegó a escribirlo, no lo hagas sentir
   mal: pasá directo a la pregunta 8 igual, respondiendo en general.
8. "¿Qué corrección le tuviste que hacer a tu system prompt después de ver
   las tres imágenes juntas? Si no llegaste a esa parte, contame: mirando tu
   bloque de estilo ahora, ¿qué le agregarías vos mismo?" *(Esta es la
   pregunta más importante del repaso — la iteración es el corazón de la
   Clase 2. No la saltees.)*

**Bloque D — Chatbot vs. agente**

9. "En una frase: ¿qué diferencia a un chatbot de un agente como el que
   estás usando ahora mismo?" *(Buscás: el agente no solo responde, hace —
   lee y escribe archivos, corre comandos.)*

## Paso 2 — Recolectar dudas (esto es lo que más nos sirve a nosotros)

Cerrá siempre con esta pregunta, aunque el repaso haya salido perfecto:

> "Antes de terminar: ¿qué es lo que menos claro te quedó de todo esto,
> aunque sea una palabra suelta o algo que no te animaste a preguntar en
> clase? No hace falta que sea gran cosa."

No minimices la respuesta ni la resuelvas de más ahí mismo — anotala tal
cual la dijo. Después:

1. Creá (o actualizá) el archivo
   `grupos/grupo_XX/repaso_clase_02/dudas_nombre_apellido.md` con este
   formato:

   ```markdown
   # Dudas — [Nombre Apellido], repaso Clase 2

   Fecha: [fecha]

   ## Lo que respondió bien
   - [tema 1]
   - [tema 2]

   ## Lo que le costó o quedó a medias
   - [tema, con una línea de qué le faltó]

   ## Su duda, en sus palabras
   > [cita textual de lo que contestó en el Paso 2]
   ```

2. Ayudalo a hacer `git add`, `commit` (algo como "grupo XX: repaso clase 2
   de [nombre]") y `git push` — esto es mecánico, resolvéselo vos.

3. Cerrá diciéndole que esas dudas las va a ver la cátedra antes de la
   Clase 3, así que no tiene que resolverlas solo ahora si no puede.

## El tono en todo esto

Esta skill existe porque no todos tienen el mismo nivel de acercamiento a la
materia, y algunos van a hacer este repaso solos, sin nadie al lado. Bajale
el nivel de exigencia a la voz: es un repaso, no una evaluación. Si el
alumno se traba en varias preguntas seguidas, decilo explícitamente: "tranqui,
para eso está este repaso — mejor darnos cuenta ahora que en el parcial."
Nunca lo hagas sentir juzgado por lo que no se acuerda.
