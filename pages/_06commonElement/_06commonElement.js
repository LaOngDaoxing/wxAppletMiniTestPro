/**
 * @Description：使用 Page({}) 构造器注册页面
 * @Remark：对于小程序中的每个页面，都需要在页面对应的 js 文件中进行注册，指定页面的初始数据、生命周期回调、事件处理函数等。
 * 
  */
 Page({
	/**
	* @Description：页面的初始数据
	* @param 
	 */
  data: {
    // 1 标签字符串 最常用的
    htmlStr:'<div class="tpl-wrapper" data-tpl-id="m_h_v31icon_1" style="margin-top: -10px;"><div view-name="DFrameLayout" style="display: flex; overflow: hidden; height: 160px; width: 375px; place-self: flex-start; position: relative;"><div view-name="DView" style="display: flex; overflow: hidden; background-color: rgb(255, 255, 255); margin-top: 9px; height: 100%; width: 100%; top: 0px; left: 0px; position: absolute;"></div><div view-name="HImageView" style="display: flex; overflow: hidden; height: 100%; width: 100%; position: absolute;"><div style="width: 100%; height: 100%; background-image: url(&quot;https://gw.alicdn.com/tps/TB155AUPpXXXXajXVXXXXXXXXXX-1125-480.png_.webp&quot;); background-repeat: no-repeat; background-position: center center; background-size: contain;"></div></div><div view-name="DLinearLayout" aria-label="天猫" style="display: flex; overflow: hidden; width: 61px; height: 67px; margin-left: 10px; margin-top: 13px; -webkit-box-orient: vertical; flex-direction: column; top: 0px; left: 0px; position: absolute;"><div view-name="HGifView" style="display: flex; overflow: hidden; width: 61px; height: 48px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png_.webp&quot;);"></div></div><div view-name="DTextView" style="display: inline-block; overflow: hidden; font-size: 11px; height: auto; margin-top: 5px; text-align: center; color: rgb(102, 102, 102); width: 61px; text-overflow: ellipsis; white-space: nowrap; line-height: 14px;">天猫</div></div><div view-name="DLinearLayout" aria-label="聚划算" style="display: flex; overflow: hidden; width: 61px; height: 67px; margin-left: 83.5px; margin-top: 13px; -webkit-box-orient: vertical; flex-direction: column; top: 0px; left: 0px; position: absolute;"><div view-name="HGifView" style="display: flex; overflow: hidden; width: 61px; height: 48px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp&quot;);"></div></div><div view-name="DTextView" style="display: inline-block; overflow: hidden; font-size: 11px; height: auto; margin-top: 5px; text-align: center; color: rgb(102, 102, 102); width: 61px; text-overflow: ellipsis; white-space: nowrap; line-height: 14px;">聚划算</div></div><div view-name="DLinearLayout" aria-label="天猫国际" style="display: flex; overflow: hidden; width: 61px; height: 67px; margin-left: 157px; margin-top: 13px; -webkit-box-orient: vertical; flex-direction: column; top: 0px; left: 0px; position: absolute;"><div view-name="HGifView" style="display: flex; overflow: hidden; width: 61px; height: 48px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://gw.alicdn.com/tfs/TB11rTqtj7nBKNjSZLeXXbxCFXa-183-144.png?getAvatar=1_.webp&quot;);"></div></div><div view-name="DTextView" style="display: inline-block; overflow: hidden; font-size: 11px; height: auto; margin-top: 5px; text-align: center; color: rgb(102, 102, 102); width: 61px; text-overflow: ellipsis; white-space: nowrap; line-height: 14px;">天猫国际</div></div><div view-name="DLinearLayout" aria-label="外卖" style="display: flex; overflow: hidden; width: 61px; height: 67px; margin-left: 230.5px; margin-top: 13px; -webkit-box-orient: vertical; flex-direction: column; top: 0px; left: 0px; position: absolute;"><div view-name="HGifView" style="display: flex; overflow: hidden; width: 61px; height: 48px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://gw.alicdn.com/tps/TB1eXc7PFXXXXb4XpXXXXXXXXXX-183-144.png?getAvatar=1_.webp&quot;);"></div></div><div view-name="DTextView" style="display: inline-block; overflow: hidden; font-size: 11px; height: auto; margin-top: 5px; text-align: center; color: rgb(102, 102, 102); width: 61px; text-overflow: ellipsis; white-space: nowrap; line-height: 14px;">外卖</div></div><div view-name="DLinearLayout" aria-label="天猫超市" style="display: flex; overflow: hidden; width: 61px; height: 67px; margin-left: 304px; margin-top: 13px; -webkit-box-orient: vertical; flex-direction: column; top: 0px; left: 0px; position: absolute;"><div view-name="HGifView" style="display: flex; overflow: hidden; width: 61px; height: 48px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1IKqDtpooBKNjSZFPXXXa2XXa-183-144.png_.webp&quot;);"></div></div><div view-name="DTextView" style="display: inline-block; overflow: hidden; font-size: 11px; height: auto; margin-top: 5px; text-align: center; color: rgb(102, 102, 102); width: 61px; text-overflow: ellipsis; white-space: nowrap; line-height: 14px;">天猫超市</div></div><div view-name="DLinearLayout" aria-label="充值中心" style="display: flex; overflow: hidden; width: 61px; height: 67px; margin-left: 10px; margin-top: 84px; -webkit-box-orient: vertical; flex-direction: column; top: 0px; left: 0px; position: absolute;"><div view-name="HGifView" style="display: flex; overflow: hidden; width: 61px; height: 48px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp&quot;);"></div></div><div view-name="DTextView" style="display: inline-block; overflow: hidden; font-size: 11px; height: auto; margin-top: 5px; text-align: center; color: rgb(102, 102, 102); width: 61px; text-overflow: ellipsis; white-space: nowrap; line-height: 14px;">充值中心</div></div><div view-name="DLinearLayout" aria-label="飞猪旅行" style="display: flex; overflow: hidden; width: 61px; height: 67px; margin-left: 83.5px; margin-top: 84px; -webkit-box-orient: vertical; flex-direction: column; top: 0px; left: 0px; position: absolute;"><div view-name="HGifView" style="display: flex; overflow: hidden; width: 61px; height: 48px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://gw.alicdn.com/tfs/TB15nKhtpkoBKNjSZFEXXbrEVXa-183-144.png?getAvatar=1_.webp&quot;);"></div></div><div view-name="DTextView" style="display: inline-block; overflow: hidden; font-size: 11px; height: auto; margin-top: 5px; text-align: center; color: rgb(102, 102, 102); width: 61px; text-overflow: ellipsis; white-space: nowrap; line-height: 14px;">飞猪旅行</div></div><div view-name="DLinearLayout" aria-label="领金币" style="display: flex; overflow: hidden; width: 61px; height: 67px; margin-left: 157px; margin-top: 84px; -webkit-box-orient: vertical; flex-direction: column; top: 0px; left: 0px; position: absolute;"><div view-name="HGifView" style="display: flex; overflow: hidden; width: 61px; height: 48px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1BqystrZnBKNjSZFrXXaRLFXa-183-144.png?getAvatar=1_.webp&quot;);"></div></div><div view-name="DTextView" style="display: inline-block; overflow: hidden; font-size: 11px; height: auto; margin-top: 5px; text-align: center; color: rgb(102, 102, 102); width: 61px; text-overflow: ellipsis; white-space: nowrap; line-height: 14px;">领金币</div></div><div view-name="DLinearLayout" aria-label="拍卖" style="display: flex; overflow: hidden; width: 61px; height: 67px; margin-left: 230.5px; margin-top: 84px; -webkit-box-orient: vertical; flex-direction: column; top: 0px; left: 0px; position: absolute;"><div view-name="HGifView" style="display: flex; overflow: hidden; width: 61px; height: 48px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1CMf4tlnTBKNjSZPfXXbf1XXa-183-144.png?getAvatar=1_.webp&quot;);"></div></div><div view-name="DTextView" style="display: inline-block; overflow: hidden; font-size: 11px; height: auto; margin-top: 5px; text-align: center; color: rgb(102, 102, 102); width: 61px; text-overflow: ellipsis; white-space: nowrap; line-height: 14px;">拍卖</div></div><div view-name="DLinearLayout" aria-label="分类" style="display: flex; overflow: hidden; width: 61px; height: 67px; margin-left: 304px; margin-top: 84px; -webkit-box-orient: vertical; flex-direction: column; top: 0px; left: 0px; position: absolute;"><div view-name="HGifView" style="display: flex; overflow: hidden; width: 61px; height: 48px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://gw.alicdn.com/tfs/TB18P98tyQnBKNjSZFmXXcApVXa-183-144.png?getAvatar=1_.webp&quot;);"></div></div><div view-name="DTextView" style="display: inline-block; overflow: hidden; font-size: 11px; height: auto; margin-top: 5px; text-align: center; color: rgb(102, 102, 102); width: 61px; text-overflow: ellipsis; white-space: nowrap; line-height: 14px;">分类</div></div></div></div>',
    // 2 对象数组
    htmlArr:[
      {
        // 1 div标签 name属性来指定
        name:"div",
        // 2 标签上有哪些属性
        attrs:{
          // 标签上的属性 class  style
          class:"my_div",
          style:"color:red;"
        },
        // 3 子节点 children 要接收的数据类型和 nodes第二种渲染方式的数据类型一致 
        children:[
          {
            name:"p",
            attrs:{},
            // 放文本
            children:[
              {
                type:"text",
                text:"hello"
              }
            ]
          }
        ]
      }
		],
		gender: "",
		checkboxList:[
      {
        id:0,
        name:"🍎",
        value:"apple"
      },
      {
        id:1,
        name:"🍇",
        value:"grape"
      },
      {
        id:2,
        name:"🍌",
        value:"bananer"
      }
    ],
    checkedList:[]
  },
	/**
	* @Description：生命周期函数--监听页面加载，页面创建时执行
	* @param options	
	 */
	onLoad : function(options) {},
	/**
	* @Description：生命周期函数--监听页面显示，页面出现在前台时执行
	 */
	onShow : function() {
		// 
	},
	/**
	* @Description：生命周期函数--监听页面初次渲染完成，页面首次渲染完毕时执行
	 */
	onReady : function() {
		// 
	},
	/**
	* @Description：生命周期函数--监听页面隐藏，页面从前台变为后台时执行
	 */
	onHide : function() {
		// 
	},
	/**
	* @Description：生命周期函数--监听页面卸载，页面销毁时执行
	 */
	onUnload : function() {
		// 
	},
	/**
	* @Description：页面相关事件处理函数--监听用户下拉动作，触发下拉刷新时执行
	 */
	onPullDownRefresh : function() {
		// 
	},
	/**
	* @Description：页面上拉触底事件的处理函数，页面触底时执行
	 */
	onReachBottom : function() {
		// 
	},
	/**
	* @Description：页面被用户分享时执行（用户点击右上角分享）
	 */
	onShareAppMessage : function() {
		// 
	},
	/**
	* @Description：
	 */
	onPageScroll : function() {
		// 页面滚动时执行
	},
	/**
	* @Description：页面尺寸变化时执行
	 */
	onResize : function() {
		// 
	},
	/**
	* @Description：点击tab时执行
	 */
	onTabItemTap (item) {
		console.log(item.index)
		console.log(item.pagePath)
		console.log(item.text)
	},
	/**
	* @Description：事件响应函数
	 */
	viewTap : function() {
		this.setData({
			text : 'Set some data for updating view.'
		}, function() {
			// this is setData callback
		})
	},
	/**
	* @Description：自由数据
	 */
	customData : {
		hi : 'MINA'
  },
    // 获取用户的手机号码信息
    getPhoneNumber(e){
      console.log(e);
    },
    // 获取用户个人信息
    getUserInfo(e){
      console.log(e);
		},
		// 单选框的选中修改事件
		handleRadioChange(e){
			// 1 获取单选框中的值
			let gender=e.detail.value;
			// 2 把值 赋值给 data中的数据
			this.setData({
				// gender:gender
				gender
			})
		},
		// 复选框的选中修改事件
		handleItemChange(e){
			// 1 获取被选中的复选框的值
			const checkedList=e.detail.value;
			// 2 进行赋值
			this.setData({
				checkedList
			})
		}
})