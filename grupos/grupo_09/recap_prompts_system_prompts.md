# Recap · Prompts y system prompts — Grupo 09

Recorrido completo de lo que trabajamos sobre prompts y system prompts a lo
largo de la cursada: desde el asistente de identidad (Clase 2) hasta las
plantillas de la fábrica de imágenes y la skill como "system prompt vivo"
(Clase 3 y Parcial).

La idea rectora de todo el trabajo: **empaquetar un universo de marca como un
sistema de reglas y fichas** para que cualquier modelo o agente genere piezas
consistentes sin depender de nuestra memoria. El viaje fue:
marca → mundo con reglas → system prompt / skill → prompts de escena
traducidos a cada modelo.

---

## 1. Mapa de artefactos

| Artefacto | Archivo | Para qué sirve |
| --- | --- | --- |
| Asistente grupal Bruma (Clase 2) | `clase_02/asistente_grupal.md` | Primer system prompt: rol, universo, bloque de estilo fijo, cómo responder, restricciones |
| Skill Monstrix — system prompt vivo | `clase_03/familia_monstrix/monstrix/SKILL.md` | La fuente de verdad: sistema de familia, 7 fichas, mundo, estilo, Regla Wally. Se sigue editando en cada iteración |
| System prompt NODI (versión Gemini) | `clase_03/nodi/system_prompt_nodi.md` | Mismo contenido que la skill, reformateado para el chat de Gemini |
| Brief de La Familia Monstrix | `clase_03/familia_monstrix/brief_familia_monstrix.md` | Narrativa, estilo visual, decisión de marca (escalabilidad) y sistema de familia |
| Fichas de la familia | `parcial/fichas_familia.md` | Las 6 fichas + NODI con lugar de cada escena y "nunca" por personaje |
| Prompt del mundo | `parcial/prompt_del_mundo.md` | Bloques FIJOS para todas las escenas + bloque variable por escena |
| Prompt escena Wally | `parcial/prompt_escena_wally.md` | Prompt final en inglés + historial de iteraciones v1→v8 |
| Atlas de escenas | `parcial/atlas_de_escenas.md` | Las 8 escenas, el elemento oculto (NODI) y la mecánica de buscar |
| Plantilla Wally → Gemini | `scripts/prompt_wally.txt` | El prompt de escena como plantilla con `{{ESCENA}}` y `{{DENSIDAD}}` para la fábrica |
| Plantilla Wally → difusión (Flux) | `scripts/prompt_flux.txt` | La misma escena re-escrita para modelos que no leen reglas |
| Skill Piecitas | `clase_03/piecitas/SKILL.md` | Segunda marca con el mismo método (más chico): prueba de que el sistema se reutiliza |

---

## 2. La anatomía de un system prompt (caso Monstrix)

El `SKILL.md` es un system prompt estructurado en bloques. Cada bloque tiene
una función:

- **ROL**: "sos el director de arte de La Familia Monstrix". Fija la voz y la
  tarea única: convertir pedidos cortos en imágenes del mundo.
- **REGLAS DEL SISTEMA**: la "genética familiar". Gen común (nariz + tercer
  ojo + orejas de gato + pelo en todo el cuerpo, igual en todos), herencia
  paterna (colmillos), código de color por personaje, regla de edad (más
  viejo = pelaje más oscuro), accesorio rojo como color familiar.
- **FICHAS**: cada personaje con ficha física + vestuario que van "SIEMPRE
  palabra por palabra" + lugar + gestos. La regla anti-deriva: si algo no está
  definido, es igual a NODI.
- **UNIVERSO VISUAL**: paleta, luz, formas redondas, lo que "nunca" es.
- **BLOQUE DE ESTILO**: 4 categorías fijas (TÉCNICA, PALETA, REFERENCIAS,
  CALIDAD) que se incorporan a toda imagen sin modificar.
- **REGLA WALLY**: el cine del atlas — vista aérea alejada, un solo NODI
  verificado, densidad 300+, textura felpa en todo, objetos trampa, 16:9.
- **CÓMO RESPONDER**: la fórmula de composición y el formato por defecto.
- **RESTRICCIONES**: los "nunca" que salieron de errores reales en test.

