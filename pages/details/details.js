// pages/details/details.js
const app = getApp()
// 页面注册
Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    indicatorDots: true,
    autoplay: true,
    circular: true,
    Info: {},
    shopcartCount: "0",
    shopList: [{
        goodsId: "a001",
        title: '中国移动手机话费充值10元',
        price: "9.0",
        goodsOldPrice: "10.0",
        img: "../../image/sp1.jpg",
        detailsImgs: ["../../image/sp1.jpg", "../../image/sp1.jpg", "../../image/sp1.jpg"],
        yuexiao: "2000",
        description: "【充值时间】本商品一般48个工作日内完成充值（运营商维护除外）【到账时间】48个工作日内，遇到月初月未高峰期会有些许延迟，当遇不可抗力造成延时或者其它情况（如当地运营商维护，升级，充值平台异常，停机状态），也请亲多多包涵详细到账时间以当地运营商查询为准，到账后会后运营商发来的到账短信。（如遇运营商系统忙或手机已欠费停机会没有短信通知）【充值号码】拍下宝贝时请认真仔细的填写所要充值的手机号码，如因错填号码而导致的损失均有买家负责（为保障您的合法利益，请慎重填写充值号码）【温馨提示】1：购买前请查询充值号码话费余额，若已欠费停机请查询话费欠费金额，以免充值金额不足导致您不能正常使用造成误会。2：购买时，请准确填写需要充值的手机号码，一旦充值成功，本店不提供退换服务。"
      },
      {
        goodsId: "a002",
        title: '绿联iPhone6苹果数据线-苹果MFi认证',
        price: "15.0",
        goodsOldPrice: "20",
        yuexiao: "5000",
        img: "../../image/sp2.jpg",
        detailsImgs: ["../../image/sp2.jpg", "../../image/sp2.jpg"],
        description: '绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证绿联iPhone6苹果数据线-苹果MFi认证'
      },
      {
        goodsId: "a003",
        title: '10包纸巾抽纸整箱餐巾纸实惠装',
        price: "5.0",
        goodsOldPrice: "8",
        yuexiao: "9000",
        img: "../../image/sp3.jpg",
        detailsImgs: ["../../image/sp3.jpg", "../../image/sp3.jpg", "../../image/sp3.jpg"],
        description: '10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装10包纸巾抽纸整箱餐巾纸实惠装'
      },
      {
        goodsId: "a004",
        title: '中国联通手机话费充值10元',
        price: "9.0",
        goodsOldPrice: "10.0",
        yuexiao: "10000",
        img: "../../image/sp4.jpg",
        detailsImgs: ["../../image/sp4.jpg", "../../image/sp4.jpg"],
        description: '【充值时间】本商品一般48个工作日内完成充值（运营商维护除外）【到账时间】48个工作日内，遇到月初月未高峰期会有些许延迟，当遇不可抗力造成延时或者其它情况（如当地运营商维护，升级，充值平台异常，停机状态），也请亲多多包涵详细到账时间以当地运营商查询为准，到账后会后运营商发来的到账短信。（如遇运营商系统忙或手机已欠费停机会没有短信通知）【充值号码】拍下宝贝时请认真仔细的填写所要充值的手机号码，如因错填号码而导致的损失均有买家负责（为保障您的合法利益，请慎重填写充值号码）【温馨提示】1：购买前请查询充值号码话费余额，若已欠费停机请查询话费欠费金额，以免充值金额不足导致您不能正常使用造成误会。2：购买时，请准确填写需要充值的手机号码，一旦充值成功，本店不提供退换服务。'
      },
      {
        goodsId: "a005",
        title: '绿联type-c数据线5a超级快充通用华为',
        price: "20.0",
        goodsOldPrice: "39",
        yuexiao: "6000",
        img: "../../image/sp5.jpg",
        detailsImgs: ["../../image/sp5.jpg", "../../image/sp5.jpg", "../../image/sp5.jpg"],
        description: '绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为绿联type-c数据线5a超级快充通用华为'
      },
      {
        goodsId: "a006",
        title: '车载皮皮猴挂式纸巾盒汽车屁屁猴卡通',
        price: "25.0",
        goodsOldPrice: "29",
        yuexiao: "8000",
        img: "../../image/sp6.jpg",
        detailsImgs: ["../../image/sp6.jpg", "../../image/sp6.jpg"],
        description: '车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通车载皮皮猴挂式纸巾盒汽车屁屁猴卡通'
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var num = wx.getStorageSync('shopcartList');
    num = !num ? [] : num;
    this.setData({
      shopcartCount: num.length
    })


    //参数都保存在 options
    let dtainfo = {}
    var goodsId = options.goodsId;
    // console.log("goodsId", goodsId);

    for (var i = 0; i < this.data.shopList.length; i++) {
      if (this.data.shopList[i].goodsId == goodsId) {
        dtainfo = this.data.shopList[i];
        // console.log('1223', dtainfo);
        this.setData({
          Info: dtainfo
        })
        // console.log(this.data.Info)
      }
    }

  },
  //加入购物车
  addCart: function() {
    //获取购物车页面是否有数据
    var num = wx.getStorageSync('shopcartList');

    //判断
    num = !num ? [] : num;
    var car = this.data.Info;

    //  false，有没有添加的商品，有  
    //true,有没有添加的商品，没有
    var off = true
    if (num.length > 0) {
      for (var i = 0; i < num.length; i++) {
        // console.log(num[i])
        if (num[i].goodsId == car.goodsId) {
          console.log("商品一样");
          num[i].number = num[i].number + 1;
          console.log(num[i].number);
          wx.setStorageSync('shopcartList', num); //提交，同步
          off = false
        }
      }
    }

    if (off) {
      car.number = 1;
      car.isSelect = true;
      num.push(car);
      wx.setStorageSync('shopcartList', num);
      this.setData({
        shopcartCount: num.length
      });
    }

    wx.showToast({
      title: '加入购物车成功!',
      icon: 'success',
      duration: 1200
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // console.log("this.data.shopList==>", this.data.shopList)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var num = wx.getStorageSync('shopcartList');
    num = !num ? [] : num;
    this.setData({
      shopcartCount: num.length
    })
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
  navigateBack: function() {
    var self = this;
    var pages = getCurrentPages();
    if (pages.length == 1) {
      if (self.data.circleId && self.data.circleId > 0) {
        wx.redirectTo({
          url: '../../circle/index/index?circleId=' + self.data.circleId +
            '&circleName=' + (self.data.circleName || '')
        });
      } else {
        wx.switchTab({
          url: "../../home/grouplist/grouplist"
        });
      }
    } else {
      wx.navigateBack({
        changed: true
      }); //返回上一页
    }
  },


})