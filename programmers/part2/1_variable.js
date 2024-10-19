// variables , 변수

console.log(a);
try {
  console.log(b);
  console.log(c);
} catch {}

var a = 1;
const b = 2;
let c;

console.log(1 + 2);

const foo = {
  [Symbol.for("apple")]: `fruit`,
};

console.log(foo[Symbol.for("apple")]); //'fruit'

/*
위 코드에서 foo 객체는 다음과 같은 형태를 가집니다:

프로퍼티 키: Symbol.for("apple")
프로퍼티 값: 'fruit'
*/