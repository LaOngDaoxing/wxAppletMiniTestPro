//app.js
App({
  /*------------------------------- 一、应用生命周期 -------------------------------*/
  //  1、 应用第一次启动的就会触发的事件  
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 2、 应用 被用户看到 
  onShow(){
    // 对应用的数据或者页面效果 重置 
    // console.log("应用生命周期onShow");
  },
  /**
   * @Description：3、 应用 被隐藏了
   * @OptSteps：桌面打开 微信Applet开发者工具》菜单栏 点击“切后台”按钮》
   */
  onHide(){
    // 暂停或者清除定时器 
    // console.log("应用生命周期Hide");
  },
  // 4、 应用的代码发生了报错的时候 就会触发
  onError(err){
    // 在应用发生代码报错的时候，收集用户的错误信息，通过异步请求 将错误的信息发送后台去
    // console.log("应用生命周期onError");
    // console.log(err);
  },
  // 5、 应用第一次启动的时候，如果找不到应用第一个入口页面（文件app.json中"pages":[第一行路径即应用第一个入口页面]），就会触发事件onPageNotFound()。
  onPageNotFound(){
    // 如果应用第一个入口页面不存在，可通过wx.navigateTo来重新跳转到第二个首页；注意，不能跳到tabbar页面、导航组件类似。
    wx.navigateTo({
      url: '/pages/_05wxssStyle/_05wxssStyle' 
    });  
    // console.log("应用生命周期onPageNotFound");
  },
  globalData: {
    userInfo: null
  }
})