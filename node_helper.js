var NodeHelper = require("node_helper");
const fetch = require("node-fetch");

module.exports = NodeHelper.create({
	start: function () {},
	notificationReceived: function() {},
	socketNotificationReceived: function(notification, payload) {
		switch(notification){
			case 'TIMETABLE_REQ':
				this.getTimeTable(payload[0], payload[1], payload[2]);
		}
	},
	async getTimeTable(key, routeNumber, dayOfWeek){
		// https://stackoverflow.com/questions/12460378/how-to-get-json-from-url-in-javascript (14 참고)
		var url = 'http://openapi.its.ulsan.kr/UlsanAPI/BusTimetable.xo'
		var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + key; /*Service Key*/
		queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('200'); /**/
		queryParams += '&' + encodeURIComponent('routeNo') + '=' + encodeURIComponent(routeNumber); /**/
		queryParams += '&' + encodeURIComponent('dayOfWeek') + '=' + encodeURIComponent(dayOfWeek); /**/
		let obj = null;
		try {
			obj = await (await fetch(url + queryParams)).json();
		} catch(e) {
			obj = {'Error': 'Error in fetching data'};
		}
		this.sendSocketNotification('TIMETABLE_RECV', obj);
		return obj;
	},
});