# IA Generativa y Diseño · Semestre 02 · 2026

Repositorio oficial de la materia — Licenciatura en Diseño, Universidad
Torcuato Di Tella.

Acá van a encontrar el material del curso, las tareas, la **skill de la
materia** (un asistente de cátedra que vive dentro de su agente de IA) y
las carpetas de presentación de cada grupo.

## Cómo está organizado

| Carpeta | Qué hay |
| --- | --- |
| `tareas/` | Las consignas de cada tarea, empezando por la [Tarea 01](./tareas/tarea_01.md) |
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

Tres cosas para hacer antes del **jueves 20/8 a la noche**:

1. **Si te quedó pendiente algo de la Clase 2** (la parte grupal, o tu
   `ejercicios.md`), traelo resuelto o lo más avanzado posible — el taller
   del viernes arranca directo desde el asistente que escribiste ahí. Si no
   llegaste a nada, no pasa nada, pero avisale a la cátedra.

2. **Actualizá tu carpeta y hacé un repaso con tu agente.** Abrí un chat y
   pegale esto:

   > "Traeme al día: actualizá mi carpeta con lo último del repo del curso
   > (revisá primero que no tenga nada sin commitear) y después hagamos un
   > repaso de la Clase 2 con preguntas, una por vez. Al final guardá mis
   > dudas en un archivo y avisame para que lo suba."

   Es un repaso, no una evaluación: el agente va despacio y pregunta, no te
   explica todo de nuevo de una. Al final guarda tus dudas en un archivo y
   hace el push — eso nos sirve para saber por dónde entrar el viernes.

3. Hacé estas dos cosas **antes del jueves a la noche**, así llegamos a
   revisar las dudas antes de la clase.

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
