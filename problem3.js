(function(){
    function getInnerDigitsSum(num){
        if(num.toString().length<=2){
            console.log('No Inner digit')}
            else {
                let sum = 0;
            num=parseInt(num/10);
            sum = sum + (num%10);
            while(parseInt(num/100)!=0){
                num = parseInt(num /10);
                sum = sum + (num%10);
            }
            return sum;
        }}
        console.log(getInnerDigitsSum(9021));
        console.log(getInnerDigitsSum(987654));
        console.log(getInnerDigitsSum(91));
})();