// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        info:'',
        canvasHidden:true,
        shareImgSrc:'../images/bg3.png',
        titlePath:'../images/title.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        var that = this;
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
      var that = this;
      const ctx = wx.createCanvasContext('share');
      var bgImgPath = that.data.shareImgSrc;
      var titlePath = that.data.titlePath;
      ctx.drawImage(bgImgPath, 0, 0, 750, 1334);
      ctx.drawImage(titlePath,20,174,690,206);
      ctx.draw(false, function() {
        // 3. canvas画布转成图片
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: 750,
          height: 1334,
          destWidth: 375,
          destHeight: 667,
          canvasId: 'share',
          success: function (res) {
            console.log(res);
            that.setData({
              shareImgSrc: res.tempFilePath
            })
            if (!res.tempFilePath) {
              wx.showModal({
                title: '提示',
                content: '图片绘制中，请稍后重试',
                showCancel: false
              })
            }
            //4. 当用户点击分享到朋友圈时，将图片保存到相册
            wx.saveImageToPhotosAlbum({
              filePath: that.data.shareImgSrc,
              success(res) {
                console.log(res);
                wx.showModal({
                  title: '图片保存成功',
                  content: '图片成功保存到相册了，去发圈噻~',
                  showCancel: false,
                  confirmText: '好哒',
                  confirmColor: '#72B9C3',
                  success: function (res) {
                    if (res.confirm) {
                      console.log('用户点击确定');
                    }
                    that.setData({
                      canvasHidden: true
                    })
                  }
                })
              }
            })
          },
          fail: function (res) {
            console.log(res)
          }
        })
      });
  } 
})