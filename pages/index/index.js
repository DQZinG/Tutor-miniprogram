var app = getApp();

Page({
  data: {
    imgUrls: [
			'http://www.chinese315.org/edit/uploadfile/201511/2015-11-18-17-55-11.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=724143410,3441183531&fm=26&gp=0.jpg',
      'https://img.zcool.cn/community/018b5b55d890fe6ac7251df865c947.JPG@1280w_1l_2o_100sh.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 5000,
    H: "",

		clients:[
			{
			grade:"小五",
			subject:"数学",
			wage:"80",
			studentSex:"女",
			teacherSex:"女",
			details:"成绩中上，帮助突破难题",
			address:"南山京基百纳",
			color:"pink"
			},
			{
			grade:"初一",
			subject:"英语",
			wage:"90",
			studentSex:"男",
			teacherSex:"男",
			details:"自学能力差，基础薄弱，希望能教系统性的学习方法，",
			address:"中信红树湾",
			color:"deepskyblue"
			
			}
		],
  },

  imgH: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕宽
    var ratio = e.detail.width / e.detail.height;　　//宽高比
    var winH = winWid / ratio + "px"　//屏幕宽 / 宽高比 = 屏幕高
    this.setData({
      H: winH　//设置高度
    })
  },
	
	onLoad:function(){
		wx.request({
			url:"http://localhost",
			data:{
				title:""
			}
		})
	},

  toDetails:function(event){
		var item =event.currentTarget.dataset.item;
    let jsonStr=JSON.stringify(item);
		wx.navigateTo({
      url: '/pages/details/details?jsonStr=' + jsonStr,
    })
		
  }
})