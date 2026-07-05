import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const blocks = JSON.parse(readFileSync(join(root, "catalog-blocks.json"), "utf8"));
const components = JSON.parse(readFileSync(join(root, "catalog-components.json"), "utf8"));

const lines = [
  "# HyperFrames 官方库（本目录）",
  "",
  "> 来源：[heygen-com/hyperframes registry](https://github.com/heygen-com/hyperframes/tree/main/registry)",
  "> 安装命令：`node scripts/install-official.mjs`（同步 catalog 并补全缺失项）",
  "",
  `**Blocks：${blocks.length} 个** · **Components：${components.length} 个**`,
  "",
  "⚠️ 以下文件为 **HyperFrames 官方注册表** 原样安装，非自研。读书稿使用前通常需改色/改字号以匹配 `presets/frame.md`。",
  "",
  "## Blocks（独立 sub-composition，可直接 data-composition-src 引用）",
  "",
  "| name | title | tags |",
  "|------|-------|------|",
];

for (const b of blocks) {
  const tags = (b.tags || []).join(", ");
  lines.push(`| \`${b.name}\` | ${b.title} | ${tags} |`);
}

lines.push("", "## Components（代码片段，粘贴进 host composition）", "", "| name | title |", "|------|-------|");

for (const c of components) {
  lines.push(`| \`${c.name}\` | ${c.title || c.name} |`);
}

writeFileSync(join(root, "vendor/hyperframes/OFFICIAL.md"), lines.join("\n"), "utf8");
console.log("Wrote vendor/hyperframes/OFFICIAL.md");
