# Clase 3 · Ejercicios

**Antes de empezar, pedile a tu agente que actualice el repo y después
copie este archivo a tu carpeta de grupo** — no hace falta que escribas
ningún comando:

> "Actualizá el repo (`git pull`, guardando antes cualquier cambio
> pendiente) y después copiame `clases/clase_03/ejercicios.md` a mi
> carpeta de grupo, `grupos/grupo_XX/clase_03/`."

Después completalo ahí. Es tu hoja de trabajo de la clase y parte del
entregable.

> 🎓 **Seguís en modo tutor.** Lo mecánico (crear la carpeta, instalar,
> comandos de git) que lo resuelva el agente. El `description` y el cuerpo
> de tu skill son criterio de diseño: los escribís vos, y le pedís que te
> guíe con preguntas. Frase para pegar al inicio del chat:
> *"Trabajemos en modo tutor: guiame de a un paso por vez, hacéme las
> preguntas que necesites y esperá mi respuesta antes de seguir. No
> escribas por mí el description ni el cuerpo de la skill."*

---

## C.1 — Qué voy a empaquetar

**Elegí una:**

- [ ] Mi asistente individual de la Clase 2
- [ ] El asistente grupal de la Clase 2
- [x] Algo nuevo, inspirado en los casos de hoy — si no llegué con nada de
      la C2

**¿Cuál, y por qué esa y no otra?**
Elegí crear un concepto nuevo: el **bar Aspecto**, un bar biblioteca con
vibes dark, cozy y sofisticadas. Preferimos algo nuevo porque nos dio la
libertad de definir un universo propio a partir de lo que aprendimos en la
Clase 2, y porque queríamos una skill que pueda componerse más allá de los
asistentes ya armados (Bruma y Corriente).

---

## C.2 — El `description`

Escribilo acá antes de pasarlo al `SKILL.md` — es más fácil corregirlo en
texto plano que ya adentro del archivo.

**Mi description:**
"Director de marketing digital del bar Aspecto. Usá esta skill cada vez que
haya que generar una imagen o pieza visual de Aspecto: define universo,
paleta, encuadres y restricciones de la marca."

**Chequeo rápido:**

- [x] Dice **qué hace** la skill (generar piezas visuales de Aspecto)
- [x] Dice **cuándo** usarla (cada vez que haya que generar una imagen o
      pieza visual de Aspecto)
- [x] Usa las palabras con las que **yo** pediría esta tarea ("generar una
      imagen o pieza visual de Aspecto", no jerga genérica)

---

## C.3 — El `SKILL.md`

Nombre de la carpeta de mi skill: `aspecto`

**Ruta donde la instalé:**

- [x] Personal (`~/.claude/skills/` o `~/.config/opencode/skill/`)
- [ ] De proyecto (`.claude/skills/` o `.opencode/skill/` de este repo)

---

## C.4 — La prueba en un chat limpio (lo más importante)

Abrí una conversación nueva y pedile algo del tema, sin mencionar la skill
directamente.

**¿Qué le pedí?**

**¿La cargó sola?** Sí / No

**Con la tabla de la guía del estudiante, ¿cuál de los cuatro síntomas tuve?**

| Síntoma | Marcá el que te pasó |
| --- | --- |
| No la carga nunca | |
| La carga pero ignora las reglas | |
| La carga cuando no corresponde | |
| Funciona pero devuelve de más | |
| Ninguno — funcionó a la primera | |

---

## C.5 — La corrección

**Qué le cambié después de la prueba:**

**Volví a probar y ahora:**

> Si funcionó a la primera en C.4, contá igual qué le pedirías a otra
> persona que pruebe para forzarla a fallar — no hace falta que lo hagas,
> alcanza con la idea.

---

# Entregable

En `grupos/grupo_XX/clase_03/`:

```
clase_03/
└── <nombre-de-tu-skill>/
    └── SKILL.md
```

Más dos líneas en el README del grupo contando qué corrigieron después de
probarla en un chat limpio.

Y el push de siempre:

```
git pull
git add grupos/grupo_XX/
git commit -m "grupo XX: clase 03"
git push
```
