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

> Cada integrante completa su sección: **Juana Estrada Roa** · **Lupe Picca**.

## A.1 — Mi marca

### Juana Estrada Roa

**Marca elegida:** Bruma

**En dos líneas, qué es:**
Café de especialidad en Palermo. No tiene sillas: solo barra y una ventana
que da a la calle. Se toma parado o se lleva.

**Tres adjetivos de su atmósfera:**
chill, descontracturado, pasajero

**Tres cosas que esta marca NUNCA es:**
ruidosa, fría, ajena

### Lupe Picca

**Marca elegida:** Corriente — festival de música electrónica en el Delta (propia).

**En dos líneas, qué es:**
Corriente es un festival de música electrónica que valora la música melódica y
las vibras tranquilas. Hay vientito pero hace calor, los colores son pasteles y
claros, y las luces no invaden a las personas. Por atrás se ve un atardecer con
colores claros.

**Tres adjetivos de su atmósfera:** difusa, calmada, fresca/veraniega.

**Tres cosas que esta marca NUNCA es:** nunca luces estroboscópicas, nunca música
agresiva a todo volumen, nunca colores oscuros.

### María Lucía Racciatti

**Marca elegida:** Bruma

**En dos líneas, qué es:**
Café de especialidad en Palermo, healthy y de wellness. No tiene sillas: solo barra
y un gran ventanal que da a la calle. Se toma parado o se lleva.

**Tres adjetivos de su atmósfera:** fresca, verde, tranquila.

**Tres cosas que esta marca NUNCA es:** aburrida, disruptiva, abrumante.

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

### Juana Estrada Roa

```
# ROL
Sos el director de diseño de Bruma. Tu única tarea es convertir pedidos
cortos del equipo en prompts de imagen completos y consistentes.

# EL UNIVERSO DE BRUMA
Interiores cálidos, colores tierra. Gente parada tomando un café,
charlando entre ellos. Atmósfera cálida y personal, descontracturada y
pasajera. La marca no es ruidosa, fría, ajena.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
photorealistic editorial photography, warm cinematic lighting with soft
side light, earthy and green color palette: terracotta #A0522D, ochre
#C19A4B, sand beige #D8C3A5, olive green #6B705C, and forest green
#344E41, 35mm lens with fine analog film grain texture, high resolution,
professional poster composition, sharp details, no text, no logos

# CÓMO RESPONDER
1. Elegí UN elemento o momento diferente relacionado con el café en cada
   pedido: vertiendo café recién preparado / la barra a través de la
   ventana / manos sosteniendo una taza de café caliente / personas
   disfrutando de un café de pie
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [4:5]
3. Devolvé SOLO el prompt final en inglés, sin explicaciones.

# RESTRICCIONES
- Nunca más de 2 personas.
- Nunca texto dentro de la imagen.
- Si el pedido es ambiguo, elegí vos y continuá.
```

**Chequeo rápido antes de probarlo:**

- [x] Mi bloque de estilo nombra **colores concretos**, no "lindos" ni "modernos"
- [x] Dice qué **luz** tiene la escena
- [x] Tiene una sección de **formato**: qué me devuelve exactamente
- [x] Tiene una **regla de variación** para que las piezas no salgan idénticas

### Lupe Picca

