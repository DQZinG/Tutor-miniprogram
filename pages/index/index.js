//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://www2.autoimg.cn/newsdfs/g2/M05/18/5C/744x0_1_autohomecar__ChcCRFx-IBOAdWoMABrVLNMPU9s084.jpg',
      'https://www2.autoimg.cn/cardfs/product/g26/M04/25/C9/744x0_1_autohomecar__ChsEnFx9i3WAOi5AAAfhJ6rkg6k345.jpg',
      'https://www3.autoimg.cn/newsdfs/g3/M07/33/07/744x0_1_autohomecar__ChcCRVx-Y1eASirPAE5Chq-l9Qg561.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 5000,
    H:"",
    multiArray: [['本田', '丰田','大众'], ['飞度', '雅阁', '思域', 'CR-V', '凌派']],
    multiIndex: [0, 0],
    region: ['广东省', '深圳市', '南山区'],
    customItem: '全部',
  },

  imgH: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕宽
    var ratio = e.detail.width / e.detail.height;　　//宽高比
    var winH = winWid / ratio + "px"　//屏幕宽 / 宽高比 = 屏幕高
    this.setData({
      H: winH　//设置高度
    })
  },

  bindMultiPickerChange(e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange(e) {
    const data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    }
    data.multiIndex[e.detail.column] = e.detail.value
    
    switch(data.multiIndex[0]) {
    case 0:
    data.multiArray[1] = ['飞度', '雅阁', '思域', 'CR-V', '凌派']
    break
    case 1:
    data.multiArray[1] = ['卡罗拉', '凯美瑞', '威驰', 'RAV4', '锐志']
    break
    case 2:
    data.multiArray[1] = ['高尔夫', '帕萨特', '朗逸', '途观', '凌度', 'CC']
    break
    case 3:
    data.multiArray[1] = ['高尔夫', '帕萨特', '朗逸', '途观', '凌度', 'CC']
    break    
  }
this.setData(data)
  }
})