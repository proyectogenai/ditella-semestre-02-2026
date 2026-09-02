# Clase 5 · Guía del estudiante

## Sistemas visuales consistentes: tu bloque madre como skill

**IA Generativa y Diseño** · Licenciatura en Diseño · UTDT
Viernes 4 de septiembre de 2026 · Bloque 1 — Imagen y sistemas visuales (cierre)

| | |
| --- | --- |
| **Duración** | 4 módulos cátedra (2 conceptuales/teóricos + recreo + 1 teórico + 1 de presentación) |
| **Objetivo** | Definir de verdad el concepto de tu parcial y entender el sistema de prompts que lo va a sostener consistente a lo largo de 8 escenas |
| **Requisito** | Clase 4 completa (banco de prompts) + el parcial lanzado (`parcial/consigna.md`) |
| **Herramientas** | Ninguna todavía — hoy no se genera ninguna imagen. Gemini, Figma y ChatGPT entran recién la próxima vez |
| **Entregable** | Tu concepto (marca/producto/personaje), tu universo y tu elemento oculto documentados — y, si tu grupo llega, un primer borrador del bloque madre |

---

## La idea central de esta clase

Esta clase está armada al revés de lo esperable: **primero el concepto,
después la técnica**. Armar un "sistema de consistencia" para un mundo que
todavía no existe se siente abstracto. Armarlo para tu propia marca,
producto o personaje —el que vas a entregar el 9/10— tiene sentido
inmediato. Por eso hoy arrancás viendo cómo se arma un buen libro
editorial, después elegís de verdad tu concepto, y recién en la segunda
mitad de la clase te damos el sistema técnico (el bloque madre) para
poder ejecutarlo con consistencia.

**Hoy no se genera ninguna imagen.** Lo que sale de la clase es el
concepto documentado, tu elemento oculto definido, y —si tu grupo llega—
el borrador del bloque madre. Generar la imagen madre y las primeras
escenas queda como trabajo tuyo antes de la próxima clase, ya con el
sistema técnico en la mano.

---

## Modo tutor, como siempre

Misma distinción que en las clases anteriores. Lo mecánico —armar el
archivo del concepto, instalar la skill después, comandos de git— que lo
resuelva el agente. Qué concepto elegís, cómo es tu universo, qué entra en
tu bloque madre: eso es criterio tuyo, y es exactamente lo que la cátedra
evalúa. Si querés, pegale esto al chat:

> *Trabajemos en modo tutor: guiame de a un paso por vez para definir mi
> concepto. No decidas vos el universo ni el personaje — hacéme las
> preguntas que necesito responder y ayudame a ordenar lo que yo defina.*

---

## Parte 1 · Lo editorial — cómo diseñar un proyecto real

*(Repaso del material que se proyecta en clase — `lo_editorial.pdf`.
Cuando se va a materializar un proyecto, hay que pensar en todo: un
esquema previo del libro ayuda a planear.)*

### El mapa del libro

Un libro de este tipo se arma en dobles páginas: tapa/dorso, título,
páginas de cortesía introductorias, las 8 escenas (cada una en su propia
doble página), una página de soluciones, el cierre de la historia, y
contratapa. Pensar este mapa **antes** de generar la primera imagen evita
sorpresas de formato después.

### Qué elementos tiene un buen libro de búsqueda

- **El diferencial** — el elemento extra del libro, mencionado en la tapa.
- **Portada pregnante, título claro** — sintetiza en un solo lugar el
  concepto y el universo visual.
- **El personaje se presenta con claridad**: original, pregnante y
  amoldable a las escenas — ni imposible de encontrar, ni muy fácil. **Va
  vestido igual en todas las escenas.**
- **Páginas de cortesía** que introducen el universo visual, con impronta
  propia.
- **Página legal y portada** completas (ISBN/copyright/editorial, título/
  autor) — es lo que hace que un libro se sienta real, no una carpeta de
  imágenes sueltas.
- **Una narrativa que une todos los escenarios**, contada sobre las
  mismas escenas o en páginas aparte.
- **Consistencia en el estilo visual**: los escenarios cambian, el
  universo es el mismo.
- **Espacios vacíos reducidos** — todas las escenas pensadas desde el
  principio para el formato del libro, y **nada clave en el centro de la
  doble hoja** (el pliegue se lo come).
- **El caos no es azaroso**: texturas, colores, patrones, sujetos y
  objetos que se confunden con el personaje a propósito — pero siempre con
  un tamaño y ubicación que permitan encontrarlo. Nunca ínfimo, nunca
  recortado.
