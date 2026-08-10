# Repaso teórico de las clases — guía de acompañamiento

Cómo ayudar al alumno a repasar los conceptos teóricos de la materia.
El contenido sigue los bloques del programa (basado en el programa 2026;
si el docente actualiza el cronograma del semestre, este archivo se
actualiza con él).

## Cómo repasar (método)

Cuando el alumno pida "repasar la clase X" o "no entendí tal concepto":

1. Preguntá primero qué se acuerda o qué le hizo ruido: partí de ahí.
2. Explicá el concepto con una analogía de diseño y un ejemplo concreto de
   herramienta que ya usó.
3. Cerrá con **2 o 3 preguntas socráticas** para que fije la idea (estilo
   mini-quiz oral, no examen). Si contesta bien, subí un poco la vara; si
   no, reformulá con otra metáfora.
4. Si pide material para el final, ofrecé armarle un resumen o fichas de
   estudio en un archivo.

## Bloque 0 · Fundamentos

**Qué es la IA y por qué importa al diseño.** Diferencia entre IA (el campo
general), Machine Learning (aprender de datos en vez de reglas escritas),
Deep Learning (redes neuronales profundas) e IA Generativa (modelos que
producen contenido nuevo: texto, imagen, video, audio). Evolución histórica
de Turing a los modelos actuales. Casos de diseño: Nutella Unica (7 millones
de etiquetas únicas), Heinz ("dibujá ketchup" en DALL·E), Airbus
(diseño generativo estructural).

**LLMs.** Un LLM predice la siguiente palabra (token) con una red entrenada
sobre cantidades enormes de texto. Conceptos clave: token (las "piezas" en
que se corta el texto), arquitectura Transformer y atención (el modelo pesa
qué partes del contexto importan para predecir), ventana de contexto (cuánto
"recuerda" de la conversación), RAG (darle documentos propios para que
responda con esa base), fine-tuning (re-entrenar sobre datos propios).
Plataformas: ChatGPT, Claude, Gemini, DeepSeek, Grok.

**Prompting avanzado.** Anatomía del prompt: rol + contexto + tarea +
formato + restricciones. Few-shot (mostrar ejemplos del resultado esperado),
chain-of-thought (pedir razonamiento paso a paso), system prompts y personas
(instrucciones permanentes que definen el comportamiento). Iteración como
método: el prompt es un brief, y los briefs se refinan. NotebookLM para
investigación con fuentes propias.

## Bloque 1 · Imagen generativa

**Modelos de difusión.** Analogía: el modelo aprende a "revelar" una imagen
desde ruido puro, guiado por el texto. Text-to-image (describir → generar) e
image-to-image (transformar una imagen existente: boceto → render).
Parámetros clave: aspect ratio, seed (la semilla que hace reproducible un
resultado), negative prompting (qué NO querés), stylize/style. Inpainting
(regenerar una zona) y outpainting (extender el lienzo). Herramientas:
Midjourney, Flux, Firefly, DALL·E, Stable Diffusion.

**Consistencia y sistemas visuales (el corazón del parcial).** El problema
central: los modelos generativos no "recuerdan" entre generaciones; la
consistencia hay que construirla. Recursos: character/reference sheets, seed
fija, style reference (`--sref` en Midjourney), image prompting con pesos,
LoRAs y embeddings (conceptualmente: mini-entrenamientos que capturan un
estilo o personaje). Pensarlo como **brand system**: paleta, técnica y
narrativa definidas ANTES de generar en masa. Plugins de IA en Figma para
integrar al flujo de diseño.

## Bloque 2 · Movimiento y video

Text-to-video vs. image-to-video (más control: partís de una imagen tuya).
Camera motion (paneos, zoom, órbita), motion brush (animar zonas
específicas), extend (alargar un clip). El video generativo hoy rinde mejor
en clips cortos (3-10s) con una sola idea de movimiento. Herramientas:
Runway, Kling, Pika, Hailuo, Luma, Sora. Usos: motion design, redes,
publicidad, narrativa.

## Bloque 3 · Audio y voz

Voz sintética y clonación: cómo un modelo aprende el timbre de una voz;
ética del deepfake y consentimiento. Text-to-speech de calidad (ElevenLabs,
Cartesia, MiniMax Audio). Generación musical (Suno, Udio, MusicFX): prompt
por género, mood, instrumentación. Identidad sonora como extensión del brand
system: la marca también suena.

## Bloque 4 · Código, agentes y automatización

**Agente vs. chatbot.** Un chatbot responde; un agente **hace**: lee y
escribe archivos, ejecuta comandos, itera hasta lograr el objetivo. Los que
usan en el curso (opencode, Claude Code) son agentes.

**MCP (Model Context Protocol).** El "USB-C de la IA": un estándar para
enchufar el agente a otras herramientas (Figma, Drive, GitHub, un browser).
El servidor MCP expone acciones y datos; el agente los usa.

**Skills.** Instrucciones y conocimiento empaquetados que el agente carga
cuando el tema aplica. Esta misma skill es un ejemplo. Permiten codificar
un flujo de trabajo o un sistema visual propio y reutilizarlo.

**El diseñador como director de agentes.** El valor se corre de operar
herramientas a definir intención, criterio y control de calidad.
Automatización práctica: renombrar en lote, exportar assets, convertir
formatos, generar variantes.

## Bloque 5 · Ética, sesgos y propiedad intelectual

Sesgos: los modelos amplifican los datos con que fueron entrenados
(representación, exclusión, estereotipos) — el diseñador tiene que
detectarlos y compensarlos. Propiedad intelectual: el debate global sobre
entrenamiento con obra ajena y autoría de lo generado; términos de uso y
licencias de cada herramienta. Deepfakes y usos maliciosos. Atribución
honesta: reconocer la participación de la IA en el proceso. Legislación
emergente en Argentina y el mundo (en movimiento constante: si el alumno
necesita el estado actual, buscá en la web).

## Evaluaciones de la materia (contexto)

La materia se aprueba con un **parcial** grupal (proyecto editorial con
imagen + video + consistencia visual + documento de proceso), un **proyecto
final integrador** grupal (al menos tres modalidades de IA combinadas con
propuesta conceptual propia) y **participación** en clase. En ambos
proyectos pesa mucho la **documentación del proceso** y el criterio de
diseño por encima de la herramienta. Si el alumno pregunta por consignas o
fechas exactas del semestre en curso, remitilo al material oficial del
campus o del repo; no inventes fechas.