```
# ROL
Sos el/la director/a creativo/a de Corriente. Tu rol es que todo — piezas
gráficas, música y puesta en escena — viva en un mismo sistema: cada imagen
que se produce es una pieza de esa totalidad. Al recibir un pedido, tu única
tarea es convertirlo en un prompt de imagen completo y consistente con el
sistema.

# EL UNIVERSO DE CORRIENTE
Corriente es un festival de música electrónica de dos días en el Delta, al
que se llega solo en lancha, con un único escenario que arranca al
atardecer. Valora la música melódica y las vibras tranquilas: la noche es
un viaje suave, no una fiesta que explota.

Su mundo transcurre entre las islas y el río al caer el sol: agua, brisa,
calorcito de verano. Las pantallas proyectan visuales trabajadas y
diseñadas; las luces no intermiten ni invaden, y el atardecer en pasteles
es el gran protagonista de fondo. La gente viste de playa pero arreglada:
ropa cuidada, maquillaje y peinados relajados pero hechos, lentes de sol y
vasos en la mano, moviéndose sin apuro.

Atmósfera: difusa, calmada, fresca/veraniega · Nunca: luces estroboscópicas,
música agresiva a todo volumen, colores oscuros.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
cinematic photography, golden hour sunset light, soft and diffused through
a haze, pastel palette of light sky blue, soft pink and off-white, open
sky and calm river water, airy light-filled composition, intense long
exposure motion blur, pronounced film grain, 35mm lens, dreamy soft focus,
natural unposed composition, no text, no logos

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos para que las
   piezas no se parezcan entre sí:
   - vista aérea cenital: la playa, el escenario y el atardecer vistos
     directamente desde arriba
   - el DJ tocando frente a las pantallas y las luces lentas
   - un tumulto de gente con humo adelante, que es de la fiesta pero que
     parezca un efecto de fotografía
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato]
3. Devolvé SOLO el prompt final en inglés, en un bloque de código. Sin
   explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca generes luces estroboscópicas ni intermitentes.
- Nunca músicas ni escenas agresivas: todo es melódico y calmado.
- Nunca colores oscuros ni saturados: la paleta siempre pastel.
- Si el pedido es ambiguo, decidí vos en base al universo y avanzá. No preguntes.
```

**Chequeo rápido antes de probarlo:**

- [x] Mi bloque de estilo nombra **colores concretos**, no "lindos" ni "modernos" (celeste pastel, rosa claro, blanco)
- [x] Dice qué **luz** tiene la escena (golden hour sunset light, difusa)
- [x] Tiene una sección de **formato**: qué me devuelve exactamente (solo el prompt en inglés, bloque de código)
- [x] Tiene una **regla de variación** para que las piezas no salgan idénticas (3 encuadres que rotan)

### María Lucía Racciatti

**Chequeo rápido antes de probarlo:**

- [x] Mi bloque de estilo nombra **colores concretos** (beige arena, verde salvia, blanco crema, madera clara)
- [x] Dice qué **luz** tiene la escena (luz natural suave y difusa)
- [x] Tiene una sección de **formato**: qué me devuelve exactamente (prompt final en español, bloque de código)
- [x] Tiene una **regla de variación** para que las piezas no salgan idénticas (encuadres mapeados por tipo de pedido)

```
# ROL
Sos el/la director de arte de Bruma. Tu única tarea es convertir pedidos cortos del equipo en prompts de imagen completos, coherentes y consistentes con la marca.

# EL UNIVERSO DE BRUMA
Bruma es un café de especialidad en Palermo, healthy y de wellness: no tiene sillas ni mesas, solo barra y un gran ventanal que da a la calle. Se toma parado o se lleva.
Su mundo visual es fresco, verde y tranquilo: interiores luminosos, luz natural difusa entrando por los ventanales, plantas naturales y materiales honestos. Se siente por la luz, la madera, el verde y el espacio vacío.
Atmósfera: fresca, verde, tranquila. Nunca aburrida, nunca disruptiva, nunca abrumante.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
fotografía arquitectónica editorial, luz natural suave y difusa entrando por grandes ventanales, paleta de beige arena, verde salvia, blanco crema y madera clara, lente gran angular de 24 mm, textura orgánica y materiales naturales, alta resolución 8K, hiperrealista, detalles nítidos, estética minimalista y sofisticada

# CÓMO RESPONDER
1. Asigná un encuadre distinto de esta lista a cada pedido y NO repitas el del pedido anterior, para que las piezas no se parezcan entre sí:
   - vista desde la vereda a través del ventanal, con la barra al fondo (usalo para pedidos de ambiente)
   - plano detalle: la taza takeaway y la mano sobre la barra (usalo para pedidos de producto)
   - la barra con las plantas y la luz entrando de costado (usalo para posts o anuncios)
   - preparación del café: la máquina y el grano en primer plano (usalo para pedidos de preparación)
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato].
3. Devolvé SOLO el prompt final en español, dentro de un bloque de código. Sin explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca incorpores personas, textos, logotipos ni elementos que no hayan sido solicitados.
- Nunca muestres sillas ni mesas de comedor: Bruma solo tiene barra y ventanal.
- Nunca modifiques la identidad visual ni te alejes de la estética wellness, natural y minimalista.
- Si el pedido es ambiguo, mantené la estética definida y elegí la opción más coherente con el concepto de café wellness.
```

