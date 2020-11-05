// pages/_07customComponent/_07customComponent.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabsArr3:[
      {
        id:0,
        name:"首页",
        isActive:true
      },
      {
        id:1,
        name:"原创",
        isActive:false
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },
      {
        id:3,
        name:"关于",
        isActive:false
      }
    ]
  },
  /* 
  * @Description：自定义事件 用来接收子组件传递的数据的
  * 1、组件.js 文件中 存放事件回调函数的时候 必须要存在在 methods中！！！
  * 2、页面.js 文件中 存放事件回调函数的时候 存放在data同层级下！！！
  */
 receiveSonComponentData(e) {
    // 接收传递过来的参数
    const { index } = e.detail;
    let { tabsArr3 } = this.data;
    tabsArr3.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabsArr3
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})