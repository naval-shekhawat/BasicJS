(function()
{
    function getSum0fDigits(num)
    {
        let sum = 0;
      while (num >= 1)
    {
       sum = sum + (num % 10);
       num = parseInt(num / 10);
    }
    return sum;
    }
    console.log(getSum0fDigits(143));
    console.log(getSum0fDigits(1984));
    console.log(getSum0fDigits(14335));
})();