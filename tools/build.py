"""打包「代码人生」皮肤：由 plugin/src 生成插件，组装下载包 zip。

用法：python3 -I tools/build.py
产物：dist/CodeLife-Harness-Skin-v<版本>.zip，以及 GitHub Release 用的固定文件名 dist/CodeLife-Harness-Skin.zip
"""
import json
import pathlib
import shutil
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
PLUG = ROOT / "plugin"
VERSION = json.loads((PLUG / "package.json").read_text(encoding="utf-8"))["version"]

# 1. 生成插件客户端
src = (PLUG / "src" / "client.js").read_text(encoding="utf-8").replace("{{VERSION}}", VERSION)
if "{{" in src:
    sys.exit("client.js 里还有没替换的占位符")
(PLUG / "lib" / "client.js").write_text(src, encoding="utf-8")

# 2. 组装下载包
name = f"CodeLife-Harness-Skin-v{VERSION}"
out = ROOT / "dist" / name
if out.exists():
    shutil.rmtree(out)
(out / "plugin" / "lib").mkdir(parents=True)
for f in ["package.json", "cordis.patch.yml", "icon.svg"]:
    shutil.copy2(PLUG / f, out / "plugin" / f)
for f in ["index.js", "client.js"]:
    shutil.copy2(PLUG / "lib" / f, out / "plugin" / "lib" / f)
for f in (ROOT / "pack").iterdir():
    shutil.copy2(f, out / f.name)
shutil.copy2(ROOT / "CHANGELOG.md", out / "CHANGELOG.md")
shutil.copy2(ROOT / "LICENSE", out / "LICENSE.txt")
shutil.copy2(ROOT / "LICENSE", out / "plugin" / "LICENSE.txt")
zip_path = shutil.make_archive(str(out), "zip", root_dir=out.parent, base_dir=name)
shutil.copy2(zip_path, ROOT / "dist" / "CodeLife-Harness-Skin.zip")
print("插件版本", VERSION)
print("下载包", pathlib.Path(zip_path).relative_to(ROOT), f"{pathlib.Path(zip_path).stat().st_size // 1024} KB")
