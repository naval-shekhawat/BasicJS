(function(){
    function getHCF(num1,num2){
        let HCFvalue = 1
        for (let i =1; i <= num1 && i <= num2 ; ++i){
            if(num1 % i == 0 && num2 % i ==0){
                HCFvalue = i        
            }
        }
        return HCFvalue;
    }
    console.log(getHCF(8,9));
    console.log(getHCF(22,55));
    console.log(getHCF(16,8));
    console.log(getHCF(81,36));

})();