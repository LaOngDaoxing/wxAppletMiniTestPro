// pages/demo18/demo18.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面生命周期onLoad");
    // onLoad发送异步请求来初始化页面数据 
  },
  /**
   * 生命周期函数--监听页面显示
   * @OptSteps：桌面打开 微信Applet开发者工具》菜单栏 点击“切后台”按钮》点击 弹窗中的任意场景值》
   */
  onShow: function () {
    console.log("页面生命周期onShow");
  },
  /**
    * 生命周期函数--监听页面初次渲染完成
    */
  onReady: function () {
    console.log("页面生命周期onReady");
  },
  /**
   * 生命周期函数--监听页面隐藏
   * @OptSteps：
      桌面打开 微信Applet开发者工具》菜单栏 点击“切后台”按钮》
      在页面_08lifeCycle.wxml》点击页面跳转链接A》
   */
  onHide: function () {
    console.log("页面生命周期onHide");
  },

  /**
   * 生命周期函数--监听页面关闭/卸载
   * @OptSteps：在页面_08lifeCycle.wxml》点击页面跳转链接B》
   */
  onUnload: function () {
    console.log("页面生命周期onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("页面生命周期onPullDownRefresh");
    // 页面的数据 或者效果 重新 刷新
  },

  /**
   * 页面上拉/上下滚动，直到上拉触底事件的处理函数（此方法用于加载下一页数据）
   */
  onReachBottom: function () {
    console.log("页面生命周期onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("页面生命周期onShareAppMessage");
  },
  /**
   * 页面滚动 就可以触发 
   */
  onPageScroll(){
    console.log("页面生命周期onPageScroll");
  },
  /**
   * 页面的尺寸发生改变时触发（例如：小程序 发生了 横屏竖屏 切换的时候触发）
   * @CodeGrammer
      在手机上启用屏幕旋转支持
        （1）全局生效，在app.json中添加
            {
              "pageOrientation":"auto"
            }    
        （2）当前页面_08lifeCycle.wxml生效，在_08lifeCycle.json中添加
            {
              "pageOrientation":"auto"
            }
      然后模拟器界面右上角，会多出一个“旋转”按钮
   */
  onResize(){
    console.log("页面生命周期onResize");
  },
  /**
   * 1 必须要求当前页面 也是tabbar页面
   * 2 点击的自己的tab item的时候才触发
   */
  onTabItemTap(){
    console.log("页面生命周期onTabItemTap");
  }
})