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
   * 页面上拉触底事件的处理函数
   * 需要让页面 出现上下滚动才行 
   */
  onReachBottom: function () {
    console.log("页面生命周期onReachBottom");
    // 上拉加载下一页数据 
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
   * 页面的尺寸发生改变的时候 触发
   * 小程序 发生了 横屏竖屏 切换的时候触发 
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