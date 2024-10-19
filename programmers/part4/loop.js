let count = 5;
do {
  count++;
  console.log(count); // 6 출력됨 , do..while은 일단 한번을 실행하므로
} while (count < 3);

console.log("end");

const foo = { apple: "사과", banana: "바나나" };

for (let key in foo) {
  console.log(key);
}

for (let val in foo) {
  console.log(foo[val]);
}

const fo6o = (type) => {
  switch (type) {
    case "apple":
      console.log("🍎");
    case "banana":
      console.log("🍌");
      break;
    default:
      console.log("😊");
  }
  console.log("last");
};

fo6o("apple"); // 출력: 🍎 🍌 last
