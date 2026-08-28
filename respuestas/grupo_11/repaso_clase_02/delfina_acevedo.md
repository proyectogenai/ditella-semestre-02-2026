# Respuesta — Delfina Acevedo (grupo 11)

**Su duda:** "lo que menos claro me quedó es la diferencia entre RAG y
fine-tuning, especialmente **cuándo conviene usar uno u otro**."

(El resto del repaso lo dejó muy sólido: mapeó las cinco partes dentro de
su propio system prompt de Bruma, incluida la convivencia de TAREA y
FORMATO en la misma sección, y la diferencia chatbot / agente.)

**Respuesta:**

Delfina, la diferencia de fondo es **qué cambiás**:

- **RAG** = no tocás el modelo. Le pasás **documentos propios** en el
  momento de preguntar, para que responda con esa base en vez de con lo
  que "recuerda" del entrenamiento. La analogía de la guía: entregarle la
  carpeta del proyecto justo antes de la reunión. El modelo sigue siendo
  el mismo; lo que cambia es la información que tiene a mano esta vez.
- **Fine-tuning** = **re-entrenás** el modelo con datos propios para que
  cambie su *forma* de responder de manera permanente. La analogía:
  mandarlo a hacer un posgrado. Más caro, más lento, y mucho menos
  frecuente de lo que la gente cree.

**Cuándo cada uno:**

| Usás RAG cuando... | Usás fine-tuning cuando... |
| --- | --- |
| Necesitás que responda sobre **información puntual** (tu catálogo, tus apuntes, las actas de la marca) | Necesitás que cambie **el estilo o el comportamiento** de base, no los datos |
| Esa info **cambia seguido** y querés actualizarla sin re-entrenar nada | El comportamiento es **estable** y lo vas a usar muchísimo |
| Querés poder **citar la fuente** de dónde salió la respuesta | Tenés **muchísimos ejemplos** de "así quiero que responda" y presupuesto/infra para entrenar |
| Es lo que necesitás el **95% de las veces** | Es el caso raro |

Para lo que hacemos en la materia —que un asistente respete la identidad de
una marca— el camino es **RAG + un buen system prompt**, nunca
fine-tuning. Fine-tuning es una herramienta de equipos con datos y plata
para entrenar; saber que existe alcanza, no lo vas a necesitar para el
parcial ni el final.

Un apunte extra que quizás te sirva (le salió también a Lupe Picca): para
**imágenes** de una marca que ya existe, lo que se usa no es RAG de texto
sino **referencia visual** — subir una o dos imágenes de la marca junto al
prompt (Midjourney con `--sref`, Gemini o GPT-image aceptan imágenes
adjuntas). Mismo espíritu que RAG —darle material propio— pero por el canal
de la imagen.
