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

**Marca elegida:** Corriente

**En dos líneas, qué es:** Corriente ofrece cocina argentina contemporánea y vinos elegidos, dentro de un universo urbano, creativo y experimental. Se siente sofisticada pero descontracturada: una noche de barrio con diseño, movimiento y un toque inesperado.

**Tres adjetivos de su atmósfera:** íntima, vibrante, cosmopolita

**Tres cosas que esta marca NUNCA es:** acartonada (nunca solemne o pretenciosa), genérica (nunca platos predecibles ni tendencias copiadas), estridente (nunca luces agresivas ni comunicación para llamar la atención a cualquier costo)

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el director creativo visual de Corriente. Tu única tarea es convertir
pedidos cortos del equipo en imágenes que vendan la experiencia completa
de una noche en el restaurante: la luz, la arquitectura, los platos, el
vino y la energía de una noche en movimiento.

# EL UNIVERSO DE CORRIENTE
Corriente ofrece cocina argentina contemporánea y vinos elegidos, dentro
de un universo urbano, creativo y experimental. Se siente sofisticada
pero descontracturada: una noche de barrio con diseño, movimiento y un
toque inesperado.
Su mundo visual: espacios industriales con materiales nobles, mesas de
madera y acero, copas con reflejos, humo de cocina, gente compartiendo
platos. Luz baja y cálida de lámparas de mesa, sombras profundas,
ruido de copas y conversaciones.
Atmósfera: íntima, vibrante, cosmopolita · Nunca: acartonada, genérica,
estridente.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
fotografía editorial-documental, paleta de ámbar quemado #B86B35, bordó
vino #641F2B, verde oliva oscuro #424536, grafito #272727 y crema tostado
#D6C4A7; luz lateral cálida de baja intensidad, sombras profundas y
reflejos suaves sobre copas y acero; lente 35 mm con grano analógico
sutil y negros ligeramente lavados; escenas espontáneas cuidadosamente
compuestas, sofisticadas pero nunca rígidas ni publicitarias; no text,
no logos, no watermarks

# CÓMO RESPONDER
1. Elegí UN tipo de escena de esta lista, rotando entre pedidos para que
   las piezas no se parezcan entre sí:
   - un plato compartido en primera persona con la mesa de fondo
   - la barra del restaurante con copas y movimiento de fondo
   - una mesa con gente disfrutando, vista desde afuera hacia adentro
2. Escribí el prompt: [escena específica] + [bloque de estilo] + formato
   horizontal 16:9
3. Devolvé SOLO el prompt final en inglés, en un bloque de código, sin
   explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca incluir texto, títulos, carteles, logos ni marcas de agua.
- Nunca usar flash frontal, luz blanca intensa, colores saturados ni
  apariencia digital ultranítida.
- Nunca mostrar personas posando, sonrisas a cámara o composiciones
  demasiado perfectas (nada de estética de banco de imágenes).
- Nunca mostrar un lujo solemne o pretencioso; Corriente debe sentirse
  sofisticado pero relajado.
- La comida debe verse real, artesanal y apetecible, nunca plástica ni
  excesivamente producida.
- Mantener la paleta, iluminación, lente y textura definidas en todas
  las imágenes de la serie.
