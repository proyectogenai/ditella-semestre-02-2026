# Voz en off — "A dónde vamos" (versión actual)

**Corrección de los profes:** la voz no tiene que narrar todo lo que pasa. Solo
**una frase al principio y una al final**, y el film tiene que ser más
fashion film y menos relato. La que habla sigue siendo la amiga.

## Las dos frases (audios ya hechos)

| Frase | Audio | Dura | Dónde va |
|---|---|---|---|
| **A, al principio** | `voz_01c_despertar` | 4,7 s | Sobre los planos 3 y 4 (el pañuelo y la cartera), unos 4 segundos después de arrancar. |
| **B, al final** | `voz_08_cierre` | 5,8 s | Sobre los planos 58 a 60 (el abrazo, el baile y el final), terminando justo al cierre. |

**A:** "A Lourdes le gusta un poco todo, y cuando una fiesta termina, ya hay otra."

**B:** "La verdad, tampoco tenía apuro en encontrarla. Esta fiesta también está buena."

Con planos de 2 segundos, el film dura unos 2 minutos. En el medio no hay voz:
queda la música, los sonidos y la ropa en movimiento.

## Lo que ya no se usa

Estos audios quedan guardados, pero fuera del film por ahora: `voz_01a_despertar`,
`voz_02_garden`, `voz_03_carnaval`, `voz_04_mar`, `voz_05_rooftop`,
`voz_06_playa` y `voz_07_encuentro`.

**Pendiente de decidir:** `voz_01b_mensaje_celular` ("Lourdes, ¿dónde estás?").
No es narración sino un mensaje de voz dentro de la escena (plano 2), así que
puede quedarse o no.

---

## Guion anterior (ya no se usa, queda como archivo)

Narra **la amiga**, en primera persona, con la misma voz del libro (la que
persigue a Lourdes y siempre llega un rato tarde). Cuenta el recorrido mirando
para atrás: va encontrando lo que Lourdes deja a su paso.

- **Tiempos:** calculados con 40 planos de 3 segundos = 2:00. Si los planos
  se recortan, hay que correr los tiempos.
- **Ritmo:** hay silencios a propósito, para que respire la música y se vea la
  ropa. La voz no cubre todo el film.
- **Estado:** borrador. Lo marcado como *abierto* lo decide el grupo.

## Guion con tiempos

| Tiempo | Planos | Texto |
|---|---|---|
| 0:00 – 0:03 | 1 (Lourdes dormida) | "Lourdes no se pierde. Que quede claro." |
| 0:03 – 0:06 | 2 (el celular) | *Mensaje de voz de la amiga, con efecto de celular:* "Lourdes, ¿dónde estás?" |
| 0:06 – 0:12 | 3 y 4 (pañuelo y cartera) | "A Lourdes le gusta un poco todo, y cuando una fiesta termina, ya hay otra." |
| 0:12 – 0:30 | 5 a 10 (garden party) | "La primera fue en un jardín, a la hora en que el sol se pone naranja. Llegué tarde, claro. Solo quedaba una sombrilla de encaje en el pasto. La guardé y seguí." |
| 0:30 – 0:48 | 11 a 16 (carnaval) | "Después, un carnaval. Tambores, plumas, confeti por todos lados. Ella ya se había ido. En el piso, un zapato dorado. A la bolsa." |
| 0:48 – 1:06 | 17 a 22 (alta mar) | "Un barco, a pleno sol. El viento le voló el sombrero, y yo lo atajé de milagro." |
| 1:06 – 1:24 | 23 a 28 (rooftop) | "Un rooftop, de madrugada. En el piso, unas llaves con pompón. También las guardé." |
| 1:24 – 1:36 | 29 a 32 (playa) | "Y al amanecer, una playa vacía. Se le cayeron las antiparras, y ni se dio cuenta." |
| 1:36 – 1:42 | 33 y 34 (la amiga aparece) | "Esta vez corrí más rápido que nunca." |
| 1:42 – 1:48 | 35 y 36 (se ven) | "Y por una vez, no llegué tarde." |
| 1:48 – 1:51 | 37 (le devuelve los objetos) | "Le devolví todo lo que dejó atrás." |
| 1:51 – 1:54 | 38 (abrazo) | *(silencio)* |
| 1:54 – 2:00 | 39 y 40 (bailan y final) | "La verdad, tampoco tenía apuro en encontrarla. Esta fiesta también está buena." |

**Total:** unas 160 palabras. A ritmo tranquilo entran bien en los 2 minutos,
con aire para la música.

## Texto corrido (para pegar en el generador de voz)

Con puntos suspensivos y saltos donde va la pausa.

```
Lourdes no se pierde. Que quede claro.

[Mensaje de voz del celular] Lourdes, ¿dónde estás?

A Lourdes le gusta un poco todo, y cuando una fiesta termina, ya hay otra.

La primera fue en un jardín, a la hora en que el sol se pone naranja. Llegué tarde, claro. Solo quedaba una sombrilla de encaje en el pasto. La guardé y seguí.

Después, un carnaval. Tambores, plumas, confeti por todos lados. Ella ya se había ido. En el piso, un zapato dorado. A la bolsa.

Un barco, a pleno sol. El viento le voló el sombrero, y yo lo atajé de milagro.

Un rooftop, de madrugada. En el piso, unas llaves con pompón. También las guardé.

Y al amanecer, una playa vacía. Se le cayeron las antiparras, y ni se dio cuenta.

Esta vez corrí más rápido que nunca. Y por una vez, no llegué tarde. Le devolví todo lo que dejó atrás.

La verdad, tampoco tenía apuro en encontrarla. Esta fiesta también está buena.
```

