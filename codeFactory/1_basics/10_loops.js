/**
 * Loops
 * 
 * 1) for
 * 2) while
 */


/*
for (기준 변수; 조건; 루프조건){코드}
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('--------------------------------------------------------')

for (let i = 10; i > 0 ; i--) {
    console.log(i);
}

console.log('--------------------------------------------------------')

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

console.log('-----------------------for---------------------------')
// *을 이용해서 6*6의 정사각형을 출력해라

// 방법1
let square = '******';

for (let i = 0; i < 6; i++) {
    console.log(square);
}

// 방법2
let square2 = '';
let side = 6;

for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
        square2 += '*';
    }
    square2 += '\n';
}
console.log(square2);



console.log('-------------------------for..in------------------------')

/**
for ... in <<키 값을 꺼내 올 수 있음
 */

const riNa ={
    name : '카리나',
    year : 2000,
    group : 'sm'
}

// riNa오브젝트 객체를 for...in 을 통해서 키값을 추출
for(let key in riNa){
    console.log(key);
}


console.log('----------------------for..in--------------------------')

const aespaMember = ['윈터','카리나','지젤'];

// aespaMember 리스트를 for...in 을 통해서 인덱스값(0,1,2....) 또는 값을 가져올 수 도 있음
for(let key in aespaMember){
    console.log(key);
    console.log(aespaMember[key]);
    console.log(`${key} :  ${aespaMember[key]}`); // 인덱스 번호값과 데이터 값 나올 수 있음
}



console.log('-------------------for..of-----------------------')
/**
for....of

리스트, 배열에 사용가능
 */

for(let key of aespaMember){
    console.log(key);  // 79번째랑 비교하면 이해 쉬움 , aespaMember리스트를 for...in 사용시 기본적으로 인덱스 값이 나옴,
                       // for ... of 사용시 기본적으로 인덱스 값이 나옴
}


/*     정리하자면   for..of는 배열에 값을 빼줌 , for..in은 인덱스 값을 빼줌  */




console.log('-----------------------while-----------------------')
/**
 * While
 */


/**
 * while (실행 여부 조건) {실행 코드}
 */

let number = 0;

while(number < 10){
    number ++;
    console.log(number);
}


console.log('-------do..while-----------');
/**
 * do...while
 */

/**
 * do {실행 코드}
 * while(실행 여부 조건);
 */

asdf = 0;

do{
    asdf++;
    console.log(asdf);
}while(asdf < 10);


console.log('--------break---------');
/**
 * break
 */

for(let i = 0; i < 10; i++){
    if(i===5){
        break; // i가 5번이 되면 for문 중지함
    }
    console.log(i)
}

console.log('-----');
number = 0;
while(number < 10){
    if(number === 4){
        break;
    }
    number++;
    console.log(number);
}



console.log('--------continue---------');
/**
 * continue
 */

console.log('----continue with for-----')
for(let i = 0; i < 10; i++){
    if(i===5){
        continue; // i가 5번이 되면 for문의 i++는 실행X, i++는 6번째로 실행 (skip)
    }
    console.log(i)
}


console.log('----continue with while-----')
number = 0;
while(number < 10){
    number++;

    if(number === 5){ // i가 5번이 되면 for문의 i++는 실행X, i++는 6번째로 실행 (skip)
        continue;
    }
    console.log(number);
}



