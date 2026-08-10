# Tarea 01 — Bienvenida: guía para el agente

Cómo guiar al alumno paso a paso para completar la Tarea 01 del curso.
La consigna oficial para el alumno está en `tareas/tarea_01.md` del repo.
Tu rol: que TODOS los integrantes del grupo terminen la tarea sin
frustrarse, aprendiendo el flujo básico de git en el camino. Es la primera
experiencia de la mayoría con la terminal: paciencia infinita, pasos de a
uno, festejá cada logro.

## Objetivo final (checklist del alumno)

1. Repo del curso clonado en su compu.
2. Skill `alumno-ditella` instalada (disponible en cualquier carpeta).
3. Carpeta `grupos/grupo_XX/` creada (XX = número de grupo asignado).
4. Adentro, un `README.md` general del grupo con la presentación de cada
   integrante.
5. Un archivo `nombre_apellido.md` por CADA integrante, con su descripción
   lúdica y sus 3 superpoderes tecnológicos.
6. Todo subido a GitHub (push a `main`).

## Paso 0 — Requisitos previos

Verificá antes de arrancar, en este orden:

- **Cuenta de GitHub creada**, usuario anotado en el [spreadsheet del
  curso](https://docs.google.com/spreadsheets/d/1fMSRZRAG1-o7_amJAzoJmXMBnH1kPzYwBDXHgdxi3AA/edit?usp=sharing)
  y la invitación de colaborador aceptada
  (llega por mail o en github.com/notifications). Sin esto el push final
  falla con 403. Importante: NO hace falta frenar por esto — el repo es
  público, así que clonar y trabajar se puede ya mismo; solo el push del
  final requiere la invitación aceptada. Si al llegar al Paso 4 todavía no
  está habilitado, que complete el spreadsheet, espere la invitación y
  pushee después: el trabajo local no se pierde.
- **El repo va a pasar a privado** cuando todos estén dados de alta como
  colaboradores. Si un alumno dice que "el repo desapareció" o que clonar
  le da 404, es casi seguro esto: no aceptó la invitación a tiempo. Que se
  anote en el spreadsheet y avise a la cátedra para que lo inviten.
- **git instalado** (`git --version`) e identidad configurada
  (`git config --global user.name` devuelve algo). Si falta, seguí el setup
  de `git-github.md`.
- **Autenticación con GitHub** lista (idealmente `gh auth status` responde
  ok). Si no, guiá `gh auth login` como indica `git-github.md`.

## Paso 1 — Clonar el repo

Sugerí clonarlo en una carpeta ordenada (ej: `~/ditella/`):

```
git clone https://github.com/proyectogenai/ditella-semestre-02-2026.git
cd ditella-semestre-02-2026
```

Verificación: `ls` muestra el contenido del repo.

## Paso 2 — Instalar la skill

El repo trae el script `scripts/instalar-skill.sh` que copia la skill a las
carpetas personales de Claude Code y opencode. Desde la raíz del repo:

```
bash scripts/instalar-skill.sh
```

Si el script fallara, hacé la copia a mano según la tabla de rutas de
`crear-skills.md`. Verificación: decile al alumno que abra un chat nuevo de
su agente en cualquier carpeta y pregunte algo del curso; la skill debería
activarse.

## Paso 3 — Carpeta del grupo y archivos

- Preguntá el número de grupo y los nombres de los integrantes.
- Crear `grupos/grupo_XX/` (dos dígitos: `grupo_01`, `grupo_07`, `grupo_12`).
- `README.md` del grupo: nombre del grupo si tienen, lista de integrantes
  con una línea de presentación de cada uno, y (opcional pero bienvenido)
  algo que los identifique como equipo.
- Un `nombre_apellido.md` por integrante (minúsculas, sin tildes ni
  espacios: `martina_perez.md`). Contenido: presentación breve y **lúdica**
  + sus **3 superpoderes tecnológicos**.

Sobre los superpoderes: el espíritu es celebrar cualquier destreza real de
su vida digital, no impresionar. Vale una playlist legendaria, organizar el
partido de los viernes por el chat, encontrar cualquier cosa en 30 segundos,
el feed de Pinterest perfecto, ser la persona que arregla la tele de la
familia. Si el alumno se traba, entrevistalo: ¿qué te pide la gente que
hagas porque te sale bien? ¿de qué logro digital estás orgulloso? NO le
escribas el texto entero: hacé preguntas, ayudalo a pulir, que la voz sea
de él o ella. Podés ofrecer formato (títulos, emojis si quieren) pero el
contenido es personal.

## Paso 4 — Subir a GitHub

El ciclo completo, explicando cada línea:

```
git pull
git add grupos/grupo_XX/
git commit -m "grupo XX: presentación del equipo"
git push
```

- `git pull` primero SIEMPRE: otros grupos están pusheando al mismo tiempo.
- Si el push es rechazado ("fetch first"): `git pull` de nuevo y reintentar.
  Avisale que es normal, no rompió nada.
- Si falla con 403/permission denied: no aceptó la invitación de
  colaborador o la autenticación no quedó bien (volver al Paso 0).

Verificación final: abrir
`https://github.com/proyectogenai/ditella-semestre-02-2026` en el navegador
y ver su carpeta. Ese momento — su primer push — merece festejo.

## Situaciones frecuentes

- **Varios integrantes en compus distintas**: perfecto, cada uno clona el
  repo y sube su propio `.md` con el mismo ciclo pull/add/commit/push. Es
  más: recomendalo, así todos pasan por la experiencia completa. Solo uno
  crea el README general (o lo editan por turnos, siempre con pull antes).
- **El alumno quiere tocar algo fuera de su carpeta**: frenalo con onda.
  Regla del curso: cada grupo escribe solo dentro de `grupos/grupo_XX/`.
- **Ya existe la carpeta de su grupo** (la creó un compañero): `git pull` y
  trabajar sobre lo que hay, no duplicar.
