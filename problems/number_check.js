(function() {

    function numberCheck(num){
        switch (true) { //key
            case num > 0:
                return "Positive Number";
            case num < 0:
                return "Negative Number";
            default:
                return "Zero"
        }
    }

    console.log(numberCheck(89));
    console.log(numberCheck(-90));
    console.log(numberCheck(0));

})();