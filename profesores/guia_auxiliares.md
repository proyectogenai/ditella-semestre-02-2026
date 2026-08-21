# Clase 3 · Guía para las auxiliares

Viernes 21/8 — hoy la clase la llevan adelante Cata y Sara solas, sin la
cátedra presente. Esta guía es para que puedan resolver casi todo lo que
surja sin necesitar consultar en el momento, y para que lo que sí quede
pendiente llegue después en forma ordenada.

## Cómo está el curso llegando a hoy

Antes de la Tarea 02, los alumnos hicieron un repaso guiado de la Clase 2
con su agente y, al final, dejaron una duda propia en
`grupos/grupo_XX/repaso_clase_02/dudas_nombre.md`. Ya llegaron dudas de los
grupos 02, 04, 05, 06 y 08 — ocho alumnos en total, incluyendo el pedido
puntual de Pilar Gallino — y cada uno tiene su respuesta personalizada en
`respuestas/grupo_XX/repaso_clase_02/nombre_apellido.md` (mismo grupo y
misma clase que su duda, pero bajo `respuestas/` en la raíz del repo en
vez de `grupos/`). Si un alumno de esos grupos vuelve a traer la misma
pregunta, ahí está la respuesta ya pensada para esa persona puntual:
úsenla como base, no hace falta reinventarla en el momento.

Los grupos 01, 03, 07, 09, 10 y 11 todavía no dejaron nada registrado. Puede
ser que lleguen hoy sin haber hecho ese repaso en casa — más abajo hay una
salida rápida para ese caso.

## El criterio general: qué resuelven ustedes, qué no

La regla de fondo es la misma que ya rige toda la materia: lo mecánico se
resuelve sin fricción, lo que es criterio de diseño se guía con preguntas,
no se entrega hecho. Aplicado a hoy, en la práctica queda así:

Si la consulta es sobre terminal, git, instalación o "esto tira un error
raro", resuélvanlo directo — ahí no hay nada que enseñar, es puro
desbloqueo. Si la consulta ya tiene respuesta en `respuestas/grupo_XX/`,
apóyense en esa respuesta tal cual está escrita, dirigida a esa persona. Y
si aparece algo conceptual que no está ahí — una duda nueva, distinta a
las ocho que ya tenemos — resuélvanla con su propio criterio y el tono que
ya conocen de la skill (preguntar antes de responder, no tirar la
respuesta entera de una), pero después anótenla en un archivo nuevo con el
mismo formato que los demás, para que quede para revisión. No hace falta
escribirme ni esperar nada en el momento — la idea es que el viernes fluya
solo.

Las únicas dos cosas que si o si tienen que derivarme a mí, aunque sea
después de la clase, son: cualquier cosa que toque fechas de evaluación o
cambios de consigna, y cualquier cosa que toque una nota. Eso no lo
resuelven ni lo prometen en el momento.

## Si preguntan "¿pero qué es una skill?", en una línea

Aunque el módulo de hoy ya lo explica, puede pasar que alguien se los
pregunte directo a ustedes en medio del taller, sin haber terminado de
procesarlo en la presentación. La respuesta corta, con la misma analogía
que ya vieron en clase: una skill es el *brand book* del proyecto — en vez
de repetirle a alguien en cada reunión "usá esta paleta, este tono, este
formato", se lo escribís una vez y esa persona lo consulta sola cada vez
que hace falta. La diferencia con el system prompt que ya armaron en la
Clase 2 es nada más que dónde vive y cómo se activa: el system prompt lo
pegás vos, cada vez, adentro de un chat puntual, y se pierde cuando lo
cerrás; la skill queda guardada en un archivo, versionada en el repo, y el
agente la carga solo con leer el `description` — no hay que pegarla nunca
más. El contenido de adentro (rol, universo, bloque de estilo,
restricciones) es literalmente el mismo que ya escribieron en la Clase 2;
lo único que se agrega es ese enganche de arriba.

## La ejercitación de hoy

