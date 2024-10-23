function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
console.log(add5(3)); // 8

////////////////////////////////////////////////////////////////

function makeCounter() {
  let num = 0;

  return function () {
    return num++;
  };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1 , 내부의 익명함수가 외부 makeCounter의 lexical환경을 기억하고 있으므로 1이 출력됨
console.log(counter()); // 2

////////////////////////////////////////////////////////////////

function getNumber() {
  let number = 5;

  function innerGetNumber() {
    return ++number;
  }
  function innerGetNumber2() {
    return ++number;
  }
  function innerGetNumber3() {
    return number++;
  }

  return [innerGetNumber, innerGetNumber2, innerGetNumber3];
}

var [coco, seungsoo, bora] = getNumber();

console.log(coco); // [Function : innerGetNumber]
console.log(coco()); // 5 ,

console.log(seungsoo());
console.log(bora());
/*
이 코드에서 runner와 runner()의 차이는 함수 자체와 함수 호출의 결과를 나타냅니다.

runner
정의: runner는 getNumber() 함수의 반환값을 저장합니다.
반환값: getNumber() 함수는 내부에 정의된 innerGetNumber 함수를 반환합니다. 
따라서, runner는 이 innerGetNumber 함수 자체를 참조하게 됩니다.
출력: console.log(runner);는 함수 객체를 출력합니다. 
즉, [Function: innerGetNumber]라는 출력은 runner가 함수 객체임을 나타냅니다.

runner()
정의: runner()는 runner에 저장된 함수를 호출하는 표현입니다.
호출 결과: innerGetNumber 함수가 실행되면서, 
이 함수는 클로저로서 자신이 선언된 환경(즉, getNumber 함수의 실행 컨텍스트)에 있는 
number 변수를 참조합니다.
출력: console.log(runner());는 innerGetNumber 함수가 반환하는 값인 5를 출력합니다. 
이는 클로저 덕분에 number 변수의 값을 기억하고 접근할 수 있기 때문입니다.

*/

setTimeout(() => {
  console.log("첫 번째 메시지");
}, 5000);
setTimeout(() => {
  console.log("두 번째 메시지");
}, 3000);
setTimeout(() => {
  console.log("세 번째 메시지");
}, 1000);

// 콘솔 출력:

// 세 번째 메시지
// 두 번째 메시지
// 첫 번째 메시지
