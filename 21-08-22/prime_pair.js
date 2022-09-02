(function() {

    function isPrime(number) {
        let prime = true;
        if(number == 1) return false;
        for(let i = 2; i <= Math.sqrt(number); i++){
            if(number % i == 0) {
                prime = false;
                break;
            }
        }
        return prime;
    }

    function getPairs(number){
        for(let i = 1 ; i <(number); i++) {
            if(isPrime(i) && isPrime(number -i)){
             console.log(`The pair is ${i} and ${number-i} `);
            }
        }
    }

    getPairs(15);
})();