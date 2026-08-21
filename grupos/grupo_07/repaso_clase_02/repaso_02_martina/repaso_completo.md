# Repaso Clase 02 — Martina Isla

## Qué aprendí

### LLMs
- Un LLM predice la siguiente palabra en secuencia, nada más.
- Los tokens son la unidad de medida y cobro de los servicios.
- La ventana de contexto es cuánto texto puede retener el modelo a la vez.
- Cada conversación tiene su propio contexto. Al cerrar el chat, se pierde todo.

### System Prompt
Las 5 partes son: Rol, Contexto, Tarea, Formato y Restricciones.
La que más se olvida es Formato, y es la que más frustración genera porque si no decís cómo querés la respuesta, el modelo te contesta con explicaciones cuando vos querías una línea.

### Técnicas
- **Few-shot:** mostrar ejemplos en vez de explicar. El modelo calca el patrón.
- **Chain-of-thought:** pedirle que razone paso a paso antes de responder.

### Mi asistente (Bruma)
- Lo que más impacta es la regla de variación en los encuadres, para que las imágenes no sean todas iguales.
- Cuando algo sale mal, hay que corregir el system prompt, no el resultado a mano.

---

## Duda

Yo estoy haciendo una identidad de marca de un café, con todas las cosas que defini. ¿Hay alguna manera de que, mandando un system prompt por primera vez, la IA lo recuerde y no tenga que estar explicándoselo siempre? ¿Puedo conectar mi opencode, ChatGPT, Gemini, a un mismo prompt y concepto?
