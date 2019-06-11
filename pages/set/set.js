// pages/set/set.js

Page({
  data: {
    x: 0,
    y: 0,
    hidden: true,
  
  },


  canvasIdErrorCallback(e) {
    console.error(e.detail.errMsg)
  },
  autodraw: function (e) {
    const context = wx.createCanvasContext('myCanvas')
    var x = 0
    var y = 0
    context.draw(true, setInterval(function () {
      context.setStrokeStyle('#900')
      context.setLineWidth(5)
      context.moveTo(x, y)
      context.lineTo(x+2,y+3)
      context.stroke()
      x= x + 2,
      y= y + 3
      context.draw(true)
    }, 200))
  }, 
  stopdraw:function(){
    clearInterval(clock)
  },
  clearall:function(e){
    const cont = wx.createCanvasContext('myCanvas')
   
    cont.clearRect(100, 100, 200, 200)
    cont.stroke()
    cont.draw()
  },


  touchstart:function(e){
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })
    const con = wx.createContext('myCanvas')
    con.setStrokeStyle('#ff0000')
    con.setLineWidth(2)
    con.moveTo(x,y)

  },
  touchmove: function (e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })    
    const con = wx.createContext('myCanvas')

  },
  touchend: function (e) {
    this.setData({
      hidden: true

    })
    
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */


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