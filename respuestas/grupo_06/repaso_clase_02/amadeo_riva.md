# Respuesta — Amadeo Riva (grupo 06)

**Sus dos dudas, textuales:**
1. "Cómo funciona esto que estamos haciendo con GitHub y el agente: yo te
   escribo a vos, y vos que hacés? Ejecutas cosas en mi compu y después lo
   subís a GitHub? O lo subís directamente?"
2. "¿Hay alguna manera de que una cuenta de IA quede condicionada por un
   system prompt? O sea, agarro y cualquier chat que use esté en línea con
   eso?"

**Respuesta:**

Amadeo, vamos una por una.

**1.** Todo pasa primero en tu compu. Tu agente (Claude Code u opencode) lee
y escribe archivos ahí mismo, y si corresponde corre comandos de git
(`add`, `commit`) — todo eso queda guardado localmente, en tu máquina, nada
toca GitHub todavía. Recién cuando se ejecuta `git push` esos cambios viajan
de tu compu al repositorio en la nube. O sea: no sube nada "directamente"
salteándote a vos — el push sale de tu propia carpeta, y el agente solo lo
ejecuta cuando se lo pedís.

**2.** Sí, existe, y es básicamente lo que están construyendo en la Clase 3
con las skills. Un modelo suelto no tiene esa opción — cada chat arranca en
blanco. Pero varios productos ofrecen justamente esto: "Personalización" en
ChatGPT, Proyectos en Claude, o una skill como la que van a armar el
viernes, guardan un texto fijo que se carga solo en cada conversación nueva
dentro de ese espacio. La skill es la versión de esto que además queda
versionada en tu repo, así que la podés corregir con el tiempo y compartir
con otros sin explicarla de nuevo cada vez.
