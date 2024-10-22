/**
 * Prototype
 */

const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__); //[Object: null prototype] {}

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype); // 출력 : {}

console.dir(IdolModel.prototype, {
  showHidden: true,
});
/*      위 console.dir(IdolModel.prototype, {showHidden: true});의 출력 값
<ref *1> {
  [constructor]: [Function: IdolModel] {        << constructor가 존재함, function으로 IdolModel이 있음
    [length]: 2,                                
    [name]: 'IdolModel',
    [arguments]: null,
    [caller]: null,
    [prototype]: [Circular *1]
  }
}
*/
// circular reference (서로가 서로를 참조하는가)
console.log(IdolModel.prototype.constructor === IdolModel); // 주석처리된 constructor와 검증하기 위해 출력 해 봄 , true 반환
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); //true

console.log("-----객체 생성 후 테스트-----");

const yuJin = new IdolModel("안유진", 2003);

console.log(yuJin.__proto__); // {} 반환
console.log(yuJin.__proto__ === IdolModel.prototype); // true, yujin이라는 객체와 IdolModel클래스의 프로토타입 인가? 라는 코드

console.log(testObj.__proto__ === Object.prototype); // true

console.dir(yuJin.__proto__);
console.dir(yuJin.prototype);
console.dir(IdolModel.__proto__);
console.dir(IdolModel.prototype);

console.dir(IdolModel.__proto__, {
  showHidden: true,
});

console.log("--------------------------------");

console.dir(IdolModel.prototype.__proto__, { showHidden: true });
