<script setup>
import { ref, onMounted } from 'vue';

const sites = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('/sites-config.json');
    sites.value = await response.json();
  } catch (error) {
    console.error('无法加载产品配置文件:', error);
  }
});

function openSite(path) {
  window.open(`/sites/${path}`, '_blank');
}
</script>

<template>
  <div>
    <header class="app-header">
      <div class="header-content">
        <div class="logo-section">
          <div class="app-logo">
            <span class="material-icons-outlined">apps</span>
          </div>
          <h1 class="app-title">产品导航</h1>
        </div>
      </div>
    </header>

    <main class="main-content">
      <div class="content-wrapper">
        <div class="intro-section">
          <div class="intro-bg-elements">
            <div class="bg-element bg-element-1"></div>
            <div class="bg-element bg-element-2"></div>
            <div class="bg-element bg-element-3"></div>
          </div>
          <div class="intro-content">
            <div class="intro-text">
              <h2 class="intro-title">产品展示导航中心</h2>
              <p class="intro-subtitle">
                这是一个集中展示和访问我们所有产品的导航中心，帮助您快速找到并体验各类产品功能，为您的选择提供便捷的入口。
              </p>
            </div>
          </div>
        </div>

        <div class="site-grid">
          <div
            v-for="site in sites"
            :key="site.id"
            class="site-card"
            @click="openSite(site.path)"
            role="button"
            tabindex="0"
          >
            <div class="card-media">
              <img
                :src="site.thumbnail"
                :alt="`${site.title} 预览图`"
                @error="$event.target.src = '/placeholder-image.svg'"
                class="card-image"
              />
              <div class="card-overlay">
                <span class="material-icons-outlined">visibility</span>
                <span>查看站点</span>
              </div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ site.title }}</h3>
              <p class="card-description">{{ site.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <p>&copy; 2025 Product Showcase. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Google Fonts & Icons */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Icons+Outlined');

:root {
  --md-primary-color: #1976D2;
  --md-primary-variant: #1565C0;
  --md-surface-color: #ffffff;
  --md-background-color: #fcfcfc;
  --md-on-surface-color: #212121;
  --md-on-surface-variant-color: #616161;
  --md-outline-color: #e0e0e0;
  --elevation-1: 0 2px 4px rgba(0, 0, 0, 0.1);
  --elevation-2: 0 4px 8px rgba(0, 0, 0, 0.12);
  --elevation-3: 0 8px 16px rgba(0, 0, 0, 0.14);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: var(--md-background-color);
  color: var(--md-on-surface-color);
  line-height: 1.5;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

/* 背景装饰 */
.background-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  z-index: 0;
  opacity: 0.6;
  animation: float 20s ease-in-out infinite;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(45deg, rgba(25, 118, 210, 0.1), rgba(103, 58, 183, 0.08));
  top: -200px;
  left: -150px;
  animation-delay: 0s;
}

.blob-2 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, rgba(103, 58, 183, 0.08), rgba(25, 118, 210, 0.1));
  bottom: -300px;
  right: -200px;
  animation-delay: 10s;
}

@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(-10px) rotate(240deg); }
  100% { transform: translateY(0px) rotate(360deg); }
}

/* Header 样式 */
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-content {
  width: 100vw;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 24px;
  margin: 0;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.app-logo {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.app-logo .material-icons-outlined {
  font-size: 20px;
  color: white;
}

.app-title {
  font-size: 18px;
  font-weight: 500;
  color: white;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 主要内容区域 */
.main-content {
  flex: 1;
  position: relative;
  z-index: 1;
  padding: 0;
  background: linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%);
}

.content-wrapper {
  width: 100vw;
  margin: 0;
}

.intro-section {
  padding: 40px;
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.6), rgba(219, 234, 254, 0.7));
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
}

.intro-section::before {
  content: '';
  position: absolute;
  top: -20px;
  right: -20px;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(74, 144, 226, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.intro-section::after {
  content: '';
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(53, 122, 189, 0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.intro-bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.bg-element {
  position: absolute;
  border-radius: 50%;
  opacity: 0.4;
  animation: float 15s ease-in-out infinite;
}

.bg-element-1 {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, rgba(74, 144, 226, 0.12), rgba(53, 122, 189, 0.1));
  top: 20%;
  right: 10%;
  animation-delay: 0s;
}

.bg-element-2 {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, rgba(53, 122, 189, 0.1), rgba(74, 144, 226, 0.08));
  bottom: 30%;
  left: 15%;
  animation-delay: 5s;
}

.bg-element-3 {
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, rgba(74, 144, 226, 0.08), rgba(53, 122, 189, 0.06));
  top: 60%;
  right: 20%;
  animation-delay: 10s;
}

.intro-content {
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
  z-index: 1;
}

.intro-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3B82F6, #2563EB);
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.intro-icon .material-icons-outlined {
  font-size: 28px;
  color: white;
}

.intro-text {
  flex: 1;
}

.intro-title {
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 8px;
  color: #1e3a8a;
}

.intro-subtitle {
  font-size: 16px;
  color: #374151;
  margin: 0;
  line-height: 1.5;
}

/* 卡片网格 */
.site-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 32px;
  justify-content: center;
  padding: 0 40px 60px 40px;
}

