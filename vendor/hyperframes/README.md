# HyperFrames 官方库（vendor/hyperframes）

本目录为 **HyperFrames 官方 registry 全量安装**，非自研。

- **来源**：https://github.com/heygen-com/hyperframes/tree/main/registry  
- **完整清单**： [OFFICIAL.md](./OFFICIAL.md)（109 blocks + 25 components）  
- **更新**：在仓库根目录执行 `node scripts/install-official.mjs`

## 结构

```
vendor/hyperframes/
├── *.html              ← 官方 Block（独立 sub-composition）
├── components/*.html   ← 官方 Component（代码片段）
└── OFFICIAL.md         ← 名称 / 标题 / 标签索引
```

## 读书稿使用前

官方 block 多为 promo / 深色风格，用时通常需：

1. 改 CSS 颜色对齐 `presets/frame.md`  
2. 改 `data-width/height` 为 1448×1086（若项目用此画布）  
3. `snapshot` 验收后再 render

## 示例引用

```html
<div data-composition-id="lt-dark-card"
     data-composition-src="vendor/hyperframes/lt-dark-card.html"
     data-start="5" data-duration="4"
     data-width="1920" data-height="1080" data-track-index="2">
</div>
```

Component 用法：打开 `components/grain-overlay.html`，将其 HTML/CSS/JS 粘贴进 host composition。
