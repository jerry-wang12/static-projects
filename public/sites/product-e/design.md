移动应用设计规范
概述
本文档旨在根据提供的UI截图，建立一套统一、清晰的设计规范。规范内容涵盖了色彩、字体、布局、卡片样式及按钮等核心视觉元素，以确保产品在不同界面的视觉风格和用户体验上保持高度一致性。

🎨 总体设计理念
视觉风格
极简清晰：界面设计遵循极简主义原则，通过大量的留白和简洁的线条，突出核心内容，减少视觉干扰。

轻盈通透：采用柔和的背景色、圆角卡片和细腻的阴影，营造出一种轻盈、现代的视觉感受。

焦点突出：通过明亮的强调色（青柠绿）来吸引用户注意力，引导核心操作，使交互路径更加明确。

亲和力：整体色调柔和，字体选择清晰易读，旨在创造一个友好、舒适的用户体验环境。

交互原则
内容优先：布局设计以内容为中心，确保信息层次分明，易于浏览和理解。

触摸友好：所有交互元素，如按钮和卡片，都设计了足够大的触摸区域，便于移动端操作。

即时反馈：用户的操作应有清晰的视觉反馈，如按钮点击效果、页面切换等。

一致性：在整个应用中保持组件样式和交互模式的一致性，降低用户的学习成本。

🎨 色彩规范
应用的色彩体系以中性色为基础，搭配一个鲜明的强调色，构建出既专业又具活力的视觉形象。

主色板
角色

颜色

HEX

用途

背景色 (Background)

极淡灰

#F8F9FA

应用主背景色

卡片/主内容背景

纯白

#FFFFFF

卡片、弹出层等内容区域背景

主标题/正文

深灰

#121212

重要的标题和正文文字

次要文字

中灰

#6C757D

辅助性文字、提示信息

图标/边框

浅灰

#ADB5BD

图标、分割线、输入框边框

强调色 (Accent)

青柠绿

#E0FFC2

主要按钮、高亮状态、关键操作

CSS变量定义示例
:root {
  --color-background: #F8F9FA;
  --color-surface: #FFFFFF;
  --color-text-primary: #121212;
  --color-text-secondary: #6C757D;
  --color-icon-and-border: #ADB5BD;
  --color-accent: #E0FFC2;
}

📝 文字规范
为了保证信息的易读性，我们选用现代无衬线字体（如 Inter, San Francisco, Helvetica Neue），并定义了清晰的字体层级。

字体层级
用途

字号

字重 (Font Weight)

示例

一级标题 (H1)

32px

Bold (700)

Hello, Younes Mouri

二级标题 (H2)

20px

Bold (700)

Web Search

三级标题 (H3)

16px

Medium (500)

Recent, See all

卡片标题/正文

14px

Regular (400)

Chat with AI, I need some...

按钮文字

15px

Medium (500)

Explore AI Tools

CSS样式示例
.h1-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text-primary);
}

.card-title {
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text-secondary);
}

🎴 卡片组件规范
卡片是承载信息的核心容器。我们设计了两种不同类型的卡片以适应不同的业务场景。

核心功能卡片
用于展示应用的核心功能入口，如“Web Search”, "Chat with AI"等。

视觉特征：

背景: var(--color-surface)

圆角: 16px

阴影: 0px 4px 12px rgba(0, 0, 0, 0.05)，营造轻微的悬浮感。

内边距: 16px

交互: 点击时应有轻微的缩放或透明度变化作为反馈。

CSS实现参考：

.feature-card {
  background-color: var(--color-surface);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.feature-card:active {
  transform: scale(0.98);
}

.feature-card .icon {
  color: var(--color-icon-and-border);
  font-size: 24px;
}

.feature-card .title {
  font-size: 14px;
  color: var(--color-text-primary);
}

近期项目卡片
用于展示用户的历史记录或最近使用的项目。

视觉特征：

样式: 与核心功能卡片保持一致的背景、圆角和阴影。

布局: 横向布局，左侧为图标，中间为文字，右侧为操作按钮（如“更多”）。

内容截断: 当文字内容过长时，应使用省略号(...)进行截断。

CSS实现参考：

.recent-item-card {
  background-color: var(--color-surface);
  border-radius: 16px;
  padding: 12px 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 12px;
}

.recent-item-card .text-content {
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: var(--color-text-secondary);
}

.recent-item-card .action-icon {
  color: var(--color-icon-and-border);
  cursor: pointer;
}

🔳 按钮规范
主要操作按钮 (Call to Action)
用于引导用户进行最主要的操作，如“Explore AI Tools”。

视觉特征：

形状: 胶囊形状，圆角为 999px。

背景色: var(--color-accent)

文字颜色: var(--color-text-primary)

内边距: 14px 24px (垂直/水平)

阴影: 0px 4px 10px rgba(224, 255, 194, 0.5)，使用强调色作为阴影色，增强视觉吸引力。

CSS实现参考：

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 999px;
  background-color: var(--color-accent);
  color: var(--color-text-primary);
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(224, 255, 194, 0.5);
  transition: all 0.2s ease-in-out;
}

.cta-button:active {
  transform: scale(0.97);
  box-shadow: 0px 2px 5px rgba(224, 255, 194, 0.5);
}
