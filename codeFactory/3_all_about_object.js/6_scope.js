/**
 * Scope
 */

var numberOne = 20;

function levelOne() {
  console.log(numberOne);
}

levelOne(); // 20

var numberOne1 = 55;
function levelOne1() {
  var numberOne1 = 40;
  console.log(numberOne1);
}

// levelOne1함수 내부에 우선순위를 두고 numberOne1 찾는다.
levelOne1(); // 40

// 현재 console.log()함수의 유효 범위(lexical)은 전역(?)window(?)에 속해 있고 우선순위를 두어 탐색
console.log(numberOne1); //55

console.log("--------------------------------");

// 모든선언은 가장 가까운 스코프에 있는 선언부터 활용하게 된다.
function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`levelTwo numberTwo : ${numberTwo}`); //99
    console.log(`levelTwo numberOne : ${numberOne}`); //40, levelTwo()함수에 numberOne이 없다면 외부함수 levelOne함수를 참조
  }

  levelTwo();
  console.log(`levelOne numberOne : ${numberOne}`); //40
}

levelOne();
console.log(numberOne);
// console.log(numberTwo); // 직접 접근이 불가능함.

console.log("-------------Lexical Scope----------------");

/**
 * JS - Lexical Scope :
 * 선언된 위치가 상위 스코프를 정한다   : 좀 더 쉽게 내 방식대로라면 선언이라는 단어보다 정의한 위치가 쉬울 듯
 *
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다.  : 이것도 좀 더 쉽게 내 방식대로라면 실행한 위치말고 호출한 위치
 */

var numberThree = 3;

// 2.functionOne실행
function functionOne() {
  // 3.numberThree = 10 할당
  var numberThree = 10;

  // 4. functionTwo 호출
  functionTwo();
}

// 5.functionTwo 실행
function functionTwo() {
  // 6. numberThree 출력
  console.log(numberThree); //7. 출력 값은 3 ,
  // JS는 호출한 지점(64번째줄)이 아닌 정의한 지점(68번째줄)으로 부터 스코프 작동
  // 만약 다이나믹 스코프라면 64번째줄에 스코프 작동해서 numberThree = 10;이 출력되었을 것이다.
}

// 1.functionOne 호출
functionOne();

console.log("================================");
/*
var 키워드는 함수 스코프를 가집니다. 
블록 스코프({} 안에 묶인 범위)가 아니라, 함수 스코프에서만 변수를 구분합니다. 
그래서 for 루프 안에서 var i를 선언하더라도, 
실제로는 같은 함수나 전역 스코프에서 선언된 i와 동일한 변수로 취급됩니다.
*/
var i = 999;

// 1.var타입으로 i변수 선언 시
for (var i = 0; i < 10; i++) {
  console.log(i);
}
// 2.i의 최종 값은 10
console.log(`i in global scope : ${i}`);

/*
let 키워드는 블록 스코프(block scope)를 따르기 때문에, 
for 루프 내에서 선언된 변수는 그 블록 안에서만 유효하고, 외부의 변수와는 별도로 동작합니다. 
이 특성 덕분에 let을 사용하면 for 루프 안에서의 i가 전역 스코프의 i에 영향을 미치지 않습니다.
*/

i = 999;
// block level scope
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 아래 코드에서는 999 출력
console.log(`i in global scope : ${i}`);
