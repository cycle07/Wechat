// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr_news: require("../../data/list.js").list_news,
    arr_spOffer: require("../../data/list.js").list_spOffer  
  },
  onTap: function (res) {
    var type = res.currentTarget.dataset.type;
    var id = res.currentTarget.dataset.id;
    var objIndex={};
    objIndex.id=id;
    objIndex.type=type;
    var SendIndex = JSON.stringify(objIndex);
    wx.navigateTo({
      url: './detail/detail?myid=' + SendIndex
    })
  },
  onTapNewsDetail:function(){
    wx.navigateTo({
      url: 'news/news'
    })
  },
  onTapSpDetail:function(){
    wx.navigateTo({
      url: 'spOffer/spOffer'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.myid
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
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    })
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