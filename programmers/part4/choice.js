const processValue = (parameter) => {
  switch (parameter) {
    case 1:
      console.log("Case 1: Processing...");
      return parameter * 10;
    case 2:
    case 3:
      console.log("Case 2 or 3: Processing...");
      return parameter * 20;
    case 4:
      console.log("Case 4: Processing...");
      return parameter * 30;
    case 5:
      console.log("Case 5: Special processing...");
      // 추가 작업
      if (parameter % 2 === 0) {
        return parameter * 40;
      } else {
        return parameter * 50;
      }
    default:
      console.log("Default: No specific case matched.");
      return -1;
  }
};

console.log(processValue(5)); // 결과: Special processing...
