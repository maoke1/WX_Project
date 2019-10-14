// pages/car/car.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    images: [
      '../../image/meitu1.jpg',
      '../../image/meitu4.jpg',
      '../../image/meitu5.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    carshop: [{
        goodsId:"a001",
        goodsImgUrl: "../../image/sp1.jpg",
        goodsTitle: '中国移动手机话费充值10元',
        goodsPrice: "10.0",
      },
      {
        goodsId: "a002",
        goodsImgUrl: "../../image/sp2.jpg",
        goodsTitle: '绿联iPhone6苹果数据线-苹果MFi认证',
        goodsPrice: "15.0",
      },
      {
        goodsId: "a003",
        goodsImgUrl: "../../image/sp3.jpg",
        goodsTitle: '10包纸巾抽纸整箱餐巾纸实惠装',
        goodsPrice: "5.0",
      },
      {
        goodsId: "a004",
        goodsImgUrl: "../../image/sp4.jpg",
        goodsTitle: '中国联通手机话费充值10元',
        goodsPrice: "9.0",
      },
      {
        goodsId: "a005",
        goodsImgUrl: "../../image/sp5.jpg",
        goodsTitle: '绿联type-c数据线5a超级快充通用华为',
        goodsPrice: "20.0",
      },
      {
        goodsId: "a006",
        goodsImgUrl: "../../image/sp6.jpg",
        goodsTitle: '车载皮皮猴挂式纸巾盒汽车屁屁猴卡通',
        goodsPrice: "25.0",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   
   
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
  // goPage(e) {
  //   var goodsid = e.currentTarget.dataset.goodsid;
  //   console.log("car===goodsid===", goodsid);
  //   //e: 事件对象
  //   wx.navigateTo({
  //     url: '../../pages/details/details?goodsId=' + goodsid
  //   })
   
  // }
})