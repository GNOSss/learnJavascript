/**
 * Hoisting
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기 한다.
 */

//순차적으로 실행되는 예
console.log("HELLO");
console.log("WORLD");

console.log(name); //undefined 출력, undefined는 변수를 선언 했으나 ! 값을 할당하지 않을때 나오는 문구
var name = "승수";
console.log(name);
/*
주석 기준 위 12~14줄 코드는 20~23줄과 같은 실행 값이 나옴
즉 var name은 인터프리터가 변수와 함수를 메모리 공간을 선언 전에 미리 할당한다. 그리고 값들을 차례로 할당
원리가 아래처럼 되는게 아니라 개념만 익혀두면 될 듯
*/
var names;
console.log(names);
names = "승승수";
console.log(names);

/*
console.log(riNa);
// ReferenceError: riNa is not defined << rina라는 변수가 선언이 되지 않았다.

console.log(riNa);
let riNa = '카리나';
// ReferenceError: riNa before initialization << riNa라는 변수를 초기화 하기전에 접근 할 수 없다고 한다.

*/