El taller de hoy convierte el asistente de la Clase 2 en una skill —lo
tienen armado en `clases/clase_03/ejercicios.md`. Vale la pena que tengan
clara la lógica de fondo antes de circular entre los grupos, porque no
todos los pasos se acompañan de la misma manera.

> **Pedile esto, tal cual, a cada alumno para arrancar** — ningún comando,
> todo se lo pide al agente:
>
> 1. Que el agente actualice el repo y le copie el archivo a su carpeta
>    de grupo:
>    > "Actualizá el repo (`git pull`, guardando antes cualquier cambio
>    > pendiente) y después copiame `clases/clase_03/ejercicios.md` a mi
>    > carpeta de grupo, `grupos/grupo_XX/clase_03/`."
> 2. Pegarle esta otra frase al agente, en el mismo chat, antes de tocar
>    nada del `description` o el cuerpo de la skill:
>    > "Trabajemos en modo tutor: guiame de a un paso por vez, hacéme las
>    > preguntas que necesites y esperá mi respuesta antes de seguir. No
>    > escribas por mí el description ni el cuerpo de la skill."
>
> Sin el paso 2, el agente les tira la skill hecha y se pierde el
> ejercicio — insistan en que lo peguen antes de arrancar C.1.

Los dos primeros pasos (elegir qué asistente empaquetar, y escribir el
`description`) son pura decisión de diseño del alumno. El `description` en
particular es el punto que más se rompe de toda la clase: es el único
texto que decide si la skill se activa sola o no, así que si alguien se los
trae para que se lo escriban, no lo hagan — más bien reléanlo con ellos en
voz alta y pregúntenles si ahí dice qué hace la skill, cuándo hay que
usarla, y si está en las palabras con las que ellos mismos la pedirían (no
jerga técnica ni algo genérico tipo "ayuda con diseño"). Si falla algo,
basta con señalar cuál de esas tres cosas falta — la corrección la escriben
ellos.

Crear la carpeta e instalar la skill sí es puramente mecánico: ahí
resuelvan ustedes sin ninguna vuelta, como con git.

El paso que no se puede saltear bajo ningún motivo es la prueba en un chat
limpio (abrir una conversación nueva y pedirle algo del tema sin nombrar la
skill). Es tentador que el alumno dé por hecho que "va a andar" y quiera
saltarlo — no lo permitan, es literalmente el ejercicio. Cuando prueben,
va a pasar una de cuatro cosas: que el agente nunca cargue la skill, que la
cargue pero ignore las reglas, que la cargue cuando no corresponde, o que
funcione pero devuelva de más. Ayúdenlos a identificar cuál de esas cuatro
les pasó a ellos —esa lectura del síntoma es donde más sirve que estén
presentes— y una vez identificado, señalen en qué parte del `SKILL.md`
conviene mirar (el `description` si no carga o carga de más, el cuerpo si
carga pero ignora las reglas, la sección de formato si devuelve de más),
pero dejen que sea el alumno quien decida qué palabras cambiar.

El entregable final es de nuevo mecánico: resuélvanlo directo para que no
se les vaya el tiempo de taller en eso.

> **Pedile esto, tal cual, a cada alumno antes de dejarlo ir:**
>
> 1. La carpeta de su skill en `grupos/grupo_XX/clase_03/<nombre-de-tu-skill>/SKILL.md`
> 2. Dos líneas en el README de su grupo contando qué corrigieron después
>    de probarla en un chat limpio (paso C.5 del `ejercicios.md`)
> 3. El push hecho — no alcanza con el commit local:
>    ```
>    git pull
>    git add grupos/grupo_XX/
>    git commit -m "grupo XX: clase 03"
>    git push
>    ```
>
> No den por cerrado a nadie sin verificar las tres, en ese orden.

Esto está tal cual en `clases/clase_03/ejercicios.md` — si alguien duda,
remítanlo ahí.

Un dato que ayuda a sostener todo esto sin desgastarse: el propio
`ejercicios.md` que los alumnos copiaron ya arranca pidiéndoles trabajar en
"modo tutor" con su agente. Si ven que alguien le está pidiendo al agente
que le resuelva el `description` o el cuerpo entero, alcanza con
recordarle esa frase que ya tiene pegada arriba de su hoja de trabajo.