---

## 3. Decisiones de diseño (el porqué de cada regla)

- **La familia se piensa como herencia genética**, no como una lista de
  personajes sueltos: gen común, herencia paterna de colmillos y código de
  color hacen que los personajes se lean como familia de un vistazo. Esto es
  traducir una decisión visual a una regla lógica que el modelo puede seguir.
- **Fichas "palabra por palabra, sin cambios"**: los modelos tienden a derivar
  entre generaciones; anclar la ficha literal evita que NODI cambie de forma.
- **El mundo es un bloque fijo** que va SIEMPRE idéntico; cada escena solo
  agrega su parte variable (LUGAR, ACCIONES, BUSCAR, EXPRESIÓN). Separar lo
  estable de lo variable es lo que hizo escalable el atlas.
- **Tabla de gestos, no caras nuevas**: la emoción va por ojos/manos/cuerpo;
  la sonrisa con colmillos es fija. Evita que la boca "se mueva" entre tomas.
- **Anclas de color**: el hex celeste hielo #91d3eb se repite en ficha, paleta
  y bloque de estilo, en tres lugares distintos, para que quede inamovible.
- **La Regla Wally incluye objetos trampa**: decorados celeste+rojo que
  disparan falsos positivos. Es la forma de pedirle al modelo que juegue con
  el espectador, no que solo dibuje una multitud.
- **El `description` de la skill es la puerta de entrada**: define cuándo el
  modelo decide que la skill aplica. Lo vimos con Piecitas: con palabras muy
  específicas ("puzzle/rompecabezas") no captaba pedidos del día a día
  ("promo", "pieza gráfica"); lo ampliamos hasta cubrir cómo *realmente*
  pedimos las cosas.

---

## 4. La iteración como método (documentación del proceso)

Cada artefacto lleva su historial. No es relleno: **es la evidencia del
proceso** que pide la cátedra para el parcial y el final.

**System prompt Monstrix (historial v0 → v11):**
- Marca → mundo con reglas (paleta, luz, formas).
- Pase a Gemini: genera imagen directo, no devuelve prompt.
- Gestos en vez de expresiones faciales nuevas.
- Correcciones reales de test: ojos totalmente negros (revertido: decisión
  grupal de conservar los ojos blancos con pupila), colmillos solo debajo de
  la línea de la boca, tercer ojo más chico y elevado.
- Anclaje del color en celeste hielo #91d3eb.
- Sistema de familia completo (7 fichas) + reglas de genética.
- Bloque de estilo en 4 categorías + Regla Wally (v10 → v11).

**Prompt de escena Wally (historial v1 → v8):**
- v1: concepto "replicar un Wally sin copiarlo" (copyright: se toma el
  concepto, no la lámina).
- v3: en el primer test salieron MUCHOS NODIs → corrección "exactamente UN
  NODI, contado y verificado".
- v4-v5: demasiado cerrado → vista más amplia, textura felpa en todos los
  objetos, densidad 300+, microescenas en simultáneo, escena que se corta por
  los bordes del cuadro.
- v6: idioma — descriptivo en inglés (rinden mejor los modelos de imagen),
  con las anclas del sistema (ficha + mundo + estilo) en español, palabra por
  palabra.
- v7: plano aéreo muy alejado, "tipo maqueta de la aldea".
- v8: 16:9 apaisado panorámico.

Cada lección se volcó de vuelta a la skill (`prompt_escena_wally.md` lo dice
explícitamente): así el sistema se retroalimenta con lo que aprende en test.

---

## 5. Pendientes

- [ ] Canon a color definitivo de NODI (dibujo en birome → referencia oficial).
- [ ] Confirmar el accesorio rojo del papá (pañuelo; ver `fichas_familia.md`).
- [ ] Números exactos de densidad por escena (el atlas pide que la cantidad de
      fondo varíe de la escena 1 a la 8).
- [ ] Clase 2: incorporar el asistente de Valeria Cercado al Bruma y probar la
      consistencia entre 3 imágenes.
- [ ] Retomar la fábrica de imágenes y decidir camino de calidad.