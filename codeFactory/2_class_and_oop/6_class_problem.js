
class Country {
    name;
    idolGroups;

    constructor(name, idolGroups) {
        this.name = name;
        this.idolGroups = idolGroups;
    }
}


class IdolGroup {
    name;
    members;

    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}


class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}


class FemaleIdol extends Idol {     // 부모클래스의 생성자만 사용할 거면 자식클래스에 constructor를 선언하지 않아도 됨
    dance(){
        return `${this.name}이 춤을 춥니다.`;
    }


}


class MaleIdol extends Idol {       // 부모클래스의 생성자만 사용할 거면 자식클래스에 constructor를 선언하지 않아도 됨
    sing(){
        return `${this.name}이 노래를 힙니다.`;
    }    

}




// 아이브는 한국 아이돌이고
// 아이브라는 이름의 걸그룹이다.
// 아이브는 여자 아이돌이다.
const iveMembers = [
    {
        name: '안유진',
        year: 2003,
    },
    {
        name: '가을',
        year: 2002,
    },
    {
        name: '레이',
        year: 2004,
    },
    {
        name: '장원영',
        year: 2004,
    },
    {
        name: '리즈',
        year: 2004,
    },
    {
        name: '이서',
        year: 2007,
    },
]

// BTS는 한국 아이돌이고
// 방탄소년단이라는 이름의 보이그룹이다.
// BTS는 남자 아이돌이다.
const btsMembers = [
    {
        name: '진',
        year: 1992,
    },
    {
        name: '슈가',
        year: 1993,
    },
    {
        name: '제이홉',
        year: 1994,
    },
    {
        name: 'RM',
        year: 1994,
    },
    {
        name: '지민',
        year: 1995,
    },
    {
        name: '뷔',
        year: 1995,
    },
    {
        name: '정국',
        year: 1997,
    },
]


// iveMembers 배열의 데이터를 .map()을 사용하여 1개씩 순회 , (x)에 하나의 배열씩 순회 하고 => FemaleIdol클래스를 호출하는데
//  x['name'] , x['year'] 코드는 키값을 기재하지만 , 벨류값이 전달 된다.
const cIveMembers = iveMembers.map((x) => new FemaleIdol(x['name'], x['year']));
console.log(cIveMembers);
// cBtsMembers도 cIveMembers와 동일하다.
const cBtsMembers = btsMembers.map((x) => new MaleIdol(x['name'], x['year']));
console.log(cBtsMembers);

console.log("================================================================");

const iveGroup = new IdolGroup(
    '아비브',
    cIveMembers,
)
console.log(iveGroup);

const btsGroup = new IdolGroup(
    'BTS',
    cBtsMembers,
)
console.log(btsGroup);

console.log("================================================================");


const korea = new Country(
    '한국',
    [
        iveGroup, 
        btsGroup,
    ]
)
console.log(korea);


console.log("=======================뭉쳐서 한 번에===========================");


const allToGether = new Country(
    '대한민국',
    [
        new IdolGroup(
            '아이브',
            iveMembers.map(
                (x) => new FemaleIdol(x['name'], x['year']),
            ),
        ),
        new IdolGroup(
            'BTS',
            btsMembers.map(
                (x) => new MaleIdol(x['name'], x['year']),
            ),
        ),
    ],
);
console.log(allToGether);



