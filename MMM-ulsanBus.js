Module.register("MMM-ulsanBus", {
    defaults: {
		busstop: {},
		updateInterval: 30000,
		busStopUpdateInterval: 10000,
		maxDisplayRoute: 15,
		maxDisplayBusStops: 2,
    },
    start: function() {
        var self = this;
        Log.log("Starting module: " + this.name);

		// https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
		// PIR Sensor 모듈과 연동; 타이머 껐다 켜기 위함
        this.getBusArrivalDataInterval = setInterval(function() {
            self.getBusArrivalData();
        }, self.config.updateInterval);

        // 정류장 DOM 객체 저장하는 전역변수 dict 초기화
        this.busStopBoxObjDict = {};
        // // 한 번에 표시할 정류장 개수의 DOM 객체만 담는 전역변수 dict
        // this.displayedBusStops = {};

        this.numberOfBusStops = Object.keys(this.config.busstop).length;

        this.displayIndex = 0;

        for (busStop in this.config.busstop) {
			Log.log(busStop);
			var busStopBox = document.createElement("div");
			busStopBox.className = "box";
			var busStopTitle = document.createElement("div");
			busStopTitle.id = "busstop_title";
			busStopTitle.innerHTML = '<i class="fas fa-bus"></i>' + busStop;
			// Log.log("Creating busstop " + busStop);
			busStopBox.appendChild(busStopTitle);
			// child element 삭제 시를 위한 dummy
			busStopBox.appendChild(document.createElement("div"));

			this.busStopBoxObjDict[this.config.busstop[busStop][0]] = busStopBox;
			// Log.log(typeof busStopBox);
			// Log.log(typeof this.busStopBoxObjDict[this.config.busstop[busStop][0]]);
			// Log.log(this.busStopBoxObjDict);

			// busStopBoxObjDict를 stopID로 접근하면 됨.
			// socketNotificationReceived에서 한번에 처리하기!

			this.config.busstop[busStop].push(this.config.key);
        }
    },
    getStyles: function() {
        return ["ulsanBus_Styles.css"];
    },
    getDom: function() {
        // var self = this;

        var container = document.createElement("div");
        container.className = "ulsanBus_Container";

	// 정류장 순환 표시할 만큼 정류장 수가 많지 않을 때
        if (Object.keys(this.config.busstop).length <= this.config.maxDisplayBusStops) {
            for (i in this.busStopBoxObjDict) {
                container.append(this.busStopBoxObjDict[i]);
            }
        } else {
            // 정류장들 순환 표시
            var currentDisplayIndex = this.displayIndex;
            for (let i = currentDisplayIndex; i < currentDisplayIndex + this.config.maxDisplayBusStops; i++) {
				var dictKeys = Object.keys(this.config.busstop);
				container.append(this.busStopBoxObjDict[this.config.busstop[dictKeys[i]][0]]);
				this.displayIndex++;
				if (this.displayIndex >= this.numberOfBusStops) { break; }
            }

            if (this.displayIndex >= this.numberOfBusStops) {
                this.displayIndex = 0;
            }
        }

        return container;
    },
    notificationReceived: function(notification, payload) {
        var self = this;
        switch (notification) {
            case "DOM_OBJECTS_CREATED": // Log.log(typeof busStopData);
                self.getBusArrivalData();
				// https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
				// PIR Sensor 모듈과 연동; 타이머 껐다 켜기 위함
                self.updateDomInterval = setInterval(function() {
                    self.updateDom();
                    // Log.log('updated');
                }, this.config.busStopUpdateInterval);
                break;
				
		// https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
		// 버스정보 맛간거 판독하는 코드 넣자
        }
    },
    socketNotificationReceived: function(notification, payload) {
        var self = this;
        switch (notification) {
            case 'DATA':
                //https://stackoverflow.com/questions/42494823/json-parse-returns-string-instead-of-object
                // Log.log(payload);
                self.busStopData = JSON.parse(payload);
				
				arrivalRouteElem = document.createElement('div');
                arrivalRouteElem.id = 'arrivalRouteElem';
				
				// no_data
				if (self.busStopData.hasOwnProperty('no_data')) {
					infoString = document.createElement('div');
					infoString.id = 'infoString';
					infoString.innerHTML = '도착정보 없음';
					infoString.style.fontWeight = 'bold';
					infoString.style.color = 'grey';

					arrivalRouteElem.append(infoString);
					// Log.log('no_data ' + self.busStopData['stopID']);
					// Log.log(arrivalRouteElem);

				// error
				} else if (self.busStopData.hasOwnProperty('error')) {
					errorString = document.createElement('div');
					errorString.id = 'errorString';
					errorString.innerHTML = 'ERROR!';
					errorString.style.fontWeight = 'bold';
					errorString.style.color = '#ff5733';

					arrivalRouteElem.append(errorString);
					// Log.log('error' + self.busStopData['stopID'])

				// 데이터가 잘 넘어왔을 경우
				} else {
					arrivesSoonElem = document.createElement('div');
					arrivesSoonElem.id = 'arrives_soon';
					var arrivesSoonStr = self.busStopData['arrives_soon'].toString().replace(/\,/g, " ");
					// arrivesSoonStr.toString().replace(/,/, " ");
					arrivesSoonElem.innerHTML = '곧 도착: ' + arrivesSoonStr;

					arrivalRouteElem.append(arrivesSoonElem);

					var displayRouteCounter = 0;

					for (JSON_arrivalRouteNM_Ordered of self.busStopData['arrival_Order']) {
						// Log.log(JSON_arrivalRouteNM_Ordered);
						// Log.log(self.busStopData['arrival_Order']);
						// Log.log(typeof self.busStopData['arrival_Order']);

						lineElem = document.createElement('p');
						lineElem.style.margin = '5px 0px 0px 2px';

						// Route Number
						arrivalRouteNM = document.createElement('span');
						arrivalRouteNM.innerHTML = JSON_arrivalRouteNM_Ordered;
						arrivalRouteNM.style.fontWeight = 'bold';

						if (JSON_arrivalRouteNM_Ordered < 100) { // 마을버스
							arrivalRouteNM.style.color = '#008800';
						} else if (JSON_arrivalRouteNM_Ordered < 899) { //시내버스
							arrivalRouteNM.style.color = '#FFCC00';
						} else if (JSON_arrivalRouteNM_Ordered < 999) { //지선버스
							arrivalRouteNM.style.color = '#00FFFD';
						} else if (JSON_arrivalRouteNM_Ordered < 1999) { //좌석버스
							arrivalRouteNM.style.color = '#3380ff';
						} else if (JSON_arrivalRouteNM_Ordered < 5999) { //급행버스
							arrivalRouteNM.style.color = '#ff5733';
						}

						arrivalRouteInfo = document.createElement('span');

						// 남은 시간
						var busStopData_html = " <i class=\"far fa-clock\"></i>";
						busStopData_html += self.busStopData[JSON_arrivalRouteNM_Ordered][0];

						// 최대 표시 노선 수 초과할 시 간략하게 표시
						if (displayRouteCounter >= this.config.maxDisplayRoute) {
							briefArrivalRoute = document.createElement('div');
							briefArrivalRoute.id = 'briefArrivalRouteElem';

							arrivalRouteNM.style.fontSize = '17px';
							briefArrivalRoute.append(arrivalRouteNM);
							briefArrivalRoute.append(document.createElement('br'));
							arrivalRouteInfo.innerHTML = busStopData_html;
							arrivalRouteInfo.style.color = 'white';
							briefArrivalRoute.append(arrivalRouteInfo);
							// briefArrivalRoute.append(document.createElement('br'));
							if (self.busStopData[JSON_arrivalRouteNM_Ordered][0] == "곧 도착") {
								continue;
							} else {
								arrivalRouteElem.appendChild(briefArrivalRoute);
							}
							continue;
						}
						
						// 남은 정류장
						busStopData_html += '<br>'
						busStopData_html += "<i class=\"fas fa-arrow-left\"></i> ";
						busStopData_html += self.busStopData[JSON_arrivalRouteNM_Ordered][1];
						// 현재 정류장
						busStopData_html += self.busStopData[JSON_arrivalRouteNM_Ordered][2];

						arrivalRouteInfo.innerHTML = busStopData_html;
						arrivalRouteInfo.style.color = 'white';

						lineElem.appendChild(arrivalRouteNM);
						lineElem.appendChild(arrivalRouteInfo);
						if (self.busStopData[JSON_arrivalRouteNM_Ordered][0] == "곧 도착") {
							//do nothing
						} else {
							arrivalRouteElem.appendChild(lineElem);
							displayRouteCounter++;
						}
					}
				}
			// 이전에 추가한 요소들 삭제하고 다시 추가
			var busStopBoxElem = this.busStopBoxObjDict[self.busStopData['stopID']];
			busStopBoxElem.removeChild(busStopBoxElem.children[1]);
			busStopBoxElem.append(arrivalRouteElem);
			break;
		}
    },
    getBusArrivalData: function() {
        var self = this;
        for (i in self.config.busstop) {
            self.sendSocketNotification("BUSSTOP_DATA_REQUEST", self.config.busstop[i]);
        }
    },
})
