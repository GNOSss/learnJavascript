/**
 * Object / 객체
 */

let riNa = {
    name : '카리나',
    age : 23,
    group : 'sm',
    skill : function(){
        return `${this.name}가 때립니다.`   // this는 함수가 호출될 때 해당 함수가 어떤 객체에서 호출되었는지를 가르킨다.
    }                                    // 즉, 함수나 메서드 내부에서 this를 사요하면 그 함수가 속해 있는 객체를 참조 할 수 있음
}

console.log(riNa); // 오브젝트 전체 출력
console.log(riNa.name); // 오브제트에서 name키의 값 출력
console.log(riNa['name']); // []안에 key를 넣어 key-value로 value를 찾을 수 있음
console.log(riNa.age); 
console.log(riNa.group);
console.log(riNa.skill()); // 오브젝트에서 skill 키의 값인 function 실행


const key = 'name';
console.log(riNa[key]); // rina라는 변수에 key변수가 갖고 있는 'name'값을 riNa변수의 키값 중 'name'이 있어 사용가능


// this 사용하여 출력
console.log(riNa.skill());


//계산된 속성 이름 (computed property names)
// 자주 사용한다고 함. (유연성, 가독성 좋음)
const nameKey = 'name';
const nameValue = '카리나';
const groupKey = 'group';
const groupValue = 'sm';

const riNa2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    skill : function(){
        return `${this.name}가 때립니다.`   // this[nameKey] : riNa2.name
    }   
}
console.log(riNa2); // { name: '카리나', group: 'sm' }
console.log(riNa2.skill()); // '카리나가 때립니다.'

// 오브젝트 값 변경하기
riNa2['group'] = '코드팩토리';  // 변수['키의 속성(값)'] = '값의 속성(값)';
console.log(riNa2); // { name: '카리나', group: '코드팩토리' }

// 존재하지 않는 프로퍼티는 입력시 자동으로 삽입
riNa2['region'] = '대한민국';
console.log(riNa2); // { name: '카리나', group: '코드팩토리', region: '대한민국' }



/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 * 
 */

const winter = {
    name : '윈터',
    age : 26,
    group : 'sm',
    skill : function(){
        return `${this.name}가 때립니다.`
    }
}
console.log(winter)
// winter = {}; // Assignment to constants variable ,  자바스크립트에서 **const**로 선언된 변수를 다시 할당하려고 할 때 발생하는 오류 메시지

winter['group'] = 'ssmm'; // winter라는 오브젝트를 통째로 변경 할 수 없으나 , winter 오브젝트의 속성들을 개별적으로 찍어서 변경은 가능하다.
console.log(winter);
winter.name = 'winter'; // Assignment to read-only property
console.log(winter);



/**
 * 모든 키값 다 가져오기
 */

//Object.keys(오브젝트명) >> 해당 오브젝트의 모든 키값들을 가져옴
console.log(Object.keys(riNa2));

/**
 * 모든 벨류값 다 가져오기 >> 해당 오브젝트의 모든 벨류값들을 가져옴
 */
console.log(Object.values(riNa2));



/**
 *  추가 기능
 */
const name = '지젤';
const riNa3 = {
    name, //name = name; 과 동일한 기능
};
console.log(riNa3);