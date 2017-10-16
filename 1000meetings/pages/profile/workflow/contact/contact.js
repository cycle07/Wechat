// pages/profile/workflow/contact/contact.js
var util = require('../../../../utils/util.js');
var arrTotal = [];
var inform4 = {};
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  fnBack: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    });
    arrTotal = [];
    this.setData({
      listData: []
    });
    wx.navigateTo({
      url: '../arrange/arrange'
    })
  },
  formSubmit: function (res) {
    var tempFormData = res.detail.value;
    if (!util.numJudgment(tempFormData.mobile) || !util.numJudgment(tempFormData.telephone)) {
      wx.showModal({
        title: '提示',
        content: '联系号码必须为数字'
      })
      return;
    };
    if (!util.mailJudgment(tempFormData.mail)) {
      wx.showModal({
        title: '提示',
        content: '邮箱格式错误'
      })
      return;
    };
    if (!(tempFormData.FirstName) && !(tempFormData.LastName) && !(tempFormData.company) && !(tempFormData.mail) && !(tempFormData.telephone) ) {
      wx.showModal({
        title: '提示',
        content: '(*)项必须填写'
      })
      return;
    };
  
    wx.showToast({
      title: '需求已受理！',
      icon: 'success',
      duration: 1000
    });
    var informStep4={};
    informStep4.arrange = inform4.arrange;
    informStep4.request = inform4.request;
    informStep4.contact = tempFormData;
    console.log(informStep4);
    var arrTem;
    var data = wx.getStorageSync("localRequest");
    data?arrTem=data:arrTem=[];
    arrTem.push(informStep4);
    wx.setStorageSync("localRequest", arrTem);
    wx.reLaunch({
      url: '../../../test/test'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var item = JSON.parse(options.myid);
    inform4 = item;
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