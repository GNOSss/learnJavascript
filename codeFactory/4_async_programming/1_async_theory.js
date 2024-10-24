/**
 * Async theory
 */
function longWork() {
  const now = new Date(); //현재 날짜와 시간을 반환 예)2024-10-24T11:11:10.699Z

  //     /**
  //      * milliseconds since epoch
  //      * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
  //      * 밀리초로 반환한다.
  //      */
  // getTime() : 1970년 1월 1일 00:00:00와 주어진 날짜 사이의 경과 시간을 밀리 초로 나타냄
  const milliseconds = now.getTime();
  const afterTwoSeconds = milliseconds + 2 * 1000; // milliseconds시간에 2초를 추가함

  while (new Date().getTime() < afterTwoSeconds) {} // 현재 시간이 afterTwoSeconds보다 빠를때 True

  console.log("완료");
}

// console.log("Hello");
// longWork();
// console.log("World"); // longWork()함수가 끝나는 2초동안 World를 출력하지도 못하고 대기하는 상황 발생

function longWork1() {
  //setTimeout()함수는 자바스크립트에서 기본으로 제공하는 비동기 함수 , 파라미터는 2개를 넣을 수 있다
  // 첫번째 파라미터는 함수를 넣을 수 있고, 두번째 파라미터 함수는 딜레이 시간(밀리 초)을 입력 할 수 있음
  setTimeout(() => {
    console.log("완완료");
  }, 2000);
}

console.log("비동기 hello"); // 출력순서 1번
longWork1(); // 출력순서 3번
console.log("비동기 world"); // 출력순서 2번

/*
자바스크립트 엔진은 싱글스레드입니다.
싱글스레드는 여러 작업을 동시에 수행할 수 없습니다.
자바스크립트는 하나의 Memory Heap과 Call Stack이 존재합니다.

그렇지만 비동기 함수는 콜백 함수나 Promise 등을 통해  << 위 코드에서 콜백함수는 setTimeout의 첫번째 인자 : 화살표 함수
비동기 작업의 완료 후 실행할 코드를 처리합니다.

비동기 작업(예: 타이머, 네트워크 요청)이 완료되면
그 작업에 대한 콜백 함수가 Task Queue 또는 Event Queue로 이동합니다. << 위 코드에서 콜백함수는 setTimeout의 첫번째 인자 : 화살표 함수

이후, Event Loop가 Call Stack이 비어 있을 때
Task Queue에 있는 콜백 함수를 Call Stack으로 옮겨 실행합니다.
즉, Event Loop는 Call Stack이 비었을 때 Task Queue에서 작업을 가져와 처리합니다.

-------------------- AI 요약 설명 --------------------

setTimeout의 두 번째 인자인 2000(밀리초)은 실제로 Task Queue로 이동하는 것이 아닙니다. 
이 값은 딜레이 시간을 나타내며, setTimeout 함수가 콜백 함수를 Task Queue에 추가하기 전에 대기해야 할 시간입니다.

작동 방식 설명
setTimeout 호출:

setTimeout이 호출되면, 자바스크립트 엔진은 지정된 딜레이(이 경우 2000 밀리초) 동안 대기합니다. 
이 과정은 메인 스레드에서 이루어지지 않으며, 이벤트 루프와 타이머가 처리합니다.

딜레이 시간:

2000 밀리초(2초)가 지나면, setTimeout이 콜백 함수를 Task Queue에 추가합니다. 
이 콜백 함수는 대기 상태가 되어있습니다.

Task Queue로 이동:

지정된 시간이 지나면 콜백 함수가 Task Queue에 추가됩니다. 이 시점에서 콜백 함수는 실행 대기 중입니다.

Event Loop:
Call Stack이 비어 있는 경우, 
Event Loop는 Task Queue에서 대기 중인 콜백 함수를 Call Stack으로 옮겨 실행합니다. 
이 과정은 비동기 작업이 완료된 후의 흐름입니다.

요약
2000 밀리초는 콜백 함수가 Task Queue에 추가되기 전에 기다려야 할 시간입니다.
Task Queue에 있는 것은 setTimeout이 완료된 후의 콜백 함수입니다.
따라서, 2000 밀리초는 Task Queue로 이동되는 것이 아니라, 콜백 함수가 Task Queue에 추가될 때까지 기다려야 하는 시간입니다.

**** 만약 Callstack에 다른 작업을 하고 있다면 EventLoop에서 대기하다가 들어가게 됩니다.
*/
