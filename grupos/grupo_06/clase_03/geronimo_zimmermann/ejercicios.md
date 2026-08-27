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
- [x] El asistente grupal de la Clase 2
- [ ] Algo nuevo, inspirado en los casos de hoy — si no llegué con nada de
      la C2

**¿Cuál, y por qué esa y no otra?**

El asistente grupal (Halcón). Me gusta más que los individuales: es la
marca que armamos entre los tres y ya pasó por la prueba cruzada del grupo.

---

## C.2 — El `description`

Escribilo acá antes de pasarlo al `SKILL.md` — es más fácil corregirlo en
texto plano que ya adentro del archivo.

**Mi description:**

> Usá esta skill cada vez que haya que generar una imagen o pieza visual
> para Halcón: redes, newsletter, señalética.

**Chequeo rápido:**

- [x] Dice **qué hace** la skill
- [x] Dice **cuándo** usarla
- [x] Usa las palabras con las que **yo** pediría esta tarea (no jerga
      técnica ni genérica tipo "ayuda con diseño")

---

## C.3 — El `SKILL.md`

Nombre de la carpeta de mi skill: `santi_beltran_patea_penales`

**Ruta donde la instalé:**

- [ ] Personal (`~/.claude/skills/` o `~/.config/opencode/skill/`)
- [x] De proyecto (`.claude/skills/` o `.opencode/skill/` de este repo)

---

## C.4 — La prueba en un chat limpio (lo más importante)

Abrí una conversación nueva y pedile algo del tema, sin mencionar la skill
directamente.

**¿Qué le pedí?**

Una foto de producto de una campera de Halcón para Instagram.

**¿La cargó sola?** Sí

**Con la tabla de la guía del estudiante, ¿cuál de los cuatro síntomas tuve?**

| Síntoma | Marcá el que te pasó |
| --- | --- |
| No la carga nunca | |
| La carga pero ignora las reglas | |
| La carga cuando no corresponde | |
| Funciona pero devuelve de más | |
| Ninguno — funcionó a la primera | x |

> Antes tuve un problema de instalación: la app de escritorio estaba
> abierta en otra carpeta del repo y no veía la skill. Corregí la ruta de
> instalación y ahí sí la cargó sola y siguió las reglas (neón rojo,
> oficina de noche, regla de variación, prompt en inglés).

---

## C.5 — La corrección

**Qué le cambié después de la prueba:**

No hubo que cambiar nada de la skill — funcionó a la primera. El arreglo
fue de instalación: copiar la skill a la carpeta del repo desde la que
abría la app de escritorio.

**Volví a probar y ahora:**

La carga sola y respeta el bloque de estilo y la regla de variación.

> Si funcionó a la primera en C.4, contá igual qué le pedirías a otra
> persona que pruebe para forzarla a fallar — no hace falta que lo hagas,
> alcanza con la idea.

Ideas para forzarla a fallar: pedir una imagen **sin que aparezca la
campera**, o describir un escenario fuera del universo de Halcón, a ver si
la skill mantiene la prenda como protagonista.

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