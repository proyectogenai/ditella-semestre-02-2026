# Dudas — Lupe Picca · Repaso Clase 02

## Lo que me quedó claro

- Un LLM predice la siguiente palabra (token por token), no "piensa" ni "crea".
- Un token es la unidad mínima de texto que el modelo lee (ni palabra ni letra).
- La ventana de contexto es cuánto texto tiene presente a la vez; lo que queda afuera no existe.
- Un chat no tiene memoria persistente: cerrás el chat, se terminó. No hay nadie guardando nada.
- Las 5 partes de un system prompt: ROL, CONTEXTO, TAREA, FORMATO, RESTRICCIONES.
- FORMATO es la que más se olvida y la que más frustración evita: sin ella, el modelo decide solo qué devolver.
- Las 4 técnicas de prompting: Few-shot, Chain-of-thought, Personas, Iteración.
- De mi experiencia con Corriente: cuando mezclé herramientas (ChatGPT + Gemini) las imágenes se diferenciaron; el sistema funciona mejor cuando se usa la misma herramienta. Cuando algo sale mal, hay que arreglar el system prompt, no el resultado.

## Lo que menos me quedó claro

**¿Cómo uso un system prompt para generar imágenes a partir de una marca ya existente con su identidad visual?** Si ya tengo una marca armada con paleta, tipografía y estilo definido, ¿cómo hago para que un modelo de imagen o video respete esa identidad? ¿Se le entregan imágenes de referencia como contexto (RAG)? ¿Qué modelos aceptan eso? ¿Cómo se estructura el prompt cuando la marca ya existe y no es nueva?
