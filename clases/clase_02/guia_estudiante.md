# Clase 2 · Guía del estudiante

## LLMs y el arte del prompt: de la pregunta al sistema

**IA Generativa y Diseño** · Licenciatura en Diseño · UTDT
Viernes 14 de agosto de 2026 · Bloque 0 — Fundamentos y entorno

| | |
| --- | --- |
| **Duración** | 4 módulos cátedra (2 teoría + recreo + 2 práctica) |
| **Objetivo** | Dejar de escribir prompts sueltos y empezar a diseñar sistemas de instrucciones que producen resultados consistentes |
| **Requisito** | Tarea 01 completada (agente instalado, repo clonado, ficha pusheada) |
| **Herramientas** | ChatGPT · Claude · Gemini (cualquiera sirve) + una herramienta de imagen: Gemini, Whisk, ImageFX o Firefly (todas gratuitas) |
| **Entregable** | Un asistente de identidad visual individual + uno grupal, con las imágenes que produjeron |

---

## La idea central de esta clase

Todo el mundo sabe pedirle cosas a ChatGPT. Muy poca gente sabe **construir un
sistema** que le pida cosas bien, todas las veces, sin depender de la
inspiración del día.

Esa es la diferencia entre escribir un prompt y diseñar un prompt. El primero
resuelve un pedido. El segundo resuelve **todos los pedidos futuros de ese
tipo**. Y es, exactamente, la misma diferencia que hay entre diseñar una pieza
y diseñar un sistema de identidad.

Hoy vamos a construir un asistente: algo a lo que le decís *"necesito la
imagen del post de apertura"* y te devuelve un prompt de imagen completo,
coherente con una marca. Y sobre todo vamos a aprender a **arreglarlo cuando
no funciona** — que es donde está el oficio.

---

---

## ⚠️ Antes de empezar: cómo pedirle las cosas al agente

Tu agente puede resolverte este trabajo práctico entero en dos minutos. **No
lo dejes.** No es una cuestión de honestidad académica: es que el criterio de
diseño no se delega, se entrena. Si el agente escribe tu system prompt, vas a
tener un archivo lindo y ninguna idea de por qué funciona — y en el parcial,
cuando haya que arreglar un sistema que falla, no vas a saber por dónde
agarrarlo.

La distinción práctica es simple:

- **Lo mecánico, que lo haga él.** Comandos, errores, sintaxis, crear
  carpetas, convertir archivos. Pelear con `git push` no te hace mejor
  diseñador.
- **Lo que es criterio, que te guíe.** El concepto de la marca, el system
  prompt, la paleta, qué corregir cuando algo sale mal. Eso lo escribís vos.

| En vez de pedirle | Pedile |
| --- | --- |
| "escribime el system prompt de mi marca" | "hacéme las preguntas que necesites para que **yo** escriba el system prompt de mi marca" |
| "arreglá esto que no funciona" | "decime qué le falta y por qué, pero no lo reescribas" |
| "generá 3 pedidos de prueba" | "¿qué tipo de pedidos me conviene probar para descubrir dónde falla mi sistema?" |
| "hacéme la skill" | "guiame paso a paso, uno por vez, y esperá que yo lo haga" |

**Frase para pegar al inicio del chat cuando quieras trabajar así:**

> *Trabajemos en modo tutor: guiame de a un paso por vez, hacéme las preguntas
> que necesites y esperá mi respuesta antes de seguir. No escribas por mí las
> partes que son decisión de diseño.*

---

## Parte 1 · Qué hay adentro de un modelo de lenguaje

Lo mínimo que necesitás saber para entender por qué el prompting funciona.

**Un LLM predice la siguiente palabra.** Eso es todo lo que hace, literalmente.
Fue entrenado con cantidades enormes de texto y aprendió a estimar qué sigue
después de lo que ya está escrito. La conversación entera —tu pregunta y su
respuesta— es una sola secuencia que el modelo va completando.

**Token.** El modelo no lee palabras: lee *tokens*, pedacitos de texto. "Diseño"
puede ser un token o dos. Importa por dos motivos: los servicios cobran por
token, y la memoria del modelo se mide en tokens.

**Ventana de contexto.** Es cuánto texto puede tener presente a la vez. Todo lo
que está adentro de la ventana, el modelo lo "ve". Lo que quedó afuera, no
existe. Por eso una conversación muy larga empieza a olvidar cosas del principio.

