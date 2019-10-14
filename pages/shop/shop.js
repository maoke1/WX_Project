// pages/shop/shop.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    isHasGoods: false,
    goodsTitle: "",
    goodsPrice: "",
    goodsOPrice: "",
    goodsDescription: "",
    goodsImgs: "",
    goodsdata: [],
    shopList: [],
    totalData: 0,
    allSelectedStatus: true
  },
  // 商品数量减法运算
  reduce: function(options) {
    // console.log(options)
    var nn = options.currentTarget.dataset.alpha
    var goods = this.data.goodsdata
    goods[nn].number--;
    if (goods[nn].number < 1) {
      goods[nn].number = 1
    }
    this.setData({
      goodsdata: goods
    })
    this.All()
    this.allPrice();
  },
  // 商品数量加法运算
  add: function(options) {
    var nn = options.currentTarget.dataset.alpha
    // console.log(nn);
    var goods = this.data.goodsdata
    goods[nn].number++;
    this.setData({
      goodsdata: goods
    })
    this.All()
    this.allPrice();
  },

  // 商品删除
  del: function(options) {
    var nn = options.currentTarget.dataset.alpha
    // console.log(nn);
    var goods = this.data.goodsdata;

    var obj = [];
    for (var dd = 0; dd < goods.length; dd++) {
      if (nn != dd) {
        obj.push(goods[dd])
        // console.log(obj)
      }
    }
    this.setData({
      goodsdata: obj
    })
    wx.setStorageSync('shopcartList', obj);
    this.All()
    this.allPrice();
  },


  // 单选
  simpleSelected: function(options) {
    var nn = options.currentTarget.dataset.alpha;
    // console.log(nn);

    var goods = this.data.goodsdata;
    goods[nn].isSelect = !goods[nn].isSelect;
    // console.log(goods[nn].isSelect = !goods[nn].isSelect);

    this.setData({
      goodsdata: goods
    })
    wx.setStorageSync('shopcartList', goods);
    this.All()
    this.allPrice();

  },
  //All

  All: function() {
    var de = true;
    var goods = this.data.goodsdata;
    for (var i = 0; i < goods.length; i++) {
      if (!goods[i].isSelect) {
        de = false
      }
    }
    if (de) {
      this.setData({
        allSelectedStatus: true
      })
    } else {
      this.setData({
        allSelectedStatus: false
      })
    }
    // console.log('all')
  },
  // 全选
  allSelected: function() {
    var goods = this.data.goodsdata;
    this.setData({
      allSelectedStatus: !this.data.allSelectedStatus
    })
    console.log(this.data.allSelectedStatus);

    if (this.data.allSelectedStatus == true) {
      for (var i = 0; i < goods.length; i++) {
        goods[i].isSelect = true;
        console.log(goods[i].isSelect)
      }
    } else {
      for (var i = 0; i < goods.length; i++) {
        goods[i].isSelect = false;
        console.log(goods[i].isSelect)
      }
    }
    wx.setStorageSync('shopcartList', goods);
    this.setData({
      goodsdata: goods
    })
    this.All()
    this.allPrice();
  },
  //计算总价格
  allPrice: function() {
    var total = 0
    console.log("111")
    var goods = this.data.goodsdata;
    if (goods.length > 0) {
      for (var i = 0; i < goods.length; i++) {
        if (goods[i].isSelect) {
          var a = goods[i].price * 100
          var b = goods[i].number * 100
          total += (a * b) / 10000
        }
      }
    }
    this.setData({
      totalData: total
    })
    console.log(total)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('1')
    var num = wx.getStorageSync('shopcartList');
    // console.log("num", num)
    this.setData({
      goodsdata: num
    })

    this.All();
    this.allPrice();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.All();
    this.allPrice();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("onShow");
    // var shopList = this.data.shopList;
    // // 计算总价格
    // var totalData = 0;
    // for (var i = 0; i < shopList.length; i++) {
    //   totalData = totalData + shopList[i].goodsNum * shopList[i].goodsPrice
    // }
    // this.setData({
    //   totalData
    // })
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
    console.log("2");
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
  }


})