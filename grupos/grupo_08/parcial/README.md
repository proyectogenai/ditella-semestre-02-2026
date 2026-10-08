# Parcial · Identidad Generativa — El diario de Mei

**IA Generativa y Diseño** · Licenciatura en Diseño · UTDT · Semestre 02 · 2026
Grupo 08 — Lourdes Eriksen, Pilar Laudano (+1 integrante)

---

## El proyecto

**"El diario de Mei"** es un atlas de búsqueda estilo *¿Dónde está Wally?*:
ocho escenas densas de un viaje de primavera por Japón, en las que la
protagonista —Mei, una chica de pelo negro lacio con buzo rosa empolvado y
tote caramelo— aparece escondida exactamente una vez en cada página.

El universo se genera con IA (ChatGPT · Images) a partir de un sistema
escrito: bloque de estilo congelado, paleta cálida desaturada, gramática de
densidad y una regla de variación que obliga a que ninguna escena repita
estructura, perspectiva ni placement de la anterior.

Las ocho páginas del libro:

| # | Escena | Prompt final |
| --- | --- | --- |
| 1 | Aeropuerto de Tokio | `prompts/escenas-finales.md` |
| 2 | Shibuya | `prompts/escenas-finales.md` |
| 3 | Senso-ji (Nakamise) | `prompts/escenas-finales.md` |
| 4 | Nikko | `prompts/escenas-finales.md` |
| 5 | Shinkansen | `prompts/escenas-finales.md` |
| 6 | Arashiyama (bosque de bambú) | `prompts/escenas-finales.md` |
| 7 | Dotonbori | `prompts/escenas-finales.md` |
| 8 | Hanami | `prompts/escenas-finales.md` |

## Qué hay en esta carpeta

```
parcial/
├── identidad-el-diario-de-mei/
│   └── SKILL.md                 ← la skill del sistema (entregable)
├── imagenes/
│   ├── finales/                 ← las 8 páginas del libro
│   ├── personaje-mei-final.png  ← referencia canónica de Mei
│   ├── personaje-mei-variante.png  ← versión anterior (no usar)
│   └── escena-shibuya1-8, personaje-mei.*  ← iteraciones de proceso
└── prompts/
    ├── escenas-finales.md       ← los 8 prompts tal cual se usaron
    ├── banco_de_prompts.md      ← evolución de los prompts
    └── versiones/               ← 31 versiones intermedias por escena
```

## Cómo se genera una escena

1. Instalar `identidad-el-diario-de-mei/SKILL.md` (o copiar su bloque madre).
2. Adjuntar la referencia canónica `imagenes/personaje-mei-final.png`.
3. Pedir la escena que se quiera (nueva o inexistente) en un chat de
   **ChatGPT (Images)** — el modelo para el que está pensada la skill.
4. El prompt sale armado: apertura congelada → descripción de Mei → Capa 1
   de la escena → placement con tres anclajes → capas congeladas de estilo.
5. Revisar con el checklist de la sección 7 de la skill.

**Modelo y parámetros:** ChatGPT (Images), aspect ratio 16:9 horizontal,
sin seed. Negative prompt embebido en el bloque congelado.

## Regla dura del sistema

Mei aparece exactamente una vez por escena, ocluida (máximo 40% tapada),
integrada por escala, perspectiva y color — nunca pegada encima. Nunca se
genera una segunda copia suya, ni un fondo, ni un reflejo, ni una cola.

## Fuera de esta carpeta

- **Libro impreso** (tapa, páginas introductorias, 8 escenas, QR, colofón
  crítico) — entregable en mano, 9/10.
- **Documento de proceso** — síntesis de decisiones, qué falló y qué se
  corrigió; se presenta junto con el libro.
- **PSD y material pesado** — en Drive, linkeados desde el documento.
