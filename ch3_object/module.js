//절대값 구하기
exports.abs = function (number) {
    if( 0 < number){
        return number;
    } else{
        return -number;
    }
};

//원의 넓ㄱ이 구하기
exports.circleArea = function (radius) {
    return radius * radius * Math.PI;
}