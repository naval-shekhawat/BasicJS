(function(){
    function getLargeNumber(a,b,c){
        switch (true) {
            case a>b && a>c:
                text = a
                break;
            case b>a && b>c:
                text = b
                break;    
            default:
                text = c
                break;
        }
        return text;
    }
    var num = getLargeNumber(78,99,121)
    console.log('Largest Number is', num)
})();