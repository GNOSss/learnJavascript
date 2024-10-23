function FemaleModel(name, year) {
  this.name = name;
  this.year = year;
  this.dance = function () {
    return `${this.name} 이 ��을 ��니다.`;
  };
}