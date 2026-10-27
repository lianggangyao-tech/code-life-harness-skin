#!/bin/bash
# 代码人生 Code Life 皮肤 · 一行命令安装（macOS）
# 用法：curl -fsSL https://raw.githubusercontent.com/lianggangyao-tech/code-life-harness-skin/main/get.sh | bash -s -- <授权码>
#   或：CL_KEY=<授权码> bash -c "$(curl -fsSL https://raw.githubusercontent.com/lianggangyao-tech/code-life-harness-skin/main/get.sh)"
# 做的事：从本仓库最新 Release 下载加密安装包 → 用授权码解密 → 解压到本机 → 运行包里的 install.command。
# 不改 Harness 安装包；安装前会备份 Harness 配置；卸载运行解压目录里的 uninstall.command。
set -euo pipefail

REPO="lianggangyao-tech/code-life-harness-skin"
ASSET="${CL_ASSET:-https://github.com/$REPO/releases/latest/download/CodeLife-Harness-Skin.zip.enc}"
KEY="${1:-${CL_KEY:-}}"
HOME_DIR="${CL_HOME:-$HOME/Library/Application Support/CodeLifeSkin}"

if [ -z "$KEY" ]; then
  echo "用法：curl -fsSL https://raw.githubusercontent.com/$REPO/main/get.sh | bash -s -- <授权码>"
  echo "授权码在购买后的自动回复里。"
  exit 1
fi
if [ "$(uname)" != "Darwin" ]; then
  echo "✗ 一行命令安装目前只支持 macOS。其他系统请看仓库说明手动安装。"
  exit 1
fi

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "== 代码人生皮肤 · 一行安装 =="
echo "· 下载最新版安装包…"
curl -fsSL "$ASSET" -o "$WORK/pkg.enc"

echo "· 用授权码解密…"
if ! CL_KEY_INTERNAL="$KEY" openssl enc -d -aes-256-cbc -md sha256 -pbkdf2 -iter 200000 \
    -in "$WORK/pkg.enc" -out "$WORK/pkg.zip" -pass env:CL_KEY_INTERNAL 2>/dev/null \
    || ! unzip -tq "$WORK/pkg.zip" >/dev/null 2>&1; then
  echo "✗ 授权码不对，或安装包没下载完整。请核对授权码后重试。"
  exit 1
fi

mkdir -p "$HOME_DIR"
unzip -oq "$WORK/pkg.zip" -d "$HOME_DIR"
PKG="$(ls -d "$HOME_DIR"/CodeLife-Harness-Skin-v* 2>/dev/null | sort -V | tail -1)"
[ -n "$PKG" ] || { echo "✗ 安装包内容不完整。"; exit 1; }
echo "· 安装包已放到：$PKG"

CL_YES=1 zsh "$PKG/install.command" </dev/null
echo
echo "  以后要卸载：运行「$PKG/uninstall.command」。"
