/**
 * Super and Override
 */


class IdolModel {
    name;
    year;

    constructor(name, year) { // 3. 1,2번의 arguments를 name, year에 할당
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요! ${this.name}입니다.`;
    }

}


class FemaleIdolModel extends IdolModel {   // extends 기능으로 FemaleIdolModel에 IdolModel 상속받기
    part;

    constructor(name, year, part){  // *** Override는 부모 클래스에서 정의된 메서드를 자식 클래스에서 재정의하는 것
        //super()는 자식 클래스에서 부모 클래스의 생성자나 메서드를 호출할 때 사용하는 키워드
        super(name, year);  // 2. super()를 사용하여 부모클래스의 constructor를 호출 
        this.part = part;   // 4. 3번의 argument를 part에 할당
    }

    sayHello(){  // *** Override : 부모 클래스의 sayHello()를 override >> 즉, 부모클래스의 sayHello()를 자식클래스의 sayHello()가 덮어버림
        // ${super.name} 사용 시 undefined 출력됨.
        // 자바스크립트에 클래스의 인스턴스(객체)의 프로퍼티(속성들)은 `this`키워드를 통해 접근한다고 함.
        // `super`키워드는 주로 부모 클래스의 메서드를 호출할 때 사용되며, 직접적으로 부모 클래스의 프로퍼티(속성)에 접근하는 데 사용되지 않는다.
        return `안녕하세요! ${this.name}입니다. 담당파트는 ${this.part}입니다.`;
        // return `${super.sayHello()}`; // `안녕하세요 ! ${this.name}입니다.` 로 출력됨
    }


}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');  // 1. FemaleIdolModel클래스 인스턴스 호출
console.log(yuJin);


const rina = new FemaleIdolModel('카리나', 2001, '보컬');
console.log(rina);
console.log(rina.sayHello());
console.log(yuJin.sayHello());