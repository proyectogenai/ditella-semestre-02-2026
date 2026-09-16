# Respuesta — Juana Estrada Roa (grupo 02)

**Su duda:** "No termino de entender cómo funciona una seed."

**Respuesta:**

Juana, para que la seed cierre del todo hay que arrancar un paso antes: por
**difusión**. Un modelo de imagen no arranca de una hoja en blanco ni busca
en un archivo de fotos existentes — arranca de **puro ruido**, como la
estática de una tele vieja, y lo va "limpiando" en pasos, guiado por tu
prompt, hasta que aparece una imagen coherente con lo que pediste.

Ahí entra la seed: es el **número que fija ese ruido inicial**. No es un
ajuste de estilo ni de composición — es literalmente el punto de partida
del que el modelo empieza a "limpiar". Por eso:

- **Misma seed + mismo prompt = mismo resultado.** Es reproducible: le das
  el mismo punto de partida y el mismo texto guía, y el modelo llega
  siempre al mismo lugar.
- **Misma seed + prompt distinto = variaciones de la misma "familia".**
  Cambia lo que pedís, pero el ruido del que arranca es el mismo, así que
  el resultado suele mantener cierto aire de familia (encuadre, paleta
  general) aunque el contenido cambie.
- **Seed random (la que usás sin pensarlo) = cada generación arranca de un
  ruido distinto**, por eso pedís lo mismo dos veces y te da dos imágenes
  distintas.

Pensala como el número de una tirada de dados que decide *dónde* caen las
piezas antes de que empieces a acomodarlas: mismo número, misma tirada
inicial, mismo resultado si el resto de las reglas (tu prompt) no cambia.

**Por qué te va a importar de acá al parcial:** es la base de la
**consistencia** que necesitás cuando generás varias piezas de una misma
marca (posteo, apertura, feed) y querés que se sientan del mismo sistema
visual sin que cada imagen parezca salida de otro lado. Fijar la seed —
cuando la herramienta te lo permite— es una de las formas más directas de
lograr eso, junto con el bloque de estilo del system prompt.
