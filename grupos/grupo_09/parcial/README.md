# Parcial · Identidad Generativa — Grupo 09

## Buscando a NODI · La Familia Monstrix

Un libro de buscar y encontrar al estilo "¿Dónde está Wally?", en un mundo
invernal de felpa. NODI es un monstruo peludo de doce años, celeste hielo,
con tres ojos, bufanda y orejeras rojas. Un día vuelve a casa y la encuentra
vacía: el libro lo sigue mientras busca a cada integrante de su familia por
la aldea, hasta que todos se reencuentran en la gran estación de tren.

En cada escena el lector busca dos veces: a NODI, escondido entre muchos
monstruitos y objetos parecidos, y al familiar que vino a buscar a ese lugar.

**Integrantes:** Valeria Cercado, Dinora Guzelj, Sofía Peña.

## Qué hay en esta carpeta

| Archivo | Qué es |
| --- | --- |
| `Cercado_Guzelj_Peña_G9_Libro.pdf` | Las artes finales del libro |
| `Cercado_Guzelj_Peña_G9_Proceso.pdf` | El documento de proceso: decisiones, versiones intermedias, qué falló y qué corregimos, y el colofón crítico |
| `Cercado_Guzelj_Peña_G9_Prompts.pdf` | Los 24 prompts finales con los que generamos las ocho escenas, tal como los usamos |
| `Cercado_Guzelj_Peña_G9_System_prompt_y_modo_de_uso.pdf` | El sistema de prompts (bloques fijos y partes que cambian) y el paso a paso para usarlo |
| `imagenes/` | Las ocho escenas finales, generadas con la skill |
| `identidad-familia-monstrix/` | La skill que produce las escenas |

Dentro de la skill:

| Archivo | Qué es |
| --- | --- |
| `SKILL.md` | Reglas generales, la secuencia fija y las restricciones |
| `references/bloques.md` | Los bloques canónicos en inglés que se copian tal cual en los prompts |
| `references/fichas.md` | Las fichas de los siete personajes |
| `references/recetas.md` | Cómo se arma cada prompt y los criterios de aprobación |
| `references/ajustes.md` | Ajustes sobre imágenes aprobadas (fuera de la secuencia de la entrega) |
| `parcial/atlas_de_escenas.md` | Los lineamientos de cada una de las ocho escenas |
| `assets/nodi_v2.jpeg` | La referencia canónica de NODI |
| `assets/personajes/` | Las referencias de mamá, papá, hermana, hermano, abuelo y la mejor amiga |

## Las ocho escenas

1. Casa de la familia (NODI, solo) · 2. Mercado de la aldea (mamá) ·
3. Campo de recolección de hielo (papá) · 4. Parque de la aldea (hermana) ·
5. Universidad (hermano) · 6. Museo (abuelo) · 7. Tienda de ropa (mejor
amiga) · 8. Gran estación de tren (los siete, reunidos)

## Cómo funciona

Cada escena sale de **tres prompts en secuencia**, en el mismo chat de
ChatGPT:

1. **La escena general**, desde cero, con `nodi_v2.jpeg` adjunta solo como
   referencia de estilo.
2. **La multitud**, una edición corta que suma monstruitos en los huecos.
3. **Los buscables**, el último: NODI y el familiar de la escena (en la 8,
   los siete) en un único prompt, con sus referencias adjuntas. Después no se
   edita nada.

Si un resultado falla, se repite el mismo prompt sobre la misma imagen. Si
falla dos veces igual, se corrige la regla en la skill, nunca el prompt a
mano.

## Cómo probar la skill

La skill está escrita y calibrada para **Claude**: funciona mucho mejor ahí
que en otros modelos.

1. Cargar la carpeta `identidad-familia-monstrix` como skill en Claude.
2. Pedirle "escena X, prompt 1". La skill arma el prompt en el momento a
   partir del atlas y los bloques.
3. Pegarlo en un chat nuevo de ChatGPT con `nodi_v2.jpeg` adjunta.
4. Seguir con "prompt 2" y "prompt 3" en el mismo chat, adjuntando lo que
   indica cada uno.

La skill no se limita a las ocho escenas del libro: también se le pueden
pedir **escenas nuevas** y **personajes nuevos** del mundo Monstrix. Por
ejemplo: *"una escena nueva: la pista de patinaje de la aldea, prompt 1"* o
*"un personaje nuevo: la tía de NODI"*. La skill arma el prompt con los mismos
bloques fijos, así que el resultado pertenece al mismo universo.

## Parámetros

| | |
| --- | --- |
| Prompts | Compuestos por la skill en Claude (Opus 5.5) |
| Imágenes | ChatGPT |
| Formato | Panorámico horizontal 16:9 |
| Seed | No se fija |
| Negative prompt | Al final de cada prompt, como bloque `NEGATIVE` |
| Referencias | `nodi_v2.jpeg` y `assets/personajes/` |

## Fuera del libro

El ropero de NODI, un jueguito para vestirlo y guardar la postal de su paseo:
https://afitape99.github.io/vestir-a-nodi/
