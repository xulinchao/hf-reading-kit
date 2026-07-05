# hf-reading-kit

读书稿 HyperFrames（HF，超帧）跨项目素材库。

**GitHub**：https://github.com/xulinchao/hf-reading-kit

---

## 目录说明

| 目录 | 来源 | 用途 |
|------|------|------|
| `refs/screenshots/` | 你收集 | 灵感截图（**不参与渲染**） |
| `refs/notes.md` | 你维护 | 截图说明索引 |
| `blocks/` | **自研** | 读书稿验证过的 block |
| `vendor/hyperframes/` | **HF 官方 registry** | 109 blocks + 25 components，见 [OFFICIAL.md](vendor/hyperframes/OFFICIAL.md) |
| `vendor/lottie/` | 第三方 | Lottie json |
| `vendor/ported/` | 第三方改写 | 从 Remotion/GSAP 等 port 到 HF |
| `presets/` | 规范 | 读书稿色板、动效禁则 |
| `mapping.yaml` | 映射表 | 分镜 Skill → HF 实现 |

---

## 官方库（已全量安装）

`vendor/hyperframes/` 内所有 `.html` 来自 **HyperFrames 官方注册表**：

```bash
# 更新官方库（catalog 有新增时重跑）
node scripts/install-official.mjs
node scripts/gen-official-readme.mjs
```

- **Blocks**（109）：`vendor/hyperframes/*.html` — 可 `data-composition-src` 直接引用  
- **Components**（25）：`vendor/hyperframes/components/*.html` — 粘贴进 host 的 HTML/CSS/JS  

完整清单：**[vendor/hyperframes/OFFICIAL.md](vendor/hyperframes/OFFICIAL.md)**

---

## 新项目用法

```bash
git clone https://github.com/xulinchao/hf-reading-kit.git
```

引用官方 block：

```html
<div data-composition-id="data-chart"
     data-composition-src="../hf-reading-kit/vendor/hyperframes/data-chart.html"
     data-start="10" data-duration="15"
     data-width="1920" data-height="1080" data-track-index="1">
</div>
```

引用自研 block：

```html
<div data-composition-src="../hf-reading-kit/blocks/card-stack-slap/block.html"
     data-start="89.2" data-duration="5">
</div>
```

---

## 选用优先级

1. `vendor/hyperframes/` — **官方**（先查 OFFICIAL.md）  
2. `vendor/ported/` — 第三方已改写  
3. `blocks/` — **自研**已验证  
4. 都没有 → 新建，满意后回收到 `blocks/`

---

## Remotion 库能借鉴吗？

**不能直接用**（Remotion 是 React 组件，HF 是 HTML+GSAP）。

**可以借鉴的方式：**

| 方法 | 做法 |
|------|------|
| 截图 | 存 `refs/screenshots/`，写 notes |
| 看 demo 录屏 | 分析动效节奏，让 AI port 成 HF block |
| 读源码 | 把 React/spring 逻辑改写成 GSAP timeline → 放 `vendor/ported/` |
| Lottie 导出 | 若 Remotion 侧能出 Lottie → 放 `vendor/lottie/` |

Remotion 生态（remocn、remotion-bits 等）当**灵感库**，落地一律进 `vendor/ported/` 并写 `SOURCE.md`。

---

## 维护

| 操作 | 命令/位置 |
|------|-----------|
| 同步官方库 | `node scripts/install-official.mjs` |
| 更新官方索引 | `node scripts/gen-official-readme.mjs` |
| 新增自研 block | `blocks/<name>/` + 更新 `mapping.yaml` |
| 灵感图 | 只放 `refs/` |
