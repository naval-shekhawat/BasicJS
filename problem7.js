(function(){    
    function getSumofdigits(num){
        let sum = 0
        while ( num >= 1) {
            sum = sum + (num % 10);
            num = parseInt(num / 10)
    
        }
        return sum;
        }
        console.log(getSumofdigits(456));
        console.log(getSumofdigits(400));
        console.log(getSumofdigits(12345));
        console.log(getSumofdigits(93));
    }
)();