- **Ritmos de lectura pautados**, pensando en quien no conoce el libro:
  una página más fácil, después una más difícil; contraste entre página
  monocromática y colorida; nunca dos entornos parecidos uno al lado del
  otro, ni el personaje escondido dos veces seguidas en zonas similares.
- **Vista contrapicada**, un ángulo cómodo para mostrar un entorno caótico
  — con diferenciación de espacio adentro del caos, nunca todo empastado.
- **Cada página cuenta una situación distinta** dentro de la misma
  historia. Los hábitats varían, pero hay constantes que sostienen el
  sistema: paleta, personajes, tamaño de escena, movimiento.
- **El caos tiene sentido conceptual**: los escenarios están pensados para
  que tenga lógica que estén cargados de elementos parecidos al personaje.
  Ejemplo: *"es una persona → espacios que suelen tener multitudes."* Y la
  personalidad del personaje importa: *"le gusta la oscuridad → lo
  encontramos en zona oscura."*
- **Easter eggs** — elementos extra para buscar, relacionados con la
  historia.
- **Cierre de la historia**, y opcionalmente una página con las
  soluciones de todas las escenas.
- **Contratapa** con descripción del libro, resumen del objetivo y datos
  de registro.

### Cómo lograr un universo coherente trabajando con IA

| Para los escenarios | Para el personaje |
| --- | --- |
| Universo visual original y consistente | Original y distintivo |
| Un ángulo que sirva para ver el panorama | "A juego" con el universo visual |
| Escenas caóticas, cargadas de elementos | Ni muy fácil ni muy difícil de distinguir |
| Elementos confundibles con el personaje | Invariable, idéntico en todas las escenas |
| Que a la IA no le cueste tanto generarlos | Posible de generar en varias perspectivas |

En general se trata de hacer **un ida y vuelta entre la generación del
personaje y de las escenas**, para que tengan que ver entre sí en
complejidad y estilo visual. Es imprescindible que el personaje se
disimule al colocarlo en las escenas. Va a haber errores en las
generaciones — se corrigen manualmente, sin drama.

### Ocho consejos editoriales

1. Ya generar las imágenes pensando en el formato del libro y las dobles
   páginas.
2. Contemplar que los tamaños de letra y personajes se puedan ver.
3. Pensar en los colores de escena y personaje, cómo cambian al imprimir.
4. El soporte importa: ¿qué tipo de papel? ¿va a dificultar encontrar al
   elemento oculto?
5. No colocar piezas importantes cerca de márgenes o dobleces.
6. Pensar en los ritmos de lectura, la narrativa, los contrastes.
7. Tener en cuenta lo que hace a una editorial verse real, profesional.
8. Hacer pruebas con usuarios: ¿cómo es la experiencia de lectura y juego?

> **La regla que no cambia:** la IA genera las escenas. Todo el aparato
> editorial —tipografía, retículas, folios, maquetación— lo diseñan
> ustedes, a mano, en Figma.

---

## Parte 2 · Manos a la obra — definí tu concepto real

### Paso 1 — Elegí tu concepto y definí el universo

Una de las tres opciones de `parcial/consigna.md`: **marca, producto o
personaje**. Tiene que darte un mundo, no un logo — lugares, gente,
situaciones, suficiente para ocho escenas distintas. Si al pensar en 8
escenas no llegás a nombrar 4-5 lugares o situaciones distintas, el
concepto necesita más mundo.

### Paso 2 — Definí tu elemento oculto

El que va a aparecer en cada una de las 8 escenas del atlas. Respondé,
aunque sea en borrador:

- ¿Quién es, o qué es?
- ¿Por qué pertenece a este universo y no a otro?
- ¿Qué hace en cada escena — observa, se esconde, interviene?
- Usando lo que viste en la Parte 1: ¿qué tiene tu universo que "vaya a
  juego" con este personaje? Si es una persona, ¿hay lugares con
  multitudes? Si tiene una personalidad particular, ¿el mundo tiene el
  tipo de escena que esa personalidad elegiría?

No hace falta el diseño final hoy — sí su identidad.

**Hoy no generás ninguna imagen todavía.** El sistema técnico para
ejecutar esto con consistencia viene en la Parte 3, después del recreo.

---

## Parte 3 · La teoría — el prompt madre visual y tu skill

*(Este contenido puede verse antes o después de las presentaciones de la
Parte 4, según cómo decida la cátedra en el recreo.)*

### Por qué la IA es naturalmente inconsistente

Los modelos generativos —Gemini, ChatGPT, Midjourney, el que sea— arrancan
de **ruido aleatorio** en cada generación. No tienen memoria de lo que
generaron antes. Eso los vuelve creativamente potentes y visualmente
inestables al mismo tiempo: el mismo personaje generado 5 veces se ve como
5 personajes distintos si no hay un sistema atrás.

