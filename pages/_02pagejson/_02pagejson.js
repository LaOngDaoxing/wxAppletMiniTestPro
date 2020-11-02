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
	data : {
		text : "This is page data.",
		message : 'Hello MINA!',
		array : [ 1, 2, 3, 4, 5 ],
		view : 'MINA',
		list : '',
		word : ''
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
	}
})