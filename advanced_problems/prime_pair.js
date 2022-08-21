(function() {

    function isPrime(num) {
        let prime = true;
        for(let i = 2; i < Math.sqrt(num); i++){
            if(num % i == 0) {
                prime = false;
                break;
            }
        }
        return prime;
    }

    function getPairs(number){
        for(let i = 2 ; i < Math.sqrt(number); i++) {
            if(isPrime(i) && isPrime(number -i)){
             console.log(`The pair is ${i} and ${number-i} `);
            }
        }
    }

    getPairs(15);
})();