(function(){

    function power(base, power){ // base = 3, power = 5
        let output = 1;
        while(power > 0) { // power 5/2/1
            if(power & 1) { // this means number is odd
                output = output * base; // (1*3) (81*3) 
            }

            base = base * base; // 9/81/6501
            power = power>>1;  // 2/1
        }
        return output;
    }

    console.log(power(3,5)); // 243
    console.log(power(2,10));

})();