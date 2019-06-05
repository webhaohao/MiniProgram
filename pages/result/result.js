// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        info:'',
        canvasHidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        wx.setNavigationBarTitle({
          title: "清华经管学院EMBA"
        })
        wx.setNavigationBarColor({
          frontColor: "#ffffff",/*标题颜色，这里貌似仅支持 #ffffff 和 #000000 */
          backgroundColor: "#f7d6a6",/*背景色 十六进制即可*/
          animation: {/*动画*/
            duration: 400,
            timingFunc: 'easeIn'
          }
        })
          //获取用户设备信息，屏幕宽度
          wx.getSystemInfo({
            success: res => {
              that.setData({
                screenWidth: res.screenWidth
              })
              console.log(that.data.screenWidth)
            }
          })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
        var self = this;
        wx.getStorage({
          key: 'info',
          success (res) {
              console.log(res.data)
              self.setData({
                   info:res.data 
              })
          }
        })
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

  },
  //保存至相册
  saveImageToPhotosAlbum: function () {

  }
})