---
name: 读书稿 · 水彩手账
id: reading-watercolor
description: 口播读书稿 overlay 层 — 水彩纸感、大 serif 字、淡色引导
canvas: 1448x1086
aspect: "16:9"
use_when: 读书稿、长口播、剪映合成字幕

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
