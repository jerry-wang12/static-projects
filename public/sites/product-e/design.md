设计体系分析 (Design System Analysis)
本设计体系基于提供的参考图片分析得出，旨在打造一个现代、柔和且富有科技感的界面。

1. 色彩体系 (Color System)
整体色彩搭配以低饱和度的柔和色调为主，营造出一种舒适、高级的视觉感受。

主色调 (Primary Color)
柔和丁香紫 (Soft Lilac)

#E9D5FF

用途：作为主要的背景光晕、图标点缀以及关键信息元素的背景色，奠定了整个App的柔和基调。

辅助/强调色 (Accent Colors)
清新薄荷绿 (Fresh Mint Green)

#D4EDDA

用途：用于信息卡片、功能模块的背景，与主色调形成优雅的对比，区分不同类别的内容。

行动号召色 (Call to Action Color)
活力紫 (Vibrant Purple)

#8B5CF6 (示例值)

用途：用于最重要的操作按钮。这个充满活力的紫色既能提供清晰的视觉引导，又与主色调丁香紫和谐搭配，避免了黑色的沉重感，使整体设计更加协调、现代。

中性色 (Neutral Colors)
背景白 (Background White)

#F8F7FA (近似值)

用途：作为页面的主背景色，比纯白色更柔和，可以更好地衬托前景元素。

卡片白 (Surface White)

#FFFFFF

用途：聊天气泡、信息卡片的底色。

主文字黑 (Primary Text)

#1C1C1E (近似值)

用途：标题、正文等主要文字内容。

次要文字灰 (Secondary Text)

#8A8A8E (近似值)

用途：辅助性文字、提示信息等。

2. 卡片投影效果 (Card Shadow Effect)
这是该设计中的一个亮点。它没有使用传统的灰色硬投影，而是采用了一种加深且柔化的彩色光晕式投影，具体特征如下：

柔和弥散：投影的边缘非常模糊和柔和，没有清晰的边界，像光晕一样自然地散开。

色彩呼应：投影的颜色与卡片本身的颜色相呼应。例如，淡紫色的卡片会有一个更深一点的紫色投影，绿色的卡片则有绿色的投影。这大大增强了设计的整体性和精致感。

富有深度：这种投影不仅增加了Z轴上的深度感，让卡片看起来像是悬浮在背景之上，还通过色彩赋予了卡片一种“发光”的质感。

实现思路 (CSS Example)
要实现这种效果，可以使用 box-shadow 属性，通过设置较大的模糊半径 (blur-radius) 和一个带有透明度的颜色值 (rgba) 来达成。

.purple-card {
  box-shadow: 0px 10px 30px -5px rgba(160, 100, 220, 0.2);
}

.green-card {
  box-shadow: 0px 10px 30px -5px rgba(100, 180, 120, 0.2);
}

通过应用这个设计体系，你的App界面将在视觉上获得显著的提升，变得更加专业和吸引人。

3. 字体系统 (Typography System)
主页面采用了优雅的中文字体栈，提供了跨平台的优质阅读体验。

主字体栈 (Primary Font Stack)
```css
font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Hiragino Sans GB', 
             'Noto Sans CJK SC', 'Source Han Sans SC', 'Microsoft YaHei', '微软雅黑', sans-serif;
```

字体层级 (Typography Hierarchy)
- 主标题：26px，font-weight: 600，用于欢迎语等重要标题
- 章节标题：16px，font-weight: 500，letter-spacing: 0.5px，用于"试试这些"等分组标题  
- 正文：16px，line-height: 1.5，用于描述性文字
- 辅助文字：14px，用于次要信息

4. 圆角系统 (Border Radius System)
统一的圆角设计语言，营造现代柔和的视觉感受。

- 大圆角：24px，用于主要卡片、功能模块
- 中圆角：16px，用于弹窗、模态框
- 小圆角：12px，用于列表项、次级元素
- 微圆角：8px，用于按钮、标签等小元素

5. 间距系统 (Spacing System)
基于8px网格的间距体系，确保布局的一致性。

- 微间距：4px，用于内联元素
- 小间距：8px，用于相关元素
- 标准间距：12px，用于卡片内部padding
- 大间距：16px，用于元素间隔
- 超大间距：24px，用于模块分组

6. 交互动画 (Animation System)
统一的动画语言，提供流畅的用户体验。

缓动函数 (Easing Functions)
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* 主要过渡 */
transition: background 0.2s ease; /* 简单状态切换 */
```

悬停效果 (Hover Effects)
- 卡片悬停：translateY(-4px) + 增强阴影
- 按钮悬停：轻微提升 + 颜色加深
- 列表项悬停：背景色变化

7. 装饰元素系统 (Decoration System)
独特的装饰元素增强视觉层次感。

弥散光效果 (Aurora Effects)
- 多层径向渐变
- 动态旋转和缩放动画
- 透明度控制在0.25-0.4之间

装饰线条 (Decorative Lines)
- 细长设计：高度16-22px，宽度280-320px
- 不同旋转角度：25°, -15°, 35°, -25°等
- 透明度：rgba(color, 0.3)
- 贯穿卡片的对角线布局

8. 层级系统 (Z-Index System)
清晰的层级管理，确保元素正确显示。

- z-index: 0 - 装饰背景层（弥散光、装饰线）
- z-index: 1 - 半透明覆盖层
- z-index: 2 - 装饰元素层  
- z-index: 3 - 内容层（文字、按钮、图标）
- z-index: 4 - 输入区域
- z-index: 10 - 侧边栏
- z-index: 1000+ - 模态层

9. 设计应用原则 (Application Guidelines)
将以上设计系统应用到所有界面元素：

一致性原则
- 所有卡片都使用24px圆角
- 统一的字体栈和字号体系
- 相同的颜色主题和透明度设置
- 统一的交互动画时长和缓动函数

层次感原则
- 通过颜色、阴影、装饰元素建立视觉层次
- 重要内容使用更强的对比度和装饰效果
- 次要内容使用更柔和的视觉处理

用户体验原则
- 流畅的过渡动画提升操作反馈
- 合理的间距系统提升可读性
- 统一的交互模式降低学习成本