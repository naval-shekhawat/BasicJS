(function()
{
    function Celsius(temp ,raining)
    { 
     
        if(temp > 20 && temp < 25 && raining == false)
           {
            console.log("Go Play outside");
           }

         else if(temp > 18 && temp < 20 && raining == true)
         {
            console.log("Go To Play School");
         }   
         
         else 
         {
          console.log("Stay At Home");
         }     
        
    }
    Celsius(25,false);
    Celsius(16,true);
    Celsius(24 ,true);
    Celsius(1,true);
})();