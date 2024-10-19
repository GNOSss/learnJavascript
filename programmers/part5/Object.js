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
