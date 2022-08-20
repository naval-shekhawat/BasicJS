(function(){

    function sumtwonowithoutaddition(num1, num2){
        if(num1 >0 && num2>0)
        {
            while(num2 > 0){
                num1++;
                num2--;
            }
            return num1;
        }
        else {
            return -1;
        }
            
        }
        console.log(sumtwonowithoutaddition(10,15));
})();