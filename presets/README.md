# 风格预设（Presets）

本目录是 **模板库**。HyperFrames（HF）只读取 **具体视频项目根目录** 下的 `frame.md`，不会自动读 kit 里的文件。

## 怎么用

新建项目时，复制一套 preset 到项目根：

```powershell
# 读书稿水彩风（当前主力）
copy I:\Project\hf-reading-kit\presets\reading-watercolor\frame.md  I:\Project\HyperFrames\我的新项目\frame.md
```

然后在项目里改 `colors.accent` 等字段即可统一全片色调。

## 现有 preset

| 目录 | 适用 | 状态 |
|------|------|------|
| `reading-watercolor/` | 读书稿、长口播、水彩 overlay | ✅ 可用 |
| `_template/` | 新建 preset 时复制 | 占位 |

## 以后可加

- `tech-dark/` — 科技解读口播
- `business-clean/` — 商业 / 咨询风
- `short-vertical/` — 9:16 竖屏口播

每个 preset 含：

- `frame.md` — 颜色、字体、约束（HF 官方 design spec 格式）
- `motion.md` — 动效偏好（可选，给 Agent 看）

## 和 STORYBOARD.md 的关系

| 文件 | 管什么 |
|------|--------|
| `frame.md` | **长什么样**（色、字、气质） |
| `STORYBOARD.md` | **拍什么**（分镜、时长、旁白、用哪个 block） |

两者都在 **具体项目** 里，不在 kit 仓库里。
