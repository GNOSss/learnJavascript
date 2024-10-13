/**
 * Using function to create objects
 */
function IdolModel(name, year){

    // console.log(new.target);    // new IdolModel로 호출하면 [Function: IdolModel]반환 , new를 사용하지 않으면 Undefined 반환됨

    // new 함수 방지 코드
    if(!new.target){
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);    // 생성자 함수
console.log(yuJin);     //  IdolModel { name: '안유진', year: 2003, dance: [Function (anonymous)] }
// console.log(yuJin.dance());     // 안유진이 춤을 춥니다.



const yuJin2 = IdolModel('안유진', 2003);   // 팩토리 함수, 원래라면 Undefined지만 if(!new.target){}구문으로 객체 생성됨
console.log(yuJin2);
// console.log(global.name);   // global : 파일이 생성되면 자동으로 생성되는 객체 , global(Node.js에서 사용잘됨), 사전적 의미로는 Window 오브젝트라고도 한다네요..

// const IdolModelArrow = (name, year)=>{
//     this.name = name;
//     this.year = year;
// };

// const yuJin3 = new IdolModelArrow('안유진', 2003);


/* 화살표 모양의 함수식에서는 생성자 함수를 만들 수 없다. constructor 내장이 안되어 있는 듯? */