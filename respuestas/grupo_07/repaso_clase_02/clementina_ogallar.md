# Respuesta — Clementina Ogallar (grupo 07)

**Su duda:** ¿cuánto iterar es "correcto" en un system prompt? Sabe que
iterar siempre va a pasar, pero no le queda claro si lo normal es iterar
mucho o si hay forma de arrancar más claro para iterar menos — y si hay un
punto en el que ya estás iterando de más.

(De paso, dejó bien cerrada la otra: entendió que el system prompt no es
"un prompt más específico" sino uno que **queda activo toda la
conversación** y resuelve todos los pedidos de ese tipo.)

**Respuesta:**

Clementina, muy buena pregunta, porque tiene dos mitades y conviene
separarlas.

**"¿Se puede arrancar más claro para iterar menos?"** Sí, y no es magia:
es la checklist de las cinco partes. La mayoría de las iteraciones
tempranas pasan porque faltó FORMATO ("no me devuelvas la imagen,
devolveme el prompt en inglés en un bloque de código") o faltó una
RESTRICCIÓN obvia ("nunca texto ni logos", "máximo 5 mesas"). Si en la
primera versión ya cubriste rol, contexto, tarea, formato y restricciones
con ejemplos concretos, te ahorrás la primera tanda de correcciones. Lo
que **no** se puede es adivinar de antemano todo lo que va a salir raro:
esa parte sí o sí se descubre generando.

**"¿Cuándo estás iterando de más?"** La señal es cualitativa, no un número.
El system prompt está listo cuando:

- **Otra persona lo usa y le sale parecido a como te sale a vos.** Ese es
  el criterio del parcial: lo prueba un grupo distinto. Si solo funciona
  en tus manos, todavía le faltan reglas claras.
- **Los cambios que estás haciendo son de gusto, no de sistema.** "Este
  encuadre me gusta un poco más que este otro" no se arregla en el prompt:
  es una decisión de cada pieza. Si estás metiendo reglas para forzar una
  preferencia puntual de una imagen, estás iterando de más — y encima
  ensuciás el sistema para las próximas.
- **El mismo error dejó de repetirse.** Iterás mientras un problema vuelve
  dos o tres veces. Cuando dejó de volver, esa regla ya cumplió.

Regla práctica: agregás una regla al sistema cuando un error **se repite**;
no cuando aparece una vez y podés descartarlo a mano. Iterar es sano;
iterar sobre casos únicos es acumular reglas que después se contradicen.
