(function(){

  function power(base, exponent) { 
      if(exponent == 0) return 1;

      let output = 1;
      while(exponent > 0) {
        output = output * base; 
        exponent--; 
      }

      return output;
  }

  console.log(power(5,2)) // 25
  console.log(power(3,3))  //  27
  console.log(power(9,0))  // 

})();