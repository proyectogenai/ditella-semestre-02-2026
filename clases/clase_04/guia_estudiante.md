# Clase 4 · Guía del estudiante

## Imagen generativa: del texto a la imagen y de vuelta

**IA Generativa y Diseño** · Licenciatura en Diseño · UTDT
Viernes 28 de agosto de 2026 · Bloque 1 — Imagen y sistemas visuales

| | |
| --- | --- |
| **Duración** | 4 módulos cátedra (2 teoría + recreo + 2 práctica) |
| **Objetivo** | Entender cómo funciona un modelo de imagen lo suficiente como para pedirle las cosas con criterio, no a prueba y error |
| **Requisito** | Clase 3 completa (tu skill instalada) |
| **Herramientas** | Gemini (Nano Banana 2) y/o ChatGPT — las dos gratuitas que dan el modelo completo. Ver Parte 2 |
| **Entregable** | Un banco de prompts de imagen versionado, con las imágenes que produjiste |

---

## La idea central de esta clase

Hasta ahora le describías imágenes a una herramienta y guardabas lo que te
gustaba en algún lado suelto —una nota, una carpeta de screenshots—. Hoy
cambian dos cosas: **entendés qué está pasando adentro** cuando el modelo
genera (para poder pedirle las cosas con intención, no adivinando), y
**versionás lo que funciona** en vez de perderlo en un doc que nadie
vuelve a abrir.

El banco de prompts que armás hoy no es un archivo suelto más: es el
insumo directo de la Clase 5, donde lo van a convertir en la skill de
sistema visual — el corazón del parcial que se lanza hoy.

---

## Modo tutor, como siempre

Seguís con la misma distinción de las clases anteriores: lo mecánico
(armar el archivo del banco de prompts, instalar, comandos) que lo resuelva
el agente; qué prompt probar, qué imagen quedarse y por qué, eso es criterio
tuyo. Si querés, pegale esto al chat:

> *Trabajemos en modo tutor: guiame de a un paso por vez y no decidas por
> mí qué prompts entran al banco — preguntame por qué me gustó cada
> imagen antes de guardarla.*

---

## Parte 1 · Qué pasa adentro de un modelo de imagen

**Difusión, la idea sin la matemática.** El modelo arranca de puro ruido —
como estática de tele vieja— y lo va "limpiando" en pasos, guiado por tu
texto, hasta que aparece una imagen coherente con lo que pediste. No busca
en un archivo de fotos existentes: la construye, paso a paso, desde el
ruido.

**Text-to-image vs. image-to-image.**

| | Parte de | Control que te da |
| --- | --- | --- |
| **Text-to-image** | Solo texto | Describís todo con palabras — más libertad, menos precisión de composición |
| **Image-to-image** | Una imagen tuya (boceto, foto) | Controlás composición y encuadre desde el principio, el modelo reinterpreta sobre esa base |

**Cuatro parámetros que conviene manejar:**

| Parámetro | Qué controla |
| --- | --- |
| **Aspect ratio** | La proporción del lienzo (1:1, 16:9, 4:5...) — se define antes de generar |
| **Seed** | El número que fija el punto de partida. Misma seed + mismo prompt = resultado reproducible. Es la base de la consistencia que vas a necesitar en la C5 |
| **Negative prompting** | Qué **no** querés ver — tan importante como decir qué sí |
| **Inpainting / outpainting** | Corregir una zona puntual de una imagen ya generada (inpainting) o extender el lienzo más allá de sus bordes (outpainting) |

**Referencias propias.** Subir una imagen propia como referencia de estilo
o composición no es lo mismo que partir de ella con image-to-image: acá la
referencia *influye* el resultado en vez de *originarlo*. Sirve para decir
"quiero esta paleta" o "esta composición" sin que el modelo copie la
imagen entera.

---

## Parte 2 · Con qué generar: el panorama hoy

El campo se mueve rápido: **todo lo que sigue está verificado a agosto de
2026 y va a envejecer**. Más que memorizar versiones, quedate con los dos
ejes que sí se sostienen en el tiempo — *qué controla cada plataforma* y
*bajo qué régimen legal te deja usar lo que generás*.

### Las seis que vale la pena conocer

