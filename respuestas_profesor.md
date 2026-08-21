# Respuestas del profesor — dudas de la Clase 2

> Respuestas a las dudas que dejaron en el repaso de la Clase 2. Se va
> completando a medida que entren más grupos (todavía faltan 01, 03, 07,
> 09, 10 y 11).

---

## Grupo 02

### María Lucía Racciatti

No dejó dudas pendientes en el repaso — repasó rol/contexto/tarea/formato/
restricciones, las 4 técnicas, ventana de contexto y evaluación cruzada sin
trabarse. No hace falta respuesta; si sobra tiempo el viernes, puede ser
buena compañera de repaso para alguien que llegue más flojo.

### Juana Estrada Roa

**Su duda:** cómo el modelo "no se acuerda de nada" pero ChatGPT, Claude o
Gemini parecen recordar conversaciones previas.

**Respuesta:**

Juana, la clave es que estás mezclando dos cosas distintas y tenés toda la
razón en que no es obvio.

El *modelo* (los pesos entrenados) nunca cambia ni guarda nada de una
conversación a otra — en eso lo que te dijeron en clase es literal. Lo que
sí pasa **dentro de un mismo chat**: cada vez que le escribís algo, el
agente le vuelve a mandar *toda la conversación hasta ahí* como contexto.
Por eso "se acuerda" de lo que hablaron hace diez mensajes: no es memoria,
es que le repetís todo de nuevo cada vez, aunque no lo veas.

Lo que vos notaste en ChatGPT es otra capa, separada del modelo: hay
productos (ChatGPT con su función "Memoria", Claude con Proyectos, Gemini
con Gems) que además guardan datos tuyos en una base aparte — un perfil
tuyo, cosas que dijiste en otros chats — y se los insertan solos al
arranque de una conversación nueva. Vos no lo ves pasar, pero es lo mismo
que hacen ustedes con el system prompt: te lo pegan (o te lo cargan solos,
si es una skill) al principio del chat. El modelo sigue sin memoria propia;
es la aplicación la que arma el numerito de "me acuerdo de vos".

---

### Lupe Picca

**Su duda:** cómo usar un system prompt para generar imágenes de una marca
que **ya existe** (paleta, tipografía, estilo definidos) — si se le pasan
imágenes de referencia como RAG, qué modelos aceptan eso, y cómo se
estructura el prompt cuando la marca no es nueva.

**Respuesta:**

Lupe, buena pregunta porque mezclás dos herramientas distintas que conviene
separar.

RAG, tal como lo vimos en clase, es una técnica de **texto**: le das
documentos a un modelo de lenguaje para que responda basado en esa
información puntual, en vez de inventar. Lo que vos necesitás para imagen
es otra cosa, que en la jerga se llama **image prompting / referencia
visual**: pasarle directamente una o varias imágenes de la marca al modelo
de imagen, además del texto. Herramientas como Midjourney (`--sref` para
fijar un estilo visual), Gemini o GPT-image aceptan imágenes de referencia
subidas junto al prompt, y el modelo las usa para condicionar el
resultado — es mucho más directo que describir la paleta en palabras.

Para la estructura del system prompt, las cinco partes siguen siendo las
mismas, cambia el contenido de CONTEXTO: en vez de inventar un universo
nuevo, ahí describís la marca como un dato ya fijo (paleta en hex o
adjetivos muy concretos, texturas, tipografía si aplica al mockup) y dejás
explícito en RESTRICCIONES qué no se puede tocar de esa identidad. Si el
sistema visual ya está armado, lo ideal es combinar las dos cosas: el
bloque de texto fijo + una o dos imágenes de referencia adjuntas cada vez
que generás, en las herramientas que lo permitan.

---

## Grupo 04

### Liz Park

Su duda inicial ("cómo aprenden los LLMs") quedó resuelta en el mismo
repaso — entendió entrenamiento con predicción de token + RLHF, y que los
pesos no cambian con la conversación. No hace falta respuesta nueva; si
querés profundizar con ella en clase, el único punto que dejó abierto sin
que se lo pidieran es el detalle técnico de *por qué* la predicción
token a token da como resultado texto coherente (ver la respuesta a Naomi,
más abajo, sirve también para ella).

### Naomi Benadon

**Su duda:** no estuvo en la Clase 2, no tiene claro el mecanismo de
predicción de tokens ni la ventana de contexto, y todavía no armó su
system prompt (lo va a hacer en el taller de la Clase 3).

**Respuesta:**

Naomi, arrancás en desventaja de tiempo pero no de contenido — lo que te
falta es exactamente lo que se resuelve repasando, no algo que se te haya
pasado por no estar.

Sobre por qué predecir "solo la palabra siguiente" da como resultado texto
coherente y no un quilombo de palabras sueltas: pensalo como un
autocompletar, pero entrenado con una cantidad de texto tan enorme que
aprendió no solo qué palabra suele seguir a otra, sino los patrones de
gramática, de tema, de lógica de un argumento — todo eso *ya estaba* en el
texto con el que se entrenó, porque el texto humano es coherente. El
modelo no entiende lo que dice; detectó, a fuerza de ver billones de
ejemplos, qué patrones hacen que una frase "suene bien" después de otra. La
ventana de contexto es simplemente cuánto de la conversación tiene
presente al mismo tiempo para hacer esa predicción — lo que quedó afuera
de esa ventana, para el modelo no existe.

