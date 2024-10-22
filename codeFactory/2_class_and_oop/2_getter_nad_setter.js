/**
 * Getter and Setter
 */

class IdolModel {
  inner_name;
  inner_year;

  constructor(name, year) {
    this.inner_name = name;
    this.inner_year = year;
  }

  /** Getter
   * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
   * 2) private한 값을 반환할 떄
   */
  get nameAndYear() {
    return `${this.inner_name} ${this.inner_year}`;
  }

  /** Setter
   *  1) 데이터를 가공할때
   *  2) private한 값을 바꿀 때
   */

  set setName(test) {
    // setter는 getter와 달리 파라미터가 필요함
    this.inner_name = test;
  }
}

const riNa = new IdolModel("카리나", 2001);
console.log(riNa);
console.log(riNa.nameAndYear); // nameAndYear는 funtion이 아니여서 '()'를 사용하지 않음

riNa.setName = "카카리나"; // '카카리나'는 set setName(test)의 파라미터 'test'로 값 전달 됨
console.log(riNa);

console.log("--------------------------------------------------------");

class IdolModel2 {
  #name; // private 변수 선언 (#)
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set setName(name) {
    this.#name = name;
  }
}

const riNa2 = new IdolModel2("콰리나", 2003);
console.log(riNa2); // private변수 #name은 출력이 안됨
console.log(riNa2.name); // IdolModel2 클래스의 get name()함수를 호출하여 #name(private)변수 출력 가능

// set으로 private변수 #name의 값을 변경하기
riNa2.setName = "코카리나"; // setName에 parameter인 name에 '코카리나' 전달
console.log(riNa2.name);

riNa2.setName("커리나"); //getter, setter는 함수처럼 보이지만 함수가 아니고 , 속성(properties)를 접근 하는 방식(표현문)을 생각할 것
console.log(riNa2.name);
