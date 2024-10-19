/*
 * Variables 변수 선언
 * 1) var -
 * 2) let -
 * 3) const -
 */

var name = "SSS";
console.log(name);

var age = 23;
console.log(age);

let house = "ddddd";
console.log(house);

// var,let은 구조체가 아님
// 선언 이후 변경 가능

// 15번째 줄 let house 선언을 이미 했고, 밑에 줄은 데이터 값을 변경했음
house = "vipvip";
console.log(house);

const newJeans = "뉴진스";
console.log(newJeans);

/* 이미 const newJeans를 선언하고 '뉴진스'라는 값을 할당했음, 업데이트 불가능
newJeans = '에스파';
console.log(newJeans)
*/

// var, let은 값 업데이트 변경가능
// const는 값 업데이트 가능

/*
* 선언과 할당
1) 변수를 선언하는 것  ex) var name =
2) 할당은 데이터를 입력하는 것 ex var name = 'SSS' <<
3) var,let 변수만 선언하고 값을 할당하지 않으면 값에 (undefined)
4) const 변수만 선언하고 값을 할당하지 않으면 오류 !
*/
