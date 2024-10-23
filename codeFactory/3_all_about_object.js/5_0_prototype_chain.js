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

console.log("--------------------------------");

console.dir(yuJin.__proto__, { showHidden: true });
console.dir(yuJin.prototype); // undefined
console.dir(IdolModel.__proto__); // {}
console.dir(IdolModel.prototype); // {}

console.dir(IdolModel.__proto__, {
  showHidden: true,
});

console.log("--------------------------------");

console.dir(
  IdolModel.prototype.__proto__ //{ showHidden: true });
);

console.log("--------------------------------");

console.log(IdolModel.__proto__ === Function.prototype); // true , IdolModel의 부모는 Function 이고 (?)
console.log(Function.prototype.__proto__ === Object.prototype); // true  , Function.prototype의 부모는 Object다 (?)
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true , IdolModel의 prototype이 갖고 있는 __proto__ 는 Object.prototype과 같다
console.log(IdolModel.__proto__ === Object.prototype); //  false , 그러나 위의 예제와 달리 IdolModel의 __proto__는 Object.prototype과 다르다.

// 야매 팁 : __proto__는 상위 객체의 prototype을 찾아감 (ex 인스턴스 객체 > 자식클래스 > 부모클래스 > Function > Object) [부모의 상속 체인]
// 야매 팁 : prototype은 상위 객체의 prototype의 constructor를 바라보나 (?)

console.log("--------------------------------");

const GNOS = new IdolModel("GNOS", 1993);

console.log(GNOS.toString()); /* [object Object] 출력이됨 , 
이말은 GNOS이 .toString이 없다면 Error , not defined를 했어야했는데 .. GNOS이라는 객체는 .toString을 갖고 있으니 [object Object] 반환했던것 */

console.log(
  Object.prototype.toString()
); /*[object Object] 출력, 즉 인스턴스 객체의 __proto__는 class의 prototype을 상속받고 , 
또 Function, Object의 prototype을 상속받기에 Object prototype에 존재하는 메소드들을 접근할 수 있다 (?) */

// 코드 내용이 많아 새로운 페이지 만들어 버리겠음
