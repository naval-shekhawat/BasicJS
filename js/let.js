(function(){
    let a = 5;

   function innerFunction(){
    let a = 10;
    console.log(a);
 
   } 
   console.log(a);
   innerFunction();
   console.log(a);
})();