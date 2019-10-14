//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    info: {
      id: 'a0',
      title: "厨余垃圾",
      img: "../../image/lj1.png",
      text: "厨余垃圾是指易腐的生物质废弃物。包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等。",
      text1: "投放要求:·纯流质的食物垃圾, 如牛奶等, 应直接倒进下水口·有包装物的厨余垃圾应将包装物取出后分类投放, 包装物请投放到对应的可回收物容器或其他垃圾容器",
      list: ["CoCo的青稞", "姑娘果", "桔梗杯", "桔梗碗", "KFC圆筒冰激凌", "Mcake", "QQ软糖", "阿波罗火腿", "阿尔卑斯糖", "艾草"],
    },


    message: [{
        id: 'a0',
        title: "厨余垃圾",
        img: "../../image/lj1.png",
        text: "厨余垃圾是指易腐的生物质废弃物。包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等。",
        text1: "投放要求:·纯流质的食物垃圾, 如牛奶等, 应直接倒进下水口·有包装物的厨余垃圾应将包装物取出后分类投放, 包装物请投放到对应的可回收物容器或其他垃圾容器",
        list: ["CoCo的青稞", "姑娘果", "桔梗杯", "桔梗碗", "KFC圆筒冰激凌", "Mcake", "QQ软糖", "阿波罗火腿", "阿尔卑斯糖", "艾草"],
      },
      {
        id: 'a1',
        title: '其他垃圾',
        img: "../../image/lj2.png",
        text: "其他垃圾是指除有害垃圾、可回收物、厨余（餐厨）垃圾以外的其他生活废弃物。",
        text1: "投放要求：·尽量沥干水分·难以辨识类别的生活垃圾投入其他垃圾容器内",
        list: ["3D打印模型", "3D眼镜", "504胶水", "A4纸包装袋", "CD", "DVD", "军旗", "KFC全家桶", "KFC食物包装", "KFC纸盒"],
      },
      {
        id: 'a2',
        title: '可回收物',
        img: "../../image/lj3.png",
        text: "可回收物是指适宜回收和可循环再利用的废弃物。主要包括废玻璃、废金属、废塑料、废纸张、废织物等。",
        text1: "投放要求：·轻投轻放·清洁干燥，避免污染·废纸尽量平整·立体包装请清空内容物，清洁后压扁投放·有尖锐边角的，应包裹后投放",
        list: ["84消毒液瓶", "A3纸", "A4纸", "AD钙奶瓶", "AD钙瓶", "Armani包", "保险柜", "保险箱", "CD塑料盒", "Celine包","Chanel包"],
      },
      {
        id: 'a3',
        title: '有害垃圾',
        img: "../../image/lj4.png",
        text: "有害垃圾是指对人体健康或者自然环境造成直接或者潜在危害的零星废弃物，单位集中产生的除外。主要包括废电池、废灯管、废药品、废油漆桶等。",
        text1: "投放要求：·充电电池、纽扣电池、蓄电池投放时请注意轻放·油漆桶、杀虫剂如有残留请密闭后投放·荧光灯、节能灯易破损请连带包装或包裹后轻放·废药品及其包装连带包装一并投放",
        list: ["1号电池", "502胶水", "5号电池", "704粘合剂", "704粘和剂", "7号电池", "LED灯（含水银）", "LED灯泡", "驱虫药", "万用表电池","X光片"],
      }
    ]
  },
  // 分享小程序页面
  onShareAppMessage: function() {
    return {
      title: "教你垃圾分类",
      desc: "这是一个很有用的小程序",
      path: "../../page/index/index"
    }
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onclick(e) {
    var i = e.target.dataset.id
    // console.log(i)

    this.setData({
      info: this.data.message[i]
    })
    // console.log(this.data.info)
    // console.log(this.data.info)
  },

})