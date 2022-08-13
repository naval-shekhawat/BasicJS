(function(){

    // function checkAdhar(openAccount) {
    //     var AadharValid = apiResponse;
    //     if(AadharValid) {
    //         openAccount(;)
    //     }
    //     else {

    //     }
    // }


    function outerFunction(addFunc) {
        var a = 100;
        var b = 50;
        var output = addFunc(a,b);
        console.log(output)
    }

    var add = function(a, b){
        return a + b;
    };

    outerFunction(add);

})();