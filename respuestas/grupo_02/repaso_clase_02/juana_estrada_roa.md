# Respuesta — Juana Estrada Roa (grupo 02)

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
