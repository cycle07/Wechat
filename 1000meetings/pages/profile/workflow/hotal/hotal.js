var obj_select = {};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
  },
  formSubmit: function (res) {
    if (res.detail.value.gender == '') {
      wx.showModal({
        title: '提示',
        content: '请选择酒店',
        showCancel: false,
      })
      return;
    }
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    });
    obj_select.hotal = res.detail.value.gender;
    wx.navigateTo({
      url: '../request/request?myid=' + obj_select.hotal
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      arr:wx.getStorageSync("localFavour"),
    });
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