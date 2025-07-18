// 共享头部组件
function createSharedHeader() {
    return `
        <header class="header">
            <div class="header-container">
                <div class="header-left">
                    <div class="logo">
                        <i data-lucide="file-text" class="logo-icon"></i>
                        <h1 class="logo-text">智能简历工具</h1>
                    </div>
                </div>
                <nav class="header-nav">
                    <a href="resume-generator.html" class="nav-link" data-page="generator">
                        <i data-lucide="edit" class="nav-icon"></i>
                        <span>简历生成</span>
                    </a>
                    <a href="resume-diagnosis.html" class="nav-link" data-page="diagnosis">
                        <i data-lucide="search" class="nav-icon"></i>
                        <span>简历诊断</span>
                    </a>
                    <a href="resume-optimization.html" class="nav-link" data-page="optimization">
                        <i data-lucide="trending-up" class="nav-icon"></i>
                        <span>简历优化</span>
                    </a>
                </nav>
                <div class="header-right">
                    <button class="btn-upload">
                        <i data-lucide="upload" class="btn-icon"></i>
                        <span>上传简历</span>
                    </button>
                    <div class="user-menu">
                        <button class="user-avatar">
                            <i data-lucide="user" class="avatar-icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    `;
}

// 共享头部样式
function getSharedHeaderStyles() {
    return `
        /* 头部样式 */
        .header {
            background: var(--gradient-primary);
            box-shadow: var(--shadow-base);
            position: sticky;
            top: 0;
            z-index: 100;
            backdrop-filter: blur(10px);
        }

        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--spacing-6);
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 64px;
        }

        .header-left {
            display: flex;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: var(--spacing-2);
            text-decoration: none;
            color: white;
        }

        .logo-icon {
            width: 24px;
            height: 24px;
            color: white;
        }

        .logo-text {
            font-size: 20px;
            font-weight: 700;
            color: white;
            margin: 0;
        }

        .header-nav {
            display: flex;
            align-items: center;
            gap: var(--spacing-2);
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: var(--spacing-2);
            padding: var(--spacing-2) var(--spacing-4);
            border-radius: var(--radius-xl);
            text-decoration: none;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
            transition: all var(--duration-normal) var(--easing-material);
            position: relative;
        }

        .nav-link:hover {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            transform: translateY(-1px);
        }

        .nav-link.active {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .nav-icon {
            width: 16px;
            height: 16px;
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: var(--spacing-4);
        }

        .btn-upload {
            display: flex;
            align-items: center;
            gap: var(--spacing-2);
            background: rgba(255, 255, 255, 0.15);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: var(--spacing-2) var(--spacing-4);
            border-radius: var(--radius-base);
            font-weight: 500;
            cursor: pointer;
            transition: all var(--duration-normal) var(--easing-material);
        }

        .btn-upload:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateY(-1px);
            box-shadow: var(--shadow-lg);
        }

        .btn-icon {
            width: 16px;
            height: 16px;
        }

        .user-menu {
            position: relative;
        }

        .user-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all var(--duration-normal) var(--easing-material);
        }

        .user-avatar:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: scale(1.05);
        }

        .avatar-icon {
            width: 16px;
            height: 16px;
            color: white;
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .header-container {
                padding: 0 var(--spacing-4);
            }
            
            .header-nav {
                gap: var(--spacing-1);
            }
            
            .nav-link span {
                display: none;
            }
            
            .btn-upload span {
                display: none;
            }
            
            .logo-text {
                font-size: 16px;
            }
        }
    `;
}

// 初始化共享头部
function initializeSharedHeader() {
    // 插入头部HTML
    const headerContainer = document.getElementById('shared-header');
    if (headerContainer) {
        headerContainer.innerHTML = createSharedHeader();
    }

    // 添加样式
    const style = document.createElement('style');
    style.textContent = getSharedHeaderStyles();
    document.head.appendChild(style);

    // 设置当前页面的活动状态
    setActiveNavLink();

    // 初始化图标
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 添加事件监听
    addHeaderEventListeners();
}

// 设置活动导航链接
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('data-page');
        
        if (
            (currentPage === 'resume-generator' && linkPage === 'generator') ||
            (currentPage === 'resume-diagnosis' && linkPage === 'diagnosis') ||
            (currentPage === 'resume-optimization' && linkPage === 'optimization') ||
            (currentPage === 'index' && linkPage === 'generator') // 默认页面
        ) {
            link.classList.add('active');
        }
    });
}

// 添加头部事件监听
function addHeaderEventListeners() {
    // 上传按钮点击事件
    const uploadBtn = document.querySelector('.btn-upload');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', function() {
            // 可以触发上传模态框或跳转到上传页面
            console.log('上传简历功能');
        });
    }

    // 用户头像点击事件
    const userAvatar = document.querySelector('.user-avatar');
    if (userAvatar) {
        userAvatar.addEventListener('click', function() {
            // 可以显示用户菜单
            console.log('用户菜单');
        });
    }
}

// 页面加载完成后初始化头部
document.addEventListener('DOMContentLoaded', function() {
    initializeSharedHeader();
});