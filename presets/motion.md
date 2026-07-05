# 读书稿动效禁则

## 推荐

| 场景 | 动效 | GSAP ease |
|------|------|-----------|
| 卡片拍入 | 从上落下 + 微压扁 | power4.out |
| 大字淡入 | opacity + y | power2.out |
| 划掉否定 | strike scaleX | power2.inOut |
| 数字计数 | onUpdate 取整 | power2.out |

## 避免

- back.out / bounce.out（太 pop）
- GlowPulse 循环（太闹）
- 全屏暗色遮罩切换（像宣传片）

## 音效（剪映侧）

- 卡片拍入：pop，对齐关键词秒数，音量 35–40%
