/**
 * Created by win on 2016-10-15.
 */

//filename, dirname
console.log('filename:'+__filename);
console.log('dirname:'+__dirname);

//time
console.time('alpha');
var output = 1;
for(var i=1 ; i<=10 ; i++){
    output *=i;
}
console.log('result :', output);
console.timeEnd('alpha');

//색깔지정
console.log('\u001b[33m', 'hi world');
console.log('\u001b[0m');

//process객체
process.argv.forEach(function (item, index) {
    console.log(index+' : '+typeof (item) + ' : ', item);
    
    if(item == '--exit'){
        var exitTime = Number(process.argv[index+1]);
        
        setTimeout(function () {
            process.exit();
        }, exitTime);
    }
});
console.log('- process.env:', process.env);
console.log('- process.version:', process.version);
console.log('- process.appVersion:', process.appVersion);
console.log('- process.arch:', process.arch);
console.log('- process.platform:', process.platform);
console.log('- process.memoryUsage:', process.memoryUsage());
console.log('- process.uptime:', process.uptime());

//exprot
var module = require('./module.js');
console.log('abs(-237) = %d', module.abs(-273));
console.log('circleArea(3) = %d', module.circleArea(3));

