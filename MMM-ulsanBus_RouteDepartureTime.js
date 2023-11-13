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
                self.sendSocketNotification("ROUTEDEPARTURETIME_MODULE_READY", self.config.key)
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
