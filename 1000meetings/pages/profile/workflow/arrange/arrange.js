// pages/profile/workflow/arrange/arrange.js
var util = require('../../../../utils/util.js');
var arrTotal = [];
var inform2={};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp:"",
    listData: []
  },

  fnSelectHall: function (res) {
    var index = res.currentTarget.dataset.index;
    var index2 = res.currentTarget.dataset.indexz;
    var boolean = arrTotal[index].HallData[index2].stats;
    arrTotal[index].HallData[index2].stats=!boolean;
    this.setData({
      listData: arrTotal
    });
  },

  fnSelectDouble: function (res) {
    var index = res.currentTarget.dataset.index;
    arrTotal[index].listRequestRoomDouble == 0 ? arrTotal[index].listRequestRoomDouble = 1 : arrTotal[index].listRequestRoomDouble = 0;
    this.setData({
      listData: arrTotal
    });
  },

  fnSelectSingle: function (res) {
    var index = res.currentTarget.dataset.index;
    arrTotal[index].listRequestRoomSingle == 0 ? arrTotal[index].listRequestRoomSingle = 1 : arrTotal[index].listRequestRoomSingle = 0;
    this.setData({
      listData: arrTotal
    });
  },

  fnBack: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    });
    arrTotal=[];
    this.setData({
      listData: []
    });
    wx.navigateTo({
      url: '../request/request'
    })
  },

  formSubmit: function (res) {
    var tempFormData = res.detail.value;
    for (var key in tempFormData) {  //for in取键的值的时候不能用点语法，要用[]语法；
      if (key.split("+")[1] == "DoubleNum" || key.split("+")[1] == "SingleNum") {
        if (!util.numJudgment(tempFormData[key])) {
          wx.showModal({
            title: '提示',
            content: '房间数必须为数字'
          })
          return;
        };
      }
    }
    var informStep3={};
    informStep3.arrange = tempFormData;
    informStep3.request=inform2;
    var SendStep3 = JSON.stringify(informStep3);
    wx.navigateTo({
      url: '../contact/contact?myid=' + SendStep3
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var item = JSON.parse(options.myid);
    inform2=item;

    function addHall(obj2) {
      obj2.HallData=[];
      if (item.hall) {
        if (item.hall_num) {
          for (var j = 0; j < item.hall_num; j++) {
            var obj3={};
            obj3.hallName = "会议厅" + (j + 1);
            obj3.stats = true;
            obj2.HallData.push(obj3);
          }
        } else {
          var obj3 = {};
          obj3.hallName = "会议厅";
          obj3.stats = false;
          obj2.HallData.push(obj3);
        }
      }
      return obj2;
    };

    function addRoom(obj2) {
      if (item.acco) {
        if (item.accoDouble_num) {
          obj2.listRequestRoomDouble=item.accoDouble_num;
        } else {
          obj2.listRequestRoomDouble=0;
        }
        if (item.accoSingle_num) {
          obj2.listRequestRoomSingle=item.accoSingle_num;
        } else {
          obj2.listRequestRoomSingle=0;
        }
      }
      return obj2;
    };

    function getDate(datestr) {
      var temp = datestr.split("-");
      var date = new Date(temp[0], temp[1], temp[2]);
      return date;
    }
    var oDate1 = getDate(item.DateStart); 
    
    for (var i = 0; i <=item.DateGape;i++){
      var arrWeek = ["Friday", "Saturday","Sunday", "Monday", "Tuesday","Wednesday","Thursday"]
      var obj={};
      
      obj.dayNum=i+1;

      var year = oDate1.getFullYear();
      var month = oDate1.getMonth().toString().length == 1 ? "0" + oDate1.getMonth().toString() : oDate1.getMonth();
      var day = oDate1.getDate().toString().length == 1 ? "0" + oDate1.getDate() : oDate1.getDate();
      obj.dayDate=year + "-" + month + "-" + day;
      obj.dayWeek = arrWeek[oDate1.getDay()];
      oDate1.setDate(oDate1.getDate() + 1);

      addHall(obj);
      addRoom(obj);

      arrTotal.push(obj);
    }


    this.setData({
      listData:arrTotal
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