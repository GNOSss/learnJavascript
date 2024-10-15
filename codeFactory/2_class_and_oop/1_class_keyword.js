/**
 * Class Keyword
 */

class IdolModel{
    inner_name;
    inner_year;

    // constructor - 생성자
    constructor(name, year){  
        this.inner_name = name;     // this는 클래스내부에서 적용하는 의미(?) this.name해도 되지만 이해를 위해서 inner_name으로 변수 작성한것임 
        this.inner_year = year;     // constructor 매개변수 name,year를 외부에서 받아와 thist.inner_name,inner_year에 값을 저장함 이것이 생성자를 만든다 (?)
    }     

    // methods
    sayName (){
        return `안녕하세요! ${this.inner_name}입니다.`;
    }


}


const riNa = new IdolModel('카리나', 2000);     //('카리나',2000) 두 개의 인자(Argument)를 해당 클래스의 constructor함수의 매개변수(Parameters)로 넘김
console.log(riNa);      // classname {오브젝트} 출력됨 / 6,7번째 줄 코드의 오브젝트 객체가 담겨서 출력됨을 잊지말 것. 
const winTer = new IdolModel('윈터', 2001);
console.log(winTer);
const ningNing = new IdolModel('닝닝', 2002);
console.log(ningNing);                                                                               


// properties
console.log(riNa.inner_name); // 클래스 인스턴스(riNa)가 생성되면 클래스내의 오브젝트를 접근할 수 있음
console.log(riNa.inner_year);
console.log(riNa.sayName()); // 클래스 인스턴스(riNa)가 생성되면 클래스 내의 함수를 접근할 수 있음


console.log(typeof IdolModel); // function
console.log(typeof riNa);   // object


