# 给 AI 助手：如何安装「代码人生」皮肤

免费开源，不需要授权码。

## 条件
- macOS，已安装 DeepSeek Harness（`/Applications/DeepSeek Harness.app`），并且至少打开过一次。
- 需要 `curl`、`unzip`、`zsh`（macOS 自带）。

## 安装
```bash
curl -fsSL https://raw.githubusercontent.com/lianggangyao-tech/code-life-harness-skin/main/get.sh | bash
```
成功时最后会打印“✓ 安装完成”。然后请用户完全退出 Harness（⌘Q）再打开，在左侧图标栏点「皮肤」。

脚本做的事：从本仓库最新 Release 下载 `CodeLife-Harness-Skin.zip` → 解压到 `~/Library/Application Support/CodeLifeSkin/` → 运行包里的 `install.command`。它会先备份 Harness 配置，用 Harness 官方的 `dsh plugin add` 安装，不修改 Harness 安装包。

## 出错时
- 下载失败：检查能否访问 github.com。
- 提示 Harness 版本不同：仍会安装，但部分样式可能不生效；可在皮肤页切回“Harness 原布局”。
- 其他问题：请用户到 https://github.com/lianggangyao-tech/code-life-harness-skin/issues 反馈。

## 卸载
```bash
zsh "$(ls -d ~/Library/Application\ Support/CodeLifeSkin/CodeLife-Harness-Skin-v* | sort -V | tail -1)/uninstall.command" </dev/null
```
