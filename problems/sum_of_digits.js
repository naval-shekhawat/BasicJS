(function() {


    function getSumOfDigits(number) { // 143
      let sum = 0;
      while(number >= 1) {
        sum = sum + (number % 10); // 3 + 4 + 1
        number = parseInt(number / 10); // 14  1 0
      }

      return sum;
    }

    console.log(getSumOfDigits(143))  // 8
    console.log(getSumOfDigits(2189))  // 20
    console.log(getSumOfDigits(103))  // 4
    console.log(getSumOfDigits(1111))  // 4

})()