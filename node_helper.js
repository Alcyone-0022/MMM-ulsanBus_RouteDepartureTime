var NodeHelper = require("node_helper");
let {PythonShell} = require('python-shell')

module.exports = NodeHelper.create({
  start: function () {

  },
  notificationReceived: function() {},
  socketNotificationReceived: function(notification, payload) {
	  var self = this;
	  switch(notification){
		  case "BUSSTOP_DATA_REQUEST":
			  
			let pyshell = new PythonShell('../MagicMirror/modules/MMM-ulsanBus/ulsan_busArrivalInfo.py');
			// pyshell.defaultOptions = { mode: 'json' };
			pyshell.send(payload);

			pyshell.once('message', function (message) {
			  // received a message sent from the Python script (a simple "print" statement)
			  // Log.log(message);
				// console.log('\"' + message + '\"');
				self.sendSocketNotification("DATA", message);
			});
	  }  
  },

});
