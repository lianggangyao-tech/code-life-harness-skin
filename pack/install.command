#!/bin/zsh
# 代码人生皮肤 · 一键安装（macOS）
# 做的事：检查 Harness → 备份配置 → 复制插件到本机 → 用 Harness 官方插件命令安装。不改 Harness 安装包。
set -e
HERE="${0:A:h}"
APP="/Applications/DeepSeek Harness.app"
DSH="$APP/Contents/Resources/runtime/cli/bin/dsh"
PROFILE_NAME="${CL_PROFILE:-desktop}"   # 测试时可用 CL_PROFILE 指定其他档案
PROFILE="$HOME/.dsh/profiles/$PROFILE_NAME"
HOME_DIR="${CL_HOME:-$HOME/Library/Application Support/CodeLifeSkin}"
DEST="$HOME_DIR/plugin"
COMPAT="0.2.1-rc.3"
NAME="dsh-skin-code-life"

echo "== 代码人生皮肤安装 =="
[ -x "$DSH" ] || { echo "✗ 没找到 DeepSeek Harness（应在 /Applications）。请先安装 Harness。"; read -k1 "?按任意键退出" || true; exit 1; }
[ -d "$PROFILE" ] || { echo "✗ 还没有 Harness 配置。请先打开一次 Harness 再运行本安装。"; read -k1 "?按任意键退出" || true; exit 1; }
VER=$(/usr/bin/plutil -extract CFBundleShortVersionString raw "$APP/Contents/Info.plist" 2>/dev/null || echo "未知")
echo "· Harness 版本：$VER（本皮肤在 $COMPAT 上测试）"
if [ "$VER" != "$COMPAT" ]; then
  echo "! 版本不同，部分样式可能不生效；出问题可在皮肤页一键切回原布局，或运行「uninstall.command」。"
  if [ "${CL_YES:-}" != "1" ]; then   # 一行命令安装（CL_YES=1）时不停下来问
    read -q "?仍要继续安装吗？[y/N] " || { echo; exit 0; }
    echo
  fi
fi

mkdir -p "$HOME_DIR"
BACKUP="$HOME_DIR/backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP"
for f in package.json cordis.patch.yml cordis.yml pnpm-lock.yaml pnpm-workspace.yaml; do
  [ -f "$PROFILE/$f" ] && cp -p "$PROFILE/$f" "$BACKUP/"
done
echo "· 已备份配置到：$BACKUP"

rm -rf "$DEST"
cp -R "$HERE/plugin" "$DEST"
echo "· 已复制插件到：$DEST"

if grep -q "\"$NAME\"" "$PROFILE/package.json" 2>/dev/null; then
  echo "· 检测到已安装，已更新为新版本文件。"
else
  "$DSH" plugin --profile "$PROFILE_NAME" add "$DEST"
fi
echo
echo "✓ 安装完成。请完全退出 DeepSeek Harness（⌘Q）后重新打开。"
echo "  皮肤入口：左侧图标栏「皮肤」。不想用了：皮肤页「Harness 原布局」或运行「uninstall.command」。"
[ "${CL_YES:-}" = "1" ] || read -k1 "?按任意键关闭" || true
