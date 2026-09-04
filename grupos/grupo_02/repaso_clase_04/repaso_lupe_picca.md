# Repaso pre-Clase 5 — Lupe Picca · Grupo 02

Repaso general de lo visto hasta ahora antes de la Clase 5.

## Clase 2 — El prompt y el sistema de identidad

- Las 5 partes de un system prompt: **ROL, CONTEXTO, TAREA, FORMATO, RESTRICCIONES**.
- La que más se olvida y más frustración evita: **FORMATO** — si no se define, la IA decide sola cómo responder.
- 4 técnicas de prompting: **Few-shot, Chain-of-thought, Personas, Iteración**.
- Regla de oro: **se arregla el sistema, no el resultado**. Si corregís la salida a mano resolvés un caso; si corregís el prompt resolvés todos los futuros.
- Mi marca individual: **Corriente** (festival de música electrónica en el Delta, paleta pastel, atmósfera difusa/calmada/veraniega).

## Clase 3 — De system prompt a skill

- Una **skill** es un archivo (`SKILL.md`) que tu agente carga solo leyendo el `description`.
- Es el *brand book* del proyecto: vive versionada en el repo, se activa por palabras clave, no se pierde al cerrar el chat.
- Diferencia con el system prompt: el system prompt vive pegado en un chat y se pierde; la skill es un archivo permanente que se carga sola.
- Mi skill grupal: **CHERBA** (marca de mates de calabaza revestidos en cuero con bases bordadas).
- Síntoma en la prueba en chat limpio: la cargaba pero ignoraba las reglas (prompt genérico sin el bloque de estilo). La corrección es fortalecer el cuerpo de la skill para que siempre use el bloque de estilo íntegro.

## Clase 4 — Preconceptos y especificidad

- Conceptos como "futurista" son **preconceptos** que la IA ya tiene cargados: se repiten solos (colores, pantallas transparentes) y no varían mucho entre pedidos.
- Para controlar el resultado hay que **especificar valores concretos** (paleta exacta, tipo de luz, materiales, textura), no adjetivos vagos.
- El bloque de estilo con valores concretos es lo que garantiza consistencia.

## Mis dudas / notas pendientes

- Cómo usar un system prompt/skill para generar imágenes a partir de una marca ya existente con identidad visual (imágenes de referencia, RAG). Tengo registro de esta duda desde el repaso de Clase 2.
- Terminar de fortalecer la skill de CHERBA para que el bloque de estilo se use siempre (C.5 de la Clase 3).