.site-card {
  background-color: var(--md-surface-color);
  border-radius: 16px;
  border: 1px solid var(--md-outline-color);
  box-shadow: var(--elevation-1);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.site-card:hover {
  box-shadow: var(--elevation-3);
  transform: translateY(-6px);
  border-color: rgba(25, 118, 210, 0.3);
}

.site-card:focus-visible {
  outline: 2px solid var(--md-primary-color);
  outline-offset: 2px;
}

.card-media {
  height: 240px;
  position: relative;
  background: linear-gradient(45deg, #f5f5f5, #eeeeee);
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.site-card:hover .card-image {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.site-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay .material-icons-outlined {
  font-size: 48px;
  margin-bottom: 8px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.card-overlay span:last-child {
  font-size: 16px;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.card-content {
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 12px;
  color: var(--md-on-surface-color);
}

.card-description {
  font-size: 15px;
  color: var(--md-on-surface-variant-color);
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Footer */
.app-footer {
  position: relative;
  z-index: 1;
  background-color: var(--md-surface-color);
  border-top: 1px solid var(--md-outline-color);
  padding: 32px 0;
}

.footer-content {
  width: 100vw;
  margin: 0;
  padding: 0 40px;
  text-align: center;
  color: var(--md-on-surface-variant-color);
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .header-content {
    padding: 0 20px;
  }
  
  .content-wrapper {
    padding: 0 30px;
  }
  
  .footer-content {
    padding: 0 30px;
  }
}

@media (max-width: 992px) {
  .header-content {
    padding: 0 16px;
  }
  
  .site-grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }
  
  .content-wrapper {
    padding: 0 25px;
  }
  
  .footer-content {
    padding: 0 25px;
  }
}

@media (max-width: 768px) {
  .header-content {
    height: 56px;
    padding: 0 16px;
  }
  
  .app-title {
    font-size: 16px;
  }
  
  .app-logo {
    width: 32px;
    height: 32px;
  }
  
  .app-logo .material-icons-outlined {
    font-size: 18px;
  }
  
  .logo-section {
    gap: 10px;
  }
  
  .intro-title {
    font-size: 28px;
  }
  
  .intro-subtitle {
    font-size: 16px;
  }
  
  .intro-section {
    padding: 30px 0;
    margin-bottom: 30px;
  }
  
  .intro-content {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
  
  .bg-element {
    opacity: 0.25;
  }
  
  .bg-element-1 {
    width: 50px;
    height: 50px;
  }
  
  .bg-element-2 {
    width: 40px;
    height: 40px;
  }
  
  .bg-element-3 {
    width: 30px;
    height: 30px;
  }
  
  .intro-icon {
    width: 50px;
    height: 50px;
  }
  
  .intro-icon .material-icons-outlined {
    font-size: 24px;
  }
}

@media (max-width: 600px) {
  .header-content {
    padding: 0 20px;
  }
  
  .site-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .content-wrapper {
    padding: 0 20px;
  }
  
  .footer-content {
    padding: 0 20px;
  }
  
  .card-media {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .header-content {
    height: 52px;
    padding: 0 12px;
  }
  
  .app-title {
    font-size: 14px;
  }
  
  .app-logo {
    width: 28px;
    height: 28px;
  }
  
  .app-logo .material-icons-outlined {
    font-size: 16px;
  }
  
  .logo-section {
    gap: 8px;
  }
  
  .intro-title {
    font-size: 20px;
  }
  
  .intro-section {
    padding: 20px 0;
    margin-bottom: 20px;
  }
  
  .intro-content {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .intro-icon {
    width: 40px;
    height: 40px;
  }
  
  .intro-icon .material-icons-outlined {
    font-size: 20px;
  }
  
  .intro-subtitle {
    font-size: 14px;
  }
  
  .bg-element {
    opacity: 0.2;
  }
  
  .bg-element-1 {
    width: 30px;
    height: 30px;
  }
  
  .bg-element-2 {
    width: 25px;
    height: 25px;
  }
  
  .bg-element-3 {
    width: 20px;
    height: 20px;
  }
}
</style>
