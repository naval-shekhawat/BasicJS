(function()
{
    function power(base,exponent)
    {  
        if( exponent == 0)
        return 1;
        
        let output = 1;
        while(exponent > 0)
        {
            output = output * base;
            exponent--;
        }
         return output;
    }
    console.log(power(5,2));
    console.log(power(5,0));
    console.log(power(15,2));
    console.log(power(51,2));
})();
    