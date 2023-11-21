Module.register("MMM-ulsanBus_RouteDepartureTime", {
    defaults: {
		updateInterval: 30000,
		busStopUpdateInterval: 10000,
		isVacation: false,
        excludedRoutes: [],
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
        container.appendChild(this.buildRouteTimeDOM(this.currentTimeTables));
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
        }
    },
    getTimesFromNow: function(timetables, quantity) {
        // this function gets departure times from now, in number of quantity

        let self = this;
        let timetablesFromNow = {};

        for (route in timetables) {
            // don't add route if explicitly excluded in setting
            let isExcluded = false;
            self.config.excludedRoutes.forEach(function(direction) {
                if (route.includes(direction)) {
                    isExcluded = true;
                }
            })
            if (isExcluded) continue;


            // departureTime == '1421(율리공영차고지 순환)'...
            let tempRoute = {};
			tempRoute[route] = [];

			let cnt = 0;
			timetables[route].forEach(function(time, idx) {
				let currentRouteTime = moment(time, "HHmm");
				if (currentRouteTime.isSameOrAfter(moment())) {
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
        // if so, updates currentTimeTables and call updateRouteTimeDOM function
        Log.log("checkRouteTime called.");
        let isTimePassed = false;
        for (route in timetables) {
            // Log.log(moment().isSameOrAfter(moment(timetables[route][0], "HHmm")))
            if (moment().isSameOrAfter(moment(timetables[route][0], "HHmm"))) {
                isTimePassed = true;
                break;
            }
        }

        if (isTimePassed) {
            this.currentTimeTables = this.getTimesFromNow(this.routeTimeTables, 3);
            // this.updateRouteTimeDOM(this.currentTimeTables);
            this.updateDom();
        }
    },
    buildRouteTimeDOM: function(routeObj) {
        let routeContainer = document.createElement('div');
        routeContainer.className = 'routeContainer';

        Log.log(routeObj)
        for (route in routeObj) {
            let routeElem = document.createElement('div');
            routeElem.className = 'UB_RteDepTime_Route';
            routeElem.id = 'route_' + route;

            // split route number and direction & remove braces
            let routeNum = route.slice(0, route.indexOf('('));
            let routeDirection = route.slice(route.indexOf('(') + 1, route.indexOf(')'));

            let routeNumE = document.createElement('span');
            routeNumE.className = 'UB_RteDepTime_RouteNum';
            routeNumE.innerHTML = routeNum;

            // set route color
            if (routeNum < 100) { // 마을버스
                routeNumE.style.color = '#00fb00';
            } else if (routeNum < 899) { //시내버스
                routeNumE.style.color = '#FFCC00';
            } else if (routeNum < 999) { //지선버스
                routeNumE.style.color = '#00FFFD';
            } else if (routeNum < 1999) { //좌석버스
                routeNumE.style.color = '#3380ff';
            } else if (routeNum < 5999) { //급행버스
                routeNumE.style.color = '#ff5733';
            }

            let routeDirectionE = document.createElement('span');
            routeDirectionE.className = 'UB_RteDepTime_RouteDirection';
            routeDirectionE.innerHTML = routeDirection;

            let routeNumberContainer = document.createElement('div');
            routeNumberContainer.className = "UB_RteDepTime_RouteNumberContainer"
            routeNumberContainer.appendChild(routeDirectionE);
            routeNumberContainer.appendChild(routeNumE);

            let routeTimeContainer = document.createElement('div');
            routeTimeContainer.className = 'UB_RteDepTime_RouteTimes';

            routeObj[route].forEach((time, idx) => {
                let depTime = document.createElement('span');
                depTime.className = 'UB_RteDepTime_DepTime';
                depTime.innerHTML = time;

                if (idx == 0) {
                    depTime.style.color = "white";
                } else {
                    let col = 255 - (65 * idx);
                    depTime.style.color = `rgb(${col}, ${col}, ${col})`;
                }
                routeTimeContainer.appendChild(depTime);
            })

            routeElem.appendChild(routeNumberContainer);
            routeElem.appendChild(routeTimeContainer);
            routeContainer.appendChild(routeElem);
        }
        return routeContainer;
    },
    socketNotificationReceived: function(notification, payload) {
        var self = this;
        switch (notification) {
            case "TIMETABLE_RECV":
                for (route in payload) {
                    this.routeTimeTables[route] = payload[route];
                }
                this.currentTimeTables = this.getTimesFromNow(this.routeTimeTables, 3);
                this.updateDom();
                break;
		}
    },
})
