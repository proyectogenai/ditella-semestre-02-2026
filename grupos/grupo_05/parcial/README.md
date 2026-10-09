# Parcial · Identidad Generativa — Grupo 5

## Los pequeños mundos de Peter Rabbit

Un libro de búsqueda en la línea de "¿Dónde está Wally?", con ilustración de
cuento clásico inglés: línea fina y acuarela, paleta cálida y desaturada,
animales vestidos como personajes de cuento. Peter sigue a una mariposa
dorada, atraviesa una puertita entre las raíces del viejo árbol y recorre
ocho pequeños mundos escondidos en la naturaleza — en cada uno el lector
tiene que encontrarlo — hasta un gran picnic final donde se reúnen todos los
amigos que conoció. Pieza extra: un memotest con esos amigos (Pip, Miel,
Nuez, Lila, Tilo, Luz, Copo).

## Qué hay en esta carpeta

| Archivo | Qué es |
| --- | --- |
| `identidad-peter/SKILL.md` | La skill: universo, bloque de estilo, modelo y parámetros, regla de variación, cómo se inserta el elemento oculto, restricciones |
| `identidad-peter/concepto.md` | Concepto, las 9 escenas, el elemento oculto y el bloque madre |
| `identidad-peter/textos_libro.md` | El texto de cada página, con la pregunta de búsqueda |
| `identidad-peter/system_prompt_y_modo_de_uso.md` / `.pdf` | El system prompt completo con el que se generaron las escenas y el paso a paso para usarlo |
| `identidad-peter/imagenes/` | Las 9 escenas finales y la imagen de referencia de Peter |

## Las 9 escenas

1. El jardín secreto · 2. La aldea subterránea · 3. El mercado de las flores ·
4. La ciudad del árbol · 5. El pueblo flotante · 6. La villa de los hongos ·
7. El bosque nocturno · 8. La aldea nevada · 9. El gran picnic (cierre, Peter
no se esconde)

## Cómo probar la skill

1. Copiar la carpeta `identidad-peter` a `~/.claude/skills/`.
2. Abrir un chat nuevo en Claude Code y pedir una escena nueva en lenguaje
   natural, por ejemplo: *"necesito una escena nueva para el atlas de Peter
   Rabbit, una biblioteca escondida en un tronco hueco"*.
3. La skill devuelve el prompt completo. Se pega en ChatGPT (gpt-image) junto
   con `imagenes/referencia_peter.png`, formato panorámico ~3:2.
4. El escondite de Peter se resuelve a mano después (ver la sección "Cómo se
   inserta el elemento oculto" de la skill): la IA genera el mundo, una
   persona decide dónde está Peter y qué tan difícil es encontrarlo.
