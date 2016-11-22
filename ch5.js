//window.addEventListener('load', function(){});</script> load가 이벤트 이름(=이벤트 타입)
//5-2 exit이벤트
//process.addEventListener('exit', function () {

//}); //얘보단 on을 사용함
// process.on('exit', function () {

// });

//5-5 이벤트연결
process.on('exit', function () {
    console.log('안녕히 가거라');
});

process.on('uncaughtException', function (error) {
    console.log('예외 발생');
});

var count = 0;
var id = setInterval(function () {
    count++;
    if(count == 3){ clearInterval(id);}
    error.error.error();
}, 2000);

//5-7
process.setMaxListeners(15);

//5-8, 9
var onUncaughtException = function (error) {
    console.log('예외 발생');
    process.removeListener('uncaughtException', onUncaughtException);
};

process.on('uncaughtException', onUncaughtException);

setInterval(function () {
    error.error.error('^_^');
}, 2000);

//5-10
process.once('uncaughtException', function (error) {
    console.log('예외 발생');
});

setInterval(function () {
    error.error.error();
});

//5-12
process.on('exit', function () {
    console.log('안녕히 계세요');
});

process.emit('exit');
process.emit('exit');
process.emit('exit');

//5-13
process.exit();