> **IMAGEN = Prompt + Ruido aleatorio + Interpretación del modelo**
>
> El ruido cambia en cada generación → inconsistencia natural.
> **El sistema de prompts controla lo único que podemos controlar: el
> prompt.**

### La anatomía del prompt de consistencia: 5 capas

Un prompt de consistencia no es una oración larga: es una estructura de 5
capas. La clave de todo el sistema: **solo cambia la Capa 1 en cada
pieza.** Las Capas 2 a 5 son idénticas en todas las generaciones del
proyecto.

| Capa | Qué describe | Ejemplo | ¿Cambia? |
| --- | --- | --- | --- |
| 1 · Escena | El lugar/momento/situación | *a floating market at dusk* | SÍ → cada pieza |
| 2 · Técnica | Estilo de ilustración, específico | *isometric digital illustration, soft linework* | NO → siempre igual |
| 3 · Paleta | Los colores del universo | *deep navy, warm amber, gold accents* | NO → siempre igual |
| 4 · Referencias | Artistas / estéticas | *Studio Ghibli meets Moebius* | NO → siempre igual |
| 5 · Calidad | Parámetros de output | *high detail, no text, 16:9* | NO → siempre igual |

> **El BLOQUE MADRE = Capas 2 + 3 + 4 + 5.**
> Es el texto de estilo que se copia y pega sin modificar en cada
> generación. Se define **una sola vez**, antes de generar la primera
> imagen, y se usa en todos los prompts del proyecto — es la garantía de
> consistencia de todo el sistema.

**Ejemplo — dos escenas del mismo universo:**

```
// Escena 1 — Capa 1 nueva:
an underground mushroom market with hanging lanterns,

// BLOQUE MADRE — pegar exactamente igual sin tocar:
isometric digital illustration, clean soft linework, subtle ink outline,
deep prussian blue and warm amber tones, pale gold accents,
Studio Ghibli backgrounds, Hayao Miyazaki aesthetic, slight painterly texture,
highly detailed, whimsical mood, no text, no watermark, wide 16:9 composition
```

```
// Escena 2 — Capa 1 nueva, bloque madre idéntico:
an underground library carved inside a giant tree root, glowing moss lanterns,

// BLOQUE MADRE — el mismo texto de arriba, sin cambiar una palabra:
isometric digital illustration, clean soft linework, subtle ink outline,
deep prussian blue and warm amber tones, pale gold accents, [...]
```

### Los 4 templates del sistema visual

Cada tipo de pieza tiene su propio template. Todos comparten el bloque
madre — lo que cambia es qué describe la Capa 1.

