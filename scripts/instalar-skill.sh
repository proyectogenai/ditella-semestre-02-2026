#!/usr/bin/env bash
# Instala la skill alumno-ditella en las carpetas personales de
# Claude Code y opencode, para que funcione en cualquier proyecto.
# Uso: bash scripts/instalar-skill.sh   (desde la raíz del repo)

set -e

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$REPO_DIR/.claude/skills/alumno-ditella"

if [ ! -d "$SRC" ]; then
  echo "❌ No encuentro la skill en $SRC. ¿Estás en el repo del curso?"
  exit 1
fi

DEST_CLAUDE="$HOME/.claude/skills/alumno-ditella"
DEST_OPENCODE="$HOME/.config/opencode/skill/alumno-ditella"

for DEST in "$DEST_CLAUDE" "$DEST_OPENCODE"; do
  mkdir -p "$DEST"
  # Copia limpia: borra la versión anterior y pone la nueva
  rm -rf "$DEST"
  cp -R "$SRC" "$DEST"
  echo "✅ Skill instalada en $DEST"
done

echo ""
echo "Listo. Abrí un chat nuevo de tu agente (en cualquier carpeta) y"
echo "preguntale algo del curso para verificar que la skill se activa."
echo "Cuando la cátedra actualice la skill: git pull y volvé a correr este script."
