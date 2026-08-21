# Repaso Clase 02 — Martina Isla

## Preguntas y respuestas

**1. ¿Qué hace un modelo de lenguaje (LLM) por dentro?**
Predice la siguiente palabra en una secuencia.

**2. ¿Qué es un token? ¿Por qué importa?**
Es la unidad de medida que usan los servicios para cobrar. A veces te quedás sin tokens.

**3. ¿Qué es la ventana de contexto?**
Es lo que el chat puede retener de info de la charla para contestarte y recordar lo que le dijiste.

**4. ¿Por qué un chat nuevo no se acuerda de nada de la conversación anterior?**
Porque cada conversación tiene un contexto y contesta a partir de eso. Al eliminarlas se pierde todo.

**5. Nombrá las 5 partes de un system prompt.**
Rol, contexto, tarea, formato y restricciones.

**6. ¿Cuál es la parte que más se olvida y por qué genera más frustración?**
Formato.

**7. ¿Qué es few-shot?**
Mostrar ejemplos dentro del prompt en vez de explicar. El modelo calca el patrón.

**8. ¿Qué es chain-of-thought?**
Pedirle que razone paso a paso antes de responder.

**9. En tu system prompt de Bruma: ¿qué le corregiste después de la primera prueba?**
Le corregí las restricciones y fui más específica.

**10. ¿Por qué es importante la regla de variación en los encuadres?**
Para que si tenés que hacer varias imágenes no sean todas iguales y repetidas desde una misma vista. Que sean coherentes entre sí, pero no iguales.

---

## Duda

Yo estoy haciendo una identidad de marca de un café, con todas las cosas que defini (Bruma). ¿Hay alguna manera de que, mandando un system prompt por primera vez, la IA lo recuerde y no tenga que estar explicándoselo siempre? ¿Puedo conectar mi opencode, ChatGPT, Gemini, a un mismo prompt y concepto?
