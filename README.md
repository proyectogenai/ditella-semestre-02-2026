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

## Mantener todo al día

El material y la skill se actualizan clase a clase. Cada tanto (ideal:
antes de cada clase):

```
git pull
bash scripts/instalar-skill.sh
```

## La skill `alumno-ditella`

Es el manual que convierte a su agente en ayudante de cátedra: sabe cómo
explicarle programación a gente de diseño, conoce las herramientas del
curso, el flujo con GitHub y las tareas. Después de clonar el repo, se
instala con:

```
bash scripts/instalar-skill.sh
```

Y queda disponible en cualquier carpeta, no solo dentro del repo.
