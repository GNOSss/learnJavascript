/**
 * Array Functions
 * 
 */


let aespaMembers = [
    '카리나',
    '윈터',
    '지젤',
    '닝닝',
    '카리나1',
]

console.log(aespaMembers);



console.log('-----------push-----------')
// push() function : 해당 array 끝에 추가 됨
console.log(aespaMembers.push('승수'));   // 7 aespaMembers array 길이를 출력
console.log(aespaMembers);               // aespaMembers array 데이터 출력



console.log('-----------pop-----------')
// pop() function : array 끝에 요소를 제거
console.log(aespaMembers.pop());// aespaMembers array 끝 데이터 꺼내옴
console.log(aespaMembers);      // aespaMembers array 데이터 출력


console.log('-----------shift-----------')
// shift() function : array 첫 요소를 제거
console.log(aespaMembers.shift());  // aespaMembers array의 0번째 요소를 제거
console.log(aespaMembers);      // aespaMembers array 데이터 출력



console.log('-----------unshift-----------')
// unshift() function : array 첫 요소에 추가
console.log(aespaMembers.unshift('karina'));  // aespaMembers array의 0번째 요소로 'karina'을 추가
console.log(aespaMembers);      // aespaMembers array 데이터 출력



console.log('-----------splice-----------')
// splice() function : array 요소들을 제거할 때 사용
console.log(aespaMembers.splice(0,3)); // aespaMembers array의 0번째 부터 2번째까지 (인덱스 '3'전까지) 제거
console.log(aespaMembers);      // aespaMembers array 데이터 출력   (닝닝, 카리나1)만 출력 [원본 array가 수정됨]



console.log('------------------------array를 변경하지 않는 방법----------------------------')


let aespaMembers2 = [
    'karina',
    'winter',
    '지젤',
    'ningning',
    '카리나34',
]


console.log('-----------concat------------')
// concat() function : push와 유사하지만 기존의 array를 수정하는게 아닌 복사한뒤 데이터 가공 후 출력하게 됨, 즉 원본은 해치지 않고 출력
console.log(aespaMembers2.concat('승수'));
console.log(aespaMembers2);   // aespaMembers2 array 데이터 출력


console.log('-----------slice-----------')
// slice() function : array 요소들을 제거할 때 사용  (splice랑 같은 기능, 원복 수정 유무만 차이나는..)
console.log(aespaMembers2.slice(0,3)); // aespaMembers array의 0번째 부터 2번째까지 (인덱스 '3'전까지) 제거
console.log(aespaMembers2);      // aespaMembers array 데이터 출력   [원본 array는 수정되지 않음]


console.log('---------spread operator ---------')
// spread operator :  변수 선언 : [...할당할 변수명] -> 할당한 array의 데이터 값이 이식 됨
//                    단, '...'을 사용하지 않을 경우 할당 할 array이가 리스트'[]'에 묶여서 들어가 접근성이 떨어짐
let aespaMembers3 = [
    ...aespaMembers2
];
console.log(aespaMembers3);

// 특이 케이스
let aespaMembers34 = aespaMembers2;
console.log(aespaMembers34);
console.log(aespaMembers34===aespaMembers2); // true 출력
console.log([...aespaMembers2] === aespaMembers); // false 출력 (메모리 공간이 아예 다름)



console.log('---------join----------')
console.log(typeof aespaMembers2.join()); // string
console.log(aespaMembers2.join());  //리스트(배열)를 벗겨내 모든 값들을 묶어버림
console.log(aespaMembers2.join('-')); // '-'로 구분하여 묶어버림
console.log(aespaMembers2.join('** ')); // '** '로 구분하여 묶어버림



console.log('---------sort(asc)----------')
// 오름차순 정렬 asc
aespaMembers2.sort(); // ㄱ~ㅎ 또는 A~z 순으로 
console.log(aespaMembers2);

// 내림차순 정렬 desc
aespaMembers2.reverse(); // ㅎ~ㄱ 또는 z~A 순으로
console.log(aespaMembers2);


console.log('----sort(심화)-----');

let numbers = [
    1,
    3,
    5,
    2,
    4,
    6
]
console.log(numbers);
// a,b 비교를 했을때
// 1) a를 b 보다 나중에 정렬하려면 (a를 뒤에 위치) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (a를 앞에 위치) 0보다 작은 숫자를 반환

