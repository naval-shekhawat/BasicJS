(function(){

    function power(base,exponent){
        let output=1;
        while(exponent>0){
            output = output * base;
            exponent--;

        }
        return output;
    }

    console.log(power(5,2));
    console.log(power(3,3));
    console.log(power(9,8));


})();