Conviene generar **cada bloque como un audio aparte** (uno por fiesta) y
ponerlos en su tiempo en la edición. Así se pueden mover y recortar sin
regenerar todo.

## Dirección de la voz

- Voz de una chica joven, cálida y cercana, con acento rioplatense.
- Tono: divertido y un poco agitado al principio ("siempre llego tarde"),
  más tranquilo y emocionado al final.
- Sin tono de publicidad ni de locutora: como contándole algo a una amiga.

## Herramienta: ElevenLabs

Elegí **ElevenLabs**, que es una de las herramientas del curso. Sirve para los
dos pasos: primero se **crea la voz de la amiga** a partir de una descripción
(*Voice Design*) y después se le pasa el texto (*Text to Speech*, con el modelo
Eleven v3, que acepta etiquetas de emoción entre corchetes, como `[laughs]`).

Chequear antes, porque no pude confirmarlo: si tu plan (el gratuito o el que
tengan) incluye Voice Design y Eleven v3, y cuántos caracteres te quedan. El
guion entero tiene unos 900 caracteres, así que es poco, pero conviene dejar
margen para probar versiones.

### Paso 1 — Crear la voz de la amiga (Voice Design)

En ElevenLabs: *Voices → My Voices → Add a new voice → Voice Design*. Pegar este
prompt de voz:

```
A young woman in her early twenties from Buenos Aires, speaking Rioplatense Argentine Spanish. A warm, friendly, close and slightly playful voice, like a best friend telling a story with a smile. Slightly breathy and energetic, as if she has just been running and is a little out of breath, with a natural, relaxed, conversational pace. Medium-high pitch, soft and bright tone. Not an announcer, not a commercial voice, not robotic.
```

Texto de muestra (la herramienta lo pide para generar la voz):

```
Lourdes no se pierde. Que quede claro. Lo que pasa es que a Lourdes le gusta un poco todo, y cuando una fiesta termina, ya hay otra.
```

Genera **tres opciones**. Escucharlas y elegir la que suene más a la amiga
(cercana, un poco agitada, de la edad de Lourdes). Si ninguna tiene acento
argentino, repetir cambiando "Rioplatense Argentine Spanish" por "Argentine
accent, with the typical 'sh' sound for ll and y".

Guardar la voz con el nombre **"Amiga de Lourdes"**.

### Paso 2 — Generar cada bloque (Text to Speech)

Elegir la voz "Amiga de Lourdes", el modelo **Eleven v3**, estabilidad baja a
media (así suena más expresiva) y velocidad normal. Generar **un audio por
bloque**, pegando cada texto con sus etiquetas. Las etiquetas son entre
corchetes y pueden variar: si alguna no se nota, probar otra o sacarla.

**voz_01a_despertar** (plano 1)

```
Lourdes no se pierde. Que quede claro.
```

**voz_01b_mensaje_celular** (plano 2). Es la misma voz de la amiga, pero apurada y como grabada con el celular:

```
[urgent, a little out of breath] Lourdes, ¿dónde estás?
```

Después de generarlo, en la edición ponerle un efecto de teléfono (recortar graves y agudos con un ecualizador) y un poco de reverb de cuarto.

**voz_01c_despertar** (planos 3 y 4)

```
[pause] A Lourdes le gusta un poco todo, y cuando una fiesta termina, ya hay otra.
```

**voz_02_garden** (planos 5 a 10)

```
[sighs] La primera fue en un jardín, a la hora en que el sol se pone naranja. Llegué tarde, claro. [laughs softly] Solo quedaba una sombrilla de encaje en el pasto. La guardé y seguí.
```

**voz_03_carnaval** (planos 11 a 16)

```
Después, un carnaval. Tambores, plumas, confeti por todos lados. Ella ya se había ido. [pause] En el piso, un zapato dorado. A la bolsa.
```

**voz_04_mar** (planos 17 a 22)

```
Un barco, a pleno sol. El viento le voló el sombrero, [laughs] y yo lo atajé de milagro.
```

**voz_05_rooftop** (planos 23 a 28)

```
Un rooftop, de madrugada. En el piso, unas llaves con pompón. [sighs] También las guardé.
```

**voz_06_playa** (planos 29 a 32)

```
Y al amanecer, una playa vacía. Se le cayeron las antiparras, [laughs softly] y ni se dio cuenta.
```

**voz_07_encuentro** (planos 33 a 37)

```
[out of breath, excited] Esta vez corrí más rápido que nunca. Y por una vez, no llegué tarde. [warmly] Le devolví todo lo que dejó atrás.
```

**voz_08_cierre** (planos 39 y 40)

```
[softly, smiling] La verdad, tampoco tenía apuro en encontrarla. Esta fiesta también está buena.
```

Guardar los audios con esos nombres. Los videos y los audios pesan: van a Drive,
no al repo.

## Abierto (a decidir)

- [x] **Audio del celular en el plano 2:** sí. Se escucha la voz de la amiga en el mensaje de voz, "Lourdes, ¿dónde estás?", con efecto de celular.
- [x] **Frase final:** confirmada (adaptada de la del libro).
- [ ] **Voz:** elegir una de las 3 opciones de Voice Design en ElevenLabs.
- [ ] **Música:** todavía no está definida, y condiciona el ritmo de la voz.
