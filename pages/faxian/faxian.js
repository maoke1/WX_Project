// pages/faxian/faxian.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    currentTab: 0,
    winWindth: 0,
    winHeight: 0,
    faxian: [
      {
        img: "../../image/fx1.jpg",
        title: "上海生活垃圾管理条例实施首月报告...",
      },
      {
        img: "../../image/fx2.jpg",
        title: "上海开始垃圾分类后，日本展开了热烈讨论...",
      },
      {
        img: "../../image/fx3.jpg",
        title: "湿垃圾中翻出熟料带和小箱子...",
      },
      {
        img: "../../image/fx4.jpg",
        title: "上海市生活垃圾全程分类体系...",
      }
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var page = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        page.setData({
          winWindth: res.windowWidth
        });
        page.setData({
          winHeight: res.windowHeight
        });
      }
    })
  },
  switchNav: function(e) {
    var id = e.currentTarget.id;
    this.setData({
      currentTab: id
    })
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

  }
})