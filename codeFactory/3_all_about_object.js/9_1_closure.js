/**
 * Closure
 *
 * A closure is the combination of a function and the lexical
 * environemnt within which that function was declared
 *
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 *
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다."
 */

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber();
}

// console.log(number);
/*위 코드가 실행되지 않는 이유는 number 변수가 getNumber 함수의 내부에 선언된 지역 변수이기 때문입니다. 
JavaScript에서 변수의 스코프는 변수가 어디에서 선언되었는지에 따라 결정됩니다. 
여기서는 number가 getNumber 함수 내부에서 선언되었으므로, 
이 함수의 지역 스코프에만 접근할 수 있습니다*/

console.log(getNumber()); // global환경에서 접근할 수 있는 getNumber()함수를 통해서 number의 값을 받아 올 수 잇음

console.log("--------------------------------");
function getNumber1() {
  var number = 10;

  function innerGetNumber1() {
    return number;
  }

  return innerGetNumber1; // 19번째 코드와 달리 return에 함수명 + '()'대괄호를 붙히지 않음
  // 즉, innerGetNumber1의 함수를 실행해서 return number를 받아오는게 아니라 , innerGetNumber1함수 자체를 return받음
}

const runner = getNumber1(); // runner변수에는 innerGetNumber1함수 자체를 할당됨
// 이미 getNumber()에서 execution context(실행 컨텍스트)가 끝난 상황?이랍니다.

console.log(runner); // [Function: innerGetNumber1]
console.log(runner()); // 10 , 변수에 함수가 할당되었고 그 함수를 실행시키는 코드 : 변수명 + '()'대괄호

/**
 * 1) 데이터 캐싱
 */
function cacheFunction() {
  // 아래 계산은 매우 오래걸린다는 가정을 했을때
  var number = 10 * 10;

  function innerCacheFunction(newNumb) {
    return number * newNumb;
  }

  return innerCacheFunction;
}

/* runner2 변수에서 cacheFunction()실행하게 되고 함수 내부에서 number라는 변수가 계산됨(100)
이후 이 값(number의 100)을 기억하는 클로저(closure)를 생성하고 innerCacheFunction(newNumb)는
number * newNumb을 계산하는 함수가 됨. 이후 runner2를 통해 이 클로저를 사용할 수 있게 된다.*/
const runner2 = cacheFunction(); // 클로저가 생성된(number의 값을 저장한) innerCacheFunction(newNumb)함수가 할당됨
console.log(runner2(10));
console.log(runner2(20));

function cacheFunction2() {
  var number = 99;

  function increment() {
    number++;
    return number;
  }

  return increment;
}

const runner3 = cacheFunction2(); // cacheFunction2함수를 실행하여 number = 99를 저장한 클로저가 생성되고 return increment 함수가 반환
console.log(runner3()); // runner3는 increment함수를 가리키고, number라는 변수를 기억하는 클로저가 유지된다.
console.log(runner3()); // 호출될때마다 동일한 Number변수에 접근하게 됩니다.
console.log(runner3()); // 클로저가 동일한 number변수를 계속 참조하고 있기 때문에 값이 계속해서 증가됨
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보 은닉 (캡슐화)
 */
function Idol(name, year) {
  this.name = name; //name: this.name을 사용해 객체의 속성으로 공개적으로 설정됩니다.
  // 즉, this.name은 Idol 객체의 외부에서 접근이 가능합니다.

  var _year = year; //함수 내부의 지역 변수입니다.
  // 이 변수는 Idol 생성자 내부에서만 접근 가능하고, 외부에서는 직접적으로 접근할 수 없습니다.
  // 이렇게 비공개 상태로 변수를 관리하는 것이 JavaScript에서 비공개 속성을 구현하는 방법 중 하나입니다.

  this.sayNameAndYear = function () {
    return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
  };
}

const yuJin = new Idol("안유진", 2003);
console.log(yuJin.sayNameAndYear()); // sayNameAndYear함수의 return 그대로 잘 나옴

console.log(yuJin.name);
console.log(yuJin._year); // undefined , _year는 함수 내부의 지역 변수로 선언되어 외부에서 접근불가
// 직접적이 참조가 불가능하니 , sayNameAndYear함수처럼 간접적?으로 접근하게 된다.
