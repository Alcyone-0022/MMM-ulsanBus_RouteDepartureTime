var NodeHelper = require("node_helper");
const fetch = require("node-fetch");
const xml2js = require("xml2js");
const moment = require("moment");

var parser = new xml2js.Parser();
var holidays = {};

module.exports = NodeHelper.create({
	start: function () {},
	notificationReceived: function() {},
	socketNotificationReceived: async function(notification, payload) {
		switch(notification){
			case 'ROUTEDEPARTURETIME_MODULE_READY':
				// when module loaded completely, get holiday information
				console.log("ROUTEDEPARTURETIME_MODULE_READY");
				holidays = await this.getHolidayTable(payload)
					.then(this.sendSocketNotification("ROUTEDEPARTURETIME_NODEHELPER_READY"));
				break;
			case 'TIMETABLE_REQ':
				let obj = await this.getTimeTable(payload[0], payload[1], payload[2]);
				this.sendSocketNotification('TIMETABLE_RECV', obj);
				break;
		}
	},
	async getHolidayTable(key){
		let url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo'
		let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent(key); /*Service Key*/
		queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent(moment().get('year')); /**/
		queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent(moment().get('month') + 1); /**/

		try {
			let response = await fetch(url + queryParams);
			let data = await response.text();
			return this.parseHoliday(data);
		} catch(e) {
			return {'Error': 'Error in fetching holiday table' + e};
		}
	},
	parseHoliday: function(xml) {
		let parsedData;
		let holidays = {};

		// parse xml to json first.
		parser.parseString(xml, function(err, result) {
			parsedData = result.response.body[0].items[0].item;
			if (parsedData !== undefined) {
				// process json to get holidays
				parsedData.forEach(function(val) {
					if (val.isHoliday[0] == 'Y') {
						holidays[val.locdate[0]] = [];
						holidays[val.locdate[0]] = val.dateName[0];
					}
				})
			}
		})

		return holidays;
	},
	isHoliday: function() {
		let nowDate = moment().get('year').toString() + moment().get('month').toString() + moment().get('date').toString();
		if (Object.hasOwn(holidays, nowDate)) {
			return true;
		} else {
			return false;
		}
	},
	parseTimeTable: function (xml) {
		let parsedData;
		let routes = {};

		// parse xml to json first.
		parser.parseString(xml, function(err, result) {
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

		return route_departureTime;
	},
	async getTimeTable(key, routeNumber, isVacation){
		let url = 'http://openapi.its.ulsan.kr/UlsanAPI/BusTimetable.xo'
		let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent(key); /*Service Key*/
		queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('300'); /**/
		queryParams += '&' + encodeURIComponent('routeNo') + '=' + encodeURIComponent(routeNumber); /**/

		/* check holiday|weekend | holiday|weekend && in vacation | normal day | normal vacation day */
		//0: 평일 1: 토요일 2: 주말,공휴일 3: 방학(평일) 4: 방학(토요일) 5: 방학(일요일)
		// moment().day() -> 6: SAT 0:SUN
		let dayType = 0;
		if (isVacation && moment().day() == 0) {
			// in vacation & Sunday
			dayType = 5
		} else if(isVacation && moment().day() == 6) {
			// in vacation && Saturday
			dayType = 4;
		} else if (isVacation && moment().day() < 6 && moment().day() > 0) {
			// in vacation && normal day
			dayType = 3;
		} else if (this.isHoliday() || moment().day() == 0) {
			// holiday or weekend
			dayType = 2;
		} else if (moment().day() == 6) {
			// Normal Saturday
			dayType = 1;
		} else {
			// normal day
			dayType = 0;
		}

		queryParams += '&' + encodeURIComponent('dayOfWeek') + '=' + encodeURIComponent(dayType); /**/

		try {
			let response = await fetch(url + queryParams);
			let data = await response.text();
			return this.parseTimeTable(data);
		} catch(e) {
			return {'Error': 'Error in fetching data: ' + e };
		}
	},
});