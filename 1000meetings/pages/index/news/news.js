// pages/index/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: require("../../../data/list.js").list_news
  },
  onTap: function (res) {
    var id = res.currentTarget.dataset.id;
    var objIndex = {};
    objIndex.id = id;
    objIndex.type = "news";
    var SendIndex = JSON.stringify(objIndex);
    wx.navigateTo({
      url: '../detail/detail?myid=' + SendIndex
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中..',
      icon: 'loading',
      duration: 1000
    })
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