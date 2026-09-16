# Clase 7 · Guía del estudiante

## Agentes: de la skill personal al harness que las orquesta

**IA Generativa y Diseño** · Licenciatura en Diseño · UTDT
Viernes 18 de septiembre de 2026 · Bloque 1 — Imagen y sistemas (cierre) → Bloque 4 — El agente conectado (arranque)

| | |
| --- | --- |
| **Duración** | 4 módulos cátedra (repaso + teoría, demo, recreo, taller) |
| **Objetivo** | Entender qué es un `AGENTS.md` y qué es un MCP, ver en vivo la diferencia entre vibecoding (V0, Lovable) y trabajar con tu agente instalado (Claude Code / opencode), y armar una skill nueva para una tarea repetitiva propia — no de diseño |
| **Requisito** | Clase 3 completa (tu primera skill) y, si llegaste, tu sistema visual de C5/C6 |
| **Herramientas** | Tu agente instalado (Claude Code u opencode). Hoy no hace falta ninguna cuenta nueva |
| **Entregable** | Una skill nueva, de una tarea que no sea de diseño, pusheada y probada |

---

## Antes de la clase (hacelo antes del viernes)

Tres cosas, ninguna te debería llevar más de 15 minutos:

1. **Elegí tu tarea repetitiva y anotala.** Algo que le pedís seguido a
   una IA — no de diseño — para que llegues el viernes con la idea ya
   elegida y no pierdas el taller pensándola. Mirá los ejemplos de la
   Parte 3 si no se te ocurre nada.
2. **Verificá que tu agente ande.** Abrí tu Claude Code u opencode,
   confirmá que loguea bien y que podés ver alguna skill tuya
   ya instalada (la de C3 o la de C5/C6) sin errores. Si algo no anda,
   resolvelo antes del viernes, no en el aula.
3. **Traé resuelta tu skill de sistema visual de C5/C6.** Al principio de
   la clase se va a preguntar quién todavía no la tiene funcionando —
   mejor que llegues sabiendo dónde estás parado, y si te falta algo, que
   lo resuelvas antes de la corrección del parcial del 25/9.

Opcional pero recomendable: leé las Partes 1 y 2 de esta guía antes de la
clase — el repaso y los conceptos nuevos van a pasar rápido el viernes, así
que si ya los leíste, el tiempo en el aula te sirve para profundizar, no
para leer por primera vez.

---

## Parte 1 · Repaso general — todo lo que vimos hasta acá (C1 a C6)

Estamos a una clase de la corrección y exposición del parcial. Antes de
sumar contenido nuevo, este es el mapa completo de lo que ya tenés en las
manos — usalo como referencia si algo no te cierra del todo.

### C1 · Introducción a la IA en diseño

Qué es la IA, cómo se relaciona con Machine Learning, Deep Learning e IA
Generativa (cada uno es un subconjunto del anterior, no términos
intercambiables). Casos reales de uso en diseño (Nutella, Heinz, Airbus).
Primer inventario: qué herramientas de IA usaba cada uno antes de empezar
la materia.

### C2 · LLMs y el arte del prompt

Cómo funciona un LLM por dentro: tokens (la unidad mínima que procesa,
no siempre una palabra completa), ventana de contexto (cuánto puede
"tener en mente" a la vez), arquitectura Transformer y atención, RAG y
fine-tuning a nivel concepto. Por qué el modelo no se acuerda entre chats
distintos — el problema exacto que resuelven el prompting y, después, las
skills.

**Anatomía del prompt:** rol, contexto, tarea, formato, restricciones.
Few-shot (dar ejemplos), chain-of-thought (pedir que razone paso a paso),
system prompts y personas, iteración y refinamiento.

Armaste tu primer **asistente de identidad visual**: un system prompt que
recibía un pedido corto y devolvía un prompt de imagen completo y
consistente con una marca que vos definiste. Lo probaste con 3 pedidos y
lo corregiste — no las imágenes sueltas, el system prompt.

