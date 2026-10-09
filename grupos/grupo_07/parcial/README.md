# Parcial · Identidad Generativa — "Buscando en Argentina"

**Grupo 07 · Ctrl+Gen** — IA Generativa y Diseño · UTDT · Semestre 02 · 2026

Integrantes: Clementina Ogallar, Delfina García Lema, Martina Isla.

---

## De qué se trata

Un **libro educativo infantil** con la lógica de "¿Dónde está Wally?" que
acerca Argentina a los chicos de los años de la escuela primaria. Cada doble página es un
lugar emblemático del país en plena actividad —una celebración, una temporada
turística, una fiesta popular o una situación cotidiana— y hay muchas personas,
objetos y costumbres propias de ese lugar.

El **elemento oculto** es **Mateo**, un personaje infantil que aparece
siempre, integrado a la escena y con la ropa adaptada a cada lugar: la
identidad es fija, el vestuario cambia.

El universo se produce con una **skill madre** reproducible para cada escena,
para que cualquiera genere una escena nueva que pertenezca al mismo mundo.
Además de esa skill madre, para cada escena trabajamos con una **skill por
escena**, e imágenes de referencia.

## El sistema visual

- **Técnica:** plastilina / stop-motion (todo el mundo y los secundarios
  comparten la materialidad — referencia: Laika / Aardman).
- **Paleta:** rojo, amarillo, verde y azul (misma paleta de la editorial).
- **Formato:** 16:9, doble página. Nada clave en el centro (el pliegue).
- **Modelo:** ChatGPT (generación de imagen).

El detalle completo del sistema está en
[`identidad-argentina/SKILL.md`](./identidad-argentina/SKILL.md).

## Las ocho escenas

1. Misiones — Cataratas del Iguazú
2. Jujuy — Quebrada de Humahuaca
3. Buenos Aires — Caminito (La Boca)
4. Río Negro — Bariloche y el cerro Catedral
5. Santa Cruz — los glaciares (Perito Moreno) desde un barco
6. Santa Fe — Rosario, el monumento a la Bandera
7. Tucumán — la casa histórica
8. Chubut — Puerto Madryn / Península Valdés

## Contenido de esta carpeta

```
parcial/
├── README.md                          ← este archivo
├── G7_Editorial.pdf                   ← artes finales del libro (imprenta)
├── G7_Pieza_extra.pdf                 ← pieza extra del proyecto
├── identidad-argentina/
│   ├── SKILL.md                       ← la skill que produce el sistema
│   └── concepto.md                    ← concepto, universo y elemento oculto
└── imagenes/
    ├── misiones.pdf … (las 8 escenas, una por archivo)
    ├── personaje-mateo.png            ← el elemento oculto
    └── personaje-mateo-por-escena.png ← Mateo con la ropa de cada lugar
```

## La skill

La skill vive en [`identidad-argentina/SKILL.md`](./identidad-argentina/SKILL.md).
Está en proceso: el equipo la actualiza antes de la entrega. Una vez lista, se
instala en el agente (Claude Code u opencode), se indica **ChatGPT** como
modelo y se le pide una escena nueva para que pertenezca al mismo universo.
