// pages/logs/logs.js
var obj = require("../../data/list.js").list_hotal;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr:obj , //这货是对象
    arrHotal_Length: require("../../data/list.js").list_hotal.length,
    arr_city: require("../../data/list.js").list_city,
    default_selector: '点击选择城市',
    default_selectorL2: '',
    cityStats:0,
    cityL2Stats: 0,
    arr_cityL2:[]
  },
  onTap: function (res) {
    var id = res.currentTarget.dataset.id;
    wx.navigateTo({
        url: 'detail/detail?myid=' + id
    })
  },
  cityStart:function(){
    this.setData({  //动态设置变量
      cityStats:1
    }) 
  },
  citySelected: function (res) {
    var index = res.currentTarget.dataset.index;
    this.setData({  //动态设置变量
      cityL2Stats:1,
      arr_cityL2: require("../../data/list.js").list_city[index].cityL1Sub,
      default_selector: require("../../data/list.js").list_city[index].cityL1Name,
      default_selectorL2:""
    });
  },
  cityL2Selected: function (res) {
    var index = res.currentTarget.dataset.index;
    var val = res.currentTarget.dataset.val.cityL2Name;
    this.setData({  //动态设置变量
      default_selectorL2: val,
      cityStats: 0,
      cityL2Stats: 0,
    });
    var temp_arr=[];
    for(var i=0;i<obj.length;i++){
      if (obj[i].city_level2 == val){
        temp_arr.push(obj[i])
      }
    }
    this.setData({  //动态设置变量
      arr: temp_arr,
    });
  },
  cityCancel:function(){
    this.setData({  //动态设置变量
      cityStats: 0,
      cityL2Stats: 0,
      arr:obj
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.myid;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
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