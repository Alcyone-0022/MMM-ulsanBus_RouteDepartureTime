Module.register("MMM-ulsanBus_RouteDepartureTime", {
    defaults: {
		updateInterval: 30000,
		busStopUpdateInterval: 10000,
		isVacation: false,
    },
    start: function() {
        var self = this;
        Log.log("Starting module: " + this.name);

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
                self.sendSocketNotification("TIMETABLE_REQ", self.config.key)
                break;
            case "CLOCK_MINUTE":
                // 가장 최근 버스 출발시간과 현재 분을 비교해서 다음 시간 업데이트 여부 판독
                // 막차 이후일 때 - 배열 길이가 1일 때에는? 내일까지 남은 시간만큼 setTimeout 설정하고, 트리거 시 해당 노선 TIMETABLE_REQ
                break;
        }
    },
    socketNotificationReceived: function(notification, payload) {
        var self = this;
        switch (notification) {
            case "ROUTEDEPARTURETIME_NODEHELPER_READY":
                
                Log.log("ROUTEDEPARTURETIME_NODEHELPER_READY");

                self.config.routes.forEach(function(routeNM) {
                    Log.log("Requested route departure time: " + routeNM.toString());
                    self.sendSocketNotification("TIMETABLE_REQ", [self.config.key, routeNM, self.config.isVacation]);
                })
                break;
            case "TIMETABLE_RECV":
                Log.log(payload);
                break;
		}
    },
})
