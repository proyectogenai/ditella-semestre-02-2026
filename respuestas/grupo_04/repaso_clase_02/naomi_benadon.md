# Respuesta — Naomi Benadon (grupo 04)

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
