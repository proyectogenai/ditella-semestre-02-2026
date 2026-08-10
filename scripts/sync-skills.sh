#!/usr/bin/env bash
# [Uso interno de la cátedra]
# Sincroniza las skills desde .claude/skills/ (fuente de verdad) hacia
# .opencode/skill/, para que ambos agentes vean lo mismo dentro del repo.
# Correr después de editar cualquier skill, antes de commitear.

set -e

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$REPO_DIR/.claude/skills"
DEST="$REPO_DIR/.opencode/skill"

mkdir -p "$DEST"

for skill_dir in "$SRC"/*/; do
  name="$(basename "$skill_dir")"
  rm -rf "$DEST/$name"
  cp -R "$skill_dir" "$DEST/$name"
  echo "✅ $name → .opencode/skill/$name"
done

echo "Sync completo."
