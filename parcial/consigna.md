# Parcial · Identidad Generativa

## La marca y la máquina que la produce

**IA Generativa y Diseño** · Licenciatura en Diseño · UTDT
Grupal (3 personas) · **30% de la nota final**
Se lanza: viernes 28/8 (Clase 4) · **Entrega: viernes 9/10**

---

## De qué se trata

Cada grupo construye la identidad visual completa de **una marca, un producto
o un personaje**, la despliega en **un atlas de ocho escenas al estilo
"¿Dónde está Wally?"** — mundos densos, poblados, con algo escondido en cada
uno — y entrega, junto con eso, la **skill que lo produce**.

Son dos cosas nuevas respecto de un trabajo de identidad tradicional.

La primera es el atlas: no son ocho aplicaciones de marca sobre fondo liso,
son ocho escenas de un mundo en las que el lector se pierde buscando.

La segunda es la skill: no alcanza con que las escenas queden lindas, tiene
que quedar escrito el sistema que las genera — con el detalle suficiente
para que otra persona, con la skill instalada y el modelo que ustedes
eligieron, produzca una escena nueva que pertenezca al mismo mundo.

Y el resultado no es un archivo: es **un libro impreso**. Un objeto que se
puede tocar, hojear y dejar sobre una mesa.

> Un sistema que solo funciona en las manos de quien lo escribió no es un
> sistema: es un truco. Todo el semestre viene apuntando a esa distinción.

---

## Qué eligen

Una de estas tres. Puede ser ficticio o un proyecto propio — lo que no puede
ser es una marca real ya existente.

| | Qué construyen |
| --- | --- |
| **Una marca** | Un servicio, un lugar, un evento, una editorial, un festival, un bar |
| **Un producto** | Una línea, un objeto, un packaging, un dispositivo |
| **Un personaje** | Con su mundo, su vestuario, sus objetos, sus escenarios |

Elijan algo que les dé **un mundo**, no solo un logo: lugares, gente,
situaciones. Tienen que poder construir ocho escenas distintas y pobladas
con él. Si el universo se agota en dos, el sistema no se va a poder
demostrar.

---

## Los tres entregables

### 1 · El libro impreso

Un objeto editorial cuidado: papel elegido, encuadernación de calidad,
impreso en imprenta. Un ejemplar por grupo.

Tiene que contener:

- **Tapa y contratapa** diseñadas.
- **Páginas introductorias** que presenten el concepto y el universo.
- **El sistema visual**: paleta con valores concretos, tipografía, reglas de
  composición.
- **Ocho páginas de universo**: una escena por página, todas generadas con
  IA y con la densidad que pide la lógica "Wally" (ver más abajo).
- **El elemento oculto** en cada una de esas ocho páginas (ver más abajo).
- **Un QR** que lleve a la app del proyecto — la van a construir en la cursada,
  antes de la entrega.
- **El colofón crítico** (ver más abajo), máximo dos páginas.

> ⏱ **Ojo con los tiempos de imprenta.** Esto es lo que más grupos deja
> afuera. Pidan presupuesto en la semana del **22/9** y manden a imprimir
> antes del **2/10**: una imprenta puede tardar entre tres días y una
> semana, y el 9/10 el libro tiene que estar impreso y encuadernado, no
> "en camino". Ojo que las dos semanas previas a la entrega son de
> parciales de otras materias: no dejen la imprenta para entonces.

### 2 · La skill

`grupos/grupo_XX/parcial/identidad-<nombre>/SKILL.md`

Tiene que permitir que alguien que nunca vio el proyecto genere una pieza
nueva del mismo universo. Eso implica, como mínimo:

- Un **`description`** que diga qué hace y cuándo usarla.
- **El universo**: qué es, dónde transcurre, con qué luz, qué atmósfera —
  y qué nunca es.
- **El bloque de estilo** con valores concretos: colores en hex, técnica,
  lente o textura, calidad. Nada de "moderno" ni "lindo".
- **Con qué modelo y con qué parámetros** está pensada para funcionar
  (aspect ratio, seed si la usan, negative prompt).
- **Una regla de variación**, para que las piezas no salgan todas iguales.
- **Cómo se inserta el elemento oculto.**
- **Restricciones**: los límites duros del sistema.

Es la evolución directa de lo que vienen haciendo: el system prompt de la
C2, empaquetado como skill en la C3, y convertido en sistema visual completo
en la C5.

### 3 · El proceso: el repo y el documento

**En el repo**, dentro de `grupos/grupo_XX/parcial/`:

- **Commits con historial real** — el proceso se registra solo, con fecha.
- Un **README** del proyecto.
- Las **imágenes originales**.
- El **PDF de artes finales** del libro.

**Y el documento de proceso**, que es con lo que van a **presentar el
libro**. No es un informe para escribir la noche anterior: es la síntesis de
cómo llegaron, y el material que los sostiene cuando les toque contarlo.
Tiene que incluir:

- Los **prompts** que definieron el sistema, y por qué esos y no otros.
- Las **decisiones de diseño** clave: qué eligieron y qué descartaron.
- **Capturas de versiones intermedias** — lo que no quedó también cuenta.
- Qué **falló** y qué corrigieron en el sistema para que no volviera a pasar.

Va en el repo, junto con lo demás.

> El repo y el documento no compiten: **el repo registra, el documento
> explica**. Si commitean desde el primer día, el documento sale casi solo
> de mirar el propio historial.

---

## Las ocho páginas: un mundo estilo "Wally"

Esto es lo que vuelve singular a este atlas, y lo que hay que entender antes
de empezar a generar.

Las ocho páginas **no son ocho piezas sueltas de identidad**: son **ocho
escenas del mismo mundo**, construidas con la lógica de "¿Dónde está
Wally?".

