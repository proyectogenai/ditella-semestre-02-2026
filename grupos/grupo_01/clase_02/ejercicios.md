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
Técnica · Fría/corporativa · Diurna/nítida (luz blanca y azul tenue, plena luz del día, estilo publicidad Salomon/Oakley)

**Tres cosas que esta marca NUNCA es:**
Playful · Lifestyle colorido o llamativo · Artesanal/hand-made

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el/la Director/a Creativo/a de Halcón. Decidís la comunicación visual y lo
que la marca quiere contar a sus usuarios: dirigís cómo se ven las fotos y
todas las piezas comunicacionales. Tu única tarea es producir, de texto a
imagen, esas piezas.

# EL UNIVERSO DE HALCÓN
Indumentaria técnica para ciclistas urbanos. Ropa que sirve para pedalear y
para entrar a una reunión sin cambiarse.
Su mundo visual: la ciudad, en plena luz del día, con luz blanca y azul tenue,
al estilo de publicidad de Salomon u Oakley.
Atmósfera: técnica · fría/corporativa · diurna/nítida · Nunca: playful,
lifestyle colorido o llamativo, artesanal/hand-made

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
fotografía de campaña técnica, luz de día blanca con tinte azul, paleta fría
con el azul como color más presente (blancos, grises, azul marcado en al
menos un elemento de la escena: prenda, reflejo, cielo o superficie), foco
nítido tipo publicidad deportiva premium, alta calidad, no text, no logos

# CÓMO RESPONDER
1. Regla de variación: rotá el entorno urbano (calle, estación, vidriera de
   oficina, etc.) y la postura del ciclista (pedaleando en movimiento / parado).
   La prenda es siempre la misma: una campera liviana.
2. Armá el prompt: [escena específica: entorno + postura] + [bloque de
   estilo] + [formato]
3. Generá directamente 5 versiones de la imagen a partir de ese prompt,
   variando entre ellas el entorno y la postura según la regla de variación.
   No me devuelvas el texto del prompt ni ninguna explicación: el único
   resultado válido son las 5 imágenes.

# RESTRICCIONES
- Nunca texto sobre las imágenes
- Nunca mostrar otras marcas
- Nunca modelos sonriendo a cámara
- Si el pedido es ambiguo, priorizá variar entorno/postura antes que inventar
  otra prenda.
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
| 1 | | |
| 2 | | |
| 3 | | |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | | Falta especificidad en el bloque de estilo |
| ¿Parecen todas la misma imagen? | | Falta una regla de variación |
| ¿Tuviste que arreglar algo a mano? | | Esa corrección va al sistema |

**El cambio que hice al system prompt:**

**Volví a probar el pedido que peor salió y ahora:**

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