| Plataforma | Modelo hoy | En qué es mejor | ¿Gratis? |
| --- | --- | --- | --- |
| **ChatGPT** (OpenAI) | ChatGPT Images 2.0 / `gpt-image-2` (abr 2026) | **Texto dentro de la imagen** — el mejor del lote | Sí, modelo completo (sin modo *Thinking*) |
| **Gemini / Nano Banana** (Google) | Nano Banana 2 = Gemini 3.1 Flash Image (feb 2026) | **Consistencia de personajes** y control de formato | Sí, modelo completo en la app |
| **Midjourney** | V8.2 (jul 2026) | **La estética más lograda de fábrica** | **No**, no hay trial |
| **Flux** (Black Forest Labs) | FLUX.2 (nov 2025) | Tipografía + **multi-referencia** (hasta 10 imgs) | Sí, corriendo *klein-4B* local |
| **Adobe Firefly** | Firefly Image 5 (GA mar 2026) | **Vectores nativos** en Illustrator + respaldo legal | Cupo diario limitado |
| **Magnific** (ex Freepik) | Mystic + 25 modelos de terceros | Acceso a **todo el estado del arte** en un solo lugar | 20 img/día, **solo uso personal** |

> ⚠️ **Freepik ahora se llama Magnific.** Cambió de nombre en abril de 2026;
> `freepik.com/ai` redirige solo. Si buscás "Freepik IA" vas a encontrar
> material viejo.

### Lo que hay que entender, más allá de la tabla

**1 · Todas se están volviendo agregadores.** Firefly hoy corre 30+ modelos
de terceros (Nano Banana, Flux, GPT Image); Magnific corre 25+. Ya casi no
elegís "un modelo": elegís **una interfaz, una integración y un régimen
legal**. Ese es el criterio profesional, no cuál genera más lindo.

**2 · El eje legal es el que te va a importar cuando cobres por esto.**

- **OpenAI** dice explícitamente en sus términos que **el output es tuyo**.
- **Adobe** es el único que ofrece **indemnización** (te cubre si hay un
  reclamo de propiedad intelectual), pero con letra chica importante: solo
  sobre **sus propios modelos Firefly**, en funciones estables (nada de
  beta), y con **plan pago**. Si generás con Nano Banana *dentro* de
  Firefly, estás fuera del paraguas de Adobe.
- **Magnific** dice lo contrario, con todas las letras: no garantiza
  propiedad del output de IA, y su **plan gratuito es solo para uso
  personal con atribución** — no comercial.
- **Google** no declara de forma explícita la propiedad comercial de las
  imágenes. Todas llevan **SynthID**, una marca de agua invisible.

> La pregunta profesional no es *"¿cuál genera mejor?"* sino
> ***"¿quién responde si aparece un reclamo?"***. Hoy esa respuesta, con
> matices, solo la da Adobe — y solo sobre sus propios modelos.

**3 · Ninguna te garantiza una imagen única.** OpenAI y Adobe lo admiten en
sus términos: otro usuario puede generar algo igual o muy parecido. Para
identidad de marca, eso es un argumento fuerte a favor de construir un
**sistema propio** (tu skill) en vez de depender de un prompt afortunado.

**4 · Consistencia: cambió cómo se hace.** Si leés tutoriales de 2024-2025
sobre Midjourney vas a encontrar `--cref` para consistencia de personaje:
**ya no funciona** (quedó limitado a la V6). Su reemplazo, `--oref`, te
fuerza a generar en V7 y consume el doble. Lo que sí anda excelente en la
versión actual es `--sref` (referencia de **estilo**) y los moodboards. En
Flux y Nano Banana la consistencia se resuelve distinto: cargando varias
imágenes de referencia.

**5 · Para este curso.** Las dos gratuitas que dan el modelo completo sin
pagar son **Gemini (Nano Banana 2)** y **ChatGPT**. Con eso alcanza para
todo lo que vamos a hacer.

> 🔞 **Ojo con Gemini:** generar imágenes es 13+, pero **editarlas requiere
> 18+**. Si sos menor, usá ChatGPT para los ejercicios de edición.

---

## Parte 3 · El taller (módulos 3 y 4)

### Paso 1 — Piezas reales para tu sistema (20')

