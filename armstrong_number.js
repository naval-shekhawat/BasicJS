(function()
{
    var temp = 0;
    function checkArmstrongNumber(num)
    {
        let rem = 0;
        var sum = 0;
        temp = num;
        while(temp >= 1)
        {
          rem = temp % 10;
          sum = sum + (rem*rem*rem);
          temp = parseInt(temp/10);
        }
        if(num == sum)
        {
            return "Armstrong Number " + num;
        }
        else
        {
            return "not armstrong"
        }
    } 
    console.log(checkArmstrongNumber(143));
    console.log(checkArmstrongNumber(371));
})();
