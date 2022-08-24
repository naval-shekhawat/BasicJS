(function(){

    function getInnerdigitsum(num){

        if(Number.toString().length < 3){
            return 0;
        }else {
            sum = 0;
            num = parseInt (num/10);
            sum = sum + (num%10);
            while(parseInt(num/100) != 0){
                num = parseInt (num/10);
                sum = sum + (num%10);
            }
        }
        return sum;
    }
    console.log(getInnerdigitsum(21245));
})();
