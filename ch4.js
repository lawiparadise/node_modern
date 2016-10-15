var os = require('os');
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.getNetworkInterfaces());

//url모듈
var url = require('url');
var parsedObject = url.parse('http://www.hanb.co.kr/trackback/978-89-7914-874-9');
console.log(parsedObject);

//querystring 모듈
var querystring = require('querystring');
var parsedObject2 = url.parse('http://www.hanb.co.kr/book/look.html?isbn=978-89-7914-874-9');
console.log(querystring.parse(parsedObject2.query));

//위에건 잘 안쓰고 이걸씀
console.log(url.parse('http://www.hanb.co.kr/book/look.html?isbn=978-89-7914-874-9', true));

//util모듈
var util = require('util');
var data = util.format('%d + %d = %d', 52, 273, 52+273);
console.log(data);

////