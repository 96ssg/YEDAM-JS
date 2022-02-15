// function1.js

function addNumber(first, last) {
    var sum = first + last;
    console.log(`두수의 합: ${sum}`);
    return sum;
}

var sum1 = addNumber(10, 20); //function 실행문;
var sum2 = addNumber(100, 200);

var result = addNumber(sum1, sum2);
console.log(`최종합계: ${result}`);

result = addNumber('Hello', 'World');
console.log(result);


//function getMonthDay(month) {
// 1일의 요일정보를 반환해주는 기능.
// 일:0~토:6 구현
//  var monthDay = 0;
//   if (month == 1) {
//       monthDay = 6;
//   } else if (month == 2) {
//       monthDay = 2;
//    } else if (month == 3) {
//        monthDay = 2;
//   } else if (month == 4) {
//        monthDay = 5;
//    } else {
//        monthDay = 0;
//    }
//    return monthDay;
//}
//var monthDay = 0;

/*function getMonthDay(month) {
    switch (month) {
        case 1:
        case 10:
            monthDay = 6;
            break;
        case 2:
        case 3:
        case 11:
            monthDay = 2;
            break;
        case 4:
        case 7:
            monthDay = 5;
            break;
        case 5:
            monthDay = 0;
            break;
        case 6:
            monthDay = 3;
            break;
        case 8:
            monthDay = 1;
            break;
        case 9:
        case 12:
            monthDay = 4;
            break;
        default:
            null;
    }
    return monthDay;
}*/
function getMonthDay(month){
    var startVal = 6;
    var point =[];
    var prevVal = startVal;
    for(let i = 0; i < 12; i++){
        if(i>0){
            prevVal = (prevVal + getLastDate(i))%7;
        }
        point[i] = prevVal;
    }
    console.log(point);
    return point[month - 1];
}

function getLastDate(month) {
    var lastDate = 31;

    switch (month) {
        case 2:
            lastDate = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            lastDate = 30;
            break;
        default:
            lastDate = 31;
    }
    return lastDate;
}
var month = 3;
console.log(`${month}월의 마지막 날은 ${getLastDate(month)}일 입니다.`);