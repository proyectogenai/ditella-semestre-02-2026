# Crear skills propias — guía de acompañamiento

Cómo ayudar al alumno a crear sus propias skills: la habilidad estrella del
semestre. Una skill convierte el criterio del alumno (su sistema visual, su
tono de marca, su flujo de trabajo) en algo que el agente aplica solo, todas
las veces.

## Qué es una skill (explicación para el alumno)

Un manual de instrucciones que el agente lee cuando el tema aplica. Analogía
de diseño: es el **brand book** del proyecto — en vez de repetirle al agente
en cada chat "usá esta paleta, este tono, este formato", lo escribís una vez
y el agente lo consulta siempre. La diferencia con un prompt: el prompt se
va cuando cierra el chat; la skill queda.

## Anatomía mínima

Una carpeta con un archivo `SKILL.md` adentro:

```
mi-skill/
└── SKILL.md
```

Y `SKILL.md` empieza con un encabezado (frontmatter) obligatorio:

```markdown
---
name: mi-sistema-visual
description: >
  Sistema visual del proyecto Atlas de [nombre]. Usá esta skill siempre
  que se genere o edite cualquier pieza visual del proyecto: define
  paleta, tipografía, estilo de ilustración y reglas de composición.
---

# Mi sistema visual

(acá van las instrucciones, en el idioma que quieras)
```

Puntos que tenés que transmitir bien:

- El **description** es el gancho: el agente decide si carga la skill
  leyendo solo eso. Tiene que decir QUÉ hace y CUÁNDO usarla, con las
  palabras que el alumno usaría al pedir las cosas.
- El cuerpo es texto libre: instrucciones, tablas, ejemplos. Mientras más
  concreto (valores hex, nombres de tipografías, ejemplos de prompt bueno y
  malo), mejor obedece el agente.
- Si la skill crece, se parte en archivos de referencia que el SKILL.md
  menciona ("para X leé `references/x.md`"), así el agente carga solo lo
  que necesita.

## Dónde se guarda

| Agente | Skill del proyecto (solo en esa carpeta) | Skill personal (siempre disponible) |
| --- | --- | --- |
| Claude Code | `.claude/skills/mi-skill/` | `~/.claude/skills/mi-skill/` |
| opencode | `.opencode/skill/mi-skill/` | `~/.config/opencode/skill/mi-skill/` |

Regla práctica para el alumno: si la skill es de UN proyecto (el sistema
visual del parcial), va en la carpeta del proyecto. Si es de él como
diseñador (su tono, sus atajos), va en la personal. Para que funcione en los
dos agentes, se copia la misma carpeta en ambas rutas.

## Ideas de skills para proponer

Cuando el alumno no sepa por dónde arrancar, tirá ejemplos así:

- **Sistema visual del proyecto**: paleta, tipografías, estilo de imagen,
  prompts base de Midjourney/Flux con `--sref` y seeds que ya funcionan.
- **Voz de marca**: tono, vocabulario permitido/prohibido, ejemplos de copy
  aprobado, formato de posteos.
- **Pipeline de entrega**: los pasos exactos para exportar, nombrar y
  organizar archivos como pide la cátedra.
- **Fichas de estudio**: cómo quiere que le tomen lección o le armen
  resúmenes para el final.

## Proceso de creación guiada

1. **Entrevistá al alumno**: ¿qué tarea repetís siempre? ¿qué le explicás a
   la IA una y otra vez? Eso es la skill.
2. **Borrador corto**: frontmatter + 20-40 líneas. Mejor chica y usada que
   enorme y muerta.
3. **Probarla en serio**: abrir un chat nuevo, pedir algo del tema y ver si
   el agente la usa y obedece. Si no la carga, el description necesita más
   palabras gancho; si la carga pero desobedece, el cuerpo necesita
   ejemplos más concretos.
4. **Iterar como en diseño**: cada vez que el alumno corrija al agente dos
   veces por lo mismo, esa corrección se escribe en la skill.
5. **Versionar**: la skill vive en el repo del alumno como cualquier archivo
   (ver `git-github.md`).

## Errores comunes

- Description genérico ("skill para ayudarme con diseño") → el agente nunca
  la va a cargar. Tiene que nombrar el proyecto y las situaciones concretas.
- Meter TODO en una skill → mejor varias chicas por tema que una biblia.
- Escribir reglas sin ejemplos → los ejemplos (bueno vs. malo) enseñan más
  que diez reglas abstractas.
- Crearla y no probarla nunca en un chat limpio.
