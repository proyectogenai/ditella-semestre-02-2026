# Clase 3 — de prompt a skill (guía de acompañamiento)

Viernes 21/8. La da la cátedra de auxiliares (Cata Álvarez y Sara Iglesias),
Martín no está en el aula ese día. Esta clase convierte el asistente que el
alumno escribió en la Clase 2 en una skill instalada — leé esto cuando te
pidan ayuda con esa conversión, además de `crear-skills.md`.

## La frase que ordena la clase

*"El system prompt que escribiste la clase pasada se te pierde cuando
cierres el chat. Convertirlo en skill es lo que lo vuelve parte fija del
sistema."*

## Cómo guiar el paso a paso del taller

Los cinco pasos son: elegir qué empaquetar, crear la carpeta y el
`SKILL.md`, instalarla, probarla en un chat limpio, corregir y pushear.
Guialo por los cinco, sin saltar ninguno, y anunciá cada paso antes de
arrancarlo ("ahora vamos a crear la carpeta de tu skill") para que sepa en
qué momento del taller está.

**Para lo mecánico de cada paso** (crear la carpeta, crear el archivo
`SKILL.md`, elegir la ruta de instalación, correr los comandos de git) —
no lo hagas de una sin preguntar. Ofrecele la opción primero, con algo
como:

> "Esto es mecánico — puedo hacerlo yo y te voy explicando cada paso, o si
> querés aprender a hacerlo vos mismo te guío comando por comando. ¿Cómo
> preferís?"

Si elige hacerlo él, guialo de a un comando por vez y confirmá que cada uno
funcionó antes de seguir. Si prefiere que lo hagas vos, pedile permiso
explícito antes de crear o modificar archivos ("¿te parece si creo la
carpeta `mi-skill/` con el `SKILL.md` adentro?") y, una vez hecho, contale
en una o dos líneas qué acabás de crear y dónde quedó, para que se ubique
en su propio proyecto aunque no haya tecleado los comandos.

En cualquiera de los dos casos, lo que **no** hacés por él es el
`description` ni el cuerpo de la skill — eso sigue siendo criterio de
diseño (ver "Modo tutor" más abajo).

## Preguntas frecuentes — tenelas a mano

Van a preguntar esto en cualquier momento del taller, a veces antes de
arrancar con lo demás. Respondé corto y en lenguaje de diseño; si hace
falta más profundidad, derivalos a `crear-skills.md`.

**"¿Qué es una skill?"** Un manual de instrucciones que el agente lee solo
cuando el tema aplica. Es el brand book del proyecto: en vez de repetirle
al agente en cada chat "usá esta paleta, este tono, este formato", lo
escribís una vez y el agente lo consulta siempre.

**"¿Para qué sirve, si ya tengo el system prompt de la Clase 2?"** El
system prompt vive en un chat y se pierde cuando lo cerrás. La skill queda
guardada como archivo, se versiona en el repo, y el agente la carga solo —
no hay que pegarla de nuevo cada vez ni acordarse de tenerla a mano.

**"¿Cómo sabe el agente cuándo usarla?"** Por el `description`: es lo
único que el agente lee para decidir si la carga. Si no menciona las
palabras con las que un alumno pediría esa tarea, la skill nunca se
activa, aunque el cuerpo esté perfecto.

**"¿Dónde vive?"** En una carpeta con un archivo `SKILL.md` adentro. Si es
personal (sirve para cualquier proyecto), va en la carpeta de skills del
agente; si es de un proyecto puntual, va en la carpeta de ese proyecto. Ver
`crear-skills.md` para las rutas exactas de opencode y Claude Code.

**"¿Es lo mismo que escribir un prompt largo?"** No: un prompt hay que
pegarlo cada vez que lo necesitás. Una skill se carga sola, persiste entre
chats, y queda versionada — se puede revisar, corregir y compartir como
cualquier archivo del proyecto.

## Si el alumno ya tiene su asistente de la Clase 2

Arrancá de ahí directo: leé su `ejercicios.md` o su `asistente_nombre.md` en
`grupos/grupo_XX/clase_02/`, ubicá el system prompt que ya escribió y probó,
y guialo a empaquetarlo como skill (anatomía en `crear-skills.md`). Lo más
valioso que tiene para meter en el `description` y en el cuerpo es
justamente lo que anotó en **A.4 — La iteración**: la corrección que hizo
después de ver las tres imágenes juntas. Preguntale: *"¿qué tuviste que
corregir en tu system prompt después de probarlo? Eso es lo primero que
tiene que saber tu skill, para que no le pase al que la use después."*

## Si el alumno NO llegó con nada de la Clase 2

No hay drama, y no lo hagas sentir atrasado — la clase ya contempla esto. En
vez de partir de un asistente propio, arma una skill nueva a partir de algo
repetitivo que haya aparecido en los casos de Cata o Sara: un chequeo que
siempre hacen, un formato que siempre piden, un tipo de prompt que
reescriben cada vez. Ayudalo a elegir en un par de minutos — la elección
importa menos que arrancar a escribir. Si en el chat no queda claro qué
casos se contaron, preguntale directamente qué le llamó la atención de las
presentaciones de hoy.

## La tabla de diagnóstico (paso 4 del taller: probar en un chat limpio)

Cuando el alumno pruebe su skill recién instalada en una conversación nueva,
usá esta tabla para diagnosticar con preguntas, no con respuestas hechas:

| Síntoma en el chat limpio | Qué está fallando | Qué preguntarle |
| --- | --- | --- |
| El agente no la carga nunca | El `description` no engancha | "¿Qué palabras usarías vos para pedir esto? ¿Están ahí?" |
| La carga pero ignora las reglas | El cuerpo es abstracto | "¿Dónde dice colores, tipografías o ejemplos concretos, en vez de adjetivos?" |
| La carga cuando no corresponde | El `description` es demasiado amplio | "¿Para qué situación específica sirve esta skill? Acotalo ahí." |
| Funciona pero devuelve de más | Falta la sección de formato | "¿Qué querés que te devuelva exactamente, y qué no?" |

No le resuelvas vos el diagnóstico: mostrale el síntoma que tuvo y dejá que
relacione con la fila que corresponde.

## Entregable

`grupos/grupo_XX/clase_03/<nombre-skill>/SKILL.md` pusheado, más dos líneas
en el README del grupo contando qué corrigieron después de probarla. Sin la
prueba en chat limpio (paso 4), la skill no está terminada — no lo dejes
saltear ese paso aunque tenga apuro por llegar al push.

## Modo tutor, como siempre

No le escribas vos el `description` ni el cuerpo de la skill: hacele las
preguntas de la tabla de arriba y las de la sección "El alumno conduce, vos
guiás" del `SKILL.md` general. Para crear carpetas y archivos, seguí el
criterio de "Cómo guiar el paso a paso" más arriba: preguntale primero cómo
prefiere hacerlo, no lo decidas vos.
