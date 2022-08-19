(function()
{
    function reverseString(str)
    {    
         let updatedString = "";
         for(let i = str.length - 1; i >= 0; i--)
         {  
           updatedString = updatedString +str[i];
         }

        return updatedString; 
    } 
    console.log(reverseString("Coding is fun"));
    console.log(reverseString("nuf si gnidoC"));
    console.log(reverseString("My Name Is Devavrata"));
    console.log(reverseString("atarvaveD sI emaN yM"));
        
})();