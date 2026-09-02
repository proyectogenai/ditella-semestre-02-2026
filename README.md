# IA Generativa y Diseño · Semestre 02 · 2026

Repositorio oficial de la materia — Licenciatura en Diseño, Universidad
Torcuato Di Tella.

Acá van a encontrar el material del curso, las tareas, la **skill de la
materia** (un asistente de cátedra que vive dentro de su agente de IA) y
las carpetas de presentación de cada grupo.

## Cómo está organizado

| Carpeta | Qué hay |
| --- | --- |
| `tareas/` | Las consignas de entrega chica: [Tarea 01](./tareas/tarea_01.md) y [Tarea 02](./tareas/tarea_02.md) |
| `parcial/` | La consigna del parcial ([Identidad Generativa](./parcial/consigna.md)) y el material de apoyo que se va sumando para las entregas |
| `clases/` | El material de cada clase: guía del estudiante y ejercicios |
| `grupos/` | La carpeta de cada grupo (la crean ustedes en la Tarea 01) |
| `profesores/` | Quiénes somos los que damos la materia |
| `.claude/skills/` y `.opencode/skill/` | La skill `alumno-ditella`, su ayudante de cátedra virtual |
| `scripts/` | Utilidades, como el instalador de la skill |

## Empezar acá

1. Instalen **opencode** o **Claude Code** (su agente de IA).
2. Pídanle al agente que los ayude con la [Tarea 01](./tareas/tarea_01.md):
   clonar este repo, instalar la skill y presentarse con su grupo.
3. Ante cualquier duda de la cursada — programación, git, teoría,
   herramientas — pregúntenle a su agente: con la skill instalada, conoce
   la materia y les habla en criollo.

## Antes de la Clase 3 (viernes 21/8)

Hagan la [Tarea 02](./tareas/tarea_02.md): completar lo que haya quedado
pendiente de la Clase 2 y correr un repaso guiado con el agente, que además
junta las dudas de cada uno para que la cátedra sepa por dónde entrar el
viernes. Plazo: **jueves 20/8 a la noche**.

## Antes de la Clase 5 (viernes 4/9)

No hay tarea nueva para entregar, pero sí conviene llegar a la clase con
el repo al día y la cabeza puesta en lo que vimos hasta ahora — la C5 es
la clase donde arranca de verdad el parcial. Pégenle esto a su agente:

> "Traeme el repo al día y hacé un repaso de lo que vimos hasta ahora,
> antes de la Clase 5."

Con la skill instalada, el agente actualiza tu carpeta, te repasa las
Clases 2 a 4 con preguntas cortas (no es un examen, es para ubicarse), y
te cuenta cómo viene armada la clase de hoy. Al final junta tus dudas en
tu carpeta de grupo, para que la cátedra sepa por dónde entrar el
viernes.

## El parcial

**[Identidad Generativa](./parcial/consigna.md)** — cada grupo construye la
identidad de una marca, un producto o un personaje, la skill que la produce,
y la entrega como libro impreso. Se lanza en la Clase 4 (28/8) y se entrega
el **viernes 9/10**.

## Mantener todo al día

El material y la skill se actualizan clase a clase. Cada tanto (ideal:
antes de cada clase):

```
git pull
bash scripts/instalar-skill.sh
```

## ¿Trabado con git?

Si en cualquier momento de la cursada te encontrás con un problema técnico
de git que no sabés resolver — un error que no entendés, un conflicto, algo
que sentís que quedó roto — no te quedes trabado solo. Pegale esto a tu
agente:

> "Estoy trabado con git en el repo del curso. Ayudame a diagnosticar qué
> está pasando (revisá `git status`, `git log` y el estado del remoto) y
> arreglalo paso a paso, explicándome qué hacés. Si no se puede arreglar de
> forma segura, clonemos el repo de cero en una carpeta nueva —sin borrar
> la carpeta vieja— y ayudame a recuperar ahí cualquier trabajo mío que
> todavía no esté subido a GitHub."

Con la skill del curso instalada, tu agente sabe leer este pedido y
guiarte sin que tengas que entender git de antemano — la idea es que
ningún problema técnico te deje afuera del repositorio. Si después de
intentarlo seguís trabado, escribile a la cátedra.

## La skill `alumno-ditella`

Es el manual que convierte a su agente en ayudante de cátedra: sabe cómo
explicarle programación a gente de diseño, conoce las herramientas del
curso, el flujo con GitHub y las tareas. Después de clonar el repo, se
instala con:

```
bash scripts/instalar-skill.sh
```

Y queda disponible en cualquier carpeta, no solo dentro del repo.
