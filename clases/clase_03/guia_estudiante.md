# Clase 3 · Guía del estudiante

## De la práctica profesional a la skill propia

**IA Generativa y Diseño** · Licenciatura en Diseño · UTDT
Viernes 21 de agosto de 2026 · Bloque 0 — Fundamentos y entorno (cierre)

| | |
| --- | --- |
| **Duración** | 4 módulos cátedra (2 casos profesionales + recreo + taller) |
| **A cargo** | Cata Álvarez y Sara Iglesias |
| **Objetivo** | Convertir el asistente que escribiste en la Clase 2 en una **skill** instalada: algo que tu agente carga solo, sin que se lo repitas cada vez |
| **Requisito** | Clase 2 completa — sobre todo tu system prompt individual |
| **Entregable** | Al menos una skill por integrante, pusheada y probada en un chat limpio |

---

## La idea central de esta clase

> *El system prompt que escribiste la clase pasada se te pierde cuando
> cerrás el chat. Convertirlo en skill es lo que lo vuelve parte fija de
> tu sistema.*

En la Clase 2 armaste un asistente de identidad visual: un system prompt
que, pegado al inicio de un chat, convertía pedidos cortos en prompts de
imagen consistentes. Funcionó. El problema es que vive **adentro de ese
chat puntual** — si lo cerrás, si abrís uno nuevo, si otra persona quiere
usarlo, tenés que volver a pegarlo entero.

Hoy resolvemos eso. No vas a escribir un asistente nuevo: vas a **empaquetar
el que ya tenés** en un formato que tu agente reconoce solo, sin que se lo
repitas.

Antes de la clase 2 profesionales van a mostrarte cómo aparece esto —la IA
generativa como parte de un flujo de trabajo real, con sus límites
incluidos— y en el puente van a señalar qué parte de lo que hacen es
repetitiva. Esa parte repetitiva es, ni más ni menos, lo que hoy se
convierte en skill.

---

## Antes de empezar: seguís en modo tutor

Ya lo veníamos usando en la Clase 2 y acá aplica más que nunca: el agente
puede escribirte la skill entera en diez segundos, y vas a tener la
tentación de dejarlo. No lo hagas — el `description` que escribís vos es
literalmente lo único que decide si tu skill funciona o no, y eso no se
delega. Si querés, pegale esto al chat:

> *Trabajemos en modo tutor: guiame de a un paso por vez, hacéme las
> preguntas que necesites y esperá mi respuesta antes de seguir. Lo
> mecánico —crear la carpeta, instalar, los comandos de git— resolvelo
> vos; lo que es decisión de diseño lo escribo yo.*

---

## Parte 1 · Qué es una skill

Una skill es un **manual de instrucciones que tu agente lee solo, cuando el
tema aplica**. La analogía de diseño es directa: es el *brand book* del
proyecto. En vez de repetirle a alguien en cada reunión "usá esta paleta,
este tono, este formato", se lo escribís una vez y esa persona lo consulta
siempre que hace falta.

La diferencia con un prompt (o un system prompt) es exactamente esa:

| | Prompt / system prompt | Skill |
| --- | --- | --- |
| **Dónde vive** | Pegado adentro de un chat puntual | Un archivo, versionado en tu repo |
| **Cuánto dura** | Se pierde cuando cerrás el chat | Queda para siempre, hasta que vos lo edites |
| **Cómo se activa** | Lo pegás vos, cada vez | Tu agente decide solo si aplica, leyendo el `description` |
| **Cómo se comparte** | Copiando y pegando texto | Como cualquier archivo: se versiona, se revisa, se le hace pull request |

### La anatomía mínima

Una skill es una carpeta con un archivo adentro:

```
mi-skill/
└── SKILL.md
```

Y ese `SKILL.md` empieza con un encabezado obligatorio (se llama
*frontmatter*) con dos datos:

