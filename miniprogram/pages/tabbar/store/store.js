// pages/tabbar/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    navList:[
      {text:"首页"},
      {text:"动画"},
      {text:"番剧"},
      {text:"国创"},
      {text:"音乐"},
      {text:"舞蹈"},
      {text:"科技"},
      {text:"游戏"},
      {text:"娱乐"},
      {text:"鬼畜"},
      {text:"电影"},
      {text:"电视剧"},
      {text:"纪录片"},
      {text:"影视"},
      {text:"时尚"},
      {text:"生活"},
      {text:"广告"},
      {text:"直播"},
      {text:"相簿"},
    ]
  },


  // 点击首页导航按钮
  activeNav(e){
    console.log(e.target.dataset.index)
    this.setData({
      currentIndex:e.target.dataset.index
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