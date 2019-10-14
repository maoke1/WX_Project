// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    my_Array: [{
        iconurl: "../../image/my3.png",
        text: "地址管理"
      },
      {
        iconurl: "../../image/my4.png",
        text: "我的小区"
      },
      {
        iconurl: "../../image/my5.png",
        text: "联系客服"
      },
      {
        iconurl: "../../image/my6.png",
        text: "邀请好友"
      },
      {
        iconurl: "../../image/my7.png",
        text: "上报小区"
      },
      {
        iconurl: "../../image/my8.png",
        text: "下载海报"
      },
      {
        iconurl: "../../image/my9.png",
        text: "关于我们"
      },
      {
        iconurl: "../../image/my10.png",
        text: "小程序码"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
    // wx.login({
    //   success(res) {
    //     // console.log(res);
    //     if (res.code) {
    //       // 获取用户信息
    //       wx.getUserInfo({
    //         success(res) {
    //           console.log("res", res);
    //           _this.setData(res.userInfo);
    //         }
    //       })
    //     } else {
    //       console.log("登录失败" + res.errMsg);
    //     }
    //   }
    // })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
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