```markdown
---
name: asistente-nocturna
description: >
  Director de arte de la librería Nocturna. Usá esta skill cada vez que
  haya que generar una imagen o pieza visual de Nocturna: define universo,
  paleta, encuadres y restricciones de la marca.
---

# Asistente visual de Nocturna

(acá va el system prompt de la Clase 2, tal cual, quizás mejor ordenado)
```

El `description` es el dato que más importa de toda la clase: es lo
**único** que tu agente lee para decidir si carga la skill o no. Si no
tiene las palabras con las que vos pedirías esa tarea, la skill nunca se
activa — por más perfecto que esté el cuerpo.

---

## Por qué conviene (más allá de "es más prolijo")

- **No dependés de tu memoria ni de tener el chat correcto abierto.** Pedís
  algo del tema, en cualquier chat nuevo, y se carga sola.
- **Queda versionada.** Tiene historial en git: se puede ver qué cambió,
  cuándo y por qué — que es exactamente lo que van a pedir el parcial y el
  final.
- **Se puede compartir de verdad.** Un compañero de grupo, o de otro grupo
  en el parcial, puede usar tu skill sin que se la expliques en persona.
- **Se corrige una sola vez.** Si el agente comete el mismo error dos
  veces, la corrección va a la skill — y ese error no vuelve a pasar,
  nunca más, para nadie que la use.

---

## ⚠️ Ojo con esto: todavía no genera imágenes sola

La skill que armás hoy es una skill **de tu agente de texto** (Claude Code
u opencode) — no está conectada a ningún modelo generativo de imágenes.
Si alguno ya tiene experiencia conectando modelos o APIs de imagen, genial,
pero **no es el objetivo de hoy** y no hace falta para nada de lo que
sigue.

El flujo sigue siendo el mismo que en la Clase 2: tu skill te devuelve el
**texto del prompt**, y vos lo copiás y pegás en la herramienta de imagen
que estés usando (Gemini, Whisk, ImageFX, Firefly, Midjourney...). Lo único
que cambia es que ya no tenés que pegar el system prompt entero cada vez:
tu agente lo carga solo y te devuelve el prompt final, listo para pegar.

Conectar skills directamente a un generador de imágenes es tema de una
clase futura del programa (agentes, tools, MCP) — hoy nos quedamos en la
mitad del camino, y está bien así.

---

## Parte 2 · El ejemplo: Nocturna, de system prompt a skill

Este es el mismo asistente de Nocturna que viste en la Clase 2, ahora
empaquetado como skill:

```markdown
---
name: asistente-nocturna
description: >
  Director de arte de Nocturna, librería nocturna de Buenos Aires. Usá esta
  skill cada vez que haya que generar una imagen o pieza visual para
  Nocturna: redes, newsletter, señalética. Define universo, bloque de
  estilo, encuadres rotativos y restricciones de la marca.
---

# Asistente visual de Nocturna

## Rol
Sos el director de arte de Nocturna. Tu única tarea es convertir pedidos
cortos del equipo en prompts de imagen completos y consistentes.

## El universo de Nocturna
Librería que abre de 20:00 a 04:00 en Buenos Aires. Mundo visual: una
ciudad despierta cuando todos duermen, interiores cálidos vistos desde la
vereda fría, luz ámbar contra ventanales negros, gente sola pero no triste.

Atmósfera: íntima, silenciosa, un poco cinematográfica.
Nunca: festiva, corporativa, "cozy" de catálogo.

## Bloque de estilo (va siempre, sin modificar)
cinematic photography, night interior lit by warm amber practical lights,
deep teal and charcoal shadows, soft film grain, 35mm lens, shallow depth
of field, no text, no logos, natural unposed composition

## Cómo responder
1. Elegí un encuadre, rotando entre pedidos: vereda a través del vidrio /
   detalle de manos y objetos / persona de espaldas entre estanterías /
   plano general del salón.
2. Escribí el prompt: escena específica + bloque de estilo + formato.
3. Devolvé SOLO el prompt final en inglés, en un bloque de código.

## Restricciones
- Nunca generes texto ni tipografía dentro de la imagen.
- Nunca uses luz fría como luz principal.
- Nunca muestres más de 3 personas en cuadro.
- Si el pedido es ambiguo, elegí vos y avanzá. No preguntes.
```

