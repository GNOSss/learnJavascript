/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                  설정할때 호출되는 함수로 구성된 프로퍼티
 *                  예를들면 getter와 setter
 */

/**
 * Property (프로퍼티) {데이터 프로퍼티}
 * 
 * {name: '카리나', age: 22}는 객체(object)입니다.
 * 이 객체 내의 'name'과 'age'가 프로퍼티(property)입니다.
 * 
 * 프로퍼티는 키(key)와 값(value)의 쌍으로 구성됩니다:
 * - 'name'은 키이고, '카리나'는 값입니다.
 * - 'age'는 키이고, 22는 값입니다.
 * 
 * 프로퍼티는 객체의 특성이나 속성을 나타냅니다.
 */

const yuJin = {
    name: '안유진',
    age: 23,
}


// Object : 생성자함수? 또는 클래스의 이름 ?
// .getOwnPropertyDescriptor << static함수 : 특정 클래스안에 존재하는 함수, 독립적으로 존재, 인스턴스  생성하지 않아도 호출 가능,
// static함수 추가 설명 : 클래스 이름을 통해 직접 호출 , 예 : ClassName.StaticMethod()

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));    //(객체, 프로퍼티의 키값)
// { value: '안유진', writable: true, enumerable: true, configurable: true }


console.log(Object.getOwnPropertyDescriptor(yuJin, 'age')); 
// { value: '23', writable: true, enumerable: true, configurable: true }

/**
 * 데이터 프로퍼티 descriptor
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 쓰기 가능여부 , 값을 변경하거나 불가능[false(읽기 전용)]이거나
 * 3) enumerable - 열거 가능여부 , for..in , while을 사용 할 수 있으면 true를 반환
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의 가능한지 여부를 판단한다. 불가능[false]경우 삭제,변경 불가능
 *                   단, writable이 true일 경우 값 변경과 writable을 변경하는 건 가능
 */


// getOwnPropertyDescriptors 사용 위에서 사용한거랑 다름, 복수형으로 's' 붙힘
console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin2);
console.log(yuJin2.age);    //21

yuJin2.age = 32;
console.log(yuJin2.age);    //32
console.log(yuJin2.year);   //1992

// 액세서 프로퍼티 descriptor
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));
// { get: [Function: get age], set: [Function: set age], enumerable: true, configurable: true }
// value, writable은 표기가 안되어 있음 




const Kim = {name : 'BORA', year : 1993};
// Kim에 키,벨류를 추가하고 싶을때 , 원래는 아래 2가지 방법 사용함
// Kim['height'] = 172;
// Kim.height = 172;

// Object.defineProperty(대상객체, 키값, {벨류,속성1,2,3})
// 3번째 프로퍼티 설명자(descriptor)를 생략할 경우 'false'로 반환 !
// 대상객체는 오브젝트, 함수, 인스터턴스, 배열, 함수 등 JavaScript에서 객체로 취급되는 모든 것 가능
Object.defineProperty(Kim, 'height', {
    value: 172,             // 수정가능
    writable: true,         // false로 수정가능
    enumerable: true,       // false로 수정가능
    configurable: true,     // false로 수정가능
})
console.log(Kim);
console.log(Object.getOwnPropertyDescriptor(Kim, 'height'));


/**
 * Writable descriptor
 */

Kim.height = 190;
console.log(Kim.height); // height의 값을 172 -> 190으로 변경

// writable: false로 변경
Object.defineProperty(Kim, 'height', {writable: false,});
console.log(Object.getOwnPropertyDescriptor(Kim, 'height'));

// wirtable(수정): false(불가)로 변경후 height 값 변경 시도
Kim.height = 150;
console.log(Kim.height); // 오류는 발생하지 않지만 writable이 true였던 당시의 수정값 190으로 출력됨


/**
 * Enumerable
 */
console.log(Object.keys(Kim));  // ['name', 'year', 'height]
for(let key in Kim){
    console.log(key);       // name year height
}

Object.defineProperty(Kim, 'name', {
    enumerable:false,   // Kim객체의 name키의 enumerable 을 false로 변경
});
console.log(Object.getOwnPropertyDescriptor(Kim, 'name')); // false로 변경되었는지 출력 확인

console.log('-------------');
console.log(Object.keys(Kim));  // ['year', 'height]  <<  name 키는 enumerable이 false이므로 출력 불가
for(let key in Kim){    // year height << for루프도 마찬가지로 출력 불가
    console.log(key);
}
console.log(Kim);   // {year: 1993, height: 190} << 오브젝트도 마찬가지로 출력불가
console.log(Kim.name); // BORA << 오로지 Kim오브젝트의 프로퍼티를 선택해야지 출력가능



/**
 * Configurable
 */

const coco = {name : 'coco', height : 30};

Object.defineProperty(coco, 'height', {
    writable: true,      // coco변수의 height 프로퍼티의 설명자 writable를 false로 변경
    configurable: false,    // coco변수의 height 프로퍼티의 설명자 configurable를 false로 변경
});
console.log(Object.getOwnPropertyDescriptor(coco, 'height'));   //configurable가 false인걸 출력후 확인

// configurable를 false로 정의하면 enumerable 변경 불가능
// Object.defineProperty(coco, 'height', {
//     enumerable: false,
// });

Object.defineProperty(coco, 'height', {
    value: 40,      // writable이 true로 설정되면 변경 가능
});
console.log(Object.getOwnPropertyDescriptor(coco, 'height')); //configurable만 false면 정의 불가하지만
                                                              //writable이 true면 값 변경 가능

Object.defineProperty(coco, 'height', {
    writable: false,      // writable이 false로 설정되
});
console.log(Object.getOwnPropertyDescriptor(coco, 'height')); // 155~157코드에서 데이터값 변경하고 다시 false해도 변경된 값 출력됨



/* 
getOwnPropertyDescriptor : 객체의 특정 프로퍼티에 대한 설명자(descriptor)를 반환합니다.
예시) 
반환값 :
{
  height: {
    value: 162,
    writable: true,
    enumerable: true,
    configurable: true
  }
*/

/* defineProperty : 객체에 새로운 프로퍼티를 추가하거나 기존 프로퍼티를 수정합니다.
예시) 
반환값 :
{
  height: {
    value: 190,
    writable: false,
    enumerable: true,
    configurable: true
  }
*/


