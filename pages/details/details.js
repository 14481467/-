// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowToast: false,
    duanziList: [],
    duanziList2: [],
    // imgUrl: 'http://img.weiye.me/zcimgdir',
    sum: 1,
    color: '#626262',
    color2: '#626262',
    myheight:0,
    SPname: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'http://localhost:1212/details',
      // url: 'http://2123e17n14.iok.la:11939/details',
      data: {
        id: options.id
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          duanziList: res.data.texts[0],
          duanziList2: res.data.image[0]
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // setTimeout(function () {
    wx.hideLoading()
    // }, 500)

    for(let i=3;i<=5;i++){
      if ("this.data.duanziList2.img"+i == null) {
        var bgColor = this.data.myheight == 0
      }
      this.setData({
        myheight: bgColor
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  joinShopCar: function() {
    let that = this
    that.setData({
      SPname: "加入购物车",
      isShowToast: true,
      
    })
  },
  shop:function(){
    let that = this
    that.setData({
      SPname: "立即购买",
      isShowToast: true,
    })
  },
  myclose: function() {
    this.setData({
      isShowToast: false,
    })
  },
  subtractCat: function() {
    var bgColor = this.data.color == '#f5a623' ? '#626262' : '#f5a623';
    this.setData({
      isShowToast: false,
      color: bgColor
    })
  },

  mysubtract: function() {
    console.log(111)
    let newSum = this.data.sum
    newSum -= 1
    if (newSum == 0) {
      newSum = 1
    }
    this.setData({
      sum: newSum
    });

  },
  myadd: function() {
    let newSum = this.data.sum
    newSum += 1
    this.setData({
      sum: newSum
    });
  },
  collect: function() {
    let color = this.data.color2 == '#f5a623' ? '#626262' : '#f5a623'
    this.setData({
      color2: color
    })
    wx.showToast({
      title: '收藏成功',
      image: '../../images/小花.png',
      // image: '../../images/1.jpg',
      duration: 1500
    })
  }
})