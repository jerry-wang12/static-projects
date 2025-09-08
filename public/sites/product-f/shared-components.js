// 南大校友APP - 共享组件

// 创建顶部导航栏组件
function createTopBar(title, showBack = false, showSearch = false, showNotification = false) {
  return `
    <header class="top-bar">
      ${showBack ? `
        <button class="back-btn" onclick="history.back()">
          <iconify-icon icon="mdi:arrow-left" width="24" height="24"></iconify-icon>
        </button>
      ` : ''}
      <h1 class="page-title">${title}</h1>
      <div class="top-actions">
        ${showSearch ? `
          <button class="search-btn" onclick="toggleSearch()">
            <iconify-icon icon="mdi:magnify" width="24" height="24"></iconify-icon>
          </button>
        ` : ''}
        ${showNotification ? `
          <button class="notification-btn">
            <iconify-icon icon="mdi:bell-outline" width="24" height="24"></iconify-icon>
            <span class="notification-dot"></span>
          </button>
        ` : ''}
      </div>
    </header>
  `;
}

// 创建底部导航栏组件
function createBottomNav(activePage) {
  const navItems = [
    { key: 'home', name: '首页', icon: 'mdi:home-outline', activeIcon: 'mdi:home', page: 'home.html' },
    { key: 'accommodation', name: '住宿', icon: 'mdi:bed-outline', activeIcon: 'mdi:bed', page: 'accommodation.html' },
    { key: 'messages', name: '消息', icon: 'mdi:chat-outline', activeIcon: 'mdi:chat', page: 'messages.html' },
    { key: 'profile', name: '我的', icon: 'mdi:account-outline', activeIcon: 'mdi:account', page: 'profile.html' }
  ];

  return `
    <nav class="bottom-nav">
      ${navItems.map(nav => `
        <a href="${nav.page}" class="nav-item ${activePage === nav.key ? 'active' : ''}">
          <div class="nav-icon">
            <iconify-icon icon="${activePage === nav.key ? nav.activeIcon : nav.icon}" width="24" height="24"></iconify-icon>
          </div>
          <div class="nav-label">${nav.name}</div>
        </a>
      `).join('')}
    </nav>
  `;
}

// 创建搜索栏组件
function createSearchBar(placeholder = '搜索...') {
  return `
    <div class="search-container" id="searchContainer" style="display: none;">
      <div class="search-input-wrapper">
        <iconify-icon icon="mdi:magnify" width="20" height="20" class="search-icon"></iconify-icon>
        <input type="text" class="search-input" placeholder="${placeholder}" id="searchInput">
        <button class="search-clear" onclick="clearSearch()" style="display: none;">
          <iconify-icon icon="mdi:close" width="20" height="20"></iconify-icon>
        </button>
      </div>
    </div>
  `;
}

// 创建加载指示器
function createLoader() {
  return `
    <div class="loader-overlay" id="loader" style="display: none;">
      <div class="loader">
        <iconify-icon icon="mdi:loading" width="32" height="32" class="rotating"></iconify-icon>
      </div>
    </div>
  `;
}

// 工具函数
function toggleSearch() {
  const container = document.getElementById('searchContainer');
  const input = document.getElementById('searchInput');
  
  if (container.style.display === 'none') {
    container.style.display = 'block';
    input.focus();
  } else {
    container.style.display = 'none';
    input.value = '';
  }
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  input.value = '';
  input.focus();
}

function showLoader() {
  document.getElementById('loader').style.display = 'flex';
}

function hideLoader() {
  document.getElementById('loader').style.display = 'none';
}

// 通用的页面初始化函数
function initializePage(config = {}) {
  const {
    topBar = true,
    bottomNav = true,
    title = '南大校友',
    activePage = 'home',
    showBack = false,
    showSearch = false,
    showNotification = false,
    searchPlaceholder = '搜索...'
  } = config;

  // 插入顶部导航
  if (topBar) {
    const topBarContainer = document.querySelector('.top-bar-container');
    if (topBarContainer) {
      topBarContainer.innerHTML = createTopBar(title, showBack, showSearch, showNotification);
    }
  }

  // 插入搜索栏
  if (showSearch) {
    const searchContainer = document.querySelector('.search-bar-container');
    if (searchContainer) {
      searchContainer.innerHTML = createSearchBar(searchPlaceholder);
    }
  }

  // 插入底部导航
  if (bottomNav) {
    const bottomNavContainer = document.querySelector('.bottom-nav-container');
    if (bottomNavContainer) {
      bottomNavContainer.innerHTML = createBottomNav(activePage);
    }
  }

  // 插入加载指示器
  const loaderContainer = document.querySelector('.loader-container');
  if (loaderContainer) {
    loaderContainer.innerHTML = createLoader();
  }

  // 监听搜索输入
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const clearBtn = document.querySelector('.search-clear');
      if (clearBtn) {
        clearBtn.style.display = e.target.value ? 'block' : 'none';
      }
    });
  }
}

