/**
 * Callback
 */
function waitAndRun() {
  setTimeout(() => {
    console.log("끝");
  }, 2000);
}

// waitAndRun(); // 2초뒤 "끝" 출력

function waitAndRun2() {
  setTimeout(() => {
    console.log("1번 콜백 끝");
    setTimeout(() => {
      console.log("2번 콜백 끝");
      setTimeout(() => {
        console.log("3번 콜백 끝");
      }, 2000);
    }, 2000);
  }, 2000);
}

// waitAndRun2();

/**
 * Promise
 * resolve(value) -> 비동기 작업이 성공했을 때 호출하여 Fulfilled상태로 변경하고 결과를 전달
 * reject(error) -> 비동기 작업이 실패했을 때 호출하여 Rejected 상태로 변경하고 오류를 전달합니다.
 */
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("완료"); // << resolve(value)
  }, 2000);
});

// 아래 코드 39~43줄의 구문은 위 33번째 resolve()의 파라미터("완료")를 받아서 실행되는 코드들이다.
// 헷갈릴수도 있을텐데 timeoutPromise객체에 대해서 .then메서드를 사용중인 것.
// timeoutPromise.then((res) => {
//   // then()에 인자값은 아무렇게나 설정해도 상관없음
//   console.log("---then---");
//   console.log(res);
// });

// seconds라고 작성된 곳은 getPromise()함수 호출할때 인자가 들어 올 자리
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // if(xxx){
      //     resolve('성공')
      // }else{
      //     reject('에러');
      // }
      resolve("seungsoo");
    }, seconds * 1000); // 인자로 받은 seconds를 시간 적용에 사용하고 있다.
  });

getPromise(3)
  .then((res) => {
    // 위 53번째에서 resolve()의 파라미터를 받아서 61번째 console.log()의 인자로 넘김
    console.log("--- first then ---");
    console.log(res);
  })
  .catch((res) => {
    // .catch는 Promise구문에서 reject()를 사용하게되면 인자를 받아서 사용하게 됨
    console.log("--- first catch ---");
    console.log(res);
  })
  .finally(() => {
    console.log("--- finally ---");
  });

// Promise.all([인스턴스객체호출1, 인스턴스객체호출2, ...]).then(()=> {}); 을 사용하여 다중으로 사용가능
// 단, 아래 코드에서는 1초 , 4초, 1초걸리는데 1초가 먼저 처리되고 4초를 마지막으로 다 같이 console.log가 출력됨
Promise.all([getPromise(1), getPromise(4), getPromise(1)]).then((res) => {
  console.log(res);
});
