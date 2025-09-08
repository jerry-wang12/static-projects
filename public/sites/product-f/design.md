校友APP - UI设计规范 (Material Design)
这是一份根据Google Material Design 3规范创建的，适用于校友APP的UI设计规范。文件定义了色彩体系、字体排印、形状与圆角、以及核心组件的样式标准，旨在确保APP视觉风格的统一性与品牌一致性。

1. 色彩体系 (Color System)
色彩体系仅定义浅色主题（Light Theme），以紫色（#702C8A）为核心品牌色。

{
  "theme": {
    "light": {
      "color": {
        "primary": "#702C8A",
        "onPrimary": "#FFFFFF",
        "primaryContainer": "#F0DBF8",
        "onPrimaryContainer": "#290038",
        "secondary": "#66596D",
        "onSecondary": "#FFFFFF",
        "secondaryContainer": "#EBDDF3",
        "onSecondaryContainer": "#211728",
        "tertiary": "#805175",
        "onTertiary": "#FFFFFF",
        "tertiaryContainer": "#FFD7F3",
        "onTertiaryContainer": "#330E2E",
        "error": "#BA1A1A",
        "onError": "#FFFFFF",
        "errorContainer": "#FFDAD6",
        "onErrorContainer": "#410002",
        "background": "#F7F2F9",
        "onBackground": "#1D1B1E",
        "surface": "#FFFBFF",
        "onSurface": "#1D1B1E",
        "surfaceVariant": "#E8E0E8",
        "onSurfaceVariant": "#4A454D",
        "outline": "#7B757E"
      }
    }
  }
}

2. 字体排印 (Typography)
采用系统默认字体（iOS: PingFang SC, Android: Roboto / HarmonyOS Sans），以保证最佳的可读性。

角色 (Role)

字重 (Weight)

字号 (Size)

行高 (Line Height)

用途示例

Display Large

Regular

57px

64px

几乎不用，用于极少数营销或闪屏页

Headline Medium

Regular

28px

36px

“我的”页面顶部欢迎语

Title Large

Medium

22px

28px

页面主标题，如“活动详情”

Title Medium

Medium

16px

24px

卡片标题，如活动卡片、列表项标题

Body Large

Regular

16px

24px

正文内容，详情描述

Body Medium

Regular

14px

20px

辅助性文本，如活动日期、地点

Label Large

Medium

14px

20px

按钮文字

Label Medium

Medium

12px

16px

底部导航栏文字、标签文字（Tag）

3. 形状与圆角 (Shape & Corner Radius)
统一的圆角规范为界面带来柔和、现代的视觉感受。

尺寸 (Size)

圆角值 (Radius)

应用组件示例

Extra Small

4px

基本不用，除非空间极度受限

Small

8px

按钮（Button）、标签（Tag）、输入框（Input）

Medium

12px

卡片（Card）、列表项

Large

16px

弹窗（Dialog）、底部面板（Bottom Sheet）

Extra Large

28px

底部导航栏（Navigation Bar）的指示器

Full

999px (Pill)

胶囊形状的筛选按钮（Filter Chip）

4. 组件风格规范 (Component Styles)
4.1. 按钮 (Button)
主要按钮 (Filled Button):

背景色: primary (#702C8A)

文字颜色: onPrimary (#FFFFFF)

圆角: Small (8px)

用途: 页面核心操作，如“立即报名”、“提交预订”。

次要按钮 (Outlined Button):

边框颜色: outline (#7B757E)

文字颜色: primary (#702C8A)

圆角: Small (8px)

用途: 非核心但常用的操作，如“查看详情”。

4.2. 卡片 (Card)
背景色: surface (#FFFBFF)

圆角: Medium (12px)

阴影: 使用柔和的阴影以创造层次感 (Elevation Level 1)。

内容边距 (Padding): 16px。

4.3. 顶部导航栏 (Top App Bar)
背景色: surface (#FFFBFF)

标题文字颜色: onSurface (#1D1B1E)

图标颜色: onSurfaceVariant (#4A454D)

4.4. 底部导航栏 (Navigation Bar)
背景色: surfaceVariant (#E8E0E8 带有轻微透明度)

选中项图标/文字颜色: onSurface (#1D1B1E)

未选中项图标/文字颜色: onSurfaceVariant (#4A454D)

选中指示器颜色: primaryContainer (#F0DBF8)

选中指示器圆角: Extra Large (28px)

这份文档为您的APP提供了从原子到组件的完整浅色主题设计规范。