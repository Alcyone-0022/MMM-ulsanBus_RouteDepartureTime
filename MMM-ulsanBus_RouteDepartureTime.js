Module.register("MMM-ulsanBus_RouteDepartureTime", {
    defaults: {
		updateInterval: 30000,
		busStopUpdateInterval: 10000,
		isVacation: false,
    },
    start: function() {
        var self = this;
        Log.log("Starting module: " + this.name);
        this.routeTimeTables = {};
        // route time tables that is displayed now
        this.currentTimeTables = {};
    },
    getStyles: function() {
        return ["ulsanBus_RouteDepartureTime.css"];
    },
    getDom: function() {
        // var self = this;
        var container = document.createElement("div");
        container.className = "UB_RteDepTime_Container";
        Log.log(container);
        return container;
    },
    notificationReceived: function(notification, payload) {
        var self = this;
        switch (notification) {
            case "DOM_OBJECTS_CREATED":
                self.config.routes.forEach(function(routeNM) {
                    Log.log("Requested route departure time: " + routeNM.toString());
                    self.sendSocketNotification("TIMETABLE_REQ", [self.config.key, routeNM, self.config.isVacation]);
                })


                self.departuretimeCheckTimer = setInterval( function() {
                    self.checkRouteTime(self.currentTimeTables);
                }, 5000);
                break;
            case "CLOCK_MINUTE":
                // 가장 최근 버스 출발시간과 현재 분을 비교해서 다음 시간 업데이트 여부 판독
                // 막차 이후일 때 - 내일까지 남은 시간만큼 setTimeout 설정하고, 트리거 시 해당 노선 TIMETABLE_REQ

                // 이거 https://stackoverflow.com/questions/20502277/call-function-on-the-minute-every-minute 로 바꾸자
                // 타이머 트리거 시점은 DOM_OBJECTS_CREATED, 호출할 함수는 nullsafe하게, DOM 직접 접근해서 수정하고
                // 자정이 넘어갔는지 판독도 분당 호출되는 함수에서?

                //근데, 사실... 이거 그렇게 time critical 하지는 않다....
                break;
        }
    },
    getTimesFromNow: function(timetables, quantity) {
        // this function gets departure times from now, in number of quantity

        let self = this;
        let timetablesFromNow = {};

        for (route in timetables) {
            // departureTime == '1421(율리공영차고지 순환)'...
            let tempRoute = {};
			tempRoute[route] = [];

			let cnt = 0;
			timetables[route].forEach(function(time, idx) {
				let current_moment = moment(time, "HHmm");
				if (current_moment.isSameOrAfter(moment())) {
					// if route departure time is same or after from now, push it into array.
					if(idx <= self.routeTimeTables[route].length && cnt < quantity) {
						if (timetablesFromNow[route] == undefined) {
                            timetablesFromNow[route] = [];
                        }

                        if (!timetablesFromNow[route].includes(time)) {
                            // prevent duplicate of route departure time
                            timetablesFromNow[route].push(time);
                        }
						cnt += 1;
					}
				}
			})
        }
        // Log.log(timetablesFromNow)
        return timetablesFromNow;
    },
    checkRouteTime: function(timetables) {
        // this function checks any bus route departure times that is over
        // if so, update routeTimeTablesToDisplay and call updateRouteTimeDOM function
        Log.log("checkRouteTime called.");
        Log.log(timetables)
        let isTimePassed = false;
        for (route in timetables) {
            Log.log(moment().isSameOrAfter(moment(timetables[route][0], "HHmm")))
            if (moment().isSameOrAfter(moment(timetables[route][0], "HHmm"))) {
                isTimePassed = true;
                break;
            }
        }

        if (isTimePassed) {
            this.currentTimeTables = this.getTimesFromNow(this.routeTimeTables, 3);
            this.updateRouteTimeDOM(this.currentTimeTables);
        }
    },
    buildRouteTimeDOM: function() {

    },
    updateRouteTimeDOM: function(timetables) {
        Log.log("updateRouteTimeDOM called.");
        Log.log(timetables);
    },
    socketNotificationReceived: function(notification, payload) {
        var self = this;
        switch (notification) {
            case "TIMETABLE_RECV":
                for (route in payload) {
                    this.routeTimeTables[route] = payload[route];
                }
                this.currentTimeTables = this.getTimesFromNow(this.routeTimeTables, 3);
                this.updateRouteTimeDOM(this.currentTimeTables);
                break;
		}
    },
})
