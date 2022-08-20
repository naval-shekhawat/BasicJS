(function(){

    function findLCM(number1,number2) {
       for (let i = 1; i <= number1 && i <= number2; i++) {
        if( number1 % i == 0 && number2 % i == 0) {
            hcf = i;
        }
    }
    let lcm = (number1 * number2) / hcf;
    console.log(lcm);
    }
    console.log(findLCM(24,36));
})();