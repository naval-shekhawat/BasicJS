(function(){
    function pairIntegers(A) {
        var A;
        for (A=0;A<=100;A++)
        {
          for (var a = 0; a * a <= A; a++) 
          {
             for (var b = 0; b * b <= A; b++) 
             {
                 if (a * a + b * b == A)
                 {
                     console.log("pair of integers are: a=" +a , "b= "+b, "A= "+A );
                 }

            }
        
         }
        }
    }
    pairIntegers();
    
})();
