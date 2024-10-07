/**
 *  copy by value : 값에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive값(원시값)은 copy by value 다.
 * 1-1) primitive : 원시값 : 더 이상 나눌 수 없는 기본 데이터 유형 , string, number, boolean, Undefined, Null, Symbol ....
 * 
 * 
 * *  copy by reference : 참조에 의한 전달
 * 2)객체, 배열는 copy by reference이다.
 * 2-1) 메모리에서 객체의 위치를 참조함 , 즉 변수는 객체의 참조를 가지고 있고 이를 통해서 실제 객체에 접근
 * 2-2) 객체(Object) , 배열(Array) , 함수(Function) ..
 * 
 */


// copy by value 예시
console.log("-----------copy by value------------");

let original = '안녕하세요';
let clone = original;

console.log('original:', original);
console.log('clone:', clone);       // '안녕하세요'의 값이 clone에 복사됨 즉, clone은 '안녕하세요'라는 독립적인 원시 값을 가지게 됩니다.

console.log('-------------');

clone += ' 카리나 입니다.';              // 문자열을 수정하는 것이 아니라, 새로운 문자열 '안녕하세요 카리나 입니다.'를 생성하고 이를 clone에 다시 할당
console.log('original:', original);
console.log('clone:', clone);


// copy by reference 예시
console.log("-----------copy by reference------------");

let originalObj = {
    name: '카리나',
    group: 'sm'
};

let cloneObj = originalObj;

console.log('originalObj:', originalObj);
console.log('cloneObj:', cloneObj);       

console.log('-------------');

originalObj['group'] = 'ssmm';
console.log('originalObj:', originalObj);   // copy by reference, 문자열을 수정하는게 아니라 , 
console.log('cloneObj:', cloneObj);         //cloneObj는 originalObj를 참조하는 것이므로 originalObj가 변경되면 cloneOjb도 변경 된 값을 참조

console.log(originalObj === cloneObj);  //true
console.log(original === clone);    //false


let a = {number : 888, number2 : 777}; //자바스크립트에서 객체는 참조형 데이터로 취급됨
let b = {number : 888, number2 : 777}; // false, Object의 값들이 같다고해도 메모리 영역이 달라서 ? false
console.log('a === b:', a === b);   // 'a === b' 이건 지금 코드에서는 값을 비교하는게 아닌 메모리 주소를 비교하는 것 