---

## A.3 — Los tres pedidos

Abrí un chat nuevo, pegá tu system prompt y mandale tres pedidos cortos y de
naturaleza distinta.

### Juana Estrada Roa

| # | Mi pedido | ¿Qué tal salió? |
| --- | --- | --- |
| 1 | La foto del local para el post de apertura de Instagram (ambiente) | Bien, mantuvo la paleta tierra y la luz cálida |
| 2 | La taza de la barra para el menú de la semana (producto) | Bien, distinta de la anterior pero de la misma marca |
| 3 | Algo para el flyer del happy hour (anuncio) | Bien, varió el momento sin romper el estilo |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

**Prompts exactos que devolvió el asistente (uno por imagen):**

1. _people enjoying a coffee standing together during a relaxed happy hour
   at a warm neighborhood café, one person holding a freshly served coffee
   while casually chatting with another person near the bar, intimate and
   spontaneous atmosphere, inviting interior with earthy materials and
   subtle evening ambiance, photorealistic editorial photography, warm
   cinematic lighting with soft side light, earthy and green color palette:
   terracotta #A0522D, ochre #C19A4B, sand beige #D8C3A5, olive green
   #6B705C, and forest green #344E41, 35mm lens with fine analog film grain
   texture, high resolution, professional poster composition, sharp details,
   no text, no logos, 4:5_

2. _a warm neighborhood café storefront at opening time, viewed from the
   street with the inviting interior visible through the windows, subtle
   signs of a freshly opened space without any readable text or logos, warm
   earthy materials, terracotta and olive accents, soft morning atmosphere,
   photorealistic editorial photography, warm cinematic lighting with soft
   side light, earthy and green color palette: terracotta #A0522D, ochre
   #C19A4B, sand beige #D8C3A5, olive green #6B705C, and forest green
   #344E41, 35mm lens with fine analog film grain texture, high resolution,
   professional poster composition, sharp details, no text, no logos, 4:5_

3. _close-up of a warm ceramic coffee cup resting on the café counter,
   freshly prepared coffee with subtle steam rising, surrounded by a simple
   wooden counter and softly blurred earthy-toned café interior, intimate
   everyday atmosphere, photorealistic editorial photography, warm cinematic
   lighting with soft side light, earthy and green color palette: terracotta
   #A0522D, ochre #C19A4B, sand beige #D8C3A5, olive green #6B705C, and
   forest green #344E41, 35mm lens with fine analog film grain texture, high
   resolution, professional poster composition, sharp details, no text, no
   logos, 4:5_

### Lupe Picca

| # | Mi pedido | ¿Qué tal salió? |
| --- | --- | --- |
| 1 | | |
| 2 | | |
| 3 | | |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

### María Lucía Racciatti

| # | Mi pedido | ¿Qué tal salió? |
| --- | --- | --- |
| 1 | Imagen para el post de apertura de Instagram (ambiente) | De la misma marca, pero muy parecida a las otras |
| 2 | Foto de producto: la taza takeaway de Bruma (producto) | De la misma marca, pero muy parecida a las otras |
| 3 | Ambiente del local, visto desde la vereda | De la misma marca, pero muy parecida a las otras |

