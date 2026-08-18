# Clase 2 · Ejercicios

**Copiá este archivo a tu carpeta de grupo antes de empezar:**

```
cp clases/clase_02/ejercicios.md grupos/grupo_XX/clase_02/
```

Después completalo ahí. Es tu hoja de trabajo de la clase y parte del
entregable.

> 🎓 **Recordá cómo pedirle al agente.** Lo mecánico (comandos, errores,
> crear carpetas) que lo resuelva él. Lo que es criterio de diseño lo escribís
> vos, y él te guía con preguntas. Si querés trabajar así, pegale esto al
> inicio del chat:
> *"Trabajemos en modo tutor: guiame de a un paso por vez, hacéme las preguntas
> que necesites y esperá mi respuesta antes de seguir. No escribas por mí las
> partes que son decisión de diseño."*

---

# PARTE A · Individual

## A.1 — Mi marca

**Marca elegida:** Halcón

**En dos líneas, qué es:**
Indumentaria técnica para ciclistas urbanos. Ropa que sirve para pedalear y para entrar a una reunión sin cambiarse.

**Tres adjetivos de su atmósfera:**
Versátil, Moderna, Dinámica

**Tres cosas que esta marca NUNCA es:**
Estática, Antigua, Descartable

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el director de comunicación y publicidad de Halcón. Tu única tarea es convertir pedidos cortos del equipo en prompts de imagen completos y consistentes para vía pública y redes sociales.

# EL UNIVERSO DE HALCÓN
Indumentaria técnica para ciclistas urbanos. Ropa que sirve para pedalear y para entrar a una reunión sin cambiarse.
Su mundo visual es la versatilidad de una persona ocupada, entrena, trabaja, y no tiene tiempos muertos.
Atmósfera: Versátil, Moderna, Dinámica · Nunca: Estática, Antigua, Descartable.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
cinematic photography, night office interior lit by warm red neon light, deep black shadows with red rim light, bold yellow accents on the clothing, soft film grain, 35mm lens, shallow depth of field, no text, no logos, natural unposed composition

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos, y decidí si la escena es por la mañana (entrando a una reunión post pedaleo) o de noche (saliendo de la reunión directo a andar en bicicleta):
   - vista desde adentro de la oficina a través del vidrio
   - detalle de partes del cuerpo con la ropa puesta en movimiento
   - persona de espaldas entre autos en la calle
   - plano general de la ciudad con contraste entre oficinas y deportistas

2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato]
3. Devolvé SOLO el prompt final en inglés, en un bloque de código. Sin explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca uses colores fuera de la paleta (roja, negra y amarilla)
- Nunca uses estilos precarios o de bajo poder adquisitivo
- Si el pedido es ambiguo, preguntame lo que tengas dudas y utilizá mi respuesta para avanzar.
```

**Chequeo rápido antes de probarlo:**

- [ ] Mi bloque de estilo nombra **colores concretos**, no "lindos" ni "modernos"
- [ ] Dice qué **luz** tiene la escena
- [ ] Tiene una sección de **formato**: qué me devuelve exactamente
- [ ] Tiene una **regla de variación** para que las piezas no salgan idénticas

---

## A.3 — Los tres pedidos

Abrí un chat nuevo, pegá tu system prompt y mandale tres pedidos cortos y de
naturaleza distinta.

| # | Mi pedido | ¿Qué tal salió? |
| --- | --- | --- |
| 1 | Cartel de vía pública orientado a ciclistas | Salió bien, fiel a la marca |
| 2 | Posteo de Instagram | Salió bien, fiel a la marca |
| 3 | Portada de newsletter | Salió bien, fiel a la marca |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | Falta especificidad en el bloque de estilo |
| ¿Parecen todas la misma imagen? | No | Falta una regla de variación |
| ¿Tuviste que arreglar algo a mano? | No | Esa corrección va al sistema |

**El cambio que hice al system prompt:**
No hizo falta cambiar nada: las tres piezas salieron de la misma marca
(rojo, negro y amarillo, luz de neón rojo) sin repetirse entre sí, gracias
a la regla de variación que rota los encuadres.

**Volví a probar el pedido que peor salió y ahora:**
No hubo un pedido que saliera peor: los tres quedaron parejos en calidad y
fidelidad a la marca.

---

# PARTE B · Grupal

## B.1 — La marca del grupo

**Marca elegida y por qué:**

## B.2 — Qué tomamos de cada asistente

| De quién | Qué le tomamos | Por qué |
| --- | --- | --- |
| | | |
| | | |
| | | |

**Qué decidimos dejar afuera y por qué:**

## B.3 — La prueba cruzada

Cada integrante, desde **su propia compu** y en un **chat limpio**:

| Integrante | Su pedido (tipo) | Imagen |
| --- | --- | --- |
| | ambiente | |
| | detalle | |
| | anuncio | |

**Las tres imágenes juntas, ¿parecen de la misma marca?**

**Si no: ¿qué regla le falta al asistente del grupo?**

> Esta última pregunta es la que se va a evaluar en el parcial, pero con la
> skill de **otro grupo**. Un sistema que solo funciona en las manos de quien
> lo escribió no es un sistema.

---

# Entregable

En `grupos/grupo_XX/clase_02/`:

```
clase_02/
├── ejercicios.md                  ← este archivo, completado
├── asistente_nombre_apellido.md   ← uno por integrante (3)
├── asistente_grupal.md
└── imagenes/
```

Y el push de siempre:

```
git pull
git add grupos/grupo_XX/
git commit -m "grupo XX: clase 02"
git push
```
