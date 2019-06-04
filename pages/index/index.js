//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  jump:function(){
    wx.navigateTo({
      url: '../main/main'
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: "清华经管学院EMBA"
    })
    wx.setNavigationBarColor({
      frontColor: "#ffffff",/*标题颜色，这里貌似仅支持 #ffffff 和 #000000 */
      backgroundColor: "#fad6c6",/*背景色 十六进制即可*/
      animation: {/*动画*/
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
