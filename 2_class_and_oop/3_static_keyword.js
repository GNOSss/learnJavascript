/**
 * Static Keyword
 */


class IdolModel {
    myname;
    myyear;
    static groupname = 'aespa';  //static keyword : 변수명 앞에 'static'이라고 선언 후 값을 할당하면 된다.
                                    //constructor에 선언 할 필요가 없음

    constructor(name, year){
        this.myname = name;
        this.myyear = year;

    }

    static introduceGroup(){        // 함수로 static 선언이 가능하다.
        return `저는${this.myname} , ${this.groupname} 그룹 입니다.`; // 30번째 줄처럼 선언하면 private 변수(mynaem)은 출력되지 않는다.
    }


}


const riNa = new IdolModel('카리나', 2000);
console.log(riNa);

console.log(IdolModel.groupname);
console.log(IdolModel.introduceGroup());    // static 함수(introduceGroup) 호출



console.log("---------------------static을 이용한 클래스 인스턴스 생성-------------------------")


/**
 * factory constructor
 */

class IdolModel2 {
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){  // (object)에 60번째 줄 {name : '카리나', year : 2000}라는 객체가 전달 됨
        return new IdolModel2(  // return이 new IdolModel2라서 클래스가 호출 되고 constructor에 name,year 값이 전달됨
            object.name,    // (object)에 1번째 파라미터의 값인 object.name에 할당 / name은 키값
            object.year,    // (object)에 2번째 파라미터의 값인 object.year에 할당 / year은 키값
        );
    }

    static fromList(list){      // (list)에 71~76번째 줄에 ['윈터',2001]라는 객체가 전달됨
        return new IdolModel2(  // return new IdolModel2 클래스를 실행하게 되므로 list[0],list[1]이 각각 constructor로 전달
            list[0],    // '윈터'할당
            list[1],    // 2001 할당
        );
    }
    
    // 응용버전
    static fromObjectList(objectList){
        return objectList.map(obj => IdolModel2.fromObject(obj)); //map함수를 사용해서 obj(objectList의 파라미텅)를 IdolModel2.fromObject(obj)로 전달
    }

}

// const riNa3 = new IdolModel2('카리나', 2000); // 기존에 클래스 인스턴스 만들는 방식
// static 함수를 사용해서 클래스 인스턴스 생성하는 방법 1
const riNa3 = IdolModel2.fromObject({name: '카리나', year: 2000});  // class 인스턴스 생성해주는 함수 fromObject로 객체 만들기
console.log(riNa3);
// static 함수를 사용해서 클래스 인스턴스 생성하는 방법 2
const winTer = IdolModel2.fromList(
    [
        '윈터',
        2001,
    ]
);
console.log(winTer);


// 응용 버전 : 배열안에 여러 오브젝트가 있을때 이것들을 클래스 인스턴스로 만들어보기
const woolzip = [{name : 'kimbora', year : 1993},
    {name : 'seugnsoo', year : 1993},
    {name : 'coco', year : 1993}]

// woolzip의 여러 객체를 담은 배열을 갖고 있고 fromObjectList 함수로 전달
const woolzipList = IdolModel2.fromObjectList(woolzip); //

// '[]'배열에 오브젝트들이 묶여서 출력됨
console.log(woolzipList);

// 'for'문을 이용해서 woolzipList의 3개의 요소를 출력 '[]'에 안묶임
for (let i = 0; i < 3; i++) {
    console.log(woolzipList[i]);
}
