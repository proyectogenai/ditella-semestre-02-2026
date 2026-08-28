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

Un system prompt nuevo para generar variaciones de arte de tapa para el
disco de un amigo. Lo elijo porque después quiero reusar el mismo sistema
para generar los frames iniciales y finales de videos de 10 segundos a
partir de esas mismas imágenes — necesito una skill que sirva para las dos
cosas, no una puntual para un solo pedido.

---

## C.2 — El `description`

Escribilo acá antes de pasarlo al `SKILL.md` — es más fácil corregirlo en
texto plano que ya adentro del archivo.

**Mi description:**

Sistema visual del disco de Chrisu, ambientado en un campo de lavandas.
Usar esta skill cuando se pida generar la tapa de disco de Chrisu o los
frames iniciales/finales de video de Chrisu.

**Chequeo rápido:**

- [x] Dice **qué hace** la skill
- [x] Dice **cuándo** usarla
- [x] Usa las palabras con las que **yo** pediría esta tarea (no jerga
técnica ni genérica tipo "ayuda con diseño")

---

## C.3 — El `SKILL.md`

Nombre de la carpeta de mi skill: `tapa-chrisu`

**Ruta donde la instalé:**

- [x] Personal (`~/.claude/skills/` o `~/.config/opencode/skill/`)
- [ ] De proyecto (`.claude/skills/` o `.opencode/skill/` de este repo)

(Además vive en `grupos/grupo_01/clase_03/tapa-chrisu/` para que quede
visible en el repo del curso.)

---

## C.4 — La prueba en un chat limpio (lo más importante)

Abrí una conversación nueva y pedile algo del tema, sin mencionar la skill
directamente.

**¿Qué le pedí?**

"Creá opciones de tapa para el disco de mi amigo Chrisu"

**¿La cargó sola?** Sí

**Con la tabla de la guía del estudiante, ¿cuál de los cuatro síntomas tuve?**

| Síntoma | Marcá el que te pasó |
| --- | --- |
| No la carga nunca | |
| La carga pero ignora las reglas | |
| La carga cuando no corresponde | |
| Funciona pero devuelve de más | |
| Ninguno — funcionó a la primera | x |

Nota aparte (no entra en la tabla): la skill decía "devolvé las imágenes,
nunca el texto del prompt", pero el agente no tiene generación de imagen
directa, así que me ofreció los 10 prompts en texto para pegar en
Midjourney/Flux. No es un problema del `description` ni del cuerpo — es
un límite de capacidad del agente que la skill no contemplaba.

---

## C.5 — La corrección

**Qué le cambié después de la prueba:**

1. Las lavandas salían muy bajas en la imagen generada — corregí `EL
   UNIVERSO` para que le pasen la cintura a una persona parada.
2. El Modo 1 (tapa) nunca podía incluir a Chrisu, pero lo necesito para
   tener variantes con y sin él (útil para el Modo 2 después). Actualicé
   el Modo 1 para que incluya a Chrisu cuando se pida explícitamente "con
   Chrisu", y que el agente pregunte si no se aclara.

**Volví a probar y ahora:**

Generé las imágenes reales (vía Gemini, copiando los prompts a mano — la
skill no tiene forma de mandarlos directo, es una limitación del agente,
no de la skill). El outfit, la bandolera, el pelo con onda y los anteojos
salieron bien logrados y consistentes entre imágenes. Quedaron dos cosas
abiertas para la próxima clase, no bloqueantes:

- El físico de Chrisu no queda 100% fiel al real — falta afinar el bloque
  `SUJETO` con rasgos más concretos de la cara.
- El Modo 1 solo varía cámara (plano/ángulo/cercanía), nunca la postura de
  Chrisu — quiero sumar variación de pose para la próxima iteración.

**Idea para forzarla a fallar** (la carga funcionó a la primera, pero
pruebo la idea igual): le pediría a alguien que probara con *"hacé una
tapa de Chrisu estilo synthwave con neones"* — sirve para ver si la skill
respeta la restricción de "nunca estética de género evidente" o si el
`description` genérico deja colar cualquier estilo.

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
