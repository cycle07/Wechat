var obj = require("../../../data/list.js").list_hotal

Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    notify:false
  },
  onTap: function (res) {
    var item = res.currentTarget.dataset.item;
    var id = item.id;
    wx.navigateTo({
      url: '../../logs/detail/detail?myid=' + id
    })
    // var that=this;
    // wx.showModal({
    //   title: '提示',
    //   content: '确定要取消收藏吗？',
    //   success: function (sm) {
    //     if (sm.confirm) {
    //       var data = wx.getStorageSync("localFavour");
    //       for(var i=0;i<data.length;i++){
    //         if (data[i].hotalName == item.title){
    //           data.splice(i,1);
    //           wx.setStorageSync("localFavour", data);
    //           console.log(data);
    //           that.setData({  //动态设置变量
    //             arr: data,
    //           })
    //           that.checkNull();
    //         }
    //       }
    //     } else if (sm.cancel) {
          
    //     }
    //   }
    // })
  },

  checkNull:function(){
    var that=this;
    if(this.data.arr.length==0){
      that.setData({  //动态设置变量
        notify: true,
      })
    }else{
      that.setData({  //动态设置变量
        notify: false,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = wx.getStorageSync("localFavour");
    for(var i = 0; i < data.length; i++) {
      for (var j = 0; j < obj.length;j++){
        if (data[i].hotalName == obj[j].title) {
          var obj2 = obj[j];
          var arrTem=this.data.arr;
          arrTem.push(obj2);
          this.setData({  //动态设置变量
            arr: arrTem,
          })
        }
      }
    }
    this.checkNull();
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