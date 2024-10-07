/**
 * Operators (연산자)
 */



/**
 * 산술연산자
 * 
 * 1) add (더하기)
 * 2) subtract (빼기)
 * 3) multiply (곱하기)
 * 4) divide (나누기))
 * 5) 나머지
 */


console.log(10+10); // 더하기
console.log(10-10); // 빼기
console.log(10*10); // 곱하기
console.log(10/4); // 나누기(소수포함)
console.log(10%3); // 나눈 나머지


console.log(20 * (10+10)); //연산자 우선 순위 '()' > *


console.log('--------------------------------------------------------')

/**
 * 증가 및 감소
 */

let number = 1;

number ++;
console.log(number);

number --;
console.log(number);



/**
 * 연산자의 위치
 */

let result = 1;
console.log(result);

result = number++;          // result는 먼저 컴파일되었던 34번 라인의 값을 할당 , 그리고 number의 값 증가
console.log(result,number);


result = ++number;          // 연산자(++)가 변수명(number)앞에 있으면 먼저 증가 시키고 해당 변수(number)의 값을 result에 할당
console.log(result,number);



console.log('--------------------------------------------------------')
/**
 * 숫자 타입이 아닌 타입에 +,- 사용하면 어떻게 될까 ?
 */

let sample = '99';
console.log(+sample); // 99
console.log(typeof +sample); // number    // 변수의 값이 Number형이 가능하다면 '+'연산자를 앞에 같이 출력하면 Number형이 출력됨
console.log(typeof sample); // string

sample = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0
console.log(typeof +sample); // number

sample = '카리나';
console.log(+sample); // NaN >> Not a Number

sample = '99';
console.log(-sample); // -99
console.log(typeof -sample); // number



console.log('--------------------------------------------------------')
/**
 * 할당 연산자  (assignment operator)
 */

number = 100;
console.log(number); // 100

number += 10;
console.log(number); // 110

number -= 10;
console.log(number); // 100

number *= 10;
console.log(number); // 1000



console.log('--------------------------------------------------------')
/**
 * 비교 연산자
 * 
 * 1)값의 비교
 * 2)값과 타입의 비교
 */

console.log(5 == 5);    // true
console.log(5 == '5');  // true
console.log(0 == '');   // true
console.log(true == 1); // true
console.log(false == 0);// true
console.log(true == '1');// ture

console.log(5 === '5');   // false ,  (===) 3개 사용하면 타입이 달라서 false 반환

console.log('--')

// 자주 사용
console.log(5 === 5);    // true
console.log(5 === '5');  // false
console.log(0 === '');   // false
console.log(true === 1); // false
console.log(false === 0);// false
console.log(true === '1');// flase

console.log('--')

console.log(5 != 5);    // false >> 같은데 아니라고함
console.log(5 != '5');  // false >> 같은데 아니라고함
console.log(0 != '');   // false >> 같은데 아니라고함
console.log(true != 1); // false >> 같은데 아니라고함
console.log(false != 0);// false >> 같은데 아니라고함
console.log(true != '1');// flase  >> 같은데 아니라고함

console.log('--')

// 자주 사용
console.log(5 !== 5);    // false
console.log(5 !== '5');  // true >> 타입이 다르다
console.log(0 !== '');   // true >> 값이 다르다
console.log(true !== 1); // true >> 타입이 다르다
console.log(false !== 0);// true >> 타입이 다르다
console.log(true !== '1');// true >> 타입이 다르다


console.log('--------------------------------------------------------')
/**
 * 대소 관계 연산자
 */
console.log(100 > 1);   // true
console.log(100 >= 1);  // true
console.log(100 < 1);   // false
console.log(100 <= 1);  // false


console.log('--------------------------------------------------------')

/**
 * 삼항 조건 연산자
 */

let a = 30;
let b = 20;

// [비교조건문] ? [true일때 수행문] : [false일때 수행문]]
console.log(a > b ? '10이 0보다 크다' : '10이 0보다 작다');



console.log('--------------------------------------------------------')
/**
 * 논리 연산자
 * 
 * 1) && 모두 참일때 true, 하나라도 false면 false
 * 2) || 하나라도 참일때 true, 모두 false면 false
 */

console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true);  // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false


console.log(a > b && 20 < 20); //false why? 둘다 true여야 한다.
console.log(a > b || 20 < 20); //true why? 하나만 true이면 true다.



console.log('--------------------------------------------------------')
/**
 * 단축평가 (short circuit evaluation)
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */

console.log(true && '카리나');      // &&에 좌측이 true면 우측
console.log(false && '카리나');     // &&에 좌측이 false면 좌측
console.log(true || '카리나');      // ||에 좌측이 true면 좌측
console.log(false || '카리나');     // ||에 좌측이 false면 우측

// 첫 ||의 좌측이 false면 우측으로 이동 , &&의 좌측이 true면 우측이동 ..... 마지막 '카리나'까지 감
console.log(false || true && false || '카리나');



console.log('--------------------------------------------------------')
/**
 * 지수 연산자
 */
console.log(3 ** 3);    //27
console.log(7 ** 4);    //2401



console.log('--------------------------------------------------------')
/**
 * null 연산자 ('??')
 */

let name;
console.log(name); // undefined

name = name ?? '승수'       // ??에 좌측이 null 또는 Undefined면 우측값 반환
console.log(name);
name = name ?? '코코'       // 상단에 '승수' 값이 이미 할당되었음, 재할당 불가능
console.log(name);

let name2;
name2 ??= '보라';       // 할당연산자 (+=,-=,*=) 응용버전
console.log(name2);