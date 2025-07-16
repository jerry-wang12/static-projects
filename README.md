# 静态产品网站展示入口

这是一个使用 Vue.js 和 Vite 构建的、符合 Material Design 风格的静态产品网站展示入口。

## ✨ 项目目标

本项目的核心目标是提供一个简洁、美观的导航页面，用于集中展示多个独立的静态HTML产品网站。它作为一个中心化的启动台，让用户可以方便地预览和访问各个产品页面。

## 📁 目录结构

```
.
├── public/
│   ├── sites/
│   │   ├── product-a/
│   │   │   └── index.html  # 产品A的HTML网站
│   │   ├── product-b/
│   │   │   └── index.html  # 产品B的HTML网站
│   │   └── ...             # 其他产品网站目录
│   ├── demo-images/
│   │   ├── product-a.jpg   # 产品A的预览图
│   │   └── ...
│   ├── sites-config.json   # 产品网站配置文件
│   └── placeholder-image.svg # 占位图
├── src/
│   ├── App.vue             # 应用主组件 (Material Design 入口)
│   └── main.js             # Vue 应用入口
├── index.html              # 主 HTML 文件
├── package.json
└── vite.config.js
```

## 🚀 如何使用

### 1. 添加您的静态网站

1.  在 `public/sites/` 目录下，为您要添加的每个产品创建一个新的文件夹（例如 `my-product`）。
2.  将您产品的静态HTML、CSS和JS文件放入刚刚创建的文件夹中。入口文件应为 `index.html`。

### 2. 配置产品信息

打开 `public/sites-config.json` 文件，按照以下格式为您的产品添加一个新的JSON对象：

```json
[
  {
    "id": "my-product",
    "title": "我的新产品",
    "description": "这是我的新产品的简短描述。",
    "thumbnail": "/demo-images/my-product.jpg",
    "path": "my-product/index.html"
  }
]
```

-   **`id`**: 产品的唯一标识符。
-   **`title`**: 显示在卡片上的产品标题。
-   **`description`**: 显示在卡片上的产品描述。
-   **`thumbnail`**: 产品预览图的路径（位于 `public/demo-images/` 目录下）。
-   **`path`**: 产品入口HTML文件相对于 `public/sites/` 的路径。

### 3. 添加预览图

将产品的预览图片（例如 `my-product.jpg`）放入 `public/demo-images/` 目录。

### 4. 启动项目

在终端中运行以下命令来启动开发服务器：

```bash
npm run dev
```

然后，在浏览器中打开 `http://localhost:3000` 即可看到您的产品展示入口。

## 🎨 设计与技术

-   **设计风格**: 遵循 Google 的 [Material Design](https://material.io/design) 指南，提供简洁、直观的用户体验。
-   **前端框架**: 使用 [Vue.js 3](https://vuejs.org/) 构建响应式用户界面。
-   **构建工具**: 基于 [Vite](https://vitejs.dev/)，提供极速的开发体验。

这个项目已经为您搭建好了基础框架，您可以专注于填充您的产品内容。 