**Transformer y atención.** La arquitectura que hizo posible todo esto. Su
aporte clave: el modelo aprende a *pesar* qué partes del texto importan para
predecir lo que sigue. Cuando escribís un prompt bien estructurado, estás
ayudando a esa distribución de peso — le estás diciendo qué es importante.

**El modelo no se acuerda de vos.** Cerraste el chat, se terminó. La próxima vez
arranca de cero. No es un olvido: no hay nadie ahí guardando nada. **Este es el
problema que vamos a resolver hoy y la clase que viene**: primero escribiendo
el sistema de instrucciones, después convirtiéndolo en algo permanente.

**RAG y fine-tuning**, a nivel concepto:

- *RAG* = darle documentos propios para que responda con esa base. Como
  entregarle la carpeta del proyecto antes de la reunión.
- *Fine-tuning* = re-entrenarlo con datos propios para que cambie su forma de
  responder. Como mandarlo a hacer un posgrado. Más caro, más profundo, mucho
  menos frecuente de lo que la gente cree.

---

## Parte 2 · Anatomía del prompt

Un prompt de sistema tiene cinco partes. No es una fórmula rígida: es una
checklist para no olvidarse de nada.

| Parte | Qué define | Ejemplo |
| --- | --- | --- |
| **ROL** | Quién es el modelo mientras responde | "Sos el director de arte de una librería nocturna" |
| **CONTEXTO** | El mundo en el que trabaja | La marca, su universo, su público, su tono |
| **TAREA** | Qué tiene que hacer, exactamente | "Convertí pedidos cortos en prompts de imagen completos" |
| **FORMATO** | Cómo entrega la respuesta | "Devolvé solo el prompt en inglés, sin explicaciones" |
| **RESTRICCIONES** | Los límites duros | "Nunca uses texto dentro de la imagen. Nunca cambies la paleta." |

De las cinco, la que más se olvida es **FORMATO** — y es la que más frustración
evita. Si no decís cómo querés la respuesta, el modelo te va a contestar con
tres párrafos de explicación cuando vos querías una línea.

### Cuatro técnicas que cambian los resultados

**1 · Few-shot: mostrar en vez de explicar.**
Explicar el estilo que querés es difícil. Mostrarlo es trivial. Poné dos o tres
ejemplos de entrada → salida deseada dentro del prompt y el modelo calca el
patrón. Es la técnica de mayor impacto por unidad de esfuerzo.

**2 · Chain-of-thought: pedir el razonamiento.**
"Antes de responder, listá qué elementos visuales corresponden a este pedido y
después escribí el prompt." Obligar a pensar en voz alta mejora la calidad en
tareas con varios pasos. Cuesta más tokens y más tiempo; usalo donde importa.

**3 · Personas: instalar un punto de vista.**
No es lo mismo "escribí un copy" que "sos un redactor publicitario de los 90 que
odia los adjetivos". La persona no es decoración: cambia el vocabulario, el
ritmo y los criterios con los que el modelo elige.

**4 · Iteración: el prompt es un brief y los briefs se corrigen.**
Ningún prompt de sistema sale bien la primera vez. La disciplina que hay que
adquirir es esta: **cuando un resultado sale mal, no arregles el resultado —
arreglá el sistema.** Si corregís la salida a mano, resolviste un caso. Si
corregís el prompt, resolviste todos los casos siguientes.

---

## Parte 3 · Ejemplo completo: el asistente de *Nocturna*

Este es un asistente terminado y funcionando. Léanlo entero antes de escribir
el suyo: es el nivel de detalle al que hay que llegar.

### El brief

> **Nocturna** — librería de Buenos Aires que abre de 20:00 a 04:00. Su público
> son insomnes, trabajadores nocturnos y gente que sale de un bar y no quiere
> irse a dormir. Nunca comunica con la palabra "leer".

### El system prompt

