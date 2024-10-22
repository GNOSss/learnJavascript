const Person = {
  name: "SONG",
  age: 32,
  getName: function () {
    console.log(this.name, this.age);
  },
};

const BORA = Object.create(Person);
BORA.name = "BORA";
BORA.getName();

const 객체 = {
  속성: function () {
    console.log("apple");
  },
  속성2() {
    console.log("banana");
  },
};

객체.속성();
객체.속성2();

var soo = "global";
function bar() {
  var soo = "local";
  car();
}
function car() {
  console.log(soo);
}
bar();
car();

console.log("--------------------------------------------------------");

// var soo = "global";
// function bar() {
//   var soo = "local";
//   console.log(soo);
// }
// function car() {
//   console.log(soo);
// }
// bar();
// car();
