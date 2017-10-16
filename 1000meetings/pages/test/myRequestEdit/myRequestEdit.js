var obj_select = {};
var util = require('../../../utils/util.js');
var subA_switchs = false;
var subB_switchs = false;
var subC_switchs = false;
var dateS = "";
var dateE = "";
var dateGape = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateStart: "",
    dateEnd: "",
    subA_stats: false,
    subB_stats: false,
    subC_stats: false,
  },
  bindDateChangeStart: function (e) {
    dateS = e.detail.value;
    var arr1 = dateS.split("-");
    var arr2 = dateE.split("-");
    var oDate1 = new Date(arr1[1] + '-' + arr1[2] + '-' + arr1[0]);
    var oDate2 = new Date(arr2[1] + '-' + arr2[2] + '-' + arr2[0]);
    var iDays = parseInt((oDate2 - oDate1) / 1000 / 60 / 60 / 24);
    if (iDays < 0) {
      wx.showModal({
        title: '提示',
        content: '结束日期必须晚于开始日期'
      })
      return;
    }
    dateGape = iDays;
    this.setData({
      dateStart: e.detail.value
    })
  },
  bindDateChangeEnd: function (e) {
    dateE = e.detail.value;
    var arr1 = dateS.split("-");
    var arr2 = dateE.split("-");
    var oDate1 = new Date(arr1[1] + '-' + arr1[2] + '-' + arr1[0]);
    var oDate2 = new Date(arr2[1] + '-' + arr2[2] + '-' + arr2[0]);
    var iDays = parseInt((oDate2 - oDate1) / 1000 / 60 / 60 / 24);
    if (iDays < 0) {
      wx.showModal({
        title: '提示',
        content: '结束日期必须晚于开始日期'
      })
      return;
    }
    dateGape = iDays;
    this.setData({
      dateEnd: e.detail.value
    })
  },
  fnOpenA: function (res) {
    if (subA_switchs) {
      subA_switchs = false;
      this.setData({  //动态设置变量
        subA_stats: false
      })
    } else {
      subA_switchs = true;
      this.setData({  //动态设置变量
        subA_stats: true
      })
    }

  },
  fnOpenB: function () {
    if (subB_switchs) {
      subB_switchs = false;
      this.setData({  //动态设置变量
        subB_stats: false
      })
    } else {
      subB_switchs = true;
      this.setData({  //动态设置变量
        subB_stats: true
      })
    }

  },
  fnOpenC: function () {

    if (subC_switchs) {
      subC_switchs = false;
      this.setData({  //动态设置变量
        subC_stats: false
      })
    } else {
      subC_switchs = true;
      this.setData({  //动态设置变量
        subC_stats: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dataAll = wx.getStorageSync("localRequest");
    var dataHotal = wx.getStorageSync("localFavour");
    var data = dataAll[options.myid];
    this.setData({
      arr:data,
      arrHotal: dataHotal
    })
    wx.setNavigationBarTitle({ //设置标题显示为数组标题
      title: this.data.arr.request.hotal,
      success: function (res) {
        // success
      }
    })


    var time = util.formatTimeDate(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    dateE = time;
    dateS = time;
    this.setData({
      dateStart: time,
      dateEnd: time
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