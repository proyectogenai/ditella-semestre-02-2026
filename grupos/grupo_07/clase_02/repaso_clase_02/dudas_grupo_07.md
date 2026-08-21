# Dudas — grupo_07 · Repaso Clase 2

## Temas de la clase

- LLMs: qué son, cómo funcionan (tokens, ventana de contexto, transformer)
- Prompt: anatomía de un prompt (rol, contexto, tarea, formato, restricciones)
- System prompt: para qué sirve y cómo se diferencia de un prompt suelto
- Iteración: cómo arreglar el sistema cuando algo sale mal

---

## Delfina García Lema

### Mis dudas

**¿Cómo funcionan los LLMs por dentro?**

No me queda claro cómo un modelo de lenguaje "predice la siguiente palabra".
Sé que fue entrenado con mucho texto, pero:

- ¿Qué es exactamente un **token**? ¿Es lo mismo que una palabra?
- ¿Qué es la **ventana de contexto** y por qué si el chat se pone muy largo
  el modelo "olvida" cosas del principio?
- ¿Qué es un **transformer** y por qué se llama "atención"?

Esto me sirve para entender por qué ciertos prompts funcionan mejor que otros
y no quedarme solo probando al azar.

### Lo que me quedó claro

- La diferencia entre prompt suelto y system prompt
- La importancia de las restricciones y el formato en el system prompt
- Que la iteración es arreglar el sistema, no la imagen

---

## Clementina Ogallar

### Mis dudas

**¿Cuánto iterar es correcto en un system prompt?**

No me queda claro si lo normal es iterar mucho o si hay formas de crear un prompt más claro desde el inicio para tener que iterar menos. Sé que iterar siempre va a pasar, pero ¿hay un punto donde ya estás iterando de más?

**Diferencia entre system prompt y prompt suelto**

Al principio confundí la diferencia: pensé que era solo que el system prompt era "más específico". Ahora entiendo que la diferencia clave es que el system prompt queda activo durante toda la conversación y resuelve todos los pedidos de ese tipo, no solo uno.

### Lo que me quedó claro

- Las cinco partes de un prompt: ROL, CONTEXTO, TAREA, FORMATO, RESTRICCIONES
- Formato es la parte que más se olvida y la que más frustración genera
- La diferencia entre system prompt y prompt suelto (queda activo durante toda la conversación)
- Que cuando un resultado sale mal, hay que arreglar el sistema, no la imagen
- La iteración es el proceso normal, no un error

---

## Martina Isla

### Mis dudas

**¿Hay alguna manera de que la IA recuerde mi system prompt entre conversaciones?**

Estoy haciendo una identidad de marca de un café, con ya todas cosas que defini. ¿Hay alguna manera de que ya mandando un system prompt por primera vez, la IA lo recuerde y no tenga que estar explicándoselo siempre? ¿Poder conectar mi opencode, chat, gemini, a un mismo prompt y concepto?

### Lo que me quedó claro

- Qué es un LLM y el sistema de tokens
- La diferencia entre prompt suelto y system prompt
- Las distintas partes de un system prompt
