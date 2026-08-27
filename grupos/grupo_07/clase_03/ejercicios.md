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
El asistente grupal de Bruma: es el resultado del trabajo colectivo de las
tres integrantes, la prueba cruzada ya la pasamos, y es el que el feed del
grupo más necesita tener siempre disponible y consistente.

---

## C.2 — El `description`

Escribilo acá antes de pasarlo al `SKILL.md` — es más fácil corregirlo en
texto plano que ya adentro del archivo.

**Mi description:**
Asistente visual del café Bruma, de identidad maximalista gráfica: usá esta
skill cuando haya que generar una imagen para el feed, un post o cualquier
pieza visual de Bruma. Convierte pedidos cortos en prompts de imagen completos
y consistentes con el estilo (café al paso en Palermo, rayas atrevidas en
dúos de dos colores como naranja/rosa y amarillo/naranja, luz ámbar, gente
tomando café de pie). NO es el Bruma minimalista gris: esta marca es gráfica,
potente y colorida.

**Chequeo rápido:**

- [x] Dice **qué hace** la skill
- [x] Dice **cuándo** usarla
- [x] Usa las palabras con las que **yo** pediría esta tarea (no jerga
      técnica ni genérica tipo "ayuda con diseño")

---

## C.3 — El `SKILL.md`

Nombre de la carpeta de mi skill: `bruma-asistente`

**Ruta donde la instalé:**

- [x] Personal (`~/.claude/skills/` y `~/.config/opencode/skill/`)
- [x] De proyecto (`.claude/skills/` o `.opencode/skill/` de este repo — como
      carpeta de entrega en `grupos/grupo_07/clase_03/bruma-asistente/`)

---

## C.4 — La prueba en un chat limpio (lo más importante)

Abrí una conversación nueva y pedile algo del tema, sin mencionar la skill
directamente.

**¿Qué le pedí?**
"Necesito una imagen para el feed de Bruma, un post que muestre la barra."

**¿La cargó sola?** Sí

**Con la tabla de la guía del estudiante, ¿cuál de los cuatro síntomas tuve?**

| Síntoma | Marcá el que te pasó |
| --- | --- |
| No la carga nunca | |
| La carga pero ignora las reglas | |
| La carga cuando no corresponde | |
| Funciona pero devuelve de más | |
| Ninguno — funcionó a la primera | |

> Nota: la cargó, pero al haber varias skills de "Bruma" en el entorno el
> agente tomó la identidad de otra (la minimalista gris) en vez de la
> nuestra (maximalismo gráfico). Se corrigió en C.5.

---

## C.5 — La corrección

**Qué le cambié después de la prueba:**
Ajusté el `description` de la skill para que mencione explícitamente la
identidad gráfica de nuestra Bruma (rayas atrevidas en dúos de dos colores
como naranja/rosa y amarillo/naranja, maximalismo gráfico) y agregué un "NO es
el Bruma minimalista gris", para que el agente elija la skill correcta cuando
haya varias "Bruma" disponibles.

**Volví a probar y ahora:**
La skill ahora se distingue por identidad: con el description corregido, el
agente reconoce que la nuestra es la gráfica/colorida y debería usar la paleta
de rayas en dúos de dos colores en vez de la gris minimalista.

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
