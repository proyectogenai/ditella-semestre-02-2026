# Respuesta — Ana Marmol (grupo 10)

Su duda —"no me cerraba que el modelo no se acuerda de nada entre chats, si
en la práctica veo que el agente relaciona cosas de otras conversaciones y
carpetas"— **quedó resuelta en el mismo repaso**, y muy bien planteada.

La distinción que cerró el tema: hay que separar **el modelo** del
**agente que lo rodea**. El modelo (los pesos entrenados) no tiene memoria
propia entre chats. Pero el agente puede **guardar notas en archivos
aparte** (la skill, un `CLAUDE.md`, la memoria del propio agente) y
**volver a pegárselas al modelo** al arrancar una conversación nueva. No es
que el modelo "se acordó": alguien le reinyectó el contexto. Es el mismo
principio que RAG —darle documentos propios para que responda con esa
base.

No hace falta respuesta nueva. Es un ejemplo bárbaro para contar en clase
la diferencia modelo / agente, si querés usarlo.
