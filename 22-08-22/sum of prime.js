(function(){

    function isPrime(number) {
        let prime = true;
        if(number == 1) return false;
        for(let i = 2; i <= Math.sqrt(number); i++) {
            if(number % i == 0) {
                prime = false;
                break;
            }
        }

        return prime;
    }

    function sumOfPrime(n){
        for(let i =1 ; i< n ;i++){
            if(isPrime(i) && isPrime(n-i)){
                console.log(`The pairs are ${i} and ${n-i}`)
            }
        }
    }

    console.log(sumOfPrime(8));

})();