var rint = require('./rint');

rint.timer.on('tick', function () {
    console.log('이벤트가 실행되었어요!');
});