Eso quiere decir escenas **densas y pobladas**: mucha gente, muchos objetos,
muchas cosas pasando al mismo tiempo. Escenas en las que la mirada se pierde
un rato y donde hay detalles que recién aparecen en la segunda o tercera
pasada. Un plano limpio y vacío puede ser una imagen hermosa — pero para
esto no sirve: **si no hay dónde esconderse, no hay juego**.

La diferencia con un manual de marca es exactamente esa: acá el lector no
solo mira. **Busca.**

Y esa densidad no puede salir por suerte: es responsabilidad del sistema. El
bloque de estilo de la skill tiene que pedirla de forma explícita —cuántas
figuras, qué nivel de detalle, cuánta profundidad de plano, cuántas acciones
distintas conviven en la misma escena— para que las ocho páginas la tengan
por igual.

> Ojo con esto al elegir qué construir: si el universo que eligieron solo da
> para planos de producto sobre fondo liso, no va a haber dónde esconder
> nada. Necesitan un mundo con lugares, gente y situaciones.

---

## El elemento oculto

En cada una de las ocho páginas se esconde un mismo personaje u objeto, con
la lógica del "¿Dónde está Wally?": está ahí, integrado a la escena, pero
hay que buscarlo. Aparece siempre — nunca de la misma manera.

**No hace falta generarlo con IA.** Puede estar dibujado, vectorizado,
fotografiado o construido como quieran: Illustrator, Figma, Procreate, papel
y escáner. Es la parte del libro donde su mano puede aparecer sin mediación.

**Y es la parte más especial del proyecto.** No es un sticker que se repite:
es un personaje. Tiene que tener **identidad y personalidad propias** — un
nombre, una historia, una razón para vivir en ese universo y no en otro, una
manera de comportarse. Si alguien lo encuentra en la página 3 y en la
página 7, tiene que reconocerlo como el mismo, y tiene que poder decir algo
sobre él.

Tres preguntas que conviene que puedan responder:

- ¿Quién es, o qué es?
- ¿Por qué pertenece a este universo?
- ¿Qué hace en cada escena — observa, se esconde, interviene?

**La inserción tiene criterio gráfico.** Escala, perspectiva e integración de
color coherentes con la escena que lo rodea. Un elemento pegado encima se
nota, y se nota mal.

En la skill va **la regla**: dónde puede aparecer, dónde nunca, y cómo se
integra. Aunque el personaje esté dibujado a mano, el sistema tiene que
saber cómo tratarlo.

---

## El colofón crítico

Al final del libro, máximo dos páginas. Tres preguntas:

1. ¿Cuál es el rol del diseñador frente a estas herramientas?
2. ¿Con qué limitaciones se toparon?
3. **¿Qué decidieron NO delegarle a la IA, y por qué?**

La tercera es la que más nos interesa.

---

## Cómo se evalúa

| Peso | Criterio |
| --- | --- |
| 20% | Calidad visual y coherencia del sistema de identidad |
| 20% | Originalidad del concepto |
| 20% | Integración editorial del libro impreso |
| 20% | **Reproducibilidad de la skill** |
| 20% | Documentación del proceso: repo, documento y colofón crítico |

**Cómo se mide la reproducibilidad.** La cátedra instala su skill, la corre
con el modelo que ustedes indicaron y le pide **una escena que no existe**.
Si el resultado pertenece claramente al mismo universo, el sistema funciona.
Si sale algo que podría ser de cualquier marca, no.

Por eso conviene probarla antes de entregar: instalenla en un chat limpio,
pídanle una novena escena y miren si aguanta.

---

## Cronograma

| Fecha | Clase | Qué pasa con el parcial |
| --- | --- | --- |
| 28/8 | C4 · Imagen generativa | Se lanza el parcial |
| 4/9 | C5 · Sistemas visuales | Construyen el bloque madre de su skill |
| 11/9 | C6 · Creación de apps | Acá sale la app a la que apunta el QR |
| 18/9 | C7 · Taller de parcial | Producción, con la cátedra recorriendo |
| 25/9 | C8 · Audio y voz | Última clase antes de la entrega: traigan las pruebas de imprenta |
| 2/10 | — | Semana de parciales, sin clase. El libro ya tendría que estar en imprenta |
| **9/10** | — | **Entrega: el libro impreso, en mano** |

---

## Preguntas frecuentes

**¿Puedo usar un proyecto propio, o una identidad que ya hice en otra
materia?** Sí, todo vale. La identidad no tiene que nacer acá: puede venir
de otra cursada, de un trabajo propio, de algo que tenían guardado. Lo que
sí tiene que pasar en esta materia es **traducirla a un sistema
reproducible** — que la skill sepa producirla. Ese es el trabajo.

**¿Las ocho páginas tienen que ser imágenes generadas con IA?** Sí. Las
imágenes del universo se generan con IA, sin excepción — es el corazón del
parcial y lo que la skill tiene que poder reproducir.

**¿Entonces no puedo diseñar nada a mano?** Al contrario: todo el aparato
editorial es de ustedes. Tipografía, retículas, títulos, folios, viñetas,
paleta de la publicación, tratamiento de página — todo eso lo diseñan y le
da el marco al libro. **Y el elemento oculto también puede ser enteramente
suyo**: ese no hace falta generarlo con IA. La regla es simple: **la escena
del universo se genera; el libro y su personaje se diseñan.**

**¿Qué modelo tengo que usar?** El que quieran, pero la skill tiene que
decir cuál y con qué parámetros. Una skill que no dice para qué modelo está
escrita es la mitad de una skill.

**¿Nos trabamos con algo técnico?** Pregúntenle primero al agente — para eso
está la skill del curso.
