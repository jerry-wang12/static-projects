// 南大校友APP - Vue应用逻辑

const { createApp } = Vue;

createApp({
  data() {
    return {
      // 当前页面状态
      currentPage: this.checkLoginStatus() ? 'home' : 'login',
      
      // 搜索状态
      showSearch: false,
      searchQuery: '',
      
      // 登录表单
      loginForm: {
        phone: '',
        code: '',
        agreed: false
      },
      
      // 当前筛选器
      activeFilter: 'latest',
      
      // 预订表单
      bookingForm: {
        checkin: '',
        checkout: ''
      },
      
      // 用户信息
      user: {
        id: '20100001',
        name: '王贤希',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        cardNumber: '2023061236',
        universityType: '南京大学',
        grade: '2010',
        department: '软件学院',
        verified: true
      },
      
      // 筛选选项
      filters: [
        { key: 'latest', name: '最新发布' },
        { key: 'hot', name: '热门推荐' },
        { key: 'nanjing', name: '南京地区' },
        { key: 'shanghai', name: '上海地区' },
        { key: 'beijing', name: '北京地区' }
      ],
      
      // 活动数据
      activities: [
        {
          id: 1,
          title: '南京大学2025年毕业生秋季大型双选会',
          summary: '为毕业生提供优质就业机会，汇聚知名企业招聘...',
          date: '2024-09-27',
          location: '南京大学体育馆',
          image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          status: 'open',
          category: 'career',
          region: 'nanjing'
        },
        {
          id: 2,
          title: '校友企业专场招聘会',
          summary: '邀请优秀校友企业回母校招聘，为学弟学妹提供就业机会...',
          date: '2024-10-15',
          location: '南京大学逸夫楼',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          status: 'open',
          category: 'career',
          region: 'nanjing'
        },
        {
          id: 3,
          title: '南大校友上海聚会',
          summary: '在沪校友年度聚会，增进友谊，分享创业经验...',
          date: '2024-11-03',
          location: '上海浦东香格里拉',
          image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          status: 'open',
          category: 'social',
          region: 'shanghai'
        },
        {
          id: 4,
          title: '南大创业论坛',
          summary: '邀请知名校友分享创业心得，探讨行业趋势...',
          date: '2024-08-20',
          location: '南京大学仙林校区',
          image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          status: 'closed',
          category: 'academic',
          region: 'nanjing'
        },
        {
          id: 5,
          title: '北京校友年会',
          summary: '北京地区校友年度盛会，回顾过去，展望未来...',
          date: '2024-12-15',
          location: '北京国际会议中心',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          status: 'full',
          category: 'social',
          region: 'beijing'
        }
      ],
      
      // 房间数据
      rooms: [
        {
          id: 1,
          name: '标准单人间',
          facilities: ['独卫', 'Wi-Fi', '空调'],
          price: 150,
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          id: 2,
          name: '豪华双人间',
          facilities: ['独卫', 'Wi-Fi', '空调', '阳台'],
          price: 220,
          image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          id: 3,
          name: '商务套房',
          facilities: ['独卫', 'Wi-Fi', '空调', '办公桌', '客厅'],
          price: 350,
          image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ],
      
      // 消息数据
      messages: [
        {
          id: 1,
          type: 'booking',
          title: '住宿预订确认',
          summary: '您预订的豪华双人间已确认，入住时间：10月15日...',
          time: '2小时前',
          read: false
        },
        {
          id: 2,
          type: 'activity',
          title: '活动报名成功',
          summary: '您已成功报名"校友企业专场招聘会"，活动时间：10月15日...',
          time: '1天前',
          read: true
        },
        {
          id: 3,
          type: 'system',
          title: '校友身份认证成功',
          summary: '恭喜您！校友身份认证已通过，现在可以使用全部功能...',
          time: '3天前',
          read: true
        },
        {
          id: 4,
          type: 'activity',
          title: '活动提醒',
          summary: '您报名的"南大创业论坛"将于明天开始，请按时参加...',
          time: '1周前',
          read: true
        }
      ],
      
      // 导航配置
      navigation: [
        { key: 'home', name: '首页', icon: '🏠' },
        { key: 'accommodation', name: '住宿', icon: '🏨' },
        { key: 'messages', name: '消息', icon: '💬' },
        { key: 'profile', name: '我的', icon: '👤' }
      ]
    };
  },
  
  computed: {
    // 检查是否有通知
    hasNotifications() {
      return this.messages.some(msg => !msg.read);
    },
    
    // 未读消息数量
    unreadCount() {
      return this.messages.filter(msg => !msg.read).length;
    },
    
    // 筛选后的活动列表
    filteredActivities() {
      let filtered = [...this.activities];
      
      // 按筛选器过滤
      if (this.activeFilter === 'latest') {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (this.activeFilter === 'hot') {
        // 模拟热门排序（实际应该基于参与人数等指标）
        filtered.sort((a, b) => a.id - b.id);
      } else if (['nanjing', 'shanghai', 'beijing'].includes(this.activeFilter)) {
        filtered = filtered.filter(activity => activity.region === this.activeFilter);
      }
      
      // 按搜索关键词过滤
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.trim().toLowerCase();
        filtered = filtered.filter(activity => 
          activity.title.toLowerCase().includes(query) ||
          activity.summary.toLowerCase().includes(query) ||
          activity.location.toLowerCase().includes(query)
        );
      }
      
      return filtered;
    },
    
    // 检查登录表单是否可提交
    canLogin() {
      return this.loginForm.phone.length >= 11 && 
             this.loginForm.code.length >= 4 && 
             this.loginForm.agreed;
    }
  },
  
  methods: {
    // 检查登录状态
    checkLoginStatus() {
      // 模拟检查本地存储的登录状态
      return localStorage.getItem('alumni_token') !== null;
    },
    
    // 获取页面标题
    getPageTitle() {
      const titles = {
        home: '校友活动',
        accommodation: '住宿预订',
        messages: '消息中心',
        profile: '个人中心'
      };
      return titles[this.currentPage] || '南大校友';
    },
    
    // 获取活动状态文本
    getStatusText(status) {
      const statusMap = {
        open: '报名中',
        full: '已报满',
        closed: '已结束'
      };
      return statusMap[status] || status;
    },
    
    // 获取消息图标
    getMessageIcon(type) {
      const iconMap = {
        booking: '🏨',
        activity: '📅',
        system: '⚙️',
        general: '📢'
      };
      return iconMap[type] || iconMap.general;
    },
    
    // 发送验证码
    sendCode() {
      if (!this.loginForm.phone || this.loginForm.phone.length < 11) {
        alert('请输入正确的手机号');
        return;
      }
      
      // 模拟发送验证码
      console.log('发送验证码到:', this.loginForm.phone);
      alert('验证码已发送！（模拟：1234）');
    },
    
    // 登录
    login() {
      if (!this.canLogin) return;
      
      // 模拟登录验证
      if (this.loginForm.code === '1234') {
        localStorage.setItem('alumni_token', 'mock_token_' + Date.now());
        this.currentPage = 'home';
        console.log('登录成功');
      } else {
        alert('验证码错误，请重试（正确验证码：1234）');
      }
    },
    
    // 微信登录
    wechatLogin() {
      // 模拟微信登录
      console.log('微信登录');
      localStorage.setItem('alumni_token', 'wechat_token_' + Date.now());
      this.currentPage = 'home';
    },
    
    // 页面跳转
    goToPage(page) {
      this.currentPage = page;
      this.showSearch = false;
      
      // 重置搜索查询
      if (page !== 'home') {
        this.searchQuery = '';
      }
    },
    
    // 查看活动详情
    viewActivity(activity) {
      console.log('查看活动:', activity.title);
      // 在实际应用中，这里会跳转到活动详情页
      alert(`查看活动详情：${activity.title}\n\n${activity.summary}\n\n时间：${activity.date}\n地点：${activity.location}`);
    },
    
    // 选择房间
    selectRoom(room) {
      if (!this.bookingForm.checkin || !this.bookingForm.checkout) {
        alert('请先选择入住和离店日期');
        return;
      }
      
      console.log('选择房间:', room.name);
      const checkin = new Date(this.bookingForm.checkin);
      const checkout = new Date(this.bookingForm.checkout);
      const nights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
      const total = room.price * nights;
      
      const confirmed = confirm(
        `预订确认\n\n房型：${room.name}\n入住：${this.bookingForm.checkin}\n离店：${this.bookingForm.checkout}\n住宿天数：${nights}晚\n总价：¥${total}\n\n确认预订吗？`
      );
      
      if (confirmed) {
        alert('预订申请已提交，等待后台审核！');
        // 在实际应用中，这里会发送预订请求到服务器
      }
    },
    
    // 查看消息详情
    viewMessage(message) {
      console.log('查看消息:', message.title);
      
      // 标记为已读
      if (!message.read) {
        message.read = true;
      }
      
      // 显示消息详情
      alert(`${message.title}\n\n${message.summary}\n\n时间：${message.time}`);
    },
    
    // 显示二维码
    showQR() {
      alert('显示身份二维码\n\n姓名：' + this.user.name + '\n学号：' + this.user.id + '\n\n[QR码图像占位]');
    },
    
    // 初始化日期选择器默认值
    initializeDates() {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      this.bookingForm.checkin = today.toISOString().split('T')[0];
      this.bookingForm.checkout = tomorrow.toISOString().split('T')[0];
    }
  },
  
  // 组件挂载后的初始化
  mounted() {
    this.initializeDates();
    
    // 模拟推送通知检查
    setInterval(() => {
      // 在实际应用中，这里会检查服务器的新消息
      console.log('检查新消息...');
    }, 30000);
    
    console.log('南大校友APP初始化完成');
  },
  
  // 监听页面变化
  watch: {
    currentPage(newPage, oldPage) {
      console.log(`页面切换: ${oldPage} -> ${newPage}`);
      
      // 页面切换时的特殊处理
      if (newPage === 'home') {
        this.showSearch = false;
      }
    },
    
    // 监听搜索查询变化
    searchQuery(newQuery) {
      console.log('搜索查询:', newQuery);
      // 在实际应用中，可以添加防抖以优化性能
    }
  }
}).mount('#app');
