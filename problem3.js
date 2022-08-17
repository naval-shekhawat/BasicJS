(function(){
    function checkNumber(num){
        switch (true) {
            case num > 0:
                console.log('POSITIVE NUMBER')
                break;
            case num < 0:
                console.log('NEGATIVE NUMBER')
                break;
            default:
                console.log('ZERO')
                break;
        }
    }
    console.log(checkNumber(-8));
    console.log(checkNumber(-88));
    console.log(checkNumber(0));
    console.log(checkNumber(66));
})();