---
name: 读书稿 · 水彩手账
description: HyperFrames 读书稿口播 overlay 层设计系统
canvas: 1448x1086
aspect: "16:9"

colors:
  paper: "#F5F0E8"
  card: "rgba(252,248,242,0.96)"
  text: "#2C2420"
  text-muted: "rgba(44,36,32,0.58)"
  accent: "#6BA3B5"
  accent-green: "#7BA888"
  accent-gold: "#C4A35A"

typography:
  title: "Noto Serif SC"
  label: "Noto Sans SC"
  code: "JetBrains Mono, Consolas, monospace"

layout:
  architecture: micro-scene
  bg: full-bleed watercolor + Ken Burns
  overlay: center zone, large type
  subtitles: 剪映处理，HF 不渲染

constraints:
  - 禁止实心白底大卡 pop 出
  - 禁止 bounce / elastic 默认动效
  - 序号用 1 2 3
  - 列举段用 block，不单堆文字
