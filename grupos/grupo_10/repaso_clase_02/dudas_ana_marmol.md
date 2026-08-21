# Repaso Clase 2 — dudas de Ana Marmol

Repaso guiado por el agente antes de la Clase 3 (Tarea 02).

## Lo que quedó claro

- Qué hace un LLM: predice la siguiente palabra, en base a patrones
  aprendidos de grandes cantidades de texto.
- Las 5 partes del system prompt (rol, universo/contexto, bloque de
  estilo, cómo responder, restricciones), aplicadas al asistente de
  Halcón.
- El principio de iteración: cuando algo sale mal, la corrección se hace
  en el **sistema** (el prompt), no en el resultado puntual — así se
  arregla para todas las próximas veces, no solo esa vez.

## La duda que tuve

Al principio no me cerraba que "el modelo no se acuerda de nada entre
chats", porque en la práctica veo que el agente sí relaciona cosas de
otras conversaciones o carpetas.

**Resolución (con ayuda del agente):** hay que separar dos cosas. El
modelo en sí (los pesos entrenados) no tiene memoria propia entre chats.
Pero el agente que lo rodea puede guardar notas en archivos aparte y
volver a pegárselas al modelo al arrancar una conversación nueva — ahí no
es que el modelo "se acordó", es que alguien le reinyectó el contexto de
vuelta. Es el mismo principio que el RAG que menciona la guía: darle
documentos propios para que responda con esa base.
