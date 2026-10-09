# Pixelados

**Parcial · Identidad Generativa** — IA Generativa y Diseño · UTDT · 2026
Grupo 03 · Donna Liporace · Luca Fernández Ciatti

Un atlas de búsqueda estilo "¿Dónde está Wally?" en pixel art, impreso como
fanzine, con una app que se juega con la revista en la mano.

---

## El proyecto en una oración

Luca y Donna desarrollaban una IA generativa capaz de convertir cualquier
personaje a pixel art. Un café volcado sobre el teclado los metió adentro de la
máquina y desordenó el dataset: cada mundo quedó amontonado sobre sí mismo, con
sus personajes repetidos una y otra vez. El lector tiene que encontrarlos en los
ocho mundos para que puedan salir.

El personaje guía es **Bitsy**, el modelo base sobre el que la IA vestía cada
personaje nuevo. Quedó del otro lado de la pantalla y acompaña al lector página
por página.

## Qué hay en esta carpeta

| | Qué es |
| --- | --- |
| `identidad-pixelados/SKILL.md` | **La skill.** El sistema completo: universo, bloque de estilo, modelo y parámetros, regla de variación, cómo se inserta el elemento oculto y restricciones. |
| `identidad-pixelados/concepto.md` | El concepto, entregado en la Clase 5. |
| `Pixelados_artes-finales.pdf` | **Las artes finales del libro**, 30 páginas, tal como fueron a imprenta. |
| `identidad-pixelados/escenas/` | Las escenas generadas con IA, una por mundo. |
| `identidad-pixelados/escondidos/` | Luca y Donna redibujados en el lenguaje de cada mundo: el elemento oculto. |
| `identidad-pixelados/bitsies/` | Bitsy disfrazado. Los sprites normalizados, los archivos para imprenta y los originales en alta. |
| `identidad-pixelados/referencias/` | Fichas de personaje, imagen madre y paleta. |
| `identidad-pixelados/disfraces/` | La plantilla con la que se congela cada disfraz de Bitsy. |
| `bitsy-battle/` | La app a la que lleva el QR del libro. |

## Cómo funciona el sistema

Cada escena se genera con **dos capas de prompt**. El **bloque madre** —las
capas 2 a 5 de la skill— se pega igual en las ocho generaciones y es lo que hace
que ocho mundos sin un color en común se lean como el mismo libro. La **capa 1**
es el único hueco variable: describe el mundo por su arquitectura, sus
habitantes y sus objetos repetidos, nunca por su nombre.

Lo que la IA **no** hizo: la tipografía, la puesta en página, la narrativa, la
selección de qué imagen entra, el escondite de Luca y Donna —generados aparte y
compuestos a mano— y el monitor que enmarca cada escena, que es un asset fijo y
nunca se genera.

## Los ocho mundos

I · Entre tuberías y hongos · II · Cortocircuito de ternura ·
III · ¡Si no fuera por estos niños entrometidos! · IV · Una noche gótica ·
V · Bienvenidos a Springfield · VI · ¡Es más de 8000! ·
VII · ¡Wingardium Bitsyosa! · VIII · ¡Garu, vení acá!

Cada mundo ocupa dos páginas: una de presentación, con Bitsy disfrazado y los
dos códigos de tres símbolos, y una de búsqueda a sangre dentro del monitor.

## La app

**Bitsy Battle** es una app web que no se puede avanzar sin la revista: cada
página resuelta da un código que desbloquea una versión nueva de Bitsy y un
mundo para pelear. Al final, con las ocho señales, se abre la batalla contra el
Virus — la versión corrupta de Bitsy que el café también despertó.

## Reproducir una escena nueva

Instalar `identidad-pixelados/` como skill, abrirla con **Gemini 3 Pro Image**,
escribir la capa 1 de un mundo que no exista y pegar el bloque madre debajo. La
escena resultante tiene que pertenecer a este universo.
