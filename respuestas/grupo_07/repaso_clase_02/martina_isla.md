# Respuesta — Martina Isla (grupo 07)

**Su duda:** está armando la identidad de marca de un café, con todo ya
definido. ¿Hay forma de mandar el system prompt una vez y que la IA lo
"recuerde" sin tener que re-explicarlo siempre? ¿Se puede conectar
opencode, un chat, Gemini, a un mismo prompt y concepto?

**Respuesta:**

Martina, la respuesta corta es: **sí, y es exactamente lo que armaste en la
Clase 3 con la skill.** La respuesta larga tiene un matiz importante.

El modelo *suelto* no tiene esa opción: cada chat arranca en blanco, ese es
el tema de fondo de toda la Clase 2. Lo que sí existe son **capas por
encima del modelo** que guardan un texto fijo y te lo cargan solo en cada
conversación nueva:

- **Dentro de un producto:** "Personalización" / "Instrucciones
  personalizadas" en ChatGPT, Proyectos en Claude, Gems en Gemini. Cada
  uno guarda tu texto y lo reinyecta en cada chat *de ese espacio*. Rápido
  de configurar, pero **no se comparte entre productos**: lo que cargaste
  en ChatGPT no lo ve Gemini.
- **En tu repo, con una skill:** es la versión que hicieron el viernes. El
  system prompt vive en un archivo (`SKILL.md`), tu agente lo lee solo
  cuando el pedido coincide con el `description`, y además **queda
  versionado en git** — lo podés corregir con el tiempo y ver qué cambió.

El matiz sobre "conectar opencode + chat + Gemini a un mismo prompt": hoy
**no hay un botón** que sincronice el mismo system prompt a las tres
herramientas a la vez. Lo que se hace en la práctica es tener **una fuente
de verdad** —tu `SKILL.md` o un `identidad-cafe.md` en el repo— y desde ahí
alimentar cada herramienta: el agente lo carga solo, y para ChatGPT o
Gemini copiás ese mismo texto una vez en su panel de personalización.
Distintas herramientas, un solo texto que mantenés en un lugar. Eso es
justo lo que el parcial te va a pedir que quede prolijo y versionado.
