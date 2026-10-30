#!/bin/zsh
# 代码人生皮肤 · 卸载（macOS）：用 Harness 官方插件命令移除，不动其他配置。
set -e
APP="/Applications/DeepSeek Harness.app"
DSH="$APP/Contents/Resources/runtime/cli/bin/dsh"
PROFILE_NAME="${CL_PROFILE:-desktop}"   # 测试时可用 CL_PROFILE 指定其他档案
PROFILE="$HOME/.dsh/profiles/$PROFILE_NAME"
NAME="dsh-skin-code-life"
HOME_DIR="${CL_HOME:-$HOME/Library/Application Support/CodeLifeSkin}"
echo "== 代码人生皮肤卸载 =="
[ -x "$DSH" ] || { echo "✗ 没找到 DeepSeek Harness。"; read -k1 "?按任意键退出" || true; exit 1; }
if grep -q "\"$NAME\"" "$PROFILE/package.json" 2>/dev/null; then
  "$DSH" plugin --profile "$PROFILE_NAME" remove "$NAME"
  /usr/bin/python3 - "$PROFILE/package.json" "$NAME" <<'PY'
import json, sys
p, name = sys.argv[1], sys.argv[2]
d = json.load(open(p, encoding="utf-8"))
b = d.get("dsh", {}).get("profile", {}).get("bundles", [])
if name in b:
    b.remove(name)
    json.dump(d, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
PY
  rm -f "$PROFILE/node_modules/$NAME"
  rm -rf "$HOME_DIR/plugin"
  echo "✓ 已卸载。请完全退出 Harness（⌘Q）后重新打开。"
else
  echo "· 没有检测到已安装的 代码人生皮肤。"
fi
echo "  安装时的配置备份在：$HOME_DIR/"
read -k1 "?按任意键关闭" || true
