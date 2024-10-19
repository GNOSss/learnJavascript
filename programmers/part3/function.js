console.log("----------함수 생성 방법----------");

// 1.함수 선언문

function test(arg) {
  console.log(arg);
}

test(23);

// 2.함수 표현식

const test2 = function (arg) {
  console.log(arg);
};

test2(24);

// 3. Function 생성자 함수
const test3 = new Function("console.log('foo3')");

test3();

// 4. 화살표 함수 표현식
const foo = (arg) => {
  console.log(`foo = ${arg + 3}`);
};

foo(4);

console.log("----------함수의 여러 형태----------");
// 1.IIFE 즉시 실행 함수
/*
이 코드는 다음과 같이 동작합니다:
function foo11() { ... } 부분은 함수를 정의합니다.
이 함수 정의를 괄호 ( ... ) 로 감싸서 표현식으로 만듭니다.
마지막의 () 는 이 함수를 즉시 호출합니다.
이 코드를 실행하면 콘솔에 'sss'가 출력됩니다.
 */

(function foo11() {
  console.log("sss");
})();

// 2. 재귀함수
function foo22(arg = 0) {
  if (arg >= 4) return;
  console.log(arg);
  foo22(arg + 1); // 자기 자신을 호출합니다.
}
foo22();

// 3. 중첩함수

function foo33(arg) {
  function foo44() {
    // foo44 함수 선언
    console.log(arg); // 외부함수의 parameters(arg = 2) 가져와서 출력
  }
  foo44(); // foo44 함수 호출
}

foo33(2); // 인자 '2'를 foo33함수 파라미터로 전달

// 4. 콜백함수 (A함수 매개변수에 B함수를 넣는데 이때 B함수가 콜백함수)

function foo(arg) {
  // 3) parameter애 화살표 함수(이름 없는) 명령문 들어감
  arg(); // 4) 화살표 함수 실행되어 리턴됨
}

foo(() => {
  // 1) foo() 호출
  console.log(1); // 2) 이때 화살표 함수(이름 없는)를 arg로 전달
});