**Template 1 · Escena del mundo.** Genera los mundos del sistema. La Capa
1 describe lugar, momento, atmósfera. Variaciones que mantienen
coherencia: cambiar el lugar, el punto de vista (*overhead view* /
*eye-level* / *worm's eye*), el momento o clima.

**Template 2 · Elemento oculto.** **Fondo blanco, no negociable** — te
permite después eliminar el fondo con Remove BG en Figma y componer sobre
cualquier escena.

```
a small fox-like creature with oversized aviator goggles and a red striped
scarf, carrying a glowing lantern in one hand, bushy tail with white tip,
full body character design, front view, white background,
[+ bloque madre]
centered, model sheet, complete figure, no crops
```

**Template 3 · Integración en escena.** Dos métodos: **referencia directa**
(adjuntás las imágenes del elemento oculto y de la escena en el chat de
Gemini o ChatGPT y pedís que integre manteniendo personaje y estilo), o
**compositing en Figma** (Remove BG → posicionar → blend mode *Multiply*
si hay bordes claros) — más confiable cuando el elemento tiene que
aparecer, igual a sí mismo, en las 8 escenas.

**Template 4 · Tapa editorial.** Conecta directo con la Parte 1: la
imagen deja el espacio para el título, la tipografía se agrega después en
Figma con tipografías reales — nunca la genera la IA.

### Con qué generar: el panorama de hoy

Para mantener personaje y estilo consistentes entre imágenes no hace falta
ninguna herramienta con casilleros especiales de sujeto/escena/estilo: **con
adjuntar las imágenes de referencia directo en el chat alcanza.**

| Herramienta | Cómo resolvés consistencia | Mejor para |
| --- | --- | --- |
| **Gemini (Nano Banana 2)** | Adjuntás la imagen madre y/o la del personaje en el chat y pedís que la nueva escena mantenga "el mismo estilo y el mismo personaje" | Iteración rápida, Templates 1-4 |
| **ChatGPT (Images 2.0)** | Misma lógica: adjuntar referencias en el chat | Alternativa si Gemini no da el resultado esperado |
| **Figma (Remove BG + compositing)** | Manual: aislás el elemento y lo posicionás sobre cada escena | El método más confiable para que el mismo elemento aparezca en las 8 escenas |
| *Midjourney (si ya tenés cuenta)* | `--sref` para estilo | Máximo control técnico, no es el flujo principal del curso |

### Cómo se convierte en tu skill

Es la evolución directa de lo que venís haciendo: el system prompt de la
C2, empaquetado como skill en la C3, y ahora convertido en sistema visual
completo. `parcial/consigna.md` pide 6 campos:

1. **Description** — qué hace y cuándo usarla.
2. **Universo** — qué es, dónde transcurre, con qué luz, qué atmósfera, y
   qué nunca es.
3. **Bloque de estilo** — con valores concretos: colores en hex, técnica,
   lente o textura, calidad.
4. **Modelo y parámetros** con los que está pensada la skill (aspect
   ratio, seed si la usan, negative prompt).
5. **Una regla de variación**, para que las piezas no salgan todas
   iguales.
6. **Cómo se inserta el elemento oculto**, y las **restricciones**: los
   límites duros del sistema.

Con lo que definiste en la Parte 2 (universo, elemento oculto) más el
bloque madre de esta parte, ya tenés material para arrancar tu
`SKILL.md` en `grupos/grupo_XX/parcial/identidad-<nombre>/`. Si te sobra
tiempo, hacelo ahora; si no, es la tarea antes de la C6.

---

## Parte 4 · Presentación de ideas de cada grupo

*(Puede ir antes o después de la Parte 3, según decida la cátedra.)*

Cada grupo comparte brevemente: qué eligieron (marca/producto/personaje),
en una oración qué mundo es, y quién es su elemento oculto y por qué
pertenece a ese universo. Si tu grupo ya pasó por la teoría, sumen un
borrador del bloque madre.

Prestá atención al feedback que reciban otros grupos — las preguntas que
te hace la cátedra a vos también aplican, aunque no te toque presentar:
¿el concepto da para 8 escenas distintas? ¿el elemento oculto tiene
identidad propia, o es un sticker que se repite?

---

## Entregable

En `grupos/grupo_XX/parcial/identidad-<nombre>/concepto.md`:

- Tu concepto (marca/producto/personaje) en una oración, y 4-5 lugares o
  situaciones posibles del universo.
- Tu elemento oculto: quién es, por qué pertenece, qué hace en cada
  escena, y sus 3 rasgos distintivos.
- Si tu grupo llegó a la Parte 3: el bloque madre (los 5 campos) y el
  prompt madre (Capas 2-5) listo para copiar.

No hay imágenes en el entregable de hoy — eso llega con el bloque madre
completo y el `SKILL.md` arrancado, antes de la C6.

Push de siempre:

```
git pull
git add grupos/grupo_XX/
git commit -m "grupo XX: clase 05"
git push
```

---

## Qué sigue

Antes de la **C6**, con el bloque madre completo, generá tu imagen madre y
arrancá el `SKILL.md` con universo y bloque de estilo — ahí este mismo
sistema se anima a video. En la **C7 — taller de parcial** tenés la clase
entera dedicada a producción: de las primeras escenas de esta semana a las
8 completas del atlas, con la skill terminada.

---

## Glosario

| Término | Qué es |
| --- | --- |
| **Elemento oculto** | El personaje u objeto que aparece, integrado y distinto en cada una, en las 8 escenas del atlas del parcial |
| **Bloque madre** | Las Capas 2-5 del prompt: el texto de estilo que se copia sin modificar en todas las generaciones del sistema. La garantía de consistencia |
| **Imagen madre** | La primera imagen que define el estilo del universo. Se usa como referencia visual en el chat y en Figma |
| **Image prompting** | Usar una imagen como parte del prompt en vez de (o además de) texto — adjuntarla en el chat de Gemini/ChatGPT |
| **Remove BG** | Plugin de Figma que elimina automáticamente el fondo de una imagen. Esencial para aislar el elemento oculto |
| **Compositing** | Integrar manualmente un elemento en una escena con Figma (capas, blend modes, opacidad) — la técnica más confiable para múltiples piezas |
| **Outpainting** | Extender una imagen más allá de sus bordes originales |
| **`--sref` (Midjourney)** | Style Reference: usar una imagen como referencia de estilo |
| **Prompt log** | Registro de todos los prompts usados en el proyecto — reproducir, justificar y documentar decisiones. Parte del entregable del parcial |