- Si el pedido es ambiguo, elegí vos y avanzá. No preguntes.
```

**Chequeo rápido antes de probarlo:**

- [x] Mi bloque de estilo nombra **colores concretos** (#B86B35, #641F2B, #424536, #272727, #D6C4A7), no "lindos" ni "modernos"
- [x] Dice qué **luz** tiene la escena (luz lateral cálida de baja intensidad, sombras profundas)
- [x] Tiene una sección de **formato**: me devuelve solo el prompt en inglés, 16:9
- [x] Tiene una **regla de variación** (tres tipos de escena que rotan)

---

## A.3 — Los tres pedidos

Abrí un chat nuevo, pegá tu system prompt y mandale tres pedidos cortos y de
naturaleza distinta.

| # | Mi pedido | ¿Qué tal salió? |
| --- | --- | --- |
| 1 | Una mesa con gente compartiendo una cena | Quedó cálida, espontánea y con mucho movimiento. La vista desde afuera y los reflejos del vidrio transmiten una noche íntima y activa. |
| 2 | Un plato en primer plano con una copa de vino | Quedó más cercana y sensorial. La comida se ve artesanal y apetecible, mientras que la copa, las manos y la luz mantienen la energía compartida. |
| 3 | La fachada del restaurante de noche | Quedó urbana, sobria y atractiva. La arquitectura industrial contrasta con la calidez y el movimiento del interior. |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | Comparten paleta, iluminación cálida, textura analógica y atmósfera sofisticada pero relajada. |
| ¿Parecen todas la misma imagen? | No | Salieron distintas: una muestra el ambiente, otra el detalle gastronómico y otra la fachada. |
| ¿Tuviste que arreglar algo a mano? | No | — |

**El cambio que hice al system prompt:** Ninguno. El bloque de estilo mantuvo la coherencia sin limitar la variedad de escenas. La regla de variación (tres tipos de escena que rotan) funcionó desde el inicio.

**Volví a probar el pedido que peor salió y ahora:** No hizo falta: los tres pedidos salieron de la misma marca y distintos entre sí (ambiente / detalle / fachada).

---

# PARTE B · Grupal

## B.1 — La marca del grupo

**Marca elegida y por qué:** Bruma. Es la marca con el sistema visual más completo y detallado: tiene identidad gráfica propia (personaje cartoon), paleta definida, universo visual claro (fachada, ventanilla, vereda, barista) y restricciones específicas que el modelo puede entender. Un sistema con ese nivel de detalle tiene más chances de funcionar para cualquiera, no solo para quien lo escribió — y eso es justamente lo que se evalúa en la prueba cruzada.

## B.2 — Qué tomamos de cada asistente

| De quién | Qué le tomamos | Por qué |
| --- | --- | --- |
| Priscila | El universo completo de Bruma (fachada, ventanilla, vereda, barista, cliente siempre afuera) y las restricciones específicas de la marca | Es la base de todo: sin ese mundo visual detallado, el modelo no sabe qué dibujar |
| Naomi | La paleta con hexadecimales (#8B6914, #5BA4CF, #F5E6C8), la técnica fotográfica (editorial, grano analógico, 35mm) y la regla de variación (3 escenas que rotan) | Los colores hexadecimales son más precisos que "marrón y celeste"; la regla de variación evita que las imágenes salgan todas iguales |
| Liz | Las restricciones en inglés (el modelo de imagen responde mejor) y la regla "si el pedido es ambiguo, elegí y avanzá" | El inglés es la lengua nativa de los modelos de imagen; la regla de ambigüedad evita que el asistente frene el flujo de trabajo |

**Qué decidimos dejar afuera y por qué:**

- El personaje cartoon de Priscila: es un logo/mascota, no un elemento de prompt de imagen. Si aparece en el prompt, el modelo lo va a meter en todas las fotos y arruina la identidad editorial.
- Todo lo que dice de restaurante/festival (los asistentes individuales de Naomi y Liz eran de Corriente, no de Bruma): no aplica a la marca.
- El formato 16:9 horizontal de Naomi: lo reemplazamos por [formato] para que cada quien decida según la pieza (1:1 para feed,9:16 para stories).

## B.3 — La prueba cruzada

Cada integrante, desde **su propia compu** y en un **chat limpio**:

| Integrante | Su pedido (tipo) | Imagen |
| --- | --- | --- |
| Liz | ambiente de Bruma desde la vereda | grupal_01.png |
| Naomi | detalle de alguien recibiendo café por la ventanilla | grupal_02.jpeg |
| Priscila | anuncio de Bruma en Instagram | grupal_03.jpeg |

**Las tres imágenes juntas, ¿parecen de la misma marca?**

Sí. Las tres comparten la paleta (marrón, celeste, crema), la luz natural cálida, la estética editorial y la atmósfera sofisticada pero relajada. Aunque cada una pidió algo distinto (ambiente / detalle / anuncio), el sistema visual se mantuvo coherente.

**Si no: ¿qué regla le falta al asistente del grupo?**

No hace falta: el asistente funcionó para las tres personas, cada una desde su propia compu y en un chat limpio.

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
