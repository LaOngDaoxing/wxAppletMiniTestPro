// components/TabsB/TabsB.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabsArr3:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /* 
    * @Description：（6）子向父传递数据
    * @Remark：
        1 绑定点击事件  需要在methods中绑定
        （1）组件.js 文件中 存放事件回调函数的时候 必须要存在在 methods中！！！
        （2）页面.js 文件中 存放事件回调函数的时候 存放在data同层级下！！！
    */
   changeTabEventFunC(e){
    /* 
    2 获取被点击的索引 
    5 点击事件触发的时候 
        触发父组件中的自定义事件 同时传递数据给  父组件  
        this.triggerEvent("父组件自定义事件的名称",要传递的参数)
    */
    // 2 获取被点击的索引
    const {index}=e.currentTarget.dataset;
    console.log(index);
    // 5 触发父组件中的自定义事件 同时传递数据给  父组件 
    this.triggerEvent("fatherComponentCusEventName",{index});
  }
  }
})