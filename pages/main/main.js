// pages/main/main.js
const postData = require('./local_database');
Page({
  /**
   * 页面的初始数据
   */
  data: {
      // postList :postData.postList,
      duration:500,
      vertical:true,
      currentTab:0,
      active:-1
  },
  stopTouchMove:function(){
      return false;
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
        backgroundColor: "#bce1df",/*背景色 十六进制即可*/
        animation: {/*动画*/
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
  },
  optionTap:function(e){
        console.log(e.target.dataset);
        let postList = this.data.postList;
        postList[e.target.dataset.current].select = e.target.dataset.active;
        let current=e.target.dataset.current+1;
        postList.length>current && (postList[current].animated = true); 
        let count = 0;
        let obj = {};
        this.setData({
            postList:postList  
        })
        if(current == postList.length){
              console.log('答题结束');
              for(let i=0;i<current;i++){
                  if(postList[i].select==postList[i].daan){
                      count++;
                  }
              }
              console.log(count);
              if(count<=7 && count>=6){
                    obj ={
                        title:'../images/zhuangyuan.png',
                        des:'../images/1.png'
                    }
              }
              else if(count<=5 && count>=4){
                    obj ={
                      title:'../images/bangyan.png',
                      des:'../images/2.png'
                    }
              }
              else{
                    obj ={
                      title:'../images/tanhua.png',
                      des:'../images/3.png'
                    }
              }
              wx.setStorage({
                  key:"info",
                  data:obj
              })
              wx.navigateTo({
                  url: '../result/result'
              })
        }
        else{
            this.setData({
              currentTab: current  
            })
        }
      
       
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(postData.postList);
    this.setData({
     // postList: postData.postList
      postList:JSON.parse(JSON.stringify(postData.postList))
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

  }
})