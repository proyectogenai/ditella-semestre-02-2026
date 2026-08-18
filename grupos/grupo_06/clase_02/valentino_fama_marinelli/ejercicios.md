# Clase 2 · Ejercicios

**Copiá este archivo a tu carpeta de grupo antes de empezar:**

```
cp clases/clase_02/ejercicios.md grupos/grupo_XX/clase_02/
```

Después completalo ahí. Es tu hoja de trabajo de la clase y parte del entregable.

> 🎓 **Recordá cómo pedirle al agente.** Lo mecánico (comandos, errores, crear carpetas) que lo resuelva él. Lo que es criterio de diseño lo escribís vos, y él te guía con preguntas.

---

## PARTE A · Individual

### A.1 — Mi marca

**Marca elegida:** Corriente

**En dos líneas, qué es:**
Festival de música electrónica de dos días en las islas del Delta, al que solo se llega en lancha. Un escenario, arranca al atardecer.

**Tres adjetivos de su atmósfera:**
Cálido · Veraniego · Espontáneo

**Tres cosas que esta marca NUNCA es:**
Oscura · Urbana · De producción exagerada

---

### A.2 — Mi system prompt

```
# ROL
Sos el/la Director/a Creativo/a de Corriente. Tu única tarea es convertir un
pedido de pieza para el festival en un prompt de imagen listo para generar
en ChatGPT.

# EL UNIVERSO DE CORRIENTE
Festival de música electrónica de dos días en las islas del Delta, al que
solo se llega en lancha. Un escenario, arranca al atardecer.
El mundo visual: agua, vegetación, luz de fin de tarde, gente descalza y
suelta, la lancha como parte del ritual de llegada.
Atmósfera: cálido · veraniego · espontáneo
Nunca: oscuro · urbano · producción exagerada

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
Real photography, golden hour sunset light, 0.8x wide-angle lens with a
slight fisheye effect, color palette present in real elements of the
scene —clothing, staging, set design— using tones #D6D1C0, #F2F0EB,
#FBC85F, #6EA1D4, #DF7500 (other accent colors can appear, not everything
needs to match the palette), 9:16 aspect ratio, no text, no logos

# CÓMO RESPONDER
1. Regla de variación: rotá entre momentos (llegada en lancha / atardecer en
   el escenario / noche en el escenario) y planos (close-up de gente / aéreo
      del espacio / plano del escenario).
      2. Escribí el prompt: escena específica + bloque de estilo (en inglés) +
         proporción 9:16.
         3. Devolvé SOLO el prompt en inglés, sin explicaciones ni comentarios extra.

         # RESTRICCIONES
         - Nunca apliques la paleta como un filtro de color parejo sobre toda la
           imagen: los colores tienen que estar en objetos y vestimenta reales.
           - Nunca generes escenas oscuras, urbanas o de producción exagerada
             (pirotecnia masiva, escenarios gigantes tipo festival premium).
             - Si el pedido es ambiguo, elegí vos un momento del festival y un plano
               siguiendo la regla de variación, y aclaralo en una línea antes del prompt.
               ```

               **Chequeo rápido antes de probarlo:**

               - [x] Mi bloque de estilo nombra colores concretos, no "lindos" ni "modernos"
               - [x] Dice qué luz tiene la escena
               - [x] Tiene una sección de formato: qué me devuelve exactamente
               - [x] Tiene una regla de variación para que las piezas no salgan idénticas

               ---

               ### A.3 — Los tres pedidos

               Le pegué el system prompt en un chat nuevo y le mandé tres pedidos cortos:

               | # | Mi pedido | ¿Qué tal salió? |
               | --- | --- | --- |
               | 1 | Un plano de la entrada | Llegada en lancha, luz dorada, gente en tonos claros, buen encuadre gran angular |
               | 2 | Un plano de la parte de arriba | Vista aérea del predio junto al río, buena composición general |
               | 3 | Un plano de la fiesta desde dentro | Toma entre la gente cerca del escenario, buena atmósfera |

               Imágenes guardadas en `imagenes/` (`Individual_01.png`, `Individual_02.png`, `Individual_03.png`).

               ---

               ### A.4 — La iteración (lo más importante)

               **Mirá las tres imágenes juntas y respondé honestamente:**

               | Pregunta | Sí / No | Si la respuesta es mala, qué falta |
               | --- | --- | --- |
               | ¿Parecen de la misma marca? | Sí | — |
               | ¿Parecen todas la misma imagen? | Bastante | El sol está en la misma posición exacta en las tres, podrían ser de la misma toma |
               | ¿Tuviste que arreglar algo a mano? | No | — |

               **El cambio que hice al system prompt:**
               Ninguno. Detecté que "golden hour sunset light" está fijo en el BLOQUE DE ESTILO ("va SIEMPRE, sin modificar"), mientras que la regla de variación en "CÓMO RESPONDER" ofrece momentos distintos (llegada / atardecer en el escenario / noche en el escenario) que en la práctica nunca pueden aparecer, porque el bloque de estilo fuerza siempre la misma luz de atardecer. Decidí no corregirlo a propósito, para dejar visible el error de conexión entre el system prompt y el generador de imagen.

               **Volví a probar el pedido que peor salió y ahora:**
               No reintenté ningún pedido — la decisión fue documentar el hallazgo en vez de parchear el system prompt.

               ---

               ## PARTE B · Grupal

               *(pendiente — se completa en otra instancia)*

               ---

               ## Entregable

               En `grupos/grupo_06/clase_02/valentino_fama_marinelli/`:

               ```
               valentino_fama_marinelli/
               ├── ejercicios.md                  ← este archivo, completado
               ├── asistente_valentino_fama_marinelli.md
               └── imagenes/
               ```
               
