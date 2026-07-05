# hf-reading-kit

读书稿 HyperFrames（HF）跨项目素材库。

## 目录

| 目录 | 用途 |
|------|------|
| `refs/screenshots/` | 灵感截图（不参与渲染） |
| `refs/notes.md` | 截图说明索引 |
| `blocks/` | 自研、已验证的 HF block（块） |
| `vendor/hyperframes/` | 官方 block（`hyperframes add` 安装） |
| `vendor/lottie/` | Lottie 动画 json |
| `vendor/ported/` | 从 GSAP / 网页等改写为 HF 格式的动效 |
| `presets/` | 读书稿设计系统与动效禁则 |
| `mapping.yaml` | 分镜 Skill → HF 实现映射表 |

## 新项目用法

```bash
# 方式 1：与项目并列 clone
git clone <本仓库> I:\Project\hf-reading-kit

# 方式 2：作为 submodule（子模块）
cd 你的新书项目
git submodule add <本仓库> kit
```

在 `index.html` 中引用 block：

```html
<div data-composition-src="../hf-reading-kit/blocks/card-stack-slap/block.html"
     data-start="89.2" data-duration="5">
</div>
```

## 查 block 优先级

1. `vendor/hyperframes/` — 官方有的先用  
2. `vendor/ported/` — 第三方已改写  
3. `blocks/` — 自研已验证  
4. 都没有 → 新建 block，满意后回收到 `blocks/`

## 维护

- 新增 block：放入 `blocks/<name>/`，更新 `mapping.yaml` 和 `blocks/README.md`
- 官方 block：`npx hyperframes add <name> --dir vendor/hyperframes`
- 灵感图：只放 `refs/`，不要当 block 渲染
