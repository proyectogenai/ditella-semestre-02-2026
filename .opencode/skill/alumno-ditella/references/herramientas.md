# Herramientas del curso — guía de orientación

Cómo orientar al alumno cuando pregunta qué herramienta usar o cómo usarla
mejor. El panorama cambia rápido: si necesitás datos actuales (precios,
planes gratis, features nuevas), buscá en la web antes de afirmar.

## Criterio general de recomendación

1. Primero la herramienta que **ya vieron en clase** para ese bloque.
2. Priorizá versiones gratuitas o de acceso abierto; el programa no exige
   cuentas pagas.
3. Elegí por el resultado de diseño buscado, no por el hype: la pregunta es
   siempre "¿qué querés lograr?" antes de "¿qué herramienta uso?".
4. Recordá los términos de uso y licencias del contenido generado, sobre
   todo si el trabajo se publica.

## Texto / LLMs

ChatGPT, Claude, Gemini, DeepSeek, Grok, NotebookLM.
- Para briefs, naming, copy, moodboards conceptuales: cualquiera de los
  grandes; sugerí comparar el mismo prompt en dos modelos.
- NotebookLM: investigación con fuentes propias (subís PDFs/links y
  preguntás sobre eso). Ideal para el documento de proceso.

## Imagen

Midjourney, Flux (vía Fal.ai o Replicate), Adobe Firefly, DALL·E, Stable
Diffusion.
- **Midjourney**: el caballo de batalla estético del curso. Claves: `--sref`
  (referencia de estilo), `--cref`/character reference, seed fija, pesos en
  el prompt. Se usa desde la web o Discord.
- **Flux**: gran calidad y control; corre en Fal.ai o Replicate (pago por
  uso, barato). Bueno para tipografía dentro de la imagen.
- **Firefly**: integrado a Photoshop/Illustrator (generative fill = inpainting
  dentro del flujo Adobe). Entrenado con stock licenciado: útil cuando la
  limpieza legal importa.
- Para consistencia de personaje/estilo: reference sheets + seed + sref;
  ver teoría en `teoria.md` (Bloque 1).

## Video

Runway, Kling, Pika, Hailuo, Luma Dream Machine, Sora.
- Consejo default: **image-to-video** (partir de una imagen propia ya
  aprobada) da mucho más control que text-to-video directo.
- Clips cortos (3-10s), una sola idea de movimiento por clip, camera motion
  sutil. Iterar barato: primero baja resolución/preview si la herramienta
  lo permite.
- **HeyGen**: avatares que hablan (video + voz sincronizada desde texto).
  Útil para presentadores virtuales, contenido educativo, spots con
  "conductor". Ojo con el uso de rostros: solo propios o con consentimiento.
- **Remotion**: video programático en React — el video como código, con
  datos y componentes. Es la puerta de entrada a motion design generativo
  reproducible (y combina perfecto con los agentes: el alumno pide cambios
  y el agente edita el código). Requiere Node; guiá el setup con
  `programacion.md` a mano.

## Audio y voz

ElevenLabs, Cartesia, MiniMax Audio, Suno, Udio, MusicFX, Audioshake.
- **ElevenLabs**: text-to-speech de referencia; voces expresivas,
  multilenguaje, clonación de voz (solo con la propia o con consentimiento
  explícito — frená cualquier otro uso).
- **MiniMax Audio**: alternativa potente de TTS/música, buena relación
  calidad-precio vía API.
- **Suno / Udio**: canciones completas desde prompt (género, mood, letra).
  Para jingles e identidad sonora.
- Flujo típico: guion (LLM) → voz (ElevenLabs) → música (Suno) → mezcla
  simple (CapCut/Premiere o incluso ffmpeg guiado por el agente).

## Diseño e integración

- **Figma + IA**: plugins de generación e integración, y Figma MCP para que
  el agente lea/modifique archivos de diseño. Si el alumno quiere conectar
  su Figma al agente, buscá el estado actual del MCP oficial de Figma y
  guialo paso a paso.
- **Adobe**: Firefly embebido en Photoshop/Illustrator (generative fill,
  vectores generativos). Para alumnos ya fluidos en Adobe, es el camino de
  menor fricción.

## Código / no-code

Cursor, v0, Bolt, Replit, Lovable, Copilot — y los agentes del curso:
**opencode** y **Claude Code**. Para experiencias interactivas (micro-sitios,
portfolios generativos) el flujo recomendado del curso es vibe coding con el
agente + deploy simple (Vercel/Netlify). Ver `programacion.md`.

## APIs y claves

Varias herramientas (Fal, Replicate, ElevenLabs, MiniMax) se usan también
por API. Si el alumno va a usar una API key:
- Explicá que la key es una contraseña: va en un archivo `.env`, nunca
  pegada en el código ni commiteada (ver `git-github.md`).
- Modelo mental de costos: pago por uso, se carga crédito chico (USD 5
  alcanza para experimentar muchísimo).