numbers.sort((a,b)=>{
    return a > b ? 1 : -1 ;     // 함수 해석 : a가 b보다 크다면 '1'반환 , 아니면 '-1' 
});
console.log(numbers); // 1이면 뒤로 정렬 -1이면 앞으로 정렬 a가 크면 뒤로 빼는거 그니깐 asc


numbers.sort((a,b)=>a > b ? -1 : 1);    // 함수 해석 : a가 b보다 크다면 '-1'반환, 아니면 '1' 
console.log(numbers);   // -1 이면 앞에 정렬 , 1 이면 뒤로 정렬 , 큰걸 앞으로 그니깐 desc




console.log('---------map----------')
// map() function : array의 각 요소를 변환 / map은 배열에서만 사용 가능
console.log(aespaMembers2.map((x) => x.toUpperCase()));     // .map() 괄호안에 arguments 넣고  => x.toUpperCase() 하게 되면 배열에 있는 영문자가 모두 대문자로 바뀜
console.log(aespaMembers2.map((x) => `Asepa : ${x}`));      // 문자 삽입도 가능
console.log(aespaMembers2);      // aespaMembers2 array 데이터 출력   [원본 array는 수정되지 않음]

console.log('---------map + if----------')
console.log(aespaMembers2.map((x) => {  //aespaMembers2 변수에 있는 배열의 값들을  .map()함수를 통해서 추출
    if(x === 'winter'){                 //if 문으로 map함수의 parameter를 조건 'winter'로 검증
        return `Asepa : ${x}`;
    }else{                              //if 문 조건에 해당되지 않는 parameter는 else 구문으로 return 처리
        return `에스파 : ${x}`;         
    }
}));
console.log(aespaMembers2);      // aespaMembers2 array 데이터 출력   [원본 array는 수정되지 않음]




console.log('---------filter----------')
let test23 = [1,2,5,7,4,9,6,8];

console.log(test23.filter((x) => x % 2 === 0));     // 변수.filter((x) => 조건문 ) 해당 변수에서 특정 조건을 빼오는 함수


console.log('---------filter use GPT----------')
const numbers1 = [10, 20, 30, 40, 50];

// 요소(element), 인덱스(index), 원본 배열(array)을 모두 사용한 filter 예시
const result = numbers1.filter((element, index, array) => {
  console.log(`현재 요소: ${element}, 인덱스: ${index}, 배열 길이: ${array.length}`);
  
  // 조건: 배열의 인덱스가 짝수이고, 값이 20보다 큰 요소만 필터링
  return index % 2 === 0 && element > 20;
});

console.log(result); // [30, 50]




console.log('---------Find----------')
test22 = [12,23,24,35,40,55,75];
console.log(test22.find((x) => x % 5 === 0));  // filter는 모든 Element를 찾아주지만 , find는 조건에 해당하는 첫 element만 찾는다.


console.log('---------findIndex----------')
console.log(test22.find((x) => x % 5 === 0));  // filter는 모든 Element를 찾아주지만 , find는 조건에 해당하는 첫 element만 찾는다.





console.log('---------reduce----------')
number17 = [1,2,3,4,5]
console.log(number17.reduce((p,n) => p+n ,0)); // 함수 첫 시작은 초기값 '0'이 'p'에 입력된다.

// reduce 다르게 해석한 코드
let number18 = [1,2,3,4,5];
let sumsum = 0;     // 위 코드에서 마지막 '0'에 해당한다. 초기값이라고 생각하면 될듯 ?

for (let i = 0; i < 5; i++) {     
    sumsum += number18[i];  // 변수 sumsum은 reduce(p,n)의 'p'에 해당하며 코드 실행값을 저장하는 변수로 쓰임
}                           // +=number18[i]은 reduce(p,n)의 'n'의 역할을 한다 number18을 순회하면 한개씩 argument로 수행
console.log(sumsum); // 15


// reduce() 함수를 사용해서 espaMembers 변수에 있는 모든 스트링 값들의 길이를 더해서 반환하기
let espaMembers = ['카리나','윈터','닝닝','지젤'];
console.log(espaMembers.reduce((p,n) => p+n.length, 0));