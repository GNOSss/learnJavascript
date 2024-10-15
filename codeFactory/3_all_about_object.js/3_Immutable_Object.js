/**
 * Immutable Object
 */

const boRa = {
    name: '김보라',
    year: 1993,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear - age;
    }
}

console.log(boRa);  //{ name: '김보라', year: 1993, age: [Getter/Setter] }

console.log("----------Extensible----------");
/**
 * Extensible : 오브젝트에 프로퍼티를 추가해주는 기능 , false일 경우 추가는 안되고 delete는 가능
 *              (add x, delete o, update o)
 */
console.log(Object.isExtensible(boRa)); //Object의 함수 isExtensible의 기본 값은 true

boRa['job'] = 'development';    // isExtensible이 true면 오브젝트(boRa)에 프로퍼티('job') 추가 가능

console.log(boRa); //{ name: '김보라', year: 1993, age: [Getter/Setter], job: 'development' }

Object.preventExtensions(boRa); // isExtensible을 false로 변환함

console.log(Object.isExtensible(boRa)); //false가 출력 됨

boRa['city'] = '인천';  // city 라는 프로퍼티 추가를 할려고 하지만 isExtensible가 false라 추가가 안됨 
console.log(boRa);      // error 발생을 시키지 않음

delete boRa['job'];    // 그러나 ! delete로 원래 갖고 있던 프로퍼티는 삭제 가능 !!
console.log(boRa);



console.log("----------seal----------");
/**
 * Seal : 오브젝트(객체)를 봉인하여 새로운 속성 추가를 막고, 기존 속성을 설정 불가능하게 함
 *        그러나 기존 속성 값 변경 가능 (add x , delete x , update o)
 */
const coco = {
    name: '코코',
    year: 2016,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(coco);

//Seal은 봉인이라는 영단어 뜻
console.log(Object.isSealed(coco)); // 기본적으로 isSealed는 false이다. false라면 값의 수정이 가능.

Object.seal(coco); // isSealed를 true로 변환함

console.log(Object.isSealed(coco)); //true가 출력, seal이 true가 되면 add, delete 기능 무효화

coco['region'] = '인천';    // isSealed가 true면 {region : '인천'} 추가 불가 !
console.log(coco);  //error반환 안함

delete coco['name']; // isSealed가 true면 delete도 불가 !
console.log(coco);  //error반환 안함



console.log("----------Freezed----------");
/**
 * Freezed : 오브젝트(객체)를 완전히 동결하여 새로운 속성 추가, 기존 속성 삭제, 속성 값 변경을 모두 막습니다.
 *         (add x , delete x , update x)
 */

const sss = {
    name: 'SSS',
    year: 1993,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isFrozen(sss));  //Freeze 상태확인, 초기값은 false 저장됨

Object.freeze(sss); // isFrozen을 true로 변환

console.log(Object.isFrozen(sss)); //true반환 확인 freeze가 true가 되면 add, delete, update 불가능

sss['groupName'] = '아이브';    //프로퍼티 추가 시도
console.log(sss);   //{ name: 'SSS', year: 1993, age: [Getter/Setter] } 반환

delete sss['name'];     //프로퍼티 삭제 시도
console.log(sss);       //{ name: 'SSS', year: 1993, age: [Getter/Setter] } 반환

sss['year'] = 1994;     //프로퍼티 수정 시도
console.log(sss);       //{ name: 'SSS', year: 1994, age: [Getter/Setter] } 반환



console.log('*********다중 오브젝트 테스트*********')

// 다중 오브젝트 설정일 경우 
const seungsoo = {
    name: '승수',
    year: 1993,
    pet: {
        name: '코코',
        year: 2016
    },
};

Object.freeze(seungsoo);    // seungsoo 오브젝트 freeze true 설정
console.log(Object.isFrozen(seungsoo)); // seungsoo 오브젝트는 freeze가 true
console.log(Object.isFrozen(seungsoo.pet));     // seungsoo 오브젝트 안에 있는 pet 오브젝트는 false

