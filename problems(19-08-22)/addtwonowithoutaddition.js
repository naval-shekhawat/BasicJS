(function(){
   
    function addNumbers(a,b){
        while(b > 0) {
            a++;
            b--;
        }
        return a;
    }

    console.log(addNumbers(10,20));
    console.log(addNumbers(20,10));
    console.log(addNumbers(123,25));
})();