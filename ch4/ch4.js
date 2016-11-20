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

//crypto모듈
var crypto = require('crypto');

var shasum = crypto.createHash('sha1');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

console.log('crypto_hash : ', output);

//code4-12 crpyto모듈을 사용한 암호화
var key = '나만의 비밀키';
var input = 'password';

var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

console.log('원래 문자열 : '+input);
console.log('암호화 : ', cipheredOutput);
console.log('암호화 해제 : ', decipheredOutput);

//code4-13 File system 모듈 추출
var fs = require('fs');
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);

fs.readFile('textfile.txt', 'utf8', function (error, data) {
    console.log(data);
});

var data = 'hello world!!';

fs.writeFile('TestFileOtherWrite.txt', data, 'utf8', function (error) {
    console.log('write completed');
} );

fs.writeFileSync('TestFileOtherWriteSync.txt', data, 'utf8');
console.log('write sync completed');

//code4-17
try{
    data = fs.readFileSync('textfile.txt', 'utf8');
    console.log(data);
} catch (e){
    console.log(e);
}

try{
    fs.writeFileSync('textfile.txt', 'hoho', 'utf8');
    console.log('file write completed');
} catch (e){
    console.log(e);
}

//code4-18
fs.readFile('textfile.txt', 'utf8', function (error, data) {
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});

fs.writeFile('textfile.txt', 'write file async for error', 'utf8', function (error) {
    if(error){
        console.log(error);
    } else{
        console.log('file write completed');
    }
});

console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean('0'));
console.log(Boolean('false'));