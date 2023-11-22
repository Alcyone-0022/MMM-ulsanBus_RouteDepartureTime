# MMM-ulsanBus_RouteDepartureTime

![ulsanBus_RouteDepartureTimeEx.png](/ulsanBus_RouteDepartureTimeEx.png)         

https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15052669   
울산광역시 BIS 정보 API를 이용한 울산 버스 출발시간 표시 모듈입니다.   
MM2 module displays ulsan bus departure time, using ulsan bus information system API.

## Embedding MMM-ulsanBus_RouteDepartureTime
``` JS
{
			module: "MMM-ulsanBus_RouteDepartureTime",
			position: "top_center",
			config: {
				key: 'YOUR_KEY_HERE',
				routes: [124, 1421],
				excludedRoutes: ["124(율리공영차고지종점 방면)"],
				displayDirection: true,
			}
		},
```
   
## Settings

|Option|Description                          |
|------|-------------------------------------|
|**key**|공공데이터포털의 인증키를 입력합니다. Type: <code>String</code>|
|**routes**|버스 노선 번호를 입력합니다. Type: <code>Decimal value array</code>|
|**excludedRoutes**|표시하지 않을 노선을 입력합니다. **"노선번호(방면)"** 으로 특정 노선만 제외하고, 특정 방면 혹은 종점 ***(ex)율리공영차고지)*** 을 입력해서 해당 방향 모든 노선을 표시 제외할 수 있습니다. Type: <code>String</code>|
|**displayDirection**|노선번호 왼쪽 방면 표시 여부를 지정합니다. Type: <code>Boolean</code>


