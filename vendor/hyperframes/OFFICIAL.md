# HyperFrames 官方库（本目录）

> 来源：[heygen-com/hyperframes registry](https://github.com/heygen-com/hyperframes/tree/main/registry)
> 安装命令：`node scripts/install-official.mjs`（同步 catalog 并补全缺失项）

**Blocks：109 个** · **Components：25 个**

⚠️ 以下文件为 **HyperFrames 官方注册表** 原样安装，非自研。读书稿使用前通常需改色/改字号以匹配 `presets/frame.md`。

## Blocks（独立 sub-composition，可直接 data-composition-src 引用）

| name | title | tags |
|------|-------|------|
| `data-chart` | Data Chart | data, chart, statistics |
| `us-map` | US Map | data, map, geography, usa, choropleth |
| `us-map-bubble` | US Bubble Map | data, map, geography, usa, bubble, cities |
| `us-map-hex` | US Hex Grid Map | data, map, geography, usa, hexgrid, tilegrid |
| `us-map-flow` | US Flow Map | data, map, geography, usa, flow, connections, arcs |
| `world-map` | World Map | data, map, geography, world, choropleth |
| `spain-map` | Spain Map | data, map, geography, spain, europe, choropleth |
| `flowchart` | Flowchart | diagram, flowchart, interactive |
| `logo-outro` | Logo Outro | branding, outro, logo |
| `instagram-follow` | Instagram Follow | social, overlay, instagram |
| `tiktok-follow` | TikTok Follow | social, overlay, tiktok |
| `yt-lower-third` | YouTube Lower Third | social, overlay, youtube |
| `news-ticker` | News Ticker | lower-third, overlay, news, ticker |
| `lt-accent-underline` | Lower Third — Accent Underline | lower-third, overlay, podcast, interview, minimal |
| `lt-bold-block` | Lower Third — Bold Block | lower-third, overlay, podcast, interview, bold |
| `lt-clean-bar` | Lower Third — Clean Bar | lower-third, overlay, podcast, interview |
| `lt-color-block` | Lower Third — Color Block | lower-third, overlay, podcast, interview, bold |
| `lt-dark-card` | Lower Third — Dark Card | lower-third, overlay, podcast, interview, dark |
| `lt-kicker-name` | Lower Third — Kicker Name | lower-third, overlay, podcast, interview, bold |
| `lt-mask-reveal` | Lower Third — Mask Reveal | lower-third, overlay, podcast, interview, bold |
| `lt-side-rule` | Lower Third — Side Rule | lower-third, overlay, podcast, interview, minimal |
| `lt-soft-pill` | Lower Third — Soft Pill | lower-third, overlay, podcast, interview, minimal |
| `lt-stack-bars` | Lower Third — Stack Bars | lower-third, overlay, podcast, interview, bold |
| `lower-third-bild` | Lower Third — BILD Style | broadcast, lower-third, news, overlay |
| `x-post` | X Post Card | social, overlay, twitter |
| `reddit-post` | Reddit Post Card | social, overlay, reddit |
| `spotify-card` | Spotify Now Playing | social, overlay, spotify |
| `macos-notification` | macOS Notification | social, overlay, notification |
| `app-showcase` | App Showcase | showcase, app, 3d |
| `north-korea-locked-down` | North Korea Locked Down | showcase, map, annotation, youtube, kinetic |
| `apple-money-count` | Apple Money Count | showcase, finance, kinetic, youtube, sfx |
| `vpn-youtube-spot` | VPN YouTube Spot | app, showcase, youtube, sfx |
| `blue-sweater-intro-video` | Blue Sweater Intro Video | showcase, ai, creator, sfx |
| `nyc-paris-flight` | NYC Paris Flight | showcase, travel, map, youtube, sfx |
| `ui-3d-reveal` | 3D UI Reveal | showcase, 3d, reveal |
| `domain-warp-dissolve` | Domain Warp Dissolve | transition, shader |
| `ridged-burn` | Ridged Burn | transition, shader |
| `whip-pan` | Whip Pan | transition, shader |
| `sdf-iris` | SDF Iris | transition, shader |
| `ripple-waves` | Ripple Waves | transition, shader |
| `gravitational-lens` | Gravitational Lens | transition, shader |
| `cinematic-zoom` | Cinematic Zoom | transition, shader |
| `chromatic-radial-split` | Chromatic Radial Split | transition, shader |
| `glitch` | Glitch | transition, shader |
| `swirl-vortex` | Swirl Vortex | transition, shader |
| `thermal-distortion` | Thermal Distortion | transition, shader |
| `flash-through-white` | Flash Through White | transition, shader |
| `cross-warp-morph` | Cross Warp Morph | transition, shader |
| `light-leak` | Light Leak | transition, shader |
| `transitions-3d` | 3D Transitions | transition, showcase |
| `transitions-blur` | Blur Transitions | transition, showcase |
| `transitions-cover` | Cover Transitions | transition, showcase |
| `transitions-destruction` | Destruction Transitions | transition, showcase |
| `transitions-dissolve` | Dissolve Transitions | transition, showcase |
| `transitions-distortion` | Distortion Transitions | transition, showcase |
| `transitions-grid` | Grid Transitions | transition, showcase |
| `transitions-light` | Light Transitions | transition, showcase |
| `transitions-mechanical` | Mechanical Transitions | transition, showcase |
| `transitions-other` | Other Transitions | transition, showcase |
| `transitions-push` | Push Transitions | transition, showcase |
| `transitions-radial` | Radial Transitions | transition, showcase |
| `transitions-scale` | Scale Transitions | transition, showcase |
| `vfx-text-cursor` | VFX Text Cursor | html-in-canvas, text, shader, cursor, chromatic |
| `vfx-liquid-background` | Liquid Background | html-in-canvas, liquid, webgl, displacement, background |
| `vfx-iphone-device` | iPhone & MacBook 3D Showcase | html-in-canvas, 3d, device, iphone, macbook, gltf |
| `vfx-magnetic` | Magnetic | html-in-canvas, webgl |
| `vfx-portal` | Portal | html-in-canvas, webgl |
| `liquid-glass-notification` | Liquid Glass Notification | html-in-canvas, liquid-glass-html-in-canvas, webgpu |
| `liquid-glass-context-menu` | Liquid Glass Context Menu | html-in-canvas, liquid-glass-html-in-canvas, webgpu |
| `liquid-glass-media-controls` | Liquid Glass Media Controls | html-in-canvas, liquid-glass-html-in-canvas, webgpu |
| `liquid-glass-widgets` | Liquid Glass Widgets | html-in-canvas, liquid-glass-html-in-canvas, webgpu |
| `ios26-liquid-glass` | iOS 26 Liquid Glass Home Screen | liquid-glass-html-in-canvas, webgpu, 3d, iphone, ios26, notifications, gltf, html-in-canvas |
| `macos-tahoe-liquid-glass` | macOS Tahoe Liquid Glass Desktop | html-in-canvas, 3d, macos, tahoe, gltf |
| `vfx-shatter` | Shatter | html-in-canvas, webgl |
| `code-snippet-apple-terminal-basic` | Code Snippet - Apple Terminal Basic | code, developer, showcase, terminal, apple, apple-terminal |
| `code-snippet-apple-terminal-clear-dark` | Code Snippet - Apple Terminal Clear Dark | code, developer, showcase, terminal, apple, apple-terminal |
| `code-snippet-apple-terminal-clear-light` | Code Snippet - Apple Terminal Clear Light | code, developer, showcase, terminal, apple, apple-terminal |
| `code-snippet-apple-terminal-grass` | Code Snippet - Apple Terminal Grass | code, developer, showcase, terminal, apple, apple-terminal |
| `code-snippet-apple-terminal-homebrew` | Code Snippet - Apple Terminal Homebrew | code, developer, showcase, terminal, apple, apple-terminal |
| `code-snippet-apple-terminal-man-page` | Code Snippet - Apple Terminal Man Page | code, developer, showcase, terminal, apple, apple-terminal |
| `code-snippet-apple-terminal-novel` | Code Snippet - Apple Terminal Novel | code, developer, showcase, terminal, apple, apple-terminal |
| `code-snippet-apple-terminal-ocean` | Code Snippet - Apple Terminal Ocean | code, developer, showcase, terminal, apple, apple-terminal |
| `code-snippet-apple-terminal-pro` | Code Snippet - Apple Terminal Pro | code, developer, showcase, terminal, apple, apple-terminal |
| `code-snippet-apple-terminal-red-sands` | Code Snippet - Apple Terminal Red Sands | code, developer, showcase, terminal, apple, apple-terminal |
| `code-snippet-apple-terminal-silver-aerogel` | Code Snippet - Apple Terminal Silver Aerogel | code, developer, showcase, terminal, apple, apple-terminal |
| `code-snippet-apple-terminal-solid-colors` | Code Snippet - Apple Terminal Solid Colors | code, developer, showcase, terminal, apple, apple-terminal |
| `code-snippet-dark-2026` | Code Snippet - Dark 2026 | code, developer, showcase, vscode |
| `code-snippet-dark-modern` | Code Snippet - Dark Modern | code, developer, showcase, vscode |
| `code-snippet-dark-plus` | Code Snippet - Dark+ | code, developer, showcase, vscode |
| `code-snippet-high-contrast` | Code Snippet - High Contrast | code, developer, showcase, vscode |
| `code-snippet-high-contrast-light` | Code Snippet - High Contrast Light | code, developer, showcase, vscode |
| `code-snippet-light-2026` | Code Snippet - Light 2026 | code, developer, showcase, vscode |
| `code-snippet-light-modern` | Code Snippet - Light Modern | code, developer, showcase, vscode |
| `code-snippet-light-plus` | Code Snippet - Light+ | code, developer, showcase, vscode |
| `code-snippet-monokai` | Code Snippet - Monokai | code, developer, showcase, vscode |
| `code-snippet-solarized-light` | Code Snippet - Solarized Light | code, developer, showcase, vscode |
| `code-snippet-visual-studio-dark` | Code Snippet - Visual Studio Dark | code, developer, showcase, vscode |
| `code-snippet-visual-studio-light` | Code Snippet - Visual Studio Light | code, developer, showcase, vscode |
| `code-morph` | Code Morph | code, code-animation, morph, refactor, developer |
| `code-snippet-flight` | Code Snippet Flight | code, code-animation, flight, developer |
| `code-typing` | Code Typing | code, code-animation, typing, developer |
| `code-diff` | Code Diff | code, code-animation, diff, developer |
| `code-highlight` | Code Highlight Sweep | code, code-animation, highlight, developer |
| `code-scroll` | Code Scroll To Line | code, code-animation, scroll, developer |
| `code-3d-extrude` | Code 3D Extrude | code, code-animation, 3d, webgl, developer |
| `code-shader-dissolve` | Code Shader Dissolve | code, code-animation, shader, webgl, developer |
| `code-particle-assemble` | Code Particle Assemble | code, code-animation, particles, gpu, webgl, developer |
| `flowchart-vertical` | Flowchart Vertical | diagram, flowchart, interactive, portrait |
| `vfx-liquid-glass` | Liquid Glass | html-in-canvas, webgl |

## Components（代码片段，粘贴进 host composition）

| name | title |
|------|-------|
| `grain-overlay` | Grain Overlay |
| `shimmer-sweep` | Shimmer Sweep |
| `grid-pixelate-wipe` | Grid Pixelate Wipe |
| `motion-blur` | Motion Blur |
| `texture-mask-text` | Texture Mask Text |
| `vignette` | Vignette |
| `caption-pill-karaoke` | Pill Karaoke |
| `caption-neon-accent` | Neon Accent |
| `caption-weight-shift` | Weight Shift |
| `caption-emoji-pop` | Emoji Pop |
| `caption-editorial-emphasis` | Editorial Emphasis |
| `caption-parallax-layers` | Parallax Layers |
| `caption-glitch-rgb` | Glitch RGB |
| `caption-matrix-decode` | Matrix Decode |
| `caption-particle-burst` | Particle Burst |
| `caption-texture` | Texture |
| `caption-clip-wipe` | Clip Wipe |
| `caption-kinetic-slam` | Kinetic Slam |
| `caption-gradient-fill` | Gradient Fill |
| `caption-neon-glow` | Neon Glow |
| `caption-highlight` | Highlight |
| `caption-blend-difference` | Blend Difference |
| `morph-text` | Morph Text |
| `parallax-zoom` | Parallax Zoom |
| `parallax-unzoom` | Parallax Unzoom |