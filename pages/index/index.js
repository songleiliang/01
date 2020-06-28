//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndexNav:0,
    navList:[],
    swiperList:[],
    videosList:[]
  },
  getNavList(){
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
      success(res){
        if(res.data.code === 0){
          that.setData({
           navList:res.data.data.navList
          })
        }
      }
    })
  },
  getSwiperList(){
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      success(res){
        if(res.data.code === 0){
          
          that.setData({
           swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },
  // 导航点击事件
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  getVideosList(){
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      success(res){
        console.log(res)
        if(res.data.code === 0){
          that.setData({
           videosList:res.data.data.videoList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getSwiperList();
    this.getVideosList();

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
