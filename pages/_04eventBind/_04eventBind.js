// pages/_04eventBind/_04eventBind.js
Page({
  data: {
    num: 0
  },
  // 获取输入框值的input事件方法
  handleInputFun(e) {
    // console.log(e.detail.value );
    // 把输入框的值，赋值到data当中
    this.setData({
      // 通过事件源对象来，获取输入框的值
      num: e.detail.value
    })
  },
  // 加 减 按钮的点击事件方法
  handletap(e) {
    // console.log(e);
    // 1 获取自定义属性 operation
    const operation = e.currentTarget.dataset.operation;
    // 把输入框的值，赋值到data当中
    this.setData({
      num: this.data.num + operation
    })
  }
})