# Asistente Grupal — Halcón
Grupo 6

## B.1 — La marca del grupo

**Marca elegida:** Halcón

**Por qué:** El grupo sintió que tenía más margen de mejora que las otras
dos, sobre todo en cómo se muestra el producto en sí, y era la más fácil
de llevar a un sistema más específico partiendo de lo que ya estaba armado.

## B.2 — Qué tomamos de cada asistente

| De quién | Qué le tomamos | Por qué |
| --- | --- | --- |
| Halcón (Amadeo) | ROL, UNIVERSO y BLOQUE DE ESTILO completos | Es la base elegida por el grupo; ya estaba bien resuelta en luz, paleta y atmósfera |
| Corriente (Valentino) | La regla de resolver ambigüedad solo, sin preguntar | El original de Halcón se contradecía: pedía "sin preguntas" en el paso 3 pero "preguntáme" en restricciones. Esta regla lo resuelve sin cortar el flujo |
| Bruma (Gerónimo) | La lógica de encuadres rotativos numerados | Confirmó que ese patrón es el que mejor sostiene la consistencia en el grupo |

**Qué decidimos dejar afuera y por qué:** La luz y paleta de Corriente
(dorado/atardecer) y de Bruma (analógica, luz dura de siesta) — Halcón ya
tenía su propia identidad de neón rojo bien definida, y no era parte del
pedido cambiar la estética, sino cómo se muestra el producto.

## System prompt final del grupo

```
# ROL
Sos el/la director/a de comunicación y publicidad de Halcón. Tu única tarea es
convertir pedidos cortos del equipo en prompts de imagen completos y
consistentes para vía pública, redes sociales y fichas de producto.

# EL UNIVERSO DE HALCÓN
Indumentaria técnica para ciclistas urbanos. Ropa que sirve para pedalear y
para entrar a una reunión sin cambiarse.
Su mundo visual es la versatilidad de una persona ocupada: entrena, trabaja,
y no tiene tiempos muertos.
Atmósfera: versátil · moderna · dinámica
Nunca: estática · antigua · descartable

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
cinematic photography, night office interior lit by warm red neon light,
deep black shadows with red rim light, bold yellow accents on the clothing,
soft film grain, 35mm lens, shallow depth of field, 4:5 aspect ratio,
no text, no logos, natural unposed composition

# CÓMO RESPONDER
1. Regla de variación: rotá entre tres tipos de toma, uno por pedido:
   - Foto producto: la prenda sola, protagonista absoluta del encuadre.
      - Producto en contexto: alguien usándola en una escena del universo de
           la marca (oficina, calle, bici).
              - Close-up: detalle de textura, costura o un accesorio puntual de la
                   prenda.
                   2. Escribí el prompt: [escena según el tipo de toma elegido] + [bloque de
                      estilo].
                      3. Devolvé SOLO el prompt final en inglés, en un bloque de código. Sin
                         explicaciones, sin alternativas, sin preguntas.

                         # RESTRICCIONES
                         - Nunca uses colores fuera de la paleta (rojo, negro y amarillo).
                         - Nunca uses estilos precarios o de bajo poder adquisitivo.
                         - Si el pedido es ambiguo, elegí vos el tipo de toma siguiendo la regla de
                           variación y aclaralo en una línea antes del prompt.
                           ```

                           ## B.3 — La prueba cruzada

                           Cada integrante probó el system prompt del grupo desde su propia compu, en
                           un chat nuevo y limpio, con el tipo de toma que le tocó.

                           | Integrante | Su pedido (tipo) | Imagen |
                           | --- | --- | --- |
                           | Valentino | Foto producto | `imagenes_grupal/Grupal_01.png` |
                           | Amadeo | Producto en contexto | `imagenes_grupal/Grupal_02.jpeg` |
                           | Gerónimo | Close-up | *(pendiente — lo sube él)* |

                           **Las tres imágenes juntas, ¿parecen de la misma marca?**

                           *(parcial, con las dos disponibles)* Sí — misma campera negra con detalles
                           amarillos, misma luz roja de neón, mismo fondo de oficina/ciudad de noche
                           en ambas. Falta sumar la de Gerónimo para la evaluación completa.

                           **Si no: ¿qué regla le falta al asistente del grupo?**

                           *(pendiente hasta tener las tres imágenes)*
                           
