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

}


const riNa = new IdolModel('카리나', 2000);     //('카리나',2000) 두 개의 인자(Argument)를 해당 클래스의 constructor함수의 매개변수(Parameters)로 넘김
console.log(riNa);      // classname {오브젝트} 출력됨
const winTer = new IdolModel('윈터', 2001);
console.log(winTer);
const ningNing = new IdolModel('닝닝', 2002);
console.log(ningNing);