Cargá la skill que armaste en la Clase 3 (pedile a tu agente que la use) y
pedile **2 a 3 prompts de imagen** para tu marca — los mismos que ya sabe
armar. Generalos en tu herramienta de imagen. Es la primera vez que tu
sistema produce algo real, no solo texto de prueba: prestá atención a si
el resultado se siente coherente con la marca que definiste en la C2.

> Extensión, si te sobra tiempo: probá uno de esos prompts con
> image-to-image, partiendo de un boceto propio en vez de texto puro, y
> compará cuánto más control te dio.

### Paso 2 — El ejercicio del rubro (20')

Te toca (elegido o por sorteo) uno de estos rubros futuristas:

- Empleos del futuro
- Productos de salud y bienestar del futuro
- Belleza y cuidado personal del futuro
- Hogar y vivienda del futuro
- Moda del futuro
- Comida y gastronomía del futuro

Escribí un **prompt corto** para generar imágenes futuristas de tu rubro —
no hace falta un system prompt completo, alcanza con escena + estilo. No
hace falta que describas género, edad ni tipo de cuerpo de las personas
que aparezcan, si aparecen: dejá que el modelo decida esos detalles.
Generá 2 o 3 imágenes.

### Paso 3 — Armar el banco de prompts, con el agente (20')

Nada de guardar esto en un doc suelto. Pedile a tu agente algo como:

> "Ayudame a armar mi banco de prompts de imagen: para cada prompt que
> generó algo bueno, guardá el texto, la herramienta que usé, los
> parámetros (aspect ratio, seed si la usé) y una nota de para qué me
> sirvió."

Armar el archivo y pushearlo es mecánico — que lo resuelva el agente. Pero
**qué prompts entran al banco y por qué**, eso lo decidís vos: no todos los
que probaste, solo los que realmente aprendiste algo de ellos (funcionaron,
o fallaron de una forma interesante).

---

## Entregable

En `grupos/grupo_XX/clase_04/`:

```
clase_04/
├── banco_de_prompts.md    ← al menos 4-6 prompts documentados
└── imagenes/              ← las que generaste
```

Cada entrada del banco debería tener: el prompt completo, la herramienta,
los parámetros que usaste, y una línea de para qué sirvió o qué aprendiste.
Lo que más se mira no es cuántas imágenes lindas generaste, sino que el
banco muestre **criterio de selección** — que se note por qué esos prompts
y no otros.

Push de siempre:

```
git pull
git add grupos/grupo_XX/
git commit -m "grupo XX: clase 04"
git push
```

---

## 🚀 Se lanza el parcial

Al cierre de la clase se presenta **Identidad Generativa**: cada grupo
construye la identidad de una marca, un producto o un personaje —y la skill
que la produce— y la entrega como libro impreso. La consigna completa queda
publicada en `parcial/consigna.md`.

El banco de prompts de hoy no es un entregable del parcial: es la forma de
trabajar que vas a necesitar cuando lo encares.

---

## Glosario

| Término | Qué es |
| --- | --- |
| **Modelo de difusión** | Arquitectura que genera imágenes "limpiando" ruido paso a paso, guiado por el prompt |
| **Text-to-image** | Generar una imagen solo a partir de texto |
| **Image-to-image** | Generar una imagen a partir de otra imagen propia, reinterpretada según el prompt |
| **Aspect ratio** | La proporción del lienzo de salida |
| **Seed** | Número que fija el punto de partida del ruido — misma seed, resultado reproducible |
| **Negative prompting** | Indicar qué elementos no querés en el resultado |
| **Inpainting** | Corregir o reemplazar una zona puntual de una imagen ya generada |
| **Outpainting** | Extender el lienzo de una imagen más allá de sus bordes originales |
| **Referencia de imagen (image prompting)** | Subir una imagen propia para influir estilo o composición, sin partir de ella directamente |
| **Indemnización IP** | Que la plataforma se haga cargo legalmente si alguien reclama la propiedad de lo que generaste. Hoy solo la ofrece Adobe, y con condiciones |
| **Marca de agua invisible (SynthID)** | Señal imperceptible que Google inserta en toda imagen generada, para poder identificarla después como sintética |
| **Pesos abiertos (open weights)** | Modelos que podés descargar y correr en tu propia máquina, sin depender de un servicio |
| **`--sref`** | Parámetro de Midjourney para tomar el **estilo** de una imagen de referencia |
