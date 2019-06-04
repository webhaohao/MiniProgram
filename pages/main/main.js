// pages/main/main.js
const postData = require('./local_database');
Page({
  /**
   * 页面的初始数据
   */
  data: {
      postList :postData.postList,
      duration:500,
      vertical:true,
      currentTab:0
  },
  stopTouchMove:function(){
      return false;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(this.data.postList);
      wx.setNavigationBarTitle({
        title: "chanegTitle"
      })
      wx.setNavigationBarColor({
        frontColor: "#ffffff",/*标题颜色，这里貌似仅支持 #ffffff 和 #000000 */
        backgroundColor: "#bce1df",/*背景色 十六进制即可*/
        animation: {/*动画*/
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
  },
  optionTap:function(e){
        console.log("点击答案");
        console.log(e.target.dataset);
        let current=e.target.dataset.current+1;
        this.setData({
            currentTab: current
        })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})