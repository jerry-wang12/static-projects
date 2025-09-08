// 页面加载优化脚本 - 提升切换体验
(function() {
    'use strict';
    
    // 预加载关键页面
    const criticalPages = [
        'home.html',
        'messages.html', 
        'profile.html',
        'accommodation.html'
    ];
    
    // 创建预加载链接
    function preloadPages() {
        criticalPages.forEach(page => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = page;
            document.head.appendChild(link);
        });
    }
    
    // 添加页面切换过渡效果
    function addPageTransition() {
        // 监听所有导航点击
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a[href$=".html"], .nav-item, .menu-item');
            if (link && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                
                // 获取目标URL
                let targetUrl = '';
                if (link.href) {
                    targetUrl = link.href;
                } else if (link.dataset.href) {
                    targetUrl = link.dataset.href;
                }
                
                if (targetUrl && targetUrl !== window.location.href) {
                    // 添加淡出效果
                    document.body.style.transition = 'opacity 0.2s ease-out';
                    document.body.style.opacity = '0.7';
                    
                    // 短暂延迟后跳转
                    setTimeout(() => {
                        window.location.href = targetUrl;
                    }, 100);
                }
            }
        });
    }
    
    // 页面加载完成后的处理
    function handlePageLoad() {
        // 重置透明度
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.3s ease-in';
        
        // 添加页面出现动画
        document.body.classList.add('page-loaded');
    }
    
    // 优化图片加载
    function optimizeImageLoading() {
        // 为所有图片添加懒加载
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.loading) {
                img.loading = 'lazy';
            }
        });
        
        // 预加载关键图片
        const criticalImages = document.querySelectorAll('.avatar img, .user-photo img');
        criticalImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    }
    
    // 初始化
    function init() {
        // DOM加载完成后执行
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                preloadPages();
                addPageTransition();
                optimizeImageLoading();
                handlePageLoad();
            });
        } else {
            preloadPages();
            addPageTransition();
            optimizeImageLoading();
            handlePageLoad();
        }
    }
    
    // 启动优化
    init();
    
    // 添加CSS类用于动画
    const style = document.createElement('style');
    style.textContent = `
        body {
            transition: opacity 0.3s ease-in-out;
        }
        
        .page-loaded .app-container {
            animation: slideInUp 0.4s ease-out;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .loading-indicator {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            z-index: 9999;
            transform: scaleX(0);
            transform-origin: left;
            animation: loadingBar 0.2s ease-out forwards;
        }
        
        @keyframes loadingBar {
            to {
                transform: scaleX(1);
            }
        }
    `;
    document.head.appendChild(style);
})();
