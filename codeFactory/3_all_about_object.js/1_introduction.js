/**
 * All about objects
 * 
 * 객체를 선언할때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 -  class and oop
 * 3) function을 사용해서 객체 생성
 */

/** 
rina2, rina3, rina4의 차이점

rina2 (new createIdol('카리나', 22))
정상적으로 객체가 생성됩니다1.
new 키워드와 함께 createIdol 함수를 생성자로 사용합니다.
결과: { name: '카리나', age: 22 } 객체가 생성됩니다.

rina3 (createIdol('카카리나',22)):
undefined를 반환합니다1.
new 키워드 없이 createIdol 함수를 일반 함수로 호출합니다.
this가 전역 객체(브라우저에서는 window)를 가리키게 되어 의도한 대로 동작하지 않습니다.
함수가 명시적으로 값을 반환하지 않아 undefined가 반환됩니다.

rina4 (new createIdol2('카리나', 22)):
{ name: '카리나', age: 22 } 객체가 생성됩니다1.
new 키워드를 사용했지만, createIdol2 함수는 일반 팩토리 함수처럼 작성되었습니다.
함수 내부에서 this를 사용하지 않고 직접 객체를 반환하므로, new 키워드의 영향을 받지 않습니다.

주요 차이점:
rina2는 생성자 함수를 의도한 대로 사용하여 객체를 생성합니다.
rina3는 생성자 함수를 일반 함수로 호출하여 의도치 않은 결과(undefined)를 얻습니다.
rina4는 팩토리 함수를 new 키워드와 함께 사용했지만, 함수가 객체를 직접 반환하므로 정상적으로 객체가 생성됩니다12.
이 예제는 생성자 함수와 팩토리 함수의 차이, 그리고 new 키워드의 중요성을 잘 보여줍니다. 생성자 함수는 this를 사용하고 new 키워드와 함께 사용해야 하며, 
팩토리 함수는 객체를 직접 생성하고 반환합니다12.
*/

// 1) object를 생성해서 객체 생성
const rina = {
    name : '카리나',
    age : 22,
};
console.log(rina);  // {name: '카리나', age: 22}

// 2) class를 생성해서 객체 생성
class IdolModel {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
console.log(new IdolModel('카리나', 22));   // undefined

// 3) function을 사용하여 객체 생성

// 3-1) 생성자함수, this키워드와 new키워드를 같이 사용한다.
function createIdol(name, age) {
    this.name = name;
    this.age = age;
}

// 3-2) 팩토리함수, 함수가 객체를 직접 반환하므로 정상적으로 객체는 생성됨
function createIdol2(name, age) {
    name = name;
    age = age;
    return {name, age};
}

const rina2 = new createIdol('카리나', 22); // function문에 `this`를 사용해야지 new 키워드 가능
const rina3 = createIdol('카카리나',22);
const rina4 = new createIdol2('카리나', 22);

console.log(rina2); // 생성자함수
console.log(rina3); // undefined
console.log(rina4); // 팩토리함수