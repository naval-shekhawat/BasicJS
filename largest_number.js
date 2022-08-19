(function()
{
    function getLargestNumber(a, b, c)
    {
        if(a >= b && a >= c)
        {
         return a;
        }
        
        else if(b >= a && b >= c)
        {    
        return b;
        }
        
        else
        {
        return c;
        }

    }
    console.log(getLargestNumber(15,12,84));
    console.log(getLargestNumber(15,84,12));
    console.log(getLargestNumber(84,12,15));
})();