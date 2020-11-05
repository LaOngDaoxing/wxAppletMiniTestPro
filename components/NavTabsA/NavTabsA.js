// components/Tabs/TabsA.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      tabsArr1:[
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
      ],
      tabsArr2:[
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

  /**
   * 组件的方法列表
   */
  methods: {
    /* 
    * @Description：动态自定义组件-标题激活选中事件
    * @Remark：
        1 绑定点击事件  需要在methods中绑定
        （1）组件.js 文件中 存放事件回调函数的时候 必须要存在在 methods中！！！
        （2）页面.js 文件中 存放事件回调函数的时候 存放在data同层级下！！！
    * @Bug：
        正确的逻辑是：父向子传递数据》在子组件的自定义事件方法中（获得并处理父组件传递来的数据 ——> 子向父传递数据）。
        但现在错误情况是：父向子传递数据》在子组件的自定义事件方法中（获得并处理父组件传递来的数据，然后将处理结果数据赋值给了子组件data: {tabsArr2:tabsArr2Var}）。
    */
    changeTabEventFunA(e){
      /* 
      2 获取被点击的索引 
      3 获取data中的原数组tabsArr 
        解构  对 复杂类型进行结构的时候 复制了一份 变量的引用而已；不要直接修改 this.data.数据，[].forEach 遍历数组 遍历数组的时候 修改了 v ，也会导致源数组被修改。
          let {tabsArr}=this.data; 等价于 let tabsArr2Var=this.data.tabsArr2;
        最严谨的做法 重新拷贝一份 数组，再对这个数组的备份进行处理。
          let tabsArr2Var=JSON.parse(JSON.stringify(this.data.tabsArr2)); 
      4 循环原数组
        1 给每一个循环性 选中属性 改为 false
        2 给 当前的索引的 项 添加激活选中效果就可以了！！！
          [].forEach 遍历数组 遍历数组的时候 修改了 v ，也会导致源数组被修改
      */
      // 2 获取被点击的索引
      const {index}=e.currentTarget.dataset;
      // 3 获取子组件data中的原数组tabsArr2 
      let tabsArr2Var=JSON.parse(JSON.stringify(this.data.tabsArr2));
      // 4 循环原数组
      tabsArr2Var.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      // 将tabsArr3Var值，赋值给data: {tabsArr2:tabsArr2Var}；相当于子组件data中存在2个tabsArr2。
      this.setData({
        tabsArr2:tabsArr2Var
      })
    }
  }
})
