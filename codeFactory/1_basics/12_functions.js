/**
 *  function -> 함수
 */

// 만약 2라는 숫잔에 * 10 / 2 % 3 을 string으로 변환해서
// 반환 받고 싶다면 어떻게 해야할까 ?


// 가장 기초적인 방법
console.log((2 * 10 / 2 % 3).toString());

console.log("================================");

/**
 * DRY - Don't Repeat Yourself
 * 중복되는 코드들을 줄이는게 핵심이여
 */

function calculate(a) {  // 함수에서 받는 형식 매개변수 는 parameters
    console.log((a * 10 / 2 / 3).toString());    
}

calculate(3);  // calculate() 함수를 호출
calculate(4);  // 함수 호출에 쓰이는 실제 매개변수의 값은 arguments
calculate(5);

console.log("================================");


function multiply(x, y) { //parameters는 x,y
    console.log(x * y);
}

multiply(2, 3); //arguments 는 각각 2,3
multiply(4, 5);

console.log("================================");


function multiply2 (x, y =10){
    console.log(x * y);
}

// multiply2 함수의 파라미터 y의 기본값 10으로 설정되어 , arguments를 설정하지 않으면 기본으로 10으로 설정됨
multiply2(2); //arguments x = 2, y = 10


console.log("================================");

/**
 * 반환, return 하기
 */


function multiply3 (x, y){
    return x * y;
}

const result = multiply3(7,8);      // 함수 multiple3에 파라미터 7,8을 보내여 결과값을 result 변수에 return함
console.log(result);

const result2 = multiply3(7,9);
console.log(result2);



console.log("================================");

/**
 * Arrow 함수 (화살촉?)
 */

//style1 : 기존 함수의 function 구문 삭제 타입(const,let)선언 후 함수명 = (parameters) => {함수 코드}
const multiply4 = (x,y) =>{
    return x * y;
}
const result3 = multiply4(5,6);
console.log(result3);


//style2 : 함수 실행 코드 영역 '{}'를 제거하여 사용
const multiple5 = (x,y) => x * y;
const result4 = multiple5(5,7);
console.log(result4);


//style3 : 함수의 parameter가 1개만 사용한다면 '()'를 삭제
const multiple6 = x => x * 2;
const result5 = multiple6(8);
console.log(result5);


//style4 
const multiple7 = x => y => z => `x : ${x} y : ${y} z : ${z}`;
console.log(multiple7(2)(5)(4));

// 위 style4 풀이
/*
function multiple7 (x) {
    return function(y){
        return function(z){
            return `x : ${x} y : ${y} z : ${z}`;
        }
    }
}
*/


//style5  multiple8이라는 변수에 이름 없는 함수를 할당
const multiple8 = function(x,y){
    return x * y;
} 
console.log(multiple8(4,5));



//style6  함수안에 arguments를 출력하게 되면 파라미터x,y,z에 인덱스값 부여되고 , 해당 arguments , 실매개변수의 값이 objects형식으로 출력됨
const multiple9 = function(x,y,z){
    console.log(arguments);     // [Arguments] {'x': x, 'y': y, 'z': z}
    return x * y * z;
}
console.log(multiple9(4,5,6)); // [Argumnets] {'0': 4, '1': 5, '2': 6}



//style7 
const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a,b) => a*b, 1);
}

console.log(multiplyAll(3,4,5,6,7,8,9,10));


// immediately invoked function
//style8 함수 즉시 실행 , 문법 : 함수 이름 없이 (function(parameters) 코드 )(arguments)
(function(x,y) {console.log(x * y);})(3,4)


console.log(typeof multiply);   // function
console.log(multiply instanceof Object);  // true , 함수는 기본적으로 Object


console.log("================================");

