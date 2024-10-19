const foo = (value) => {
  if (value < 3) throw value; // 3) value가 3보다 작으면 예외 발생
  else console.log(value);
};

const bar = (value) => {
  // 1) value에 인자값 '2' 전달
  try {
    foo(value); // 2) foo 함수에 '2'를 다시 전달
  } catch (catchId) {
    // 4) 예외 발생 시 catch 블록 실행
    console.log("catch", catchId); // 'catch 2' 출력
    return catchId; // catchId 반환
  } finally {
    console.log("finally"); // 5) finally 블록 항상 실행
  }
};

bar(2); // 0) bar 함수 호출
bar(4);
