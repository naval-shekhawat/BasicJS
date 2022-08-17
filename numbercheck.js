(function(){

    function numberCheck(num){
        switch (true) {
            case num > 0:
                return "positive no"; 
                case num < 0:
                    return "negative no";
            default:
              return "zero";
        }
    }
        console.log(numberCheck(80));
        console.log(numberCheck(-78));
        console.log(numberCheck(0));
        console.log(numberCheck(45));
})();