### C3 · De la práctica profesional a la skill propia

Las cuatro definiciones que sostienen el resto del semestre:

| Término | Qué es |
| --- | --- |
| **Prompt** | Un pedido puntual. Resuelve una vez y se va |
| **System prompt** | Instrucciones permanentes para toda una conversación — pero mueren con el chat. Es lo que armaste en C2 |
| **Skill** | Ese mismo contenido, guardado en un `SKILL.md` que tu agente carga solo cuando el tema aplica. No se pierde, no hay que repetirlo |
| **Agente** | El programa que lee esas skills y trabaja con los archivos: Claude Code u opencode |

El `description` del `SKILL.md` es el gancho: es lo único que tu agente
lee para decidir si carga la skill. Convertiste tu asistente de C2 en tu
primera skill instalada, la probaste en un chat limpio y la pusheaste al
repo.

### C4 · Imagen generativa

Modelos de difusión: text-to-image e image-to-image. Parámetros clave —
aspect ratio, seed, negative prompting. Inpainting y outpainting. Uso de
referencias propias. Armaste un moodboard, pasaste un boceto propio a
render, y compararon plataformas entre sí. Le dictaste al agente los
prompts que funcionaron para que arme y versione tu **banco de prompts**.
Cierre de la clase: lanzamiento del parcial (Atlas Generativo v3).

### C5/C6 · Sistemas visuales consistentes: tu bloque madre como skill

La clase bisagra. Por qué la IA es naturalmente inconsistente:

> **IMAGEN = Prompt + Ruido aleatorio + Interpretación del modelo**
> El sistema de prompts controla lo único que se puede controlar: el
> prompt.

La **anatomía de 5 capas** (Escena / Técnica / Paleta / Referencias /
Calidad), donde solo la Capa 1 cambia en cada pieza. El **bloque
madre = Capas 2 a 5**: se define una sola vez y se pega sin tocar en
cada generación. Los 4 templates (escena, elemento oculto con fondo
blanco, integración, tapa editorial). Y lo empaquetaste todo como tu
**skill de sistema visual**, con sus 6 campos (description, universo,
bloque de estilo, modelo y parámetros, regla de variación, elemento
oculto y restricciones) — es la skill que corregimos el 25/9.

---

## Parte 2 · Lo nuevo de hoy — el agente con herramientas mapeadas

Hasta acá el agente era "quien lee tu skill". Hoy sube un escalón: además
de leer skills, un agente tiene **herramientas mapeadas** — cosas
concretas que puede hacer además de conversar.

### `AGENTS.md`: el manual de la casa

Si el `SKILL.md` es el manual puntual de un proyecto (el brand book de tu
sistema visual), el `AGENTS.md` es el manual general de tu agente: qué
herramientas tiene sobre la mesa (archivos, la terminal, la web) y qué
puede tocar sin que se lo confirmes. Ahí también se declaran los **MCP**
conectados.

### MCP, a nivel concepto

**MCP (Model Context Protocol)** es lo que le permite a tu agente dejar de
estar aislado en un chat y tocar herramientas reales — Figma, Google
Drive, GitHub, el navegador. Hoy lo vemos nombrado en tu `AGENTS.md`; la
conexión real (Figma) la hacemos en la C9, cuando arranca el proyecto
final.

### Vibecoding vs. harness

Viste la demo en vivo: el mismo pedido chico resuelto en **V0/Lovable**
(rápido, prompt-a-app completa, sin ver ni tocar el código) y en el
**harness** que ya tenés instalado (más lento para arrancar, pero con
archivos reales que podés versionar y corregir con precisión).

> **Vibecoding** es una herramienta más — útil para probar una idea
> rápido — pero con techo de personalización y sin proceso reutilizable.
> **El harness** es el entorno donde ya venís trabajando desde la C2, y
> donde vas a seguir el resto del semestre: no es "una forma de
> programar", es el lugar donde se arma cualquier proceso agéntico —
> imagen, atlas, lo que sigue.

