/**
 * Async / Await
 */
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("정상");
    }, seconds * 1000);
  });

async function runner() {
  try {
    // await getProsmise(1); 이렇게 실행 할 수 없음 , resolve, reject는 .then이 필요하기 때문에
    // 그래서 변수를 선언하여 해당 변수에 할당 후 나머지 작업을 이어 나갈 수 있다.
    const result1 = await getPromise(1);
    console.log(result1);
    const result2 = await getPromise(2);
    console.log(result2);
    const result3 = await getPromise(1);
    console.log(result3);
  } catch (e) {
    console.log("---catch e---");
    console.log(e);
  } finally {
    console.log("---finally---");
  }
}

runner();

// 아래는 AI한테 resolve랑 reject를 같이 사용해볼만한 예제를 만들어달라고했음

const getPromise1 = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // 2. 예시로 seconds가 2일 때 에러를 발생시키도록 조건을 설정
      if (seconds === 2) {
        reject("에러 발생: 2초가 지났습니다."); // 3. 2초일 때 reject 호출 , .catch(e)로 전달
      } else {
        resolve("정상"); // 3-1. 정상적으로 실행
      }
    }, seconds * 1000);
  });

async function runner1() {
  try {
    // 1. 총 3개의 getPromise1()함수를 호출했고 각 1,2,1이라는 인자를 넘겼음
    const result1 = await getPromise1(1);
    console.log(result1); // 1초 후 "정상" 출력
    const result2 = await getPromise1(2); // 2초일 때 에러 발생
    console.log(result2);
    const result3 = await getPromise1(1);
    console.log(result3);
  } catch (e) {
    console.log("---catch e---");
    console.log(e); // 4. 에러 메시지 출력
  } finally {
    console.log("---finally---");
  }
}

runner1();