Para el system prompt: no lo armes solo antes del viernes, andá tranquila.
El taller de la Clase 3 parte de un ejemplo ya armado (Nocturna) y lo
adapta paso a paso — vas a construir el tuyo en vivo, con guía, no de una
hoja en blanco.

---

### Priscila Duhalde

**Su duda, textual:** "No entendí mucho cómo generar el system prompt. Me
costó mucho."

**Respuesta:**

Priscila, esto le pasa a la mayoría al principio — armar un system prompt
de cero, con las cinco partes en la cabeza a la vez, es lo más difícil de
la Clase 2, no algo que deberías tener resuelto ya.

El truco que ayuda: no arranques por las cinco partes juntas. Empezá solo
por ROL y CONTEXTO — quién es este asistente y en qué mundo vive (una
marca, un proyecto, un tono) — porque una vez que eso está claro, TAREA,
FORMATO y RESTRICCIONES salen casi solos como consecuencia. Y en vez de
partir de una hoja en blanco, agarrá un ejemplo que ya funciona (como el de
Nocturna que vimos en clase) y andá reemplazando sección por sección con
tu propio contenido — es mucho más manejable que inventar la estructura
vos misma. En la Clase 3 vas a volver a tocar exactamente este system
prompt para convertirlo en skill, así que lo que quede a medias ahora se
termina de cerrar ahí.

---

## Grupo 05

### Mercedes Fernández Lahore

**Su duda, en sus palabras:** no estuvo en la segunda parte de la clase, le
costó entender por dónde iba la Tarea 02, y se sintió abrumada con
GitHub — aunque el contenido teórico le quedó claro.

**Respuesta:**

Mercedes, separando las dos cosas que contás: lo teórico lo tenés sólido —
tu repaso lo confirma, hasta te acordaste del detalle correcto de tu propio
system prompt de Bruma cuando lo revisaste. Lo que te abrumó fue la parte
mecánica (GitHub, dónde estaba cada cosa), y **eso no mide si entendiste la
materia**. A todo el grupo le pasa las primeras semanas — es fricción de
herramienta, no de criterio, y se resuelve con repetición, no con más
teoría. Seguí apoyándote en el agente para lo mecánico (`git pull`,
`add`/`commit`/`push`) las veces que haga falta; para eso está.

---

## Grupo 06

### Amadeo Riva

**Sus dos dudas, textuales:**
1. "Cómo funciona esto que estamos haciendo con GitHub y el agente: yo te
   escribo a vos, y vos que hacés? Ejecutas cosas en mi compu y después lo
   subís a GitHub? O lo subís directamente?"
2. "¿Hay alguna manera de que una cuenta de IA quede condicionada por un
   system prompt? O sea, agarro y cualquier chat que use esté en línea con
   eso?"

**Respuesta:**

Amadeo, vamos una por una.

**1.** Todo pasa primero en tu compu. Tu agente (Claude Code u opencode) lee
y escribe archivos ahí mismo, y si corresponde corre comandos de git
(`add`, `commit`) — todo eso queda guardado localmente, en tu máquina, nada
toca GitHub todavía. Recién cuando se ejecuta `git push` esos cambios viajan
de tu compu al repositorio en la nube. O sea: no sube nada "directamente"
salteándote a vos — el push sale de tu propia carpeta, y el agente solo lo
ejecuta cuando se lo pedís.

**2.** Sí, existe, y es básicamente lo que están construyendo en la Clase 3
con las skills. Un modelo suelto no tiene esa opción — cada chat arranca en
blanco. Pero varios productos ofrecen justamente esto: "Personalización" en
ChatGPT, Proyectos en Claude, o una skill como la que van a armar el
viernes, guardan un texto fijo que se carga solo en cada conversación nueva
dentro de ese espacio. La skill es la versión de esto que además queda
versionada en tu repo, así que la podés corregir con el tiempo y compartir
con otros sin explicarla de nuevo cada vez.

---

## Grupo 08

### Lourdes Eriksen

**Su duda:** cómo se arma un system prompt y cómo esas "condiciones" cambian
según lo que se quiera hacer.

**Respuesta:**

Lourdes, la forma en la que planteás la pregunta ya tiene la respuesta
adentro: las cinco partes (ROL, CONTEXTO, TAREA, FORMATO, RESTRICCIONES)
son un esqueleto fijo — siempre las mismas, siempre en ese orden mental —
pero lo que va **adentro** de cada una cambia completamente según el
proyecto. Las RESTRICCIONES de una marca de fotografía prohíben cosas
distintas que las de una marca ilustrada; el FORMATO cambia si necesitás
un prompt de imagen, un texto para redes o un JSON. Lo que no cambia es la
lista de preguntas que te tenés que hacer para llenar cada parte.

Para que se te fije, es buen ejercicio poner lado a lado dos system
prompts distintos (el de Nocturna que vimos en clase, y el tuyo propio) y
marcar qué cambia y qué no en cada sección — vas a ver que la estructura
se repite calcada y solo cambia el contenido.
