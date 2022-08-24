(function(){

    function checkmarks(marks){
       return marks >= 40 ? "passed" : "failed"
    }
    
    console.log(checkmarks(50));
    console.log(checkmarks(55));
    console.log(checkmarks(35));

})();