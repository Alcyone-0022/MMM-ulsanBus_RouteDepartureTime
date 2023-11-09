# MMM-ulsanBus
MM2 module displays ulsan bus information.   

![ulsanBus.png](/ulsanBus.PNG)         

https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15052669   
울산광역시 BIS 정보 API를 이용한 울산 버스정보 모듈입니다.

## Embedding MMM-ulsanBus
``` JS
modules: [
  {
    module: "MMM-ulsanBus",
    position: "top_center",
    config: {
      busstop: {
        '법원(->공업탑R)': [193040605, 240],
        '법원(->무거삼거리)': [193040606, 240],
        '옥동주민센터(->옥동초)': [193040609, 240],
        '옥동주민센터(->법원)': [193040608, 240],
      },
      updateInterval: 30000,
      busStopUpdateInterval: 10000,
      maxDisplayRoute: 8,
      maxDisplayBusStops: 2,
      key: 'YOUR_KEY_HERE',
    }
  },
]
```
   
## Settings

**busstop:** 안에 들어가는 딕셔너리 객체들은 **'정류장 이름': [정류장 번호, 곧 도착 표시 시간(초 단위)]**   
**정류장 번호**는 카카오맵 정류장 검색 시 나오는 번호 앞에 **1930**을 붙이면 대충 잘 동작하지만,   
울산광역시 BIS 정보 API의 **버스정류장정보 조회** 오퍼레이션을 이용하시면 보다 확실한 정보를 얻을 수 있습니다.   

**updateInterval** : 울산 BIS정보 API에 버스정보를 요청하는 시간(ms 단위)   
**busStopUpdateInterval** : **busstop**에 등록한 버스 정류장 수가 **maxDisplayBusStops** 보다 많을 때, MM2에 표시되는 버스 정류장들을 순환 표시하는 시간(ms 단위)   
**maxDisplayRoute** : MM2에 표시할 정류장 당 최대 노선 개수(설정값을 초과할 시 **노선**과 **도착시간**만 간략하게 표시)   
**maxDisplayBusStops** : MM2에 표시할 최대 동시 표시 정류장 개수   
**key** : 울산광역시 BIS 정보 API 인증키
   
   
## Dependency

**python 3.7 이상**   
**ElementTree python 라이브러리**   
```
#pip install xml.etree.ElementTree
```
