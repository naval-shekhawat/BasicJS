(function()
{
   function checkmarks(marks)
   {
    return marks >= 40 ? "Pass" : "Fail";
   }
   console.log(checkmarks(40));
   console.log(checkmarks(65));
   console.log(checkmarks(8));
   console.log(checkmarks(35));
   
})();