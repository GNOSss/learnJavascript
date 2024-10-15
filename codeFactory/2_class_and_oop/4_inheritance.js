/**
 * Inheritance (상속)
 * Wikipedia : 상속은 객체들 간의 관계를 구축하는 방법이다.
 *             수퍼클래스, 또는 부모 클래스 등의 기존의 클래스로부터 속성과 동작을 상속 받을 수 있다.
 * 
 */



class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

}


class FemaleIdolModel extends IdolModel {   // extends 상속받을 클래스명

    dacne(){
        return `여자 아이돌이 춤을 춥니다.`;
    }
}

class MaleIdolModel extends IdolModel {
    sing(){
        return `남자 아이돌이 노래를 부릅니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);  // 자식 클래스에서 인스턴스 생성할때 부모 클래스 constructor에 생성자 사용 가능
console.log(yuJin);

const jiMin = new MaleIdolModel('지민',1995);
console.log(jiMin);

console.log(yuJin.dacne());
console.log(yuJin.name);    // 자식클래스(FemaleIdolModel)에 생성했지만 extends로 받아온 부모클래스의 프로퍼티도 접근가능


console.log(jiMin.year);    // extends로 받아온 부모클래스의 프로퍼티, year
console.log(jiMin.sing());

const ss = new IdolModel('승수', 1993);
console.log(ss);
// console.log(ss.dance()); // 부모클래스는 자식클래스를 사용할 수 없지


console.log("----------instanceof of yuJin-----------")
console.log(yuJin instanceof IdolModel);    //true
console.log(yuJin instanceof FemaleIdolModel);  //true
console.log(yuJin instanceof MaleIdolModel);    //false

console.log("----------instanceof of jiMin-----------")
console.log(jiMin instanceof IdolModel);    //true
console.log(jiMin instanceof FemaleIdolModel);  //false
console.log(jiMin instanceof MaleIdolModel);    //true

console.log("----------instanceof of ss-----------")
console.log(ss instanceof IdolModel);    //true
console.log(ss instanceof FemaleIdolModel);  //false
console.log(ss instanceof MaleIdolModel);    //false

