(function()
{
    function printStars(noOfStars)
    {
      for(let i = 0; i <= noOfStars; i++)
      {
        for(let j = 0; j < i; j++)
        {
         document.write("*");
        }
         document.write("<br/>");
     }
   }  
   printStars(5);
})();