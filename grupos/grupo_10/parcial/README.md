# Lourdes — Parcial Identidad Generativa

**Grupo 10** · Ana Marmol, Mora Percaz, Teresa Robles
IA Generativa y Diseño · Licenciatura en Diseño · Universidad Torcuato Di Tella · 2026

## De qué se trata

**Lourdes** es una chica muy fiestera que recorre el mundo yendo de fiesta en
fiesta. El libro consiste en encontrarla, escondida entre la gente, en cada
una. Es un atlas de ocho escenas al estilo "¿Dónde está Wally?", dibujado en
el estilo plano y de línea de pluma de *The Parisianer* (Éditions de la
Martinière).

Narra una amiga que la persigue de fiesta en fiesta y siempre llega un rato
tarde. En cada fiesta Lourdes cambia de outfit y de pose, pero siempre lleva
el pelo bob castaño, un pañuelo negro con puntitos blancos en la cabeza y una cartera.
Además, en cada fiesta pierde un objeto: se revelan recién en la página
final del libro.

Las ocho fiestas: carnaval, barco, pool party, amanecer en la playa, rooftop
de noche, festival de música, Obelisco de Buenos Aires y garden party.

## Qué hay en esta carpeta

```
parcial/
├── README.md                      este archivo
├── proceso_lourdes.md             plan y texto del documento de proceso
└── identidad-lourdes/
    ├── SKILL.md                   la skill: genera una escena nueva del atlas
    ├── concepto.md                hoja de trabajo: concepto, bloque madre e historial de iteraciones
    ├── prompts_8_escenas_final.md los 8 prompts de las escenas, listos para pegar
    ├── objetos_perdidos_prompts.md los 8 prompts de los objetos perdidos
    ├── miscelaneas_prompts.md     prompts de la hoja de objetos sueltos y de viñetas y adornos
    ├── paginas_introductorias.md  textos de las páginas introductorias del libro
    ├── boceto_lourdes.png         boceto a mano de Lourdes
    └── lourdes_color.png          versión coloreada de Lourdes
```

## La skill

`identidad-lourdes/SKILL.md` es el sistema que produce el atlas. Si alguien
la instala y pide una escena nueva ("la novena fiesta"), entrega tres prompts,
cada uno para su propio chat:

1. **La escena**, a partir de un bloque madre fijo de 7 secciones (solo
   cambia la sección 04, la plantilla de escena).
2. **El objeto perdido** de esa fiesta.
3. **Lourdes**, con el outfit y la pose de esa fiesta, a partir de su imagen
   base.

También entrega las notas para colocar a Lourdes y el objeto en Figma y la
postal del pie de página.

La skill se probó pidiéndole una escena nueva (una fiesta en un tren) a un
agente que solo leyó el `SKILL.md`.

## Cómo se hizo

- **Escenas:** generadas con IA (generación de imágenes de ChatGPT) con un
  prompt de solo texto, sin imágenes de referencia. 1414 × 1000 px,
  apaisadas, para un A3 horizontal.
- **Resolución de impresión:** se le pidió a ChatGPT la versión a 300 dpi
  (un A3 horizontal a 300 dpi son 4961 × 3508 px).
- **Lourdes y los objetos perdidos:** su diseño es a mano (boceto y color). El
  outfit y la pose de cada fiesta y los objetos se generan aparte, con
  prompts propios, y se colocan a mano en Figma.
- **Maquetación del libro y presentación del proceso:** Figma.

## El proceso, en una línea

Probamos seis estilos que salían genéricos, cambiamos la referencia a *The
Parisianer* y la estructura del prompt a secciones numeradas, y después cada
falla (ChatGPT pidiendo una imagen base, un flamenco que nadie pidió, cuerpos
deformes, Lourdes que no aparecía) terminó en una regla escrita en el prompt.
Todo eso está en el "Historial de iteraciones" de `identidad-lourdes/concepto.md`,
en el historial de commits de esta carpeta y en `proceso_lourdes.md`.

## Pieza extra

Además del atlas, el libro lleva una pieza extra: un crucigrama y una sopa
de letras con el vocabulario del mundo de Lourdes (están en `piezas_extra/`).
El formato de la pieza extra era libre, según el mail de los profesores.
