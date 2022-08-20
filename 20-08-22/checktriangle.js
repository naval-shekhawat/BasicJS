(function(){

    function checkTriangle(a, b, c){
        if (a+b<=c || b+c<=a || c+a<=b)
        return false;
        else
        return true;

    }
    
    console.log(checkTriangle(2,3,10));
})();