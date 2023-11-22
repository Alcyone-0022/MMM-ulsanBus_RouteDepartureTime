# MMM-ulsanBus_RouteDepartureTime

![ulsanBus_RouteDepartureTimeEx.png](/ulsanBus_RouteDepartureTimeEx.png)         

울산광역시 BIS 정보 API를 이용한 울산 버스 출발시간 표시 모듈입니다.   
MM2 module displays ulsan bus departure time, using ulsan bus information system API.

## 활용요청 필요한 API들
한국천문연구원 특일 정보 (평일/공휴일 판단에 필요)   
https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15012690   
울산광역시 BIS 정보   
https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15052669   

## Embedding MMM-ulsanBus_RouteDepartureTime
```shell
git clone https://github.com/ExyKnox/MMM-ulsanBus_RouteDepartureTime.git
cd MMM-ulsanBus_RouteDepartureTime
npm install
```
**config.js**
``` JS
{
  module: "MMM-ulsanBus_RouteDepartureTime",
  position: "top_center",
  config: {
    key: 'YOUR_KEY_HERE',
    routes: [124, 1421],
    excludedRoutes: ["124(율리공영차고지종점 방면)"],
    displayDirection: true,
    isVacation: false,
  }
},
```
   
## Settings

|Option|Description                          |
|------|-------------------------------------|
|**key**|공공데이터포털의 인증키를 입력합니다. Type: <code>String</code>|
|**routes**|버스 노선 번호를 입력합니다. Type: <code>Decimal value array</code>|
|**excludedRoutes**|표시하지 않을 노선을 입력합니다. **"노선번호(방면)"** 으로 특정 노선만 제외하고, 특정 방면 혹은 종점 ***(ex)율리공영차고지종점)*** 을 입력해서 해당 방향 모든 노선을 표시 제외할 수 있습니다. Type: <code>String</code>|
|**displayDirection**|노선번호 왼쪽 방면 표시 여부를 지정합니다. Type: <code>Boolean</code>|
|**isVacation**|방학 기간일 시 True, 아닐 시 False로 설정합니다. (방학 여부에 따라 버스 시간표가 다름, 방학 시간표 운영 여부는 [울산광역시버스운송사업조합 공지사항](http://www.ulsanbus.or.kr/bbs/board.php?bo_table=notice) 혹은 버스 차내 공지를 참고하세요. Type: <code>Boolean</code>|


