# Dudas acumuladas — Repaso Clase 2 (para abrir la Clase 4)

**Para qué sirve este doc:** juntar todo lo que los alumnos dejaron por
escrito en su repaso de la Clase 2, para arrancar la Clase 4 (28/8)
cerrando lo que quedó flojo antes de meternos en imagen. Abajo: primero los
temas que se repitieron (van a plenario sí o sí), después las preguntas
individuales que valen para todos aunque las haya hecho una sola persona, y
al final los pendientes operativos por grupo.

Las respuestas individuales, una por alumno, están en
`respuestas/grupo_XX/repaso_clase_02/`.

**Cobertura:** repasaron ~18 alumnos de 9 grupos (02, 04, 05, 06, 07, 08,
09, 10, 11). Sin repaso registrado: **grupo_01 y grupo_03**.

---

## 1 · Temas frecuentes → conversar en plenario al arranque

### 1.1 · "Si el modelo no tiene memoria, ¿por qué ChatGPT/Claude/Gemini parecen recordar?"

**El más repetido, largo.** Lo trajeron explícito Juana Estrada Roa (02),
Ana Marmol (10), Amadeo Riva (06) y Martina Isla (07); y les costó llegar
a Mora Percaz (10) y a varios más (necesitaron pistas).

**Cómo cerrarlo en 3 minutos:**
- El **modelo** (los pesos entrenados) no tiene memoria entre chats. Punto.
- Lo que "recuerda" es una **capa que lo rodea**: el producto o el agente
  guarda texto en archivos aparte y **se lo vuelve a pegar** al modelo al
  abrir cada conversación. No es que el modelo se acordó — alguien le
  reinyectó el contexto.
- Es el mismo principio que RAG. Y es literalmente lo que hace la **skill**
  que armaron en la Clase 3.
- El ejemplo de Ana Marmol es perfecto para contarlo: "veo que el agente
  relaciona cosas de otras carpetas" → sí, porque lee notas guardadas, no
  porque recuerde.

### 1.2 · RAG vs fine-tuning, y sobre todo *cuándo* cada uno

