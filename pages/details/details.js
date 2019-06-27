const QQMapWX = require('qqmap-wx-jssdk.js');
var qqMap = new QQMapWX({
	key: 'H3SBZ-V7FKF-WYIJ2-JWS7O-FQ37S-OZBAD'
});

Page({
data: {
	longitude: 113.324520,
	latitude: 23.099994 
},

onLoad: function(options) {
	var that = this;
	let item = JSON.parse(options.jsonStr)
	that.setData({
		grade: item.grade,
		subject: item.subject,
		studentSex: item.studentSex,
		wages: item.wage,
		teacherSex: item.teacherSex,
		address: item.address,
		description: item.details
	});

	qqMap.geocoder({
		address: that.data.address,
		region: "深圳市",
		success: function(res) {
			console.log(res);
			var res = res.result;
			var latitude = res.location.lat;
			var longitude = res.location.lng;
			that.setData({
				markers: [{
					id: 0,
					title: res.title,
					latitude: latitude,
					longitude: longitude,
					iconPath: '../../icon/here.png',
					width: 20,
					height: 20,
				}],
				latitude: latitude,
				longitude: longitude
			});
		},
		fail: function(error) {
			console.error(error);
		},
		complete: function(res) {
			console.log(res);
		}
	})
}
})