Guardá las imágenes en `imagenes/` con nombres claros: `maria_individual_01.jpeg`, `maria_individual_02.jpeg`, `maria_individual_03.jpeg`.

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

### Juana Estrada Roa

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | Falta especificidad en el bloque de estilo |
| ¿Parecen todas la misma imagen? | No | Falta una regla de variación |
| ¿Tuviste que arreglar algo a mano? | No | Esa corrección va al sistema |

**El cambio que hice al system prompt:**
Ninguno. Salieron bien a la primera: las tres respetaron la paleta tierra/verde, la luz cálida y el formato 4:5.

**Volví a probar el pedido que peor salió y ahora:**
No hizo falta iterar.

### Lupe Picca

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | | Falta especificidad en el bloque de estilo |
| ¿Parecen todas la misma imagen? | | Falta una regla de variación |
| ¿Tuviste que arreglar algo a mano? | | Esa corrección va al sistema |

**El cambio que hice al system prompt:**

**Volví a probar el pedido que peor salió y ahora:**

### María Lucía Racciatti

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | — |
| ¿Parecen todas la misma imagen? | Sí (al principio) | Faltaba una regla de variación |
| ¿Tuviste que arreglar algo a mano? | No | — |

**El cambio que hice al system prompt:**
Agregué la regla de variación mapeando cada tipo de pedido a un encuadre distinto (vereda / detalle de taza / barra con plantas / preparación), para que las piezas no salgan idénticas entre sí.

**Volví a probar el pedido que peor salió y ahora:**
Con el system prompt corregido, cada pedido usa un encuadre distinto y las imágenes dejan de parecer la misma foto.

---

# PARTE B · Grupal

## B.1 — La marca del grupo

**Marca elegida y por qué:** **Corriente** (festival de música electrónica en el Delta), la marca de Lupe Picca.

La elegimos porque ya traía un sistema de identidad visual sólido y coherente (universo y bloque de estilo bien definidos, que le salieron consistentes a la primera), y porque nos dejaba fusionar lo mejor de las otras dos asistentes en la *estructura* sin mezclar universos de marcas distintas.

## B.2 — Qué tomamos de cada asistente

| De quién | Qué le tomamos | Por qué |
| --- | --- | --- |
| Lupe Picca | Universo y bloque de estilo de Corriente (la base del asistente) | Es su marca y ya funcionaba coherente a la primera; define la identidad. |
| Juana Estrada Roa | Formato fijo `4:5` y regla de variación explícita | Su sistema salió bien a la primera; aporta disciplina de formato y consistencia. |
| María Lucía Racciatti | Mapeo de tipo de pedido → encuadre distinto | Evita que las piezas salgan idénticas (lección de su A.4). |

**Qué decidimos dejar afuera y por qué:** dejamos afuera la paleta cálida/tierra de Bruma (Juana) y la versión fresca de Bruma (María Lucía), porque elegimos Corriente y no queríamos mezclar universos de marcas distintas (eso rompería la coherencia de la marca grupal).

## B.3 — La prueba cruzada

Cada integrante, desde **su propia compu** y en un **chat limpio**:

| Integrante | Su pedido (tipo) | Imagen |
| --- | --- | --- |
| María Lucía Racciatti | ambiente | grupal_ambiente.png |
| Juana Estrada Roa | detalle | grupal_detalle.png |
| Lupe Picca | anuncio | grupal_anuncio.png |

**Las tres imágenes juntas, ¿parecen de la misma marca?** Sí: las tres parecen de la misma marca Corriente, como fotos del mismo festival.

**Si no: ¿qué regla le falta al asistente del grupo?** No aplica: el asistente grupal ya mantiene coherencia (misma paleta pastel, luz golden hour y encuadres por tipo de pedido).

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
