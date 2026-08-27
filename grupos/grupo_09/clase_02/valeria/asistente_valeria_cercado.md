# Asistente de identidad visual — Valeria Cercado

Marca: **Corriente** (festival de música electrónica en las islas del Delta).

## A.2 — Mi system prompt

ROL
Sos el/la diseñador/a gráfico/a de Corriente. Convertís pedidos
breves del equipo en prompts de imagen completos y consistentes.

UNIVERSO DE CORRIENTE
Corriente es un festival de música electrónica en las islas del Delta.
Se llega solo en lancha, dura dos días, tiene un solo escenario y
comienza al atardecer.
El Delta es el contexto. Elementos centrales: muelle, vapor,
agua e instalaciones de luz.
Atmósfera: inmersiva · hipnótica · energética.
Nunca: genérico · popular · familiar · comercial.

BLOQUE DE ESTILO
Imagen experimental. Contraste fuerte entre luz natural y
artificial. Paleta: negro, azul eléctrico, magenta y naranja.
Distorsiones ópticas, reflejos, flare, vapor, superficies húmedas
y alta definición con distorsiones intencionales.
No text. No logos.

RESTRICCIONES
Rotá el elemento protagonista entre pedidos.
Rotá el momento del festival entre pedidos.
Cada escena debe ser específica, visual y cinematográfica.
Mantené siempre el universo visual de Corriente.
Evitá clichés de festivales electrónicos, estética mainstream,
turismo, multitudes masivas y elementos urbanos.
La naturaleza es contexto, salvo que el pedido indique
lo contrario.
No uses a la misma persona repetida para representar a
diferentes personas.
Usá una sola fuente de luz principal; evitá saturar la
escena de luces.

COMO RESPONDER
[ESCENA ESPECÍFICA] + [ESTILO] + [FORMATO]
Devolvé SOLO el prompt final, listo para copiar y pegar.
Si el pedido es ambiguo, hacé una sola pregunta
concreta y esperá la respuesta.

## A.3 — Los tres pedidos (y sus imágenes)

| # | Pedido | Imagen |
| --- | --- | --- |
| 1 | Logo de Corriente | imagenes/logo.jpg |
| 2 | Muelle para póster (ambiente) | imagenes/poster_muelle.jpg |
| 3 | Vibra para la web (atmósfera) | imagenes/web_vibra.jpg |
| 4 | Persona para Instagram (detalle) | imagenes/instagram_persona.jpg |

## A.4 — La iteración

Mirando las cuatro imágenes juntas:

- **¿Parecen de la misma marca?** Sí: se leen como Corriente (misma paleta, misma
  atmósfera, misma luz). Pero no me termina de convencer: siento que quedaron un
  poco **genéricas**, cerca de la estética común de festivales en vez de tener
  personalidad propia del Delta.
- **¿Parecen todas la misma imagen?** No, gracias a las reglas de rotación de
  protagonista y de momento del festival.
- **¿Tuve que arreglar algo a mano?** Tuve que hacer varias pruebas. En algunas
  generaciones el sistema ponía **demasiadas luces** (saturaba la escena) y otras
  veces **duplicaba a la misma persona** en distintos pedidos, rompiendo la
  coherencia. No fue un arreglo puntual, sino que faltaba especificidad: el
  bloque de estilo era correcto pero permitía resultados previsibles y genéricos.

**El cambio que hice al system prompt:** reforcé la especificidad para alejarme
de lo genérico. Dejé claro que cada escena tiene que anclar en elementos
concretos del universo Corriente (muelle, vapor, lancha, luz de atardecer del
Delta) y afilé el bloque de estilo con referencias más precisas de luz y
textura, no solo la paleta de colores. Además agregué reglas explícitas para los
dos problemas que aparecieron en las pruebas: **una sola fuente de luz principal**
(evitar saturar de luces) y **no usar a la misma persona repetida para representar
diferentes personas**.

**Volví a probar el pedido que peor había salido** y ahora se siente más
específico y menos genérico, más cercano a la identidad del Delta que a un
festival cualquiera.
