# Respuesta — Delfina García Lema (grupo 07)

**Su duda:** cómo funcionan los LLMs por dentro. No le cierra qué es un
**token**, qué es la **ventana de contexto** y por qué al alargarse el chat
el modelo "olvida" el principio, y qué es el **transformer** y por qué se
habla de "atención". Lo pide para entender por qué unos prompts funcionan
mejor que otros y no quedarse probando al azar — que es exactamente la
razón por la que vale la pena entenderlo.

**Respuesta:**

Delfina, vamos con los tres, de lo más concreto a lo más abstracto.

**Token.** El modelo no lee letras ni palabras: lee *tokens*, pedacitos de
texto. A veces un token es una palabra entera ("café"), a veces es un
cacho ("diseñá" puede partirse en "diseñ" + "á"), a veces es un signo de
puntuación. Se armaron así, midiendo en millones de textos qué pedacitos
aparecen seguido, para que el modelo trabaje con piezas de tamaño parejo.
Importa por dos motivos prácticos: **los servicios cobran por token**, y
**la memoria del modelo se mide en tokens**, no en palabras.

**Ventana de contexto.** Es cuánto texto puede tener presente *al mismo
tiempo* para generar la próxima respuesta: tu pregunta, todo lo que venías
hablando, sus respuestas anteriores, el system prompt. Todo eso entra en
una sola secuencia, y esa secuencia tiene un límite (medido en tokens).
Cuando la conversación se hace muy larga y no entra todo, lo más viejo
**queda afuera de la ventana** — y para el modelo, lo que quedó afuera
directamente no existe. No es que "se le borra de la memoria": nunca hubo
memoria, hay una ventana, y esa ventana se llenó.

**Transformer y atención.** El transformer es la arquitectura (la forma en
que están armadas las conexiones internas) que hizo posible todo esto
desde 2017. Su aporte central es el mecanismo de *atención*: para predecir
el próximo token, el modelo aprende a **pesar** qué partes del texto que ya
tiene importan más y cuáles menos. Si escribís "el director de arte de la
librería Nocturna pidió una pieza para redes, en tono...", cuando el
modelo va a completar esa frase la palabra "Nocturna" y "redes" pesan
mucho, "el" y "de" casi nada. Por eso se llama atención: el modelo
"presta atención" a lo relevante. Y por eso un **prompt bien estructurado
funciona mejor**: cuando separás ROL, CONTEXTO, TAREA, FORMATO y
RESTRICCIONES, le estás ordenando esa distribución de peso vos, en vez de
dejar que la adivine.

Un último apunte para que no te lleas mal el fenómeno: el modelo **no
entiende** lo que dice. A fuerza de ver una cantidad brutal de texto
humano —que es coherente porque lo escribieron personas— aprendió qué
patrones hacen que una frase "suene bien" después de otra. Predecir "solo
el próximo token" alcanza para generar texto con sentido justamente porque
la gramática, la lógica de un argumento y el hilo de un tema ya estaban
adentro de esos patrones.
