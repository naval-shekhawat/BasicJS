(function(){

    function palindromeNew(n)
    {
        // Find reverse of n
        var rev = 0;
        for (var i = n; Math.trunc(i) > 0; i /= 10)
        {
            rev = ((rev*10) + (Math.trunc(i)%10));
              
            }
        
        // If n and rev are same, then n is palindrome
        return (n==rev);
    }
          
      
    // prints palindrome between min and max
    function countPal(min,  max)
    {
        for (var i = min; i <=max; i++)
        {
            if(palindromeNew(i))
            document.write(i+" " );
           }
    }
      
    //  program to test above function
      
        countPal(0, 50);

})();
