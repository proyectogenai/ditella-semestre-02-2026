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

**Marca elegida:** Bruma (café de especialidad en Palermo)

**En dos líneas, qué es:**
Bruma es un punto de encuentro, un lugar al paso en el que distintos vecinos
del barrio se encuentran para disfrutar de un café y seguir camino.

**Tres adjetivos de su atmósfera:**
social · energética · cotidiana

**Tres cosas que esta marca NUNCA es:**
mesas · sillas · frío

---

## A.2 — Mi system prompt

```
# ROL
Sos el fotógrafo de marca de Bruma. Tu única tarea es convertir los pedidos cortos del equipo en prompts de imagen completos y consistentes.

# EL UNIVERSO DE BRUMA
Bruma es un café de especialidad en Palermo. Es un punto de encuentro al paso: no hay mesas ni sillas, solo barra y una ventana grande que da a la calle.
Su mundo visual es un interior cálido visto desde una vereda fría: luz ámbar, ventanales grandes, pared verde, gente tomando café de pie.
Atmósfera: social, energética, cotidiana. Nunca: mesas, sillas, frío.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
35mm photography, direct daylight, amber, dark green, sage and concrete palette, sharp focus, high resolution, no text, no logos

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos: plano general, plano medio.
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato]
3. Si el pedido es de ambiente, generá 2 imágenes. Si es de producto, generá 1.
4. Devolvé SOLO el prompt final en español, en un bloque de código. Sin explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca incluyas mesas en la imagen.
- Nunca incluyas sillas en la imagen.
- Nunca uses luz fría como luz principal.
- Si el pedido es ambiguo, elegí vos y avanzá. No preguntes.
```

**Chequeo rápido antes de probarlo:**

- [x] Mi bloque de estilo nombra **colores concretos**, no "lindos" ni "modernos"
- [x] Dice qué **luz** tiene la escena
- [x] Tiene una sección de **formato**: qué me devuelve exactamente
- [x] Tiene una **regla de variación** para que las piezas no salgan idénticas

---

## A.3 — Los tres pedidos

Abrí un chat nuevo, pegá tu system prompt y mandale tres pedidos cortos y de
naturaleza distinta.

| # | Mi pedido | ¿Qué tal salió? |
| --- | --- | --- |
| 1 | Imagen del post de apertura | OK — salió bien de una |
| 2 | Algo para anunciar el café del día | OK — salió bien de una |
| 3 | Foto de ambiente para el feed | Iterar — mostraba el local desde adentro con consumidores adentro, pero el concepto es take away (el cliente está afuera en la vereda) |

Guardá las imágenes en `imagenes/` con nombres claros (`martina_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | — |
| ¿Parecen todas la misma imagen? | No | — (variaron bien por la regla de rotación de encuadres) |
| ¿Tuviste que arreglar algo a mano? | Sí | La imagen de ambiente mostraba gente adentro del local, pero Bruma es take away |

**El cambio que hice al system prompt:**
Modifiqué el contexto de "El Universo de Bruma" para aclarar que el local funciona como un mostrador: el cliente está afuera en la vereda y el empleado atiende desde adentro. Eso ya estaba, pero no era lo suficientemente explícito — lo reforcé para que el modelo entendiera que nunca hay personas del lado de adentro del local.

**Volví a probar el pedido que peor salió y ahora:**
La imagen mostró correctamente a la persona en la vereda mirando hacia adentro, sin consumidores dentro del local.

---

# PARTE B · Grupal

## B.1 — La marca del grupo

**Marca elegida y por qué:**
Bruma — elegimos Bruma porque dos de las tres ya la habían trabajado individualmente (Clementina y Martina), tenía una identidad visual clara y el concepto de "Graphic Maximalism" con colores bold y rayas contrastantes daba mucho juego para las imágenes. Delfina había trabajado una marca propia de empanadas, pero para el asistente grupal unificamos en Bruma.

## B.2 — Qué tomamos de cada asistente

| De quién | Qué le tomamos | Por qué |
| --- | --- | --- |
| Clementina | El estilo gráfico ("Graphic Maximalism") y las rayas bold con patrones de dos colores contrastantes | Definían la identidad visual de Bruma de forma muy clara |
| Delfina | Algo de composición | Su enfoque de encuadres y simplificación sumaba aunque la marca era distinta |
| Martina | La tipología de productos y los formatos de imagen | Tenía el prompt más ordenado y con buena estructura de respuesta |

**Qué decidimos dejar afuera y por qué:**
Los elementos que no correspondían a Bruma (food photography, luz suave de ventana, mesa de madera, empanadas) — eran de la marca de Delfina y no aplicaban al universo visual del café.

## B.3 — La prueba cruzada

Cada integrante, desde **su propia compu** y en un **chat limpio**:

| Integrante | Su pedido (tipo) | Imagen |
| --- | --- | --- |
| Martina | ambiente exterior con personas | Imagen 1.jpeg |
| Clementina | close up producto | Imagen 2.png |
| Delfina | ambiente desde adentro hacia la vereda | Imagen 3.jpeg |

**Las tres imágenes juntas, ¿parecen de la misma marca?**
Sí, las tres parecen de Bruma.

**Si no: ¿qué regla le falta al asistente del grupo?**
La de contenido: el asistente no tenía una regla explícita sobre que el local es take away y que nunca se muestra gente del lado de adentro. Delfina, al pedir "ambiente desde adentro hacia la vereda", generó una imagen con consumidores dentro del local — algo que no podría pasar en Bruma. Esa regla faltaba en el asistente grupal y se resolvió reforzando el contexto de que el cliente siempre está afuera en la vereda.

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
