(function()
{
    function getHcf(firstnum, secondnum)
    {
       for(let i = 1; i <= firstnum && i <= secondnum; i++)
       {
        if(firstnum % i == 0 && secondnum % i == 0)
        {
            var hcf = i;
        }
       }
       return hcf;
    
    }
      console.log(getHcf(16,8));
      console.log(getHcf(96,24));
      console.log(getHcf(161,81));
      console.log(getHcf(168,812));
})();