/**
 * if and switch
 */


/**
if (조건문){
    수행문
}
else(if) (조건문){
    수행문
}
 */


let number = 6;
if (number % 2 === 1) {
    console.log('number의 값은 홀수 입니다.')
} 
else {
    console.log('number의 값은 짝수 입니다.')
}


let num = 18;
if (number % 2 === 0) {
    console.log('num의 값은 2의 배수 입니다.')
} else if (number % 3 === 0) {
    console.log('num의 값은 3의 배수 입니다.') // 2의 배수에서 true이므로 실행 안함
} else if (number % 4 === 0) {
    console.log('num의 값은 4의 배수 입니다.') // 2의 배수에서 true이므로 실행 안함
} else if (number % 5 === 0) {
    console.log('num의 값은 5의 배수 입니다.') // 2의 배수에서 true이므로 실행 안함
} else {
    console.log('num은 2,3,4의 배수가 아닙니다.') // 2의 배수에서 true이므로 실행 안함
}


/**
 * switch
 */

/**
 * switch(비교값){
 *     case [조건1]:
 *         [수행문];
 *         break;
 *     case [조건2]:
 *         [수행문2];
 *         break;
 *     default;
 *         break;
 * }
 */

const englishDay = 'sunday';    // 비교 변수

let koreanDay;  // 값을 할당할 변수

switch (englishDay) {
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    case 'wednesday':
        koreanDay = '수요일';
        break;
    case 'thursday':
        koreanDay = '목요일';
        break;
    case 'friday':
        koreanDay = '금요일';
        break;
    default:
        koreanDay = '주말';
        break;
}
console.log(koreanDay);