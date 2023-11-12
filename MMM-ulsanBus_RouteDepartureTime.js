Module.register("MMM-ulsanBus_RouteDepartureTime", {
    defaults: {
		routes: {},
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
        return container;
    },
    notificationReceived: function(notification, payload) {
        var self = this;
        switch (notification) {
            case "DOM_OBJECTS_CREATED": // Log.log(typeof busStopData);
                
        }
    },
    socketNotificationReceived: function(notification, payload) {
        var self = this;
        switch (notification) {
		}
    },
})
