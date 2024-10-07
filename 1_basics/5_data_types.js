/*
* dataTypes

* 여섯개의 Primitive types와
* 한개의 Object type이 있음

PrimitiveTypes
1) Number (숫자)
2) String (문자열) : 'SONG'은 문자일까, 문자열일까  << 'S','O','N','G' 4개의 문자가 리스트에 모여진 것 이라고 생각하면 문자열이지 않을까
3) Boolean (참과 거짓)
4) Undefined (정의되지 않은)
5) Null ()
6) Symbol ()

Object type
7) Object (객체)
    Function, Array, etc...

*/


const age = 32;         // number
const name = 'Song';    // string
const human = true;     // boolean


console.log(typeof age,name,human);


// Template Literals
// Escaping Character
// new line -> \n
// tab -> \t
// 백슬래시('\')를 스트링으로 표현하고 싶다면 2번 입력
// (') -> \'

const asepa = '에스파\n카리나';
const sepa = '에스파\t카리나';
const epa = '에스파\\카리나';
const pa = '에스파\'카리나';
console.log(asepa,sepa,epa,pa);

// (``) << tab위에 위치함 , 위에 설명한 Template literals의 방법을 모두 가능함


const a = 'SSS';
console.log(a + 123);
console.log(`${a} 123`);   // (`${변수이름} 추가할 값`)
console.log(typeof a + 123);




/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다. (????????)
 */

let noInit;
console.log(noInit);  // undefined
console.log(typeof noInit);

/**
 * Null
 * 
 * undefined와 마찬가지 , 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때
 * 사용한다고함
 * 
*/

let init = null ;
console.log(init);  // null
console.log(typeof init);  // object로 출력되는데 , 버그라고 한다..



/**
 * Symbol 타입
 * 
 * 유밀무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */

const test1 = '1';
const test2 = '2';
console.log(test1 === test2);  // false

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);  // false




/**
 * Object 타입 
 * 
 * Map ?
 * 키:벨류의 쌍으로 이루어져있다.
 * key:value
 * 
 * 파이썬 배운걸로 보면 딕셔너리 타입 같다.
 */
console.log('-------test--------------------');
const myName = {
    name1 : '승수',
    name2 : '예쁜보라',
    name3 : '코코'
};

const myName2 = [ 
    {name1 : '승수',name2 : '예쁜보라',name3 : '코코'},
    {name1 : 'aaa', name2 : 'bbbb', name3 : 'ccccc'}
];

const result = myName2.map((item) => (console.log(item.name1, item.name2, item.name3)))

console.log(myName);
console.log(myName['name2']);
console.log(myName['name3']);
console.log(myName['name3','name1']);



/**
 * Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입
 * 
 * 파이썬에서 배운걸로 보면 배열 같다.
 */

const aespaMember = [
    '윈터',
    '카리나',
    '카리나1',
    '카리나2',
    '카리나3'
];
console.log(aespaMember); //리스트에 출력


/**
 * index
 * 배열의 1번째 즉[0]의 위치부터 시작
 */

console.log(aespaMember[0]);
console.log(aespaMember[4]);

aespaMember[2] = '승수';
console.log(aespaMember);
console.log(typeof aespaMember);



/**
 * static typing << 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 한다. 
 * dynamic typing << 변수의 타입을 명시적으로 선언하지 않고 값에의해 타입을 "추론" 한다.
 * JS -> dynamic typing
 * 
 */

