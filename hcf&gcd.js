(function() {

    function getHCF(first ,second) {
        let HCF =1;
        for(let i = 1; i <=first && i <=second; i++){
            if(first % i == 0 && second % i == 0){
                HCF = i;
            }

        }
        return HCF;
    }
    console.log(getHCF(9,18));
    console.log(getHCF(10,100));
    console.log(getHCF(24,48));

})();