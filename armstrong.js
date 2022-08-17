(function(){
    function checkArmstrong(number){
        let sum=0;
        while(number >= 1){
            remainder= number % 10;            
            sum += remainder * remainder * remainder;
            number = parseInt(number / 10);
        }
        return sum;
    }
    console.log(checkArmstrong(153));
})();