Lo dejaron abierto Delfina Acevedo (11, explícito: "cuándo conviene uno u
otro"), Mercedes Fernández Lahore (05, le faltó el "cómo"), Lourdes
Eriksen (08, no recordaba las analogías). Geronimo Zimmermann (06) lo
mezcló pero lo cerró en el repaso.

**Cómo cerrarlo:**
- RAG = no tocás el modelo, le pasás documentos en el momento (carpeta
  antes de la reunión). Fine-tuning = re-entrenás (posgrado): caro, lento,
  raro.
- **Criterio:** RAG cuando necesitás *información puntual* que cambia
  seguido y querés citar la fuente — el 95% de los casos. Fine-tuning
  cuando querés cambiar el *estilo/comportamiento* de base, tenés
  muchísimos ejemplos e infra para entrenar.
- Para la materia (asistente que respeta una identidad de marca): siempre
  **RAG + system prompt**, nunca fine-tuning.
- Gancho hacia la Clase 4: para **imágenes** de una marca que ya existe no
  es RAG de texto, es **referencia visual** (subir imágenes junto al
  prompt, Midjourney `--sref`, etc.). Lo preguntó Lupe Picca (02).

### 1.3 · Cómo se arma un system prompt desde cero / cómo cambian las 5 partes según el objetivo

Priscila Duhalde (04, "me costó mucho"), Lourdes Eriksen (08), Mercedes
Fernández Lahore (05, "me costó entender por dónde iba la Tarea 02"),
Naomi Benadon (04, todavía no lo armó).

**Nota:** esto se trabajó en el taller de la Clase 3, así que en parte ya
está saldado. Conviene un chequeo rápido en vivo ("¿todos tienen su
`SKILL.md` pusheado y probado en un chat limpio?") más que volver a
explicar la teoría. Si alguien sigue trabado, es tema de auxiliar en el
taller, no de plenario.

### 1.4 · Cómo funcionan los LLMs por dentro (token, ventana de contexto, transformer)

Delfina García Lema (07, los tres, explícito), Naomi Benadon (04, "por qué
texto coherente y no palabras sueltas"), Liz Park (04, cómo aprenden —
cerrado con RLHF).

**Cómo cerrarlo (rápido, sin irse a la maleza):**
- **Token:** pedacito de texto, ni letra ni palabra. Se cobra por token y
  la ventana se mide en tokens.
- **Ventana de contexto:** cuánto texto ve a la vez. Lo que queda afuera no
  existe para el modelo — por eso el chat largo "olvida" el principio.
- **Atención:** el modelo aprende a *pesar* qué partes del texto importan
  para predecir lo que sigue. Un prompt bien estructurado le ordena ese
  peso vos → por eso funciona mejor. (Este es el puente lindo:
  estructurar el prompt no es cosmético, es dirigir la atención.)

---

## 2 · Dudas individuales que sirven para todos

Preguntas de una sola persona, pero que abren un concepto que le viene bien
al curso entero. Buenas para tirar como "miren esta pregunta que hizo
alguien".

| Quién | La pregunta | Por qué contarla a todos |
| --- | --- | --- |
| **Clementina Ogallar** (07) | ¿Cuánto iterar es "correcto"? ¿Hay un punto donde iterás de más? | Da el **criterio de cuándo un sistema está listo**: (a) otro lo usa y le sale parecido, (b) los cambios que hacés son de gusto, no de sistema, (c) el error dejó de repetirse. Regla: se agrega una regla cuando el error *se repite*, no ante un caso único. |
| **Martina Isla** (07) | ¿Puedo conectar opencode + ChatGPT + Gemini a un mismo system prompt/concepto? | Explica **por qué existen las skills** y la idea de *una sola fuente de verdad* en el repo que alimenta varias herramientas. No hay botón mágico de sync: hay un archivo que mantenés en un lugar. Es exactamente lo que el parcial quiere ver versionado. |
| **Delfina García Lema** (07) | ¿Qué es el transformer y por qué "atención"? | Momento de teoría bonita y corta: la atención como "pesar lo importante", y el prompt estructurado como la forma de dirigirla. Conecta con 1.4. |
| **Lupe Picca** (02) | ¿Cómo respeta un modelo de imagen una identidad de marca que **ya existe**? | Justo el tema de la Clase 4. RAG es de texto; para imagen es **referencia visual** (imágenes adjuntas, `--sref`). En el system prompt cambia solo el CONTEXTO: la marca es un dato fijo, no un universo a inventar. |
| **Ana Marmol** (10) | "Veo que el agente relaciona cosas de otras carpetas" | El mejor ejemplo concreto para la distinción **modelo vs agente** (ver 1.1). |

---

## 3 · Pendientes operativos / gaps por grupo

No son dudas conceptuales, son cosas para avisar antes de que arranque el
parcial.

- **grupo_01 y grupo_03:** no registraron repaso de la Clase 2. Chequear
  que estén al día.
- **grupo_06:** Geronimo subió su skill "Santi Beltran Patea Penales"
  también en `.opencode/skill/` (carpeta de la cátedra) por error. **Ya se
  quitó**; la copia buena quedó en `grupos/grupo_06/clase_03/`. Recordar la
  regla: se escribe solo dentro de `grupos/grupo_06/`.
- **grupo_08:** el `asistente_grupal.md` tiene 11 líneas y no se ven
  asistentes individuales ni ejercicios de la Clase 2. Revisar con ellos.
- **grupo_09:** "cowork" a medias. Hoy solo Sofía y Dinora tienen asistente
  individual; **falta el de Valeria**, no hay `asistente_grupal.md` ni
  `clase_02/ejercicios.md`. La prueba cruzada del parcial no funciona así.
- **Varios grupos** vienen abrumados con GitHub más que con el contenido
  (Mercedes lo dijo explícito). El contenido teórico lo tienen; el cuello
  de botella es operativo → foco de auxiliares en el taller.