Fijate qué cambió y qué no: **el contenido es casi idéntico** al system
prompt de la Clase 2. Lo que se agregó es el `description` de arriba —el
gancho que hace que el agente lo cargue solo— y un título en markdown para
ordenar el cuerpo. Convertir un prompt en skill no es reescribirlo de cero:
es empaquetar lo que ya funciona.

---

## Parte 3 · El taller (módulo 3, 60')

Vas a convertir tu propio asistente de la Clase 2 en skill. Si no llegaste
con nada de la Clase 2, no hay drama: armá una skill nueva a partir de algo
repetitivo de los casos que Cata o Sara acaban de mostrar.

| Paso | Tiempo | Qué hacés |
| --- | --- | --- |
| **1 · Elegir qué empaquetar** | 10' | Tu asistente individual de la C2, el grupal, o algo nuevo inspirado en los casos de hoy |
| **2 · Crear la carpeta y el `SKILL.md`** | 15' | Le dedicás tiempo aparte al `description`: es lo que más falla |
| **3 · Instalar** | 10' | En la carpeta personal de tu agente (te guía él, opencode o Claude Code) |
| **4 · Probar en un chat limpio** | 15' | Abrís una conversación nueva, pedís algo del tema y ves si la carga y la obedece. **No te saltees este paso** |
| **5 · Corregir y pushear** | 10' | Según lo que haya fallado en el paso 4 |

### La tabla de diagnóstico (para el paso 4)

Cuando pruebes tu skill en un chat limpio, puede pasar una de cuatro cosas:

| Síntoma | Qué está fallando | Dónde se arregla |
| --- | --- | --- |
| El agente no la carga nunca | El `description` no engancha | Sumá las palabras que usarías vos al pedirlo |
| La carga pero ignora las reglas | El cuerpo es abstracto | Cambiá adjetivos por valores concretos y ejemplos |
| La carga cuando no corresponde | El `description` es demasiado amplio | Acotalo a una situación específica |
| Funciona pero devuelve de más | Falta la sección de formato | Decí exactamente qué querés recibir, y qué no |

Ninguna skill "sale bien a la primera" — encontrar cuál de estas cuatro
cosas te pasó a vos, y corregirla, **es** el ejercicio.

---

## Entregable

En `grupos/grupo_XX/clase_03/`:

```
clase_03/
└── <nombre-de-tu-skill>/
    └── SKILL.md
```

Más dos líneas en el README del grupo contando qué tuvieron que corregir
después de probarla en un chat limpio — es lo que más se mira de la
entrega, no qué tan elaborada quedó.

Push de siempre:

```
git pull
git add grupos/grupo_XX/
git commit -m "grupo XX: clase 03"
git push
```

---

## Plantilla de `SKILL.md`

```markdown
---
name: [nombre-corto-de-tu-skill]
description: >
  [Qué hace esta skill y cuándo usarla, con las palabras que vos usarías
  al pedirlo. Esto es lo único que tu agente lee para decidir si la carga.]
---

# [Título de tu skill]

(acá va el cuerpo: tu system prompt de la Clase 2, reordenado si hace
falta — rol, universo/contexto, bloque de estilo, cómo responder,
restricciones)
```

---

## Glosario

| Término | Qué es |
| --- | --- |
| **Skill** | Manual de instrucciones que el agente lee solo, cuando el tema aplica |
| **`SKILL.md`** | El archivo obligatorio adentro de la carpeta de una skill |
| **Frontmatter** | El bloque `---` al inicio del `SKILL.md`, con `name` y `description` |
| **`description`** | Lo único que el agente lee para decidir si carga la skill — el gancho |
| **Skill personal** | Vive en la carpeta del agente, disponible en cualquier proyecto |
| **Skill de proyecto** | Vive dentro de un repo puntual, solo se activa ahí |
