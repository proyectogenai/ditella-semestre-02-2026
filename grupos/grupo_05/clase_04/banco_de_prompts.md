# Banco de prompts de imagen — grupo 5

Cada entrada: el prompt completo, la herramienta, los parámetros y una línea de
para qué sirvió o qué aprendí. Entran solo los prompts de los que aprendí algo
(funcionaron o fallaron de forma interesante), no todos los que probé.

---

## Parte 1 · Piezas reales para el sistema (marca Bruma)

Prompts que devolvió la skill `asistente-bruma` a partir de pedidos cortos.
Son el texto listo para pegar en la herramienta de imagen.

### P1 — Interior, gente en la barra
```
Interior view from inside Bruma, standing at the brushed steel bar: two people
standing with to-go cups and one person seated on a stool, seen from behind and
at three-quarter angle so no faces are visible up close, white coffee cups and
saucers on the polished steel counter, loose pale pink and white tulips in a
glass jar beside them, raw unpainted molding along the base of the white walls,
large windows in the background letting in soft natural daylight, candid
instagram-story style photography, natural daylight through large windows mixed
with warm rice-paper pendant lamps casting a soft cream-toned glow, white walls
with subtle rustic texture, polished grey concrete floor, brushed steel bar and
tables, pale pink and white tulips with green stems, subtle film grain (not
vintage), sharp brand-content quality, no text, no logos, 1:1 aspect ratio
```
- **Herramienta:** _(a confirmar / a generar)_
- **Parámetros:** aspect ratio 1:1
- **Imagen:** _(pendiente de generar → `imagenes/p1_interior_barra.jpg`)_
- **Qué aprendí:** el encuadre "desde atrás y a 3/4" es lo que resuelve la
  restricción "sin caras en primer plano" sin que la escena quede rígida.

### P2 — Fachada al atardecer (pedido que forzaba una restricción)
```
Street-level view from the sidewalk looking toward Bruma's facade at dusk, the
last blue light of the sky above while warm rice-paper pendant lamps inside glow
through the large windows and spill onto the Palermo pavement, up to three
people standing on the sidewalk with to-go cups seen from behind, no faces close
up, unmistakably Buenos Aires street architecture with plane trees and a tiled
sidewalk, white walls with subtle rustic texture visible through the glass,
brushed steel bar glinting inside, loose pale pink and white tulips in glass
jars on the windowsill, candid instagram-story style photography, natural
daylight through large windows mixed with warm rice-paper pendant lamps casting
a soft cream-toned glow, white walls with subtle rustic texture, polished grey
concrete floor, brushed steel bar and tables, pale pink and white tulips with
green stems, subtle film grain (not vintage), sharp brand-content quality, no
text, no logos, 1:1 aspect ratio
```
- **Herramienta:** _(a confirmar / a generar)_
- **Parámetros:** aspect ratio 1:1
- **Imagen:** _(pendiente de generar → `imagenes/p2_fachada_atardecer.jpg`)_
- **Qué aprendí:** pedí "de noche", que la marca prohíbe. El sistema reencuadró
  a atardecer sin romper la paleta cálida: el prompt sirve para comprobar que
  la skill se sostiene aun con un pedido que la contradice.

> PENDIENTE Parte 1: generar P1 y P2 en Gemini / ChatGPT y guardar las imágenes.
> Si ya las generé en clase, reemplazar estas notas con la herramienta real y
> los parámetros usados.

---

## Parte 2 · Ejercicio del rubro futurista

**Rubro asignado:** Hogar y vivienda del futuro.
**Herramienta:** _(a confirmar — Gemini Nano Banana / ChatGPT)_ · **Parámetros:**
no anoté seed; formato horizontal para PR1, cuadrado/vertical para PR2.

### PR1 — Casa eco-futurista en la selva
```
hace una casa eco-futurista con formas aerodinamicas que da una sensasion de
simbiosis entre naturaleza y tecnologia. compuesta por materiales organicos
combinados con vidrio inteligente. Casa iluminada desde el interior con luces
calidas y la naturaleza como humeda y selvatica. Estilo mega realista editorial
tipo architectural digest.
```
- **Imágenes:**
  - `imagenes/pr1_casa_ecofuturista_selva_01.png`
  - `imagenes/pr1_casa_ecofuturista_selva_02.png`
  - `imagenes/pr1_casa_ecofuturista_selva_03.png`
- **Qué aprendí:** "estilo editorial tipo architectural digest" es un ancla de
  estilo potentísima — encuadra luz, materiales y nivel de acabado de una. Las
  tres salieron coherentes entre sí sin fijar seed, porque el prompt define
  material (orgánico + vidrio), luz (cálida desde el interior) y contexto
  (selva húmeda) con precisión.

### PR2 — Casa metálica flotando en el mar, de noche
```
hace una imagen de una casa futurista con formas aerodinamicas que parezca que
flota en un mar de noche. Estilo pulcro y metalico, luces frias iluminada desde
adentro. toma amplia cinematografica ultradetallado, fotorealista, atmosfera
serena utopica
```
- **Imágenes:**
  - `imagenes/pr2_casa_metalica_mar_01.png`
  - `imagenes/pr2_casa_metalica_mar_02.png`
  - `imagenes/pr2_casa_metalica_mar_03.png`
- **Qué aprendí:** mismo objeto (casa aerodinámica) que PR1 pero cambiando luz
  (fría vs. cálida), material (metálico vs. orgánico) y contexto (mar de noche
  vs. selva) da una familia visual opuesta. Sirve para ver cuánto pesan esos
  tres ejes frente a la forma.

### Reflexión — qué asumió el modelo que no le pedimos (sesgo)

_(revisar y ajustar con nuestras palabras después de la puesta en común)_

- Sin pedirlo, todas las casas salieron como **vivienda unifamiliar de lujo,
  aislada** — nunca densidad, vivienda social ni algo compartido. "Casa del
  futuro" = casa de rico.
- La arquitectura convergió en la **misma curva orgánica tipo Zaha Hadid** en
  todas las imágenes, aunque el prompt solo decía "formas aerodinámicas".
- En PR2, "luces frías" + "mar de noche" derivó solo en el combo **cian/turquesa
  + Vía Láctea**, el cliché visual de "sci-fi utópico".
- No aparecen personas en ninguna: el modelo entiende "hogar del futuro" como
  objeto arquitectónico para mirar, no como lugar habitado.

---

> Las imágenes de esta carpeta son las que están maquetadas en el Figma del
> grupo. Si hace falta versión de mayor resolución, exportarlas desde ahí.