Por eso la práctica de hoy es **100% en el harness**.

---

## Parte 3 · La tarea de hoy — la skill de tu tarea repetitiva

**No es una tarea de diseño.** Pensá en algo que le pedís seguido a una
IA — para esta materia, para otra, o para tu vida en general. Por ejemplo:

- Traducir textos manteniendo un tono informal.
- Resumir un paper o un artículo largo en puntos clave.
- Pasar notas de clase (foto de tu cuaderno) a un documento prolijo.
- Generar variantes de un mismo mensaje según el destinatario.
- Armar research de referencias sobre un tema, con fuente.
- Convertir una consigna de trabajo práctico en un checklist accionable.

Elegí una — la tuya, no tiene que ser ninguna de estas — y convertila en
skill, **iterando con tu agente** en vez de escribírsela vos de una. Mismo
mecanismo que en C3: el agente te tiene que preguntar cuándo se activa,
qué formato de salida esperás, si hay algo que siempre tiene que respetar
(tono, longitud, idioma). Si querés, pegale esto al chat:

> *Trabajemos en modo tutor: quiero convertir en skill algo que te pido
> seguido — [contá tu tarea]. Guiame con preguntas para definir el
> `description` y el resto del `SKILL.md`, no me lo escribas de una.*

### Pasos

1. **Elegí tu tarea repetitiva** — algo real, que ya le pedís a una IA.
2. **Iterá el `description` y el cuerpo** con tu agente, a preguntas.
3. **Probala con un caso real** (no inventado) y ajustá lo que falle.
4. **Revisá tu `AGENTS.md`** y anotá qué herramientas quedaron mapeadas
   para esta skill, aunque hoy no las uses todas — es la base de lo que
   se vuelve real en la C9 con MCP.
5. **Pusheala** al repo.

No uses V0 ni Lovable para esto — la consigna de hoy es practicar en el
harness. V0/Lovable quedan como algo que ya conocés para cuando el
proyecto sea "necesito una app ya", no como el entorno de trabajo del
semestre.

---

## Entregable

En `grupos/grupo_XX/clase_07/<nombre-de-tu-skill>/`:

```
clase_07/
└── <nombre-de-tu-skill>/
    └── SKILL.md
```

Más una nota corta (dos líneas alcanzan, en el README del grupo) de qué
herramientas quedaron mapeadas en tu `AGENTS.md` a partir de hoy.

Push de siempre:

```
git pull
git add grupos/grupo_XX/
git commit -m "grupo XX: clase 07"
git push
```

---

## Qué sigue

Antes de la **C8**, probá tu skill nueva al menos una vez más, en un caso
real distinto al de hoy, y llevá tu atlas lo más avanzado posible: la C8
(25/9) es corrección + exposición del parcial + una charla con el
invitado **Alan Daitch** — no va a haber módulo de producción libre ese
día. La **entrega formal (online) del atlas se corre al 9/10** (último
día del receso de parciales), así que tenés margen para terminar de subir
todo al repo después de exponer.

---

## Glosario

| Término | Qué es |
| --- | --- |
| **`AGENTS.md`** | El manual general de tu agente: qué herramientas tiene disponibles y cómo comportarse — distinto de una `SKILL.md` puntual |
| **MCP (Model Context Protocol)** | Lo que conecta a tu agente con una herramienta real (Figma, Drive, GitHub, el navegador) en vez de dejarlo aislado en un chat |
| **Vibecoding** | Generar una pieza completa a partir de un prompt en una plataforma cerrada (V0, Lovable), sin ver ni tocar el código |
| **Harness** | El entorno de agente (Claude Code, opencode) que opera sobre archivos reales, versionables y editables con precisión — donde trabajás todo el semestre |
