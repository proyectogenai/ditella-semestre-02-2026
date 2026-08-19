# Git y GitHub para diseñadores — guía de acompañamiento

Cómo guiar al alumno para versionar su trabajo y conectarse con GitHub.
Objetivo del semestre: que cada alumno clone el repo del curso, lo mantenga
actualizado, y tenga su propio repositorio donde versiona y entrega trabajos.

## La analogía madre

Git es el fin de los archivos `final_FINAL_v3_ahora-si.zip`. Es un historial
de versiones profesional: cada "commit" es una foto del proyecto en un
momento, con una nota que dice qué cambió. GitHub es la nube donde vive una
copia de ese historial: sirve de backup, de portfolio y de canal de entrega.

Vocabulario mínimo (traducí siempre la primera vez):

| Término | Traducción |
| --- | --- |
| Repositorio (repo) | La carpeta del proyecto con su historial de versiones |
| Clonar | Descargar el repo completo a tu compu, historial incluido |
| Commit | Guardar una versión con nombre ("foto" del estado actual) |
| Push | Subir tus versiones nuevas a GitHub |
| Pull | Bajar las versiones nuevas que hay en GitHub |
| Rama (branch) | Una versión paralela para experimentar sin romper lo principal |

## Setup inicial (una sola vez)

Guiá paso a paso, verificando cada uno antes de seguir:

1. **¿Está git instalado?** → `git --version`. En Mac, si no está, el sistema
   ofrece instalar las "command line tools": que acepte.
2. **Identidad** (aparece en el historial):
   ```
   git config --global user.name "Nombre Apellido"
   git config --global user.email "mail-de-github@ejemplo.com"
   ```
3. **Cuenta de GitHub**: se crea en github.com con el mail que quieran
   (recomendá el personal, no el de la uni, para que les quede de portfolio).
4. **Autenticación**: recomendá GitHub CLI, que resuelve todo el tema de
   credenciales sin tokens manuales:
   ```
   brew install gh        # si no tienen brew, guialos para instalarlo primero
   gh auth login
   ```
   En `gh auth login` elegir: GitHub.com → HTTPS → Login with a web browser.
   Si `brew` les resulta mucho, alternativa: crear un Personal Access Token
   desde la web, pero es más frágil. GitHub Desktop es otra opción amigable
   para quien prefiera interfaz visual, y convive bien con la terminal.

## Flujo con el repo del curso

- Clonar (una vez):
  ```
  git clone https://github.com/proyectogenai/ditella-semestre-02-2026.git
  ```
- Actualizar (antes de cada clase, y SIEMPRE antes de pushear):
  ```
  git pull
  ```
- Los alumnos son **colaboradores** del repo: pushean directo a `main`.
  Reglas de convivencia que tenés que hacer cumplir:
  - Cada grupo toca **solo su carpeta** (`grupos/grupo_XX/`). Nunca editar
    archivos de otro grupo ni material de la cátedra.
  - Siempre `git pull` antes de `git push`: como todos comparten `main`, si
    alguien pusheó primero, git pide traer esos cambios antes de subir los
    propios.
- Ritmo de trabajo cotidiano (el ciclo que tienen que internalizar):
  ```
  git pull
  git add grupos/grupo_XX/
  git commit -m "qué cambié, en castellano"
  git push
  ```
  Fijate que el `add` apunta a su carpeta de grupo: evita subir archivos
  sueltos por accidente. Momento ideal para commitear: cada vez que algo
  **funciona** y antes de pedirle al agente un cambio grande. Es su
  "guardar partida".

## Repo propio del alumno (opcional, para sus proyectos)

Si el alumno quiere versionar trabajo personal fuera del repo del curso
(recomendable para el parcial y el final), guialo: crear repo en GitHub
("New repository"), después:
```
git init
git add .
git commit -m "primera versión"
git branch -M main
git remote add origin https://github.com/SU-USUARIO/SU-REPO.git
git push -u origin main
```
Explicá cada línea en una frase; no las tires en bloque sin traducir.

## Mensajes de commit

Pedí mensajes cortos y descriptivos en castellano: "ajusto paleta del mundo
3", "agrego animación de tapa". Nada de "cambios" o "asdf". El historial es
parte de la documentación de proceso que piden el parcial y el final.

## Problemas frecuentes

- **Pide usuario y contraseña al hacer push** → la contraseña ya no funciona;
  hay que autenticarse con `gh auth login` (o token). Es el problema #1.
- **`fatal: not a git repository`** → está parado fuera de la carpeta del
  repo. `pwd` y `cd` hasta la carpeta correcta.
- **`git push` rechazado ("fetch first" / "non-fast-forward")** → otro grupo
  pusheó antes. Solución: `git pull` y después `git push` de nuevo. Es lo
  esperable cuando muchos comparten `main`, no es un error de ellos.
- **`git pull` dice "las ramas se han divergido" o pide especificar cómo
  reconciliar** → le pasa a quien no actualiza el repo hace mucho tiempo, no
  es culpa suya. Primero asegurate con `git status` que no tenga cambios
  propios sin commitear (si los tiene, commitealos o hacé `git stash`).
  Como cada alumno solo toca su propia carpeta y ya tiene todo pusheado, es
  seguro traer el historial nuevo así:
  ```
  git fetch origin
  git reset --hard origin/main
  ```
  Aclarale que esto no borra nada que ya haya pusheado a GitHub — sí
  borraría commits locales que nunca subió, por eso el `git status` de
  antes es el paso que no hay que saltear. No uses `rebase` acá (ver "Qué NO
  hacer" más abajo): esta vía es más simple y alcanza.
- **Conflicto de merge** → tranquilizá: nada se perdió. Como cada grupo toca
  solo su carpeta, los conflictos reales son rarísimos; si aparece uno,
  resolvelo vos con el alumno mirando qué versión conservar. Evitá explicar
  teoría de merge salvo que la pidan.
- **Subió archivos gigantes (videos, PSD) y push falla** → explicá `.gitignore`:
  una lista de cosas que git debe ignorar. Los videos pesados mejor en Drive
  y linkeados.
- **`git pull` dice que tiene cambios locales en el repo del curso** →
  reforzar la regla: el trabajo propio va en su repo. Para salir del paso:
  `git stash` (guardar los cambios a un costado) y después decidir con calma.

## Qué NO hacer

- No enseñes rebase, cherry-pick, submodules ni flujos con ramas múltiples
  salvo pedido explícito. Con `add / commit / push / pull` cubren el 95% de
  la cursada.
- No los dejes commitear API keys ni archivos `.env`: si ves una clave en el
  código, frená y explicá cómo sacarla antes del push.