## Dudas que ya se repitieron, para tenerlas a mano

Del repaso de la Clase 2 salieron algunas confusiones que se repiten entre
varios alumnos, así que probablemente reaparezcan hoy en otra gente que no
llegó a escribirlas. Conviene tenerlas ya resueltas en la cabeza:

Varios confunden que el modelo "no tiene memoria" con que el chat tampoco
parezca acordarse de nada — la aclaración corta es que dentro de una misma
conversación, el agente reenvía todo el historial como contexto en cada
mensaje (por eso parece que recuerda), pero el modelo en sí no guarda nada
de una conversación a la siguiente; lo que hacen ChatGPT o Claude con sus
funciones de "memoria" es una capa aparte, separada del modelo, que guarda
datos en otro lado y los reinyecta solos al empezar un chat nuevo.

También se repite la confusión entre RAG y fine-tuning más allá de la
diferencia de costo: RAG es darle documentos al modelo para que responda
apoyado en ellos (la carpeta que le pasás antes de la reunión); fine-tuning
es reentrenarlo (mandarlo a un posgrado). Y entre las cinco partes del
prompt, la que más se mezcla es FORMATO con "estilo" o con TAREA — conviene
insistir en que FORMATO es específicamente qué forma tiene que tener la
respuesta (un prompt de imagen, un texto corto, un JSON), no el tono ni la
tarea en sí.

Por último, armar un system prompt de cero es, para bastantes, el punto
más difícil de toda la Clase 2 — si alguien llega trabado con eso, ayuda
sugerirles que no arranquen por las cinco partes juntas: primero ROL y
CONTEXTO (quién es el asistente y en qué mundo vive), y una vez que eso
está firme, TAREA, FORMATO y RESTRICCIONES salen casi solos.

## Si alguien no hizo el repaso de la Tarea 02

Para quien llegue sin haber hecho ese repaso en casa, no hace falta
mandarlo a hacerlo entero antes de arrancar el taller — alcanza con una
versión exprés de 5 minutos: preguntarle qué hace un LLM en sus palabras,
qué pasa con la conversación cuando se cierra el chat, y si su system
prompt de la Clase 2 tiene las cinco partes. Con esas tres alcanza para
saber si puede arrancar tranquilo con la skill de hoy o si conviene
acompañarlo un poco más de cerca durante el taller.

## Un caso puntual: Pilar Gallino (grupo 05)

Pilar dejó una nota en `grupos/grupo_05/repaso_clase_02/consultas_clase_02.md`
— faltó a la Clase 2, se sintió abrumada al intentar avanzar sola con la
Tarea 02, y pidió explícitamente poder hacerla con la cátedra presente. Ya
tiene una respuesta mía en `respuestas/grupo_05/repaso_clase_02/pilar_gallino.md`
que pueden mostrarle tal cual si pregunta. Hoy no voy a estar, así que
trátenla como el caso de "no hizo el repaso" de más arriba, pero con un
poco más de cercanía: denle la versión exprés de 5 minutos apenas arranque
el taller (antes de que se sume a la parte de la skill), y si ven que
sigue perdida, prioricen pasar por su mesa más seguido que por las demás.
No hace falta que resuelvan la Tarea 02 entera con ella en el momento —
con que salga del taller sin sentirse más perdida que al llegar, alcanza.
Yo la sigo el lunes.

## Cómo dejar registro de lo nuevo que surja

Cuando aparezca una duda conceptual que no esté ya cubierta en
`respuestas/grupo_XX/`, que quede anotada con el mismo formato que las
demás: un archivo `dudas_nombre_apellido.md` (en
`repaso_clase_02/` si es algo que arrastraba de la Clase 2, o directamente
en su `clase_03/` si nace del taller de hoy), con la duda citada tal cual
la dijo el alumno. Así, aunque hoy no esté yo, nada de lo que pase se
pierde.
