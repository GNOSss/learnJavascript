/*
console.log() : HTML과 같은 형태의 트리 구조로 출력 , 태그 내용 출력 , 코드 출력
console.dir() : JSON과 같은 형태의 트리 구조 출력 , 태그 속성 출력 , 속성 출력
console.table() : 배열(Array)의 값들을 테이블 형태로 출력해줌
 */

/* 
.log() 입력한 값을 콘솔에 한줄 한줄 출력해줍니다.

log를 여러 곳에서 출력하면 시인성이 떨어지니
console.loh("temp >>>", temp) 이와 같이 작성하여 가독성 올리기
*/

const temp = "test";
console.log("temp >>>", temp);

// .dir() 속성을 확인 할 때 사용
const temp2 = { name: "sss", age: 36 };
console.dir(temp2);

function Person(name, age) {
  this.name = name;
  this.age = age;
}
console.dir(new Person("joy", 12));

//.table() 표 형식의 데이터를 테이블로 표현
// 색인과 값을 테이블 형태로 표현하기 때문에 , 컬렉션 데이터를 확인하는 용도로 적합합니다.

console.table([
  { id: 1, name: "aaa" },
  { id: 2, name: "bbb" },
  { id: 3, name: "ccc" },
]);

function sss() {
  return 1;
}

console.log(typeof sss); // function
console.dir(sss); // function

console.log("----------------------------------------------------------------");

function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "홍길동" };
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("받은 데이터:", data);
}

console.log("데이터 요청 시작");
fetchData(processData);
console.log("다음 작업 진행");

console.log("----------------------------------------------------------------");

function foo(args) {
  console.log(arguments);
}

foo(1, 2, 3, 4, 5, 6);
