(function(){
    function isDivisibleBy60(number){
        let divisibleBy5 = number % 10 == 0,
            divisibleBy2 = parseInt(number/10) % 2 == 0 && divisibleBy5 == true,
            sum = 0;

        while(number > 0) {
            sum += number % 10;
            number = parseInt(number/10);
        }

        return sum % 3 == 0 && divisibleBy5 && divisibleBy2;
    }

    console.log(isDivisibleBy60(540));
    console.log(isDivisibleBy60(270));
    console.log(isDivisibleBy60(110));
    console.log(isDivisibleBy60(2340));
})();