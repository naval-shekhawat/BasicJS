(function(){

    function getSumofdigits(num){
        let sum = 0;
        while(num >= 1){
            sum = sum + (num % 10);
            num = parseInt(num / 10);

        }
        return sum;
    }
    console.log(getSumofdigits(103));
})();