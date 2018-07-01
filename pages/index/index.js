//index.js
//获取应用实例
// const app = getApp()

Page({
  data: {
    duration: true,
    imgUrls: [
      'https://goss.veer.com/creative/vcg/veer/800water/veer-134720766.jpg',
      'https://goss.veer.com/creative/vcg/veer/800water/veer-133514901.jpg'
    ],
    img1: 'http://img.weiye.me/zcimgdir/album/file_58c27d0bc9c80.png',
    img2: 'http://img.weiye.me/zcimgdir/album/file_58c27d0bbb93c.png',
    img3: 'http://img.weiye.me/zcimgdir/album/file_58c280543eaa7.png',
    img4: 'http://img.zhichiwangluo.com/zcimgdir/album/file_5aa73b316f212.png',
    img5: 'http://img.zhichiwangluo.com/zcimgdir/album/file_5aa73c534159b.png',
    img6: 'http://img.zhichiwangluo.com/zcimgdir/album/file_5aa7711e104cd.png',
    img7: 'http://img.zhichiwangluo.com/zcimgdir/album/file_5aa76fcc5712d.png',
    img8: 'http://img.zhichiwangluo.com/zcimgdir/album/file_5aa748b309053.png',
    img9: 'http://img.zhichiwangluo.com/zcimgdir/album/file_5aa73c534159b.png',
    img10: 'http://img.zhichiwangluo.com/zcimgdir/album/file_5aa7703ba494d.png',
    img11: 'http://img.zhichiwangluo.com/zcimgdir/album/file_5aa76fcc5712d.png',
  },
  onLoad: function (options) {
    setTimeout(function () {
      wx.hideLoading()
    }, 500)
  },
  // myabc:function(){
  //   wx.navigateTo({
  //     url: '../details/details?id=1'
  //   })
  // }
 
})