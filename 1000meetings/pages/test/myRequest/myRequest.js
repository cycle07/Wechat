// pages/test/myRequest/myRequest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  fnEide: function (res) {
    var index = res.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../myRequestEdit/myRequestEdit?myid=' + index
    })
  },
  fnDel: function (res) {
    var index = res.currentTarget.dataset.index;
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要取消这次预约吗？',
      success: function (sm) {
        if (sm.confirm) {
          var data = wx.getStorageSync("localRequest");
            data.splice(index, 1);
            wx.setStorageSync("localRequest", data);
            that.setData({  //动态设置变量
              arr: data,
            })
            that.checkNull();
        } else if (sm.cancel) {

        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = wx.getStorageSync("localRequest");
    this.setData({  //动态设置变量
      arr: data,
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