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

- [x] Mi asistente individual de la Clase 2
- [ ] El asistente grupal de la Clase 2
- [ ] Algo nuevo, inspirado en los casos de hoy — si no llegué con nada de
      la C2

**¿Cuál, y por qué esa y no otra?**

El asistente de identidad visual de Bruma, el que hice en la Clase 2. Para la
parte individual cada una empaqueta el suyo: yo el de Bruma y Pilar el de la
ropa de ciclismo. Más adelante quiero probar también de armar una skill con
el asistente de Pilu, que nos encantó cómo quedó.

---

## C.2 — El `description`

Escribilo acá antes de pasarlo al `SKILL.md` — es más fácil corregirlo en
texto plano que ya adentro del archivo.

**Mi description:**

Sos el director de arte de Bruma, un café de especialidad en Palermo Hollywood.
Convertí pedidos cortos del equipo en prompts de imagen completos y consistentes
con la identidad de la marca. Usá esta skill cada vez que quiera generar cualquier
pieza visual de Bruma, como por ejemplo: "haceme una imagen para el feed de
instagram de bruma", "armame un prompt para hacer una imagen del universo visual
de bruma", "haceme un poster para el branding de bruma". Devolvé el texto del
prompt en inglés, listo para pegar en la herramienta de imagen.

**Chequeo rápido:**

- [x] Dice **qué hace** la skill
- [x] Dice **cuándo** usarla
- [x] Usa las palabras con las que **yo** pediría esta tarea (no jerga
      técnica ni genérica tipo "ayuda con diseño")

---

## C.3 — El `SKILL.md`

Nombre de la carpeta de mi skill: `asistente-bruma`

**Ruta donde la instalé:**

- [x] Personal (`~/.claude/skills/asistente-bruma/` — Claude Code)
- [ ] De proyecto (`.claude/skills/` o `.opencode/skill/` de este repo)

---

## C.4 — La prueba en un chat limpio (lo más importante)

Abrí una conversación nueva y pedile algo del tema, sin mencionar la skill
directamente.

**¿Qué le pedí?**

En un chat limpio de Claude Code: "haceme una imagen para el feed de instagram
de bruma, algo del interior con gente en la barra".

**¿La cargó sola?** Sí ("Ran skill /asistente-bruma", sin nombrarla yo).

Devolvió solo el prompt final en inglés, en un bloque de código, eligiendo un
encuadre (desde adentro, en la barra) y respetando las restricciones: sin caras
en primer plano ("no faces visible up close"), luz natural de día, 3 personas,
sin logo, bloque de estilo completo + 1:1.

**Con la tabla de la guía del estudiante, ¿cuál de los cuatro síntomas tuve?**

| Síntoma | Marcá el que te pasó |
| --- | --- |
| No la carga nunca | |
| La carga pero ignora las reglas | |
| La carga cuando no corresponde | |
| Funciona pero devuelve de más | |
| Ninguno — funcionó a la primera | x |

---

## C.5 — La corrección

**Qué le cambié después de la prueba:**

Funcionó a la primera en C.4, así que probé de forzarla a fallar: le pedí
"haceme una foto de la fachada de bruma de noche, toda iluminada" (contradice
la restricción "nunca de noche"). No cedió: mantuvo la regla y me ofreció la
versión de atardecer, que sí es de marca. El único desvío fue que agregó una
línea de explicación antes del prompt, cuando la regla decía "sin explicaciones".

Ajusté esa regla en el `SKILL.md` (sección "Cómo responder", punto 3): ahora
dice "devolvé solo el prompt, salvo que tengas que apartarte del pedido para
respetar una restricción: en ese caso, una línea explicando por qué". Es decir,
convertí en regla lo que la skill ya estaba haciendo bien.

**Volví a probar y ahora:**

Mantiene las restricciones frente a pedidos que las contradicen y, cuando tiene
que desviarse, avisa en una línea — que es el comportamiento que quiero.

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
