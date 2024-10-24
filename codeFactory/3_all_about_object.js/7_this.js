/**
 * this
 *
 * JS는 Lexical Scope를 사용하기때문에 함수의 상위 스코프가
 * 정의 시점에 평가된다.
 *
 * *****하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */

const testFunction = function () {
  return this;
};

// console.log(testFunction()); //global,window 객체를 반환함.
console.log(testFunction() === global); //true

const yuJin = {
  name: "안유진",
  year: 2003,
  sayHello: function () {
    return `안녕하세요 저는 ${this.name}입니다.`; // this키워드가 const yuJin에 바인딩
  },
};

console.log(yuJin.sayHello()); // 안녕하세요 저는 안유진 입니다.

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  };
}

const yuJin2 = new Person("안유진", 2003);
console.log(yuJin2.sayHello()); // Person를 통해 만들어진 yuJin2객체 또한 this가 Person객체을 바인딩?

Person.prototype.dance = function () {
  function dance2() {
    // function안에 function을 추가했음
    return `${this.name}이 춤을춥니다.`; // 이럴경우 this가 바인딩을 하지 못함
  }

  return dance2();
};
console.log(yuJin2.dance()); //undefined이 춤을 춥니다.반환됨
/* 객체의 메서드로 가장 상위레벨에다가 함수를 선언하면 << 위에서는 Perso.prototype.dance()까지만 해당됨
this가 자동을 실행하는 대상 객체에 맵핑이 되지만
만약 그 외 위치에 다가 함수를 선언하게되면 무조건 global 오브젝트에 맵핑되게 됨 */

/**
 *  this 키워드가 어떤걸 가르키냐는 세가지만 기억하면된다.
 *
 *  1) 일반 함수 호출할땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
 *  2) 메서드로 호출할땐 호출된 객체를 가리킨다.
 *  3) new 키워드를 사용해서 객체를 생성했을땐 객체를 가리킨다.
 */

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

console.log("---------apply,call,bind----------");
/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply ->  아규먼트를 리스트로 입력해야한다.
 */

function returnName() {
  return this.name;
}

console.log(returnName()); // undefined , this를 가리키는 대상이 없기 때문 , this가 올바르게 바인딩되지 않았음

const yuJin3 = {
  name: "안유진",
};

console.log(returnName.call(yuJin3)); //returnName 함수에 yuJin3 오브젝트를 .call을 사용하여 this를 바인딩 시킴
console.log(returnName.apply(yuJin3)); //returnName 함수에 yuJin3 오브젝트를 .call을 사용하여 this를 바인딩 시킴

/* .call 과 .apply의 차이점을 구분하는 예시 코드 */
function introduce(greeting, punctuation) {
  return `${greeting}, my name is ${this.name}${punctuation}`;
}

const yuJin4 = { name: "YuJin" };

console.log(introduce.call(yuJin4, "Hello", "!")); // 'Hello, my name is YuJin!'
console.log(introduce.apply(yuJin4, ["Hello", "!"])); // 'Hello, my name is YuJin!'

/* .call 과 .apply의 차이점을 구분하는 예시 코드 2 */
function multiply(x, y, z) {
  return `${this.name} / 결과값 : ${x * y * z}`;
}

//바인딩할함수.call|apply(인스턴스명, 다른Arg);
console.log(multiply.call(yuJin3, 3, 4, 5)); // 안유진 / 결과값 : 60
console.log(multiply.apply(yuJin3, [3, 4, 5])); // 안유진 / 결과값 : 60

/*
bind : call,apply는 this바인딩과 동시에 실행하는 시스템이고, bind는 this바인딩만 해놓고 변수에 할당할 수 있다.
즉, this바인딩만 해놓고 대기 시킬 수 있음
*/

const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc); // [Function: bound multiply]
console.log(laterFunc()); // 안유진 / 결과값 : 60
