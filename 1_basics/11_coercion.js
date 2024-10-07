/**
 * 타입 변환
 * type conversions
 * 
 * 1) 명시적(강제 변환(?))
 * 2) 암묵적
 * 
 */


let age = 32;


// 명시적
let stringAge = age.toString();     //let stringAge 변수에 let age의 값을 넣는데 방식은 age.toString(); << toString()함수를 사용한거임
console.log(typeof stringAge, stringAge);


// 암묵적

let test = age + '';    // age는 number 타입인데 뒤에다가 빈 칸 ('')을 더 해주면 string 타입으로 변함
console.log(typeof test, test);

let test2 = '98' + 2;
console.log(typeof test2, test2);       // string으로 결합됨 

let test3 = '98' * 2;
console.log(typeof test3, test3);       // string * number 의 결과 타입은 number로 계산된다

let test4 = '98' - 2;
console.log(typeof test4, test4);       // string - number 의 결과 타입은 number로 계산된다




/**
 * 추가 명시적 변환
 */

console.log(typeof(99).toString());
console.log(typeof(true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());


//숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1')



console.log('----------------boolean----------------------')

/**
 *  boolean 타입으로 변환
 */

console.log(!'x');      //false -> string에 값이 있는데 (!) 한개라면 false
console.log(!!'x');     //true -> string에 값이 있으면 true

console.log(!0);        //true -> number형에 1은 true 0은 false
console.log(!!0);       //false -> 0은 false지만 !! 이므로 true
console.log(!!'false'); //true
console.log(!!false);   //false
// undefined, null도 기본적으로 false
// 값이 존재한다면 true로 생각하는게 좋으르듯 ???

console.log(!!{});      //object도 true
console.log(!![]);      //array는 true

// 아무 글자도 없는 string
// 값이 없는 경우
// 0
// 위 3가지는 false는 반환한다고 생각하자




