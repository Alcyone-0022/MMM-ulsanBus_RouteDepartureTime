var NodeHelper = require("node_helper");
const fetch = require("node-fetch");
const xml2js = require("xml2js");
const moment = require("moment");

var parser = new xml2js.Parser();
var holidays = {};

module.exports = NodeHelper.create({
	start: function () {},
	notificationReceived: function() {},
	socketNotificationReceived: function(notification, payload) {
		switch(notification){
			case 'ROUTEDEPARTURETIME_MODULE_READY':
				// when module loaded completely, get holiday information
				this.getHolidayTable(payload[0]);
			case 'TIMETABLE_REQ':
				this.getTimeTable(payload[0], payload[1], payload[2]);
		}
	},
	parseHoliday: function(xml) {
		let parsedData;
		let holidays = {};

		// parse xml to json first.
		parser.parseString(xml, function(err, result) {
			console.log(result.response.body[0].items[0].item);
			parsedData = result.response.body[0].items[0].item;
		})

		// process json to get holidays
		parsedData.forEach(function(val) {
			if (val.isHoliday[0] == 'Y') {
				holidays[val.locdate[0]] = [];
				holidays[val.locdate[0]] = val.dateName[0];
			}
		})

		return holidays;
	},
	async getHolidayTable(key){
		let url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo'
		let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + key; /*Service Key*/
		queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent(moment().year(year)); /**/
		queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent(moment().year(year).month(month)); /**/

		let obj = null;
		try {
			obj = await (await fetch(url + queryParams));
		} catch(e) {
			obj = {'Error': 'Error in fetching holiday table'};
		}

		holidays = parseHoliday(obj);
		
		return obj;
	},
	async getTimeTable(key, routeNumber, isVacation){
		let url = 'http://openapi.its.ulsan.kr/UlsanAPI/BusTimetable.xo'
		let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + key; /*Service Key*/
		queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('300'); /**/
		queryParams += '&' + encodeURIComponent('routeNo') + '=' + encodeURIComponent(routeNumber); /**/

		/* TODO : check holiday|weekend | holiday|weekend && in vacation | normal day | normal vacation day */

		queryParams += '&' + encodeURIComponent('dayOfWeek') + '=' + encodeURIComponent(dayOfWeek); /**/
		let obj = null;
		try {
			obj = await (await fetch(url + queryParams));
		} catch(e) {
			obj = {'Error': 'Error in fetching data'};
		}
		this.sendSocketNotification('TIMETABLE_RECV', obj);
		return obj;
	},
	isHoliday: function() {
		
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