// 统一的底部滑动弹窗函数
function showModal(title, content, buttons = []) {
  showBottomSheet(title, content, buttons);
}

// 创建从下往上滑动的弹窗 (Bottom Sheet)
function showBottomSheet(title, content, buttons = [], options = {}) {
  const {
    showCloseButton = true,
    maxHeight = '90vh',
    dismissOnOverlay = true,
    showHandle = true
  } = options;

  // 移除已存在的弹窗
  const existingSheet = document.querySelector('.bottom-sheet-overlay');
  if (existingSheet) {
    existingSheet.remove();
  }

  const bottomSheet = document.createElement('div');
  bottomSheet.className = 'bottom-sheet-overlay';
  bottomSheet.innerHTML = `
    <div class="bottom-sheet" style="max-height: ${maxHeight};">
      ${showHandle ? '<div class="bottom-sheet-handle"></div>' : ''}
      <div class="bottom-sheet-header">
        <h3 class="bottom-sheet-title">${title}</h3>
        ${showCloseButton ? `
          <button class="bottom-sheet-close" onclick="closeBottomSheet(this)">
            <iconify-icon icon="mdi:close" width="24" height="24"></iconify-icon>
          </button>
        ` : ''}
      </div>
      <div class="bottom-sheet-content">
        ${content}
      </div>
      ${buttons.length > 0 ? `
        <div class="bottom-sheet-footer">
          ${buttons.map(btn => `
            <button class="${btn.class || 'outlined-btn'}" onclick="${btn.onclick || 'closeBottomSheet(this)'}">
              ${btn.text}
            </button>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
  
  // 点击背景关闭
  if (dismissOnOverlay) {
    bottomSheet.addEventListener('click', function(e) {
      if (e.target === bottomSheet) {
        closeBottomSheet(bottomSheet);
      }
    });
  }

  // 支持滑动手势关闭
  addSwipeGesture(bottomSheet);
  
  document.body.appendChild(bottomSheet);
  
  // 禁用背景滚动
  document.body.style.overflow = 'hidden';
  
  // 触发显示动画
  requestAnimationFrame(() => {
    bottomSheet.classList.add('show');
  });
}

function closeBottomSheet(element) {
  const bottomSheet = element.closest('.bottom-sheet-overlay') || element;
  
  // 恢复背景滚动
  document.body.style.overflow = '';
  
  bottomSheet.classList.remove('show');
  setTimeout(() => {
    if (bottomSheet.parentNode) {
      bottomSheet.remove();
    }
  }, 300);
}

// 兼容旧的关闭方法
function closeModal(element) {
  closeBottomSheet(element);
}

// 添加滑动手势支持
function addSwipeGesture(bottomSheet) {
  const sheet = bottomSheet.querySelector('.bottom-sheet');
  let startY = 0;
  let currentY = 0;
  let isDragging = false;

  sheet.addEventListener('touchstart', function(e) {
    startY = e.touches[0].clientY;
    isDragging = true;
    sheet.style.transition = 'none';
  });

  sheet.addEventListener('touchmove', function(e) {
    if (!isDragging) return;
    
    currentY = e.touches[0].clientY;
    const deltaY = Math.max(0, currentY - startY);
    
    sheet.style.transform = `translateY(${deltaY}px)`;
  });

  sheet.addEventListener('touchend', function(e) {
    if (!isDragging) return;
    
    isDragging = false;
    sheet.style.transition = 'transform 0.3s ease-out';
    
    const deltaY = currentY - startY;
    const threshold = 100; // 滑动超过100px则关闭
    
    if (deltaY > threshold) {
      closeBottomSheet(bottomSheet);
    } else {
      sheet.style.transform = 'translateY(0)';
    }
  });
}

// 通用的Toast提示函数
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const iconMap = {
    success: 'mdi:check-circle',
    error: 'mdi:alert-circle',
    warning: 'mdi:alert',
    info: 'mdi:information'
  };
  
  toast.innerHTML = `
    <iconify-icon icon="${iconMap[type]}" width="20" height="20"></iconify-icon>
    <span>${message}</span>
  `;
  
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
