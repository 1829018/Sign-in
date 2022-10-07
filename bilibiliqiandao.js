
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api.live.bilibili.com/rc/v1/Sign/doSign?access_key=a595dd04f51735fe0abe1342a0c041a1&actionKey=appkey&appkey=5fd5a7d8bfd9b0e6&build=35100100&c_locale=zh-Hans_CN&device=pad&disable_rcmd=0&mobi_app=ipad&platform=ios&s_locale=zh-Hans_CH&sign=426ead65ee8188085df49e3ceb56a6d5&statistics=%7B%22appId%22%3A5%2C%22version%22%3A%223.51.0%22%2C%22abtest%22%3A%22%22%2C%22platform%22%3A2%7D&ts=1665039245`;
const method = `GET`;
const headers = {
'x-bili-trace-id' : `560149e330cbdbda7222ef198ae34090:7222ef198ae34090:0:0`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Buvid' : `Y34A173565119BCC4A10ACB2A5A7134EF1CD`,
'User-Agent' : `bili-hd2/35100100 CFNetwork/1335.0.3 Darwin/21.6.0 os/ios model/iPad Air 5G mobi_app/ipad build/35100100 osVer/15.7 network/2 channel/AppStore`,
'x-bili-mid' : `2077821652`,
'Cookie' : `Buvid=Y34A173565119BCC4A10ACB2A5A7134EF1CD; SESSDATA=6648ba0e%2C1680591191%2C02c987a1; DedeUserID=2077821652; DedeUserID__ckMd5=f70b4d814ca05029; _uuid=103310532C-F910A-C3103-8E103-656ED335C9CD42794infoc; bili_jct=a98823f267222752cac09c826ccdd9e3; sid=hdo9urfa; b_nut=1664896543; buvid3=5060023F-73AE-5681-4ED2-E7CEC821A2DA43102infoc; buvid4=6FA74085-FCB7-8C71-45AD-6D543B0DB36143102-222100423-gSrvr4O6pKVP8BeMu/Fcsw%3D%3D; buvid_fp=802840842135d31f6d28d24eda30553f`,
'Host' : `api.live.bilibili.com`,
'Session_ID' : `ffffffffd7960b43`,
'ENV' : `prod`,
'x-bili-aurora-eid' : `U1QGQVkGB1cCXg==`,
'APP-KEY' : `ipad2`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
