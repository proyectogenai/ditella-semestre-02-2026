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
Elegí armar una skill nueva para **Piecitas**, nuestra marca de
rompecabezas de lujo: porque es un mundo con reglas de estilo muy claras
(paleta sobria, tono de "honor") que se repite en cada pieza gráfica, y
valía la pena tenerlo empaquetado para no reubicar el brief cada vez.

---

## C.2 — El `description`

Escribilo acá antes de pasarlo al `SKILL.md` — es más fácil corregirlo en
texto plano que ya adentro del archivo.

**Mi description:**
> brief de piecitas, puzzle de lujo, prompt de imagen, puzzle, piezas,
> piecitas, rompecabezas. Se usa para generar prompts de piezas gráficas.

**Chequeo rápido:**

- [x] Dice **qué hace** la skill
- [x] Dice **cuándo** usarla
- [x] Usa las palabras con las que **yo** pediría esta tarea (no jerga
      técnica ni genérica tipo "ayuda con diseño")

---

## C.3 — El `SKILL.md`

Nombre de la carpeta de mi skill: `piecitas`

**Ruta donde la instalé:**

- [x] Personal (`~/.claude/skills/` o `~/.config/opencode/skill/`)
- [ ] De proyecto (`.claude/skills/` o `.opencode/skill/` de este repo)

---

## C.4 — La prueba en un chat limpio (lo más importante)

Abrí una conversación nueva y pedile algo del tema, sin mencionar la skill
directamente.

**¿Qué le pedí?**
"Vista general de un torneo de rompecabezas recién terminado", en un chat limpio, sin nombrar la skill.

**¿La cargó sola?** Sí

**Con la tabla de la guía del estudiante, ¿cuál de los cuatro síntomas tuve?**

| Síntoma | Marcá el que te pasó |
| --- | --- |
| No la carga nunca | |
| La carga pero ignora las reglas | |
| La carga cuando no corresponde | |
| Funciona pero devuelve de más | |
| Ninguno — funcionó a la primera | X |

---

## C.5 — La corrección

**Qué le cambié después de la prueba:**
Probamos un pedido ambiguo de otra marca (flyer de fiesta con neón) y, al no incluir las palabras del `description`, la skill no cargó y el agente respondió genérico. Ajustamos el `description` para que cubra también las frases del día a día — "pieza gráfica", "marca", "promo", "poster", "torneo", "colección" — y no solo "puzzle / rompecabezas".

**Volví a probar y ahora:**
Pedí "prompt para publicidad de la marca" en un chat limpio y la skill cargó sola → confirmado, el `description` ampliado capta los pedidos que no nombran "puzzle".

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
