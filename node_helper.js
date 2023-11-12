var NodeHelper = require("node_helper");
const fetch = require("node-fetch");
const xml2js = require("xml2js");
const moment = require("moment");

module.exports = NodeHelper.create({
	start: function () {},
	notificationReceived: function() {},
	socketNotificationReceived: function(notification, payload) {
		switch(notification){
			case 'TIMETABLE_REQ':
				this.getTimeTable(payload[0], payload[1], payload[2]);
		}
	},
	async getTimeTable(key, routeNumber, isVacation){
		// https://stackoverflow.com/questions/12460378/how-to-get-json-from-url-in-javascript (14 참고)
		var url = 'http://openapi.its.ulsan.kr/UlsanAPI/BusTimetable.xo'
		var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + key; /*Service Key*/
		queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('200'); /**/
		queryParams += '&' + encodeURIComponent('routeNo') + '=' + encodeURIComponent(routeNumber); /**/

		/* TODO : check holiday|weekend | holiday|weekend && in vacation | normal day | normal vacation day */

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
	parseTimeTable: function (xml) {
		let routes = {};

		// parse xml to json first.
		parser.parseString(xml, function(err, result) {
			// console.log(result.tableInfo.list[0].row);
			parsedData = result.tableInfo.list[0].row;
		})

		// process json to get each route number's departure time table.
		parsedData.forEach(function(val) {
			if (routes[val.ROUTENAME[0]] == undefined) {
				routes[val.ROUTENAME[0]] = [];
			}
			routes[val.ROUTENAME[0]].push(val.TIME[0]);
		})

		// remove all times except 3 from now
		let route_departureTime = [];
		Object.keys(routes).forEach(function(route) {
			let tempRoute = {};
			tempRoute[route] = [];

			let cnt = 0;
			routes[route].forEach(function(time, idx) {
				let current_moment = moment(time, "HHmm");
				if (current_moment.isSameOrAfter(moment())) {
					// if route departure time is same or after from now, push it into array.
					if(idx <= routes[route].length && cnt < 3) {
						//prevent out of range
						tempRoute[route].push(time);
						cnt += 1;
					}
				}
			})
			route_departureTime.push(tempRoute);
		})
	},
});