# Dudas — Liz Park · Repaso Clase 02

## Lo que menos me quedó claro: Cómo aprenden los LLMs

**Duda original:** No termino de entender cómo aprenden los modelos de lenguaje.

**Lo que repasamos:**
- Un LLM se entrena con una cantidad enorme de texto y aprende a predecir la siguiente palabra (token). No "entiende" el significado — detecta patrones estadísticos.
- El proceso: datos masivos → predicción de la siguiente palabra → corrección → repetición millones de veces.
- Después del entrenamiento base hay RLHF (feedback humano) que ajusta las respuestas según lo que los humanos califican como bueno o malo.
- Los pesos del modelo no cambian con la conversación — por eso no se acuerda de nada cuando se cierra el chat.

**Lo que quedó claro:**
- La diferencia entre escribir un prompt y diseñar un sistema.
- Las 5 partes de un system prompt (rol, contexto, tarea, formato, restricciones).
- La importancia de la regla de variación (caso Nocturna).
- La iteración: cuando algo sale mal, arreglar el sistema, no el resultado.
- Que un sistema que solo funciona para quien lo escribió no es un sistema.

## Repaso completo — preguntas y respuestas

1. **¿Por qué el modelo no se acuerda de nada?** Porque no tiene memoria persistente — los pesos del modelo no cambian con la conversación, y cuando se cierra el chat, la secuencia desaparece.

2. **¿Por qué cobran por token y no por palabra?** Porque el modelo procesa en tokens (pedacitos de texto, no palabras exactas). Prompts más largos consumen más tokens, cuestan más y ocupan más espacio en la ventana de contexto.

3. **Las 5 partes de un prompt:** Rol, contexto, tarea, formato, restricciones. La que más se olvida es formato.

4. **Técnica elegida: chain-of-thought** — pedirle al modelo que razone paso a paso antes de dar la respuesta final. Mejora la calidad porque obliga a "pensar en voz alta".

5. **Iteración del asistente de Corriente:** No hizo falta corregir — funcionó a la primera gracias a la regla de variación de encuadres. Si hubiera salido mal, lo primero que hubiera tocado es la paleta de colores (pink + green), que es el ancla visual de la marca.

6. **Diferencia entre prompt y sistema:** Un prompt resuelve un pedido; un sistema resuelve todos los pedidos futuros de ese tipo.

7. **Lección de Nocturna:** Sin lista de encuadres, siempre salía lo mismo. La regla de variación se integra al sistema, no se pide en el chat.

8. **¿Qué no es un sistema?** Uno que solo funciona en las manos de quien lo escribió — las reglas no son lo suficientemente claras como para que cualquiera las use.
