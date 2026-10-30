# 代码人生 Code Life · DeepSeek Harness 皮肤

把 DeepSeek Harness 装进代码世界：三套主题、自绘四栏布局、主页问候、背景代码雨，模型干活时文字会像《黑客帝国》那样先乱码再解码。
**非 DeepSeek 官方产品。** 只通过 Harness 官方的插件机制安装，不修改 Harness 安装包，随时可以卸载。

## 你会得到
- **三套主题**：夜 · Lime Night ／ 日 · Paper Day ／ 深空 · Deep Space
- **自绘四栏布局**：图标栏 ／ 会话栏 ／ 对话区 ／ 仪表栏（上下文占用、轮次步骤、速度、缓存命中、步骤列表）
- **主页**：按时间和任务状态问候你；"此刻"最多 3 件事、推荐动作、最近会话、工作区全景
- **细节**：青柠方块光标、玻璃输入框、背景代码雨（可关）、运行中跳动乱码＋状态文字逐字解码、终端风标志
- **随时切回**：皮肤页一键切回 Harness 原布局

## 系统要求
- macOS（Apple 芯片或 Intel 均可）
- DeepSeek Harness **0.2.1-rc.3**（其他版本可能部分样式不生效，见"版本兼容"）
- 至少打开过一次 Harness

## 一行命令安装（推荐，macOS）
免费开源（MIT 许可）。在「终端」里运行：

    curl -fsSL https://raw.githubusercontent.com/lianggangyao-tech/code-life-harness-skin/main/get.sh | bash

也可以把这行命令交给 DeepSeek 或其他 AI 助手，让它帮你执行。装好后完全退出 Harness（⌘Q）再打开。

## 安装（解压后双击，macOS）
1. 解压下载的压缩包。
2. 双击「install.command」。第一次运行如果提示"无法验证开发者"：右键点它 →「打开」→ 再点「打开」。
3. 看到"安装完成"后，**完全退出 Harness（⌘Q）再重新打开**。
4. 左侧图标栏点「皮肤」，选一套主题。

安装脚本会先把你的 Harness 配置备份到 `~/Library/Application Support/CodeLifeSkin/backup-日期/`。

### 手动安装（任何系统）
Harness 左侧「插件」→「添加插件」→ 选择"本地目录"，填入解压后的 `plugin` 文件夹的完整路径 → 安装 → 立即启用 → 重启 Harness。

## 卸载
- 双击「uninstall.command」，然后重启 Harness；或
- Harness「插件」页找到 `dsh-skin-code-life` → 卸载。
- 只是暂时不想要新布局：皮肤页 →「Harness 原布局」。

## 版本兼容
Harness 目前是预览版，界面内部结构会随版本变化。本皮肤在 **0.2.1-rc.3** 上测试。Harness 升级后如果样式错乱：
1. 皮肤页切回「Harness 原布局」，或运行卸载；
2. 等待本皮肤的兼容更新。
皮肤出错时不会让 Harness 白屏：会显示原因和"切回原布局"按钮。

## 隐私
本皮肤只在你本机运行，不联网、不收集任何数据。主页显示的会话、账号昵称和头像都是从你本机 Harness 实时读取的。

## 常见问题
- **安装后看不到变化**：确认已经 ⌘Q 完全退出 Harness 再打开。
- **启动时弹出"应用无法启动"**：点「禁用第三方插件、备份 profile patch 并重启」即可恢复官方界面，然后到 https://github.com/lianggangyao-tech/code-life-harness-skin/issues 反馈。
- **主页怎么称呼我**：默认用你的 Harness 账号昵称，可在皮肤页「主页称呼」里修改。
