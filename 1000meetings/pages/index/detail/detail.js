// pages/logs/detail/detail.js
var obj = require("../../../data/list.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnStats:true
  },
  onTap: function () {
    var data = wx.getStorageSync("localFavour");
    var id = this.data.postid;
    if(data.length!=0){
      for (var i = 0; i < data.length; i++) {
        if (data[i].hotalName == this.data.hotalNameTemp) {
          console.log("A");
          data.splice(i, 1);
          this.setData({  //动态设置变量
            clicked: false
          });
          wx.showToast({  //弹窗
            title: '取消收藏',
            icon: 'success',
            duration: 2000
          });
          wx.setStorageSync("localFavour", data);
          return;
        }
      }
    }
    var objtem = {};
    objtem.hotalName = this.data.hotalNameTemp;
    data.push(objtem);
    this.setData({  //动态设置变量
      clicked: true
    })
    wx.showToast({  //弹窗
      title: '收藏成功',
      icon: 'success',
      duration: 2000
    })
    wx.setStorageSync("localFavour", data);
    

    
    //1.this.data.clicked=bool 
    //2.更新视图中的clicked
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
    var item = JSON.parse(options.myid);
    var id = item.id;
    if (item.type == "news") {
      this.setData({
        hotalNameTemp:obj.list_news[id].hotalName,
        btnStats:false,
        list:obj.list_news[id],
        postid: id  //把ID存下来，方便作用域外点击事件使用
      });
    } else if (item.type == "spOffer") {
      this.setData({
        hotalNameTemp:obj.list_spOffer[id].hotalName,
        btnStats: true,
        list: obj.list_spOffer[id],
        postid: id,  //把ID存下来，方便作用域外点击事件使用
      });
    }
    // var clicked = {
    //   0: true,
    //   1: false,
    //   2: true,
    //   4: true
    // }

    wx.setNavigationBarTitle({ //设置标题显示为数组标题
      title: this.data.list.title,
      success: function (res) {
        // success
      }
    })

    var data = wx.getStorageSync("localFavour");
    if (data) { //如果缓存存在
      for (var i = 0; i < data.length; i++) {
        if (data[i].hotalName == this.data.hotalNameTemp) {
          this.setData({  //动态设置变量
            clicked: true,
          })
          return;
        }
      }
      this.setData({  //动态设置变量
        clicked: false
      })
    } else {  //如果缓存不存在
      var data = [];
      wx.setStorageSync("localFavour", data);
    };
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