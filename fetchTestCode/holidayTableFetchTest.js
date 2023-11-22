const xml2js = require("xml2js");
const moment = require("moment");

var parser = new xml2js.Parser();

const xml = `
<response>
<header>
<resultCode>00</resultCode>
<resultMsg>NORMAL SERVICE.</resultMsg>
</header>
<body>
<items>
<item>
<dateKind>01</dateKind>
<dateName>임시공휴일</dateName>
<isHoliday>Y</isHoliday>
<locdate>20231002</locdate>
<seq>2</seq>
</item>
<item>
<dateKind>01</dateKind>
<dateName>개천절</dateName>
<isHoliday>Y</isHoliday>
<locdate>20231003</locdate>
<seq>1</seq>
</item>
<item>
<dateKind>01</dateKind>
<dateName>한글날</dateName>
<isHoliday>Y</isHoliday>
<locdate>20231009</locdate>
<seq>1</seq>
</item>
</items>
<numOfRows>10</numOfRows>
<pageNo>1</pageNo>
<totalCount>3</totalCount>
</body>
</response>
`;
let parsedData;
let holidays = {};

// parse xml to json first.
parser.parseString(xml, function(err, result) {
    console.log(result.response.body[0].items[0]);
    parsedData = result.response.body[0].items[0].item;
})

// process json to get holidays
parsedData.forEach(function(val) {
    if (val.isHoliday[0] == 'Y') {
        holidays[val.locdate[0]] = [];
        holidays[val.locdate[0]] = val.dateName[0];
    }
})

console.log(holidays)