```
# ROL
Sos el director de arte de Nocturna. Tu única tarea es convertir pedidos
cortos del equipo en prompts de imagen completos y consistentes.

# EL UNIVERSO DE NOCTURNA
Nocturna es una librería que abre de 20:00 a 04:00 en Buenos Aires.
Su mundo visual es el de una ciudad despierta cuando todos duermen:
interiores cálidos vistos desde la vereda fría, luz ámbar contra
ventanales negros, gente sola pero no triste.

Atmósfera: íntima, silenciosa, un poco cinematográfica. Nunca festiva,
nunca corporativa, nunca "cozy" de catálogo.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
cinematic photography, night interior lit by warm amber practical lights,
deep teal and charcoal shadows, soft film grain, 35mm lens, shallow depth
of field, no text, no logos, natural unposed composition

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos para que las
   piezas no se parezcan entre sí:
   - vista desde la vereda a través del vidrio
   - detalle de manos y objetos sobre una mesa
   - persona de espaldas entre estanterías altas
   - plano general del salón casi vacío
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato]
3. Devolvé SOLO el prompt final en inglés, en un bloque de código.
   Sin explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca generes texto ni tipografía dentro de la imagen: el título se
  agrega después en Figma.
- Nunca uses luz fría como luz principal.
- Nunca muestres más de 3 personas en cuadro.
- Si el pedido es ambiguo, elegí vos y avanzá. No preguntes.
```

### Tres pedidos y lo que devuelve

| Pedido del equipo | Prompt que devuelve el asistente |
| --- | --- |
| "la imagen del post de apertura" | `a bookstore interior seen from the wet sidewalk through a large window, warm amber light spilling onto the pavement, one person browsing inside, cinematic photography, night interior lit by warm amber practical lights, deep teal and charcoal shadows, soft film grain, 35mm lens, shallow depth of field, no text, no logos, 4:5` |
| "algo para el sorteo de fin de mes" | `close-up of hands placing a folded paper note into a glass jar on a wooden table, stacked books around, cinematic photography, night interior lit by warm amber practical lights, deep teal and charcoal shadows, soft film grain, 35mm lens, shallow depth of field, no text, no logos, 1:1` |
| "la portada de la newsletter" | `wide shot of an almost empty bookstore at 3am, tall shelves, a single reader seated far away, warm pools of light, cinematic photography, night interior lit by warm amber practical lights, deep teal and charcoal shadows, soft film grain, 35mm lens, shallow depth of field, no text, no logos, 16:9` |

Fijate lo que pasa: **cambia solo la primera parte**. Todo lo demás se repite
palabra por palabra. Eso es lo que hace que las tres imágenes parezcan de la
misma marca.

### 🔧 Lo que hubo que arreglar (la parte importante)

La primera versión de este asistente **no tenía la lista de encuadres**. ¿El
resultado? Las tres imágenes daban casi lo mismo: siempre un plano frontal del
local. Coherentes, sí, pero aburridas y repetidas — inservibles para un feed.

El arreglo no fue pedirle "hacé algo distinto" en el chat. Fue **agregar la
regla de rotación de encuadres al sistema**, para que el problema no vuelva a
aparecer nunca.

> Esa corrección es la clase entera. Cuando algo sale mal, preguntate: *¿qué
> regla le faltaba al sistema?*

---

## Parte 4 · Taller individual (módulo 3)

Construí tu propio asistente de identidad visual.

### Paso 1 — Elegí un brief (5 min)

Podés usar un proyecto propio si tenés uno. Si no, elegí de acá:

| Marca | Brief |
| --- | --- |
| **Bruma** | Café de especialidad en Palermo. No tiene sillas: solo barra y una ventana que da a la calle. Se toma parado o se lleva. |
| **Corriente** | Festival de música electrónica en las islas del Delta. Se llega solo en lancha. Dos días, un escenario, arranca al atardecer. |
| **Vecinal** | App de trueque entre vecinos del mismo barrio. No hay plata: se cambian cosas, favores y tiempo. |
| **Halcón** | Indumentaria técnica para ciclistas urbanos. Ropa que sirve para pedalear y para entrar a una reunión sin cambiarse. |

### Paso 2 — Escribí el system prompt (15 min)

Usá la plantilla del final de esta guía. Completá las cinco partes. Ojo con dos
cosas: el **bloque de estilo** tiene que ser lo bastante específico como para
que dos generaciones distintas se parezcan, y el **formato** tiene que decir
exactamente qué querés recibir.

### Paso 3 — Probalo con 3 pedidos (15 min)

Abrí un chat nuevo, pegá tu system prompt y mandale tres pedidos **cortos y
distintos** (una placa de anuncio, una foto de producto, una imagen de
ambiente). Generá las tres imágenes con la herramienta que prefieras.

