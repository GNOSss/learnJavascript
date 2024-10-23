function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `안��하세요! ${this.name}입니다.`;
  };
}

const yuJin2 = new IdolModel2("안유진", 2003);
const GNOS2 = new IdolModel2("_GNOS", 1993);

console.log(yuJin2.sayHello());
console.log(GNOS2.sayHello());

console.log(yuJin2.sayHello === GNOS2.sayHello); // false 두 객체의 sayHello 메소드가 서로 다른 함수 인스턴스를 참조하고 있기 때문
/*
new 키워드로 인스턴스를 생성할 때 마다, 각 인스턴스는 자신만의 sayHello 함수를 갖게 된다.
각 인스턴스가 고유한 함수(sayHello) 함수를 가지고 있으므로, 두 함수는 서로 다른 메모리 위치를 참조한다.
*/

//.hasOwnProperty 메서드에 인자를 넣어서 해당 객체 자체의 고유한 속성인지 or 상속 받은 속성이 아닌지 불리언으로 반환
console.log(GNOS2.hasOwnProperty("sayHello")); // true,  sayHello함수가 객체 고유한 속성인지 판단
//즉 IdolModel2 클래스로 상속받은 함수도 GNOS2의 고유한 함수로 생성된것

//// 아래 코드부터는 생성자함수 내부에 함수를 정의 하지 않고 외부에 함수를 생성할 것임

function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}

// IdolModel3함수 밖에다가 함수 선언한 것
IdolModel3.prototype.sayHello = function () {
  return `안��하세요! ${this.name}입니다.`;
};

const GNOS3 = new IdolModel3("GNOS3", 1993);
const KIM3 = new IdolModel3("KIM3", 1993);

console.log(GNOS3.sayHello()); // GNOS3.prototype.sayHello()은 실행 안됨

// 코드 16번째와 같은 테스트, 동일한 함수의 메서드(sayHello)인데 각 객체가 같은지 틀린지..
console.log(KIM3.sayHello === GNOS3.sayHello); // true,
/* 위 코드가 true인 이유는
프로토타입 기반 상속의 특성 때문입니다. 
이 방식으로 정의된 메소드는 모든 인스턴스가 공유하는 하나의 함수를 참조하게 됩니다
*/

//코드 23번째와 같은 테스트
console.log(GNOS3.hasOwnProperty("sayHello")); // false가 나옴 , 왜 ? IdolModel의 프로토 체인을 사용해서 가져온거라
// 즉, 생성자함수의 외부에서 .prototype을 이용해서 만들어진 메서드는 공유해서 사용하는 개념과도 같아서 인거 같다.

//그렇다면 static(정적)메소드를 접근할 때는 ?
function Person(name, year, place) {
  IdolModel3.call(this, name, year); //정적메서드 call은 주어진 this 값 및 각각 전달된 인수와 함께 함수를 호출합니다.
  this.place = place;
}

const COCO = new Person("Coco", 2016, "Incheon");
console.log(COCO);

// 또는 static(정적) 메서드를 만들 수 있따.
Person.hasMyCar = function (name) {
  return `${name}은 차가 있어요`; // 만약 this.name하면 "Person은 차가 있어요"라고 출력하게 됨
};

console.log(Person.hasMyCar(COCO.name)); //

// Overriding

function IdolModel4(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `안녕하세요 저는 인스턴스 메서드 입니다.`;
  };
}

IdolModel4.prototype.sayHello = function () {
  return `안하세요! 아이돌4의 ${this.name}입니다.`;
};

const GNOS4 = new IdolModel4("GNOSS", "1995");
console.log(GNOS4.sayHello()); // 77번째 코드가 나옴. 즉 외부에 프로토타입 메서드 만들어도 생성자함수에 정의한게 덮어씌워진다.
