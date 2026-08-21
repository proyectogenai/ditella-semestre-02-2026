# Respuesta — Lupe Picca (grupo 02)

**Su duda:** cómo usar un system prompt para generar imágenes de una marca
que **ya existe** (paleta, tipografía, estilo definidos) — si se le pasan
imágenes de referencia como RAG, qué modelos aceptan eso, y cómo se
estructura el prompt cuando la marca no es nueva.

**Respuesta:**

Lupe, buena pregunta porque mezclás dos herramientas distintas que conviene
separar.

RAG, tal como lo vimos en clase, es una técnica de **texto**: le das
documentos a un modelo de lenguaje para que responda basado en esa
información puntual, en vez de inventar. Lo que vos necesitás para imagen
es otra cosa, que en la jerga se llama **image prompting / referencia
visual**: pasarle directamente una o varias imágenes de la marca al modelo
de imagen, además del texto. Herramientas como Midjourney (`--sref` para
fijar un estilo visual), Gemini o GPT-image aceptan imágenes de referencia
subidas junto al prompt, y el modelo las usa para condicionar el
resultado — es mucho más directo que describir la paleta en palabras.

Para la estructura del system prompt, las cinco partes siguen siendo las
mismas, cambia el contenido de CONTEXTO: en vez de inventar un universo
nuevo, ahí describís la marca como un dato ya fijo (paleta en hex o
adjetivos muy concretos, texturas, tipografía si aplica al mockup) y dejás
explícito en RESTRICCIONES qué no se puede tocar de esa identidad. Si el
sistema visual ya está armado, lo ideal es combinar las dos cosas: el
bloque de texto fijo + una o dos imágenes de referencia adjuntas cada vez
que generás, en las herramientas que lo permitan.