### Paso 4 — Iterá una vez (10 min)

Mirá las tres imágenes juntas y respondé:

- ¿Parecen de la misma marca? Si no → falta especificidad en el bloque de estilo.
- ¿Parecen todas la misma imagen? Si sí → falta una regla de variación.
- ¿Tuviste que arreglar algo a mano? Si sí → esa corrección va al sistema.

Hacé **un** cambio al system prompt y volvé a probar el pedido que peor salió.

---

## Parte 5 · Taller grupal (módulo 4)

Ahora el grupo construye **un solo asistente**.

1. **Elijan una marca** (10 min). Puede ser una de las que trabajaron
   individualmente, o el proyecto de alguno del grupo.
2. **Fusionen** (15 min). Armen un asistente nuevo tomando lo mejor de los
   tres: la regla más clara de uno, el bloque de estilo más específico de otro,
   la restricción que a alguno le salvó una imagen. Discutan cada inclusión —
   "¿esta regla suma o sobra?" es la conversación que hay que tener.
3. **Prueba cruzada** (15 min). Cada uno de los tres, **desde su propia compu y
   en un chat limpio**, le manda un pedido distinto al asistente del grupo y
   genera la imagen. Los tres pedidos tienen que ser de naturaleza distinta:
   uno de ambiente, uno de detalle, uno de anuncio.
4. **Miren las tres imágenes juntas** (5 min). ¿Parecen de la misma marca
   aunque las pidieron tres personas diferentes?

> Ese último punto es la pregunta del semestre. Un sistema que solo funciona en
> las manos de quien lo escribió no es un sistema: es un truco. En el parcial
> van a intercambiar sistemas con otro grupo y esto se va a evaluar en serio.

---

## Entregable

Copien `clases/clase_02/ejercicios.md` a su carpeta y complétenlo ahí. Es su
hoja de trabajo y parte de la entrega.

En `grupos/grupo_XX/clase_02/`:

```
clase_02/
├── ejercicios.md                  ← la hoja de trabajo, completada
├── asistente_nombre_apellido.md   ← uno por integrante (3)
├── asistente_grupal.md
└── imagenes/                      ← las que generaron
```

Lo que más se mira de la entrega no es qué lindo quedó el asistente, sino la
sección A.4: **qué falló en la primera versión y qué regla agregaron para
arreglarlo.** Eso es documentación de proceso real, y les va a servir para el
parcial.

Suban todo con el ciclo de siempre: `git pull` → `git add` → `git commit` →
`git push`. Si se traban, pregúntenle a su agente.

---

## Plantilla de trabajo

```
# ROL
Sos el/la [rol] de [marca]. Tu única tarea es [qué convierte en qué].

# EL UNIVERSO DE [MARCA]
[Qué es la marca, en dos líneas]
[Su mundo visual: dónde transcurre, qué se ve, qué luz hay]
Atmósfera: [tres adjetivos] · Nunca: [tres cosas que la marca no es]

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
[técnica de imagen], [tipo de luz], [paleta con colores concretos],
[lente o textura], [calidad], no text, no logos

# CÓMO RESPONDER
1. [Regla de variación: qué rota entre pedido y pedido]
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato]
3. Devolvé SOLO [qué exactamente], sin [qué no querés recibir].

# RESTRICCIONES
- Nunca [...]
- Nunca [...]
- Si el pedido es ambiguo, [qué hacer].
```

---

## Glosario

| Término | Qué es |
| --- | --- |
| **LLM** | Modelo de lenguaje. Predice el texto que sigue. |
| **Token** | El pedacito de texto que el modelo procesa. Ni letra ni palabra: algo en el medio. |
| **Ventana de contexto** | Cuánto texto puede tener presente a la vez. |
| **System prompt** | Instrucciones permanentes que definen cómo se comporta el modelo en toda la conversación. |
| **Few-shot** | Incluir ejemplos de entrada → salida dentro del prompt. |
| **Chain-of-thought** | Pedirle que razone paso a paso antes de responder. |
| **Persona** | El punto de vista que le instalás: quién es mientras responde. |
| **Bloque de estilo** | El texto de estilo que se repite idéntico en todas las generaciones. Garantiza consistencia. |
