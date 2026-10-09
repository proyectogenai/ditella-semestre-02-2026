# Proceso de generación de escenas

Para generar cada escena trabajamos con una estructura fija y otra variable.
Por un lado, utilizamos un **System Prompt maestro**, que contiene todas las
reglas generales del universo visual y no se modifica entre escenas, asegurando
coherencia de estilo, personajes, materiales y nivel de detalle. A este sistema
le sumamos, en cada caso, un **prompt variable** específico de la escena, donde
definimos el lugar, la composición, las acciones, la cantidad de elementos y las
particularidades del destino. Además, cargamos siempre la **imagen de referencia
de Mateo**, para conservar su identidad y rasgos visuales, y una **fotografía de
referencia del lugar real**, que funciona como guía para la arquitectura,
perspectiva, geografía y elementos característicos de cada ubicación.

Y utilizamos la misma lógica para la creación del personaje y sus distintas
vestimentas: un **bloque fijo** de características y **bloques variables** para
sintonizar a Mateo con las distintas escenas.
