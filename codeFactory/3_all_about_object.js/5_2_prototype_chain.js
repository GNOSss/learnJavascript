/**
 * getPrototypeOf , setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

// IdolModel 생성자 함수의 .prototype에 sayHello()함수 새성
IdolModel.prototype.sayHello = function () {
  return `${this.name} 인사를 합니다.`;
};

function FemaleModel(name, year) {
  this.name = name;
  this.year = year;
  this.dance = function () {
    return `${this.name} 이 ��을 ��니다.`;
  };
}

// coCo를 IdolModel로 인스턴스 생성
const coCo = new IdolModel("코코", 2016);
// mongSil을 FemaleModel로 인스턴스 생성
const mongSil = new FemaleModel("몽실", 2005);

console.log(coCo.__proto__); // coCo.__proto__에는 sayHello함수가 있음
console.log(coCo.__proto__ === IdolModel.prototype); // true
console.log(Object.getPrototypeOf(coCo)); // IdolModel.prototype와 동일하게 출력됨, coCo.__proto__도 같음
// Object.getPrototypeOf() 메서드는 지정된 객체의 프로토타입(가령 내부 [[Prototype]] 속성값)을 반환합니다.

console.log(coCo.sayHello());
console.log(mongSil.dance());
//console.log(mongSil.sayHello()); // FemaleModel의 인스턴스는 IdolModel.prototype의 메서드를 접근 할 수 없음

// FemaleModel이 IdolModel을 상속 받고 싶을때는 ???
// setPrototypeOf(인스턴스명, 상속받은 객체.prototype)
Object.setPrototypeOf(mongSil, IdolModel.prototype);
// FemaleModel에 없는 sayHello함수를 FemaleModel의 인스턴스 객체가 접근 가능하다.
console.log(mongSil.sayHello());

console.log(mongSil.constructor === FemaleModel); //false, 위에서 setPrototypeOf로 변경했기때문
console.log(mongSil.constructor === IdolModel); //true, 위에서 setPrototypeOf로 변경했기때문
console.log(mongSil.constructor); // [Function: IdolModel]

// MDN에서 말하는 setPrototypeOf의 예시
// Human 생성자함수
function Human(name, level) {
  this.name = name;
  this.level = level;
}
// SuperHero 생성자함수, .call이라는 정적메소드를 사용하여 Human의 this키워드 상속
function SuperHero(name, level) {
  Human.call(this, name, level);
}
// setPrototypeOf을 통해서 SuperHero.prototype에다가 Human.prototype을 상속받음
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Set the `[[Prototype]]` of `SuperHero.prototype`
// to `Human.prototype`
// To set the prototypal inheritance chain

Human.prototype.speak = function () {
  return `${this.name} says hello.`;
};

SuperHero.prototype.fly = function () {
  return `${this.name} is flying.`;
};

const superMan = new SuperHero("Clark Kent", 1);

console.log(superMan.fly());        // 둘 다 사용가능
console.log(superMan.speak());      // 둘 다 사용가능


