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
El asistente grupal de la Clase 2: la marca **Cherba** (mates de calabaza
revestidos en cuero con bases bordadas). Lo elegimos porque ya teníamos el
system prompt consensuado entre las tres y es el que vamos a usar de verdad
para la identidad visual de la marca, así que empaquetarlo como skill nos
sirve a las tres, no solo a una.

---

## C.2 — El `description`

Escribilo acá antes de pasarlo al `SKILL.md` — es más fácil corregirlo en
texto plano que ya adentro del archivo.

**Mi description:**
Asistente de identidad visual de Cherba, marca de mates de calabaza
revestidos en cuero con bases bordadas. Usala cada vez que necesites un
prompt de imagen para Cherba para crear su identidad visual (redes,
catálogo, cartelería, web): define el universo, el bloque de estilo, los
encuadres rotativos y las restricciones de la marca, y devuelve el prompt
final en inglés listo para pegar.

**Chequeo rápido:**

- [x] Dice **qué hace** la skill
- [x] Dice **cuándo** usarla
- [x] Usa las palabras con las que **yo** pediría esta tarea (post, redes, aviso, web)

---

## C.3 — El `SKILL.md`

Nombre de la carpeta de mi skill: `asistente-cherba`

**Ruta donde la instalé:**

- [x] Personal (`~/.claude/skills/` o `~/.config/opencode/skill/`)
- [ ] De proyecto (`.claude/skills/` o `.opencode/skill/` de este repo)

---

## C.4 — La prueba en un chat limpio (lo más importante)

Abrí una conversación nueva y pedile algo del tema, sin mencionar la skill
directamente.

**¿Qué le pedí?**
"necesito que me crees un prompt para crear una imagen para un post de Instagram de un mate Cherba con base bordada"

**¿La cargó sola?** Sí (aplicó la regla de idioma inglés luego de corregir).

**Con la tabla de la guía del estudiante, ¿cuál de los cuatro síntomas tuviste?**

| Síntoma | Marcá el que te pasó |
| --- | --- |
| No la carga nunca | |
| La carga pero ignora las reglas | x |
| La carga cuando no corresponde | |
| Funciona pero devuelve de más | |
| Ninguno — funcionó a la primera | |

---

## C.5 — La corrección

**Qué le cambié después de la prueba:**
- Forcé el idioma inglés (antes devolvía el prompt en español).
- Exigí salida exclusiva en bloque de código markdown, sin nada fuera.
- Fijé que el mate es SIEMPRE calabaza revestida en cuero (nunca madera,
  cerámica ni tela), porque inventaba otros materiales.
- Exigí pegar el bloque de estilo literal e íntegro, sin parafrasearlo.

**Volví a probar y ahora:**
Devuelve el prompt en inglés dentro del bloque de código y respeta el
universo de Cherba (cuero + base bordada).

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
