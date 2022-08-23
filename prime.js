(function(){
    
    function isPrime(num) {
        let counter = 2;
        let prime = true;
        while(counter < num/2) {
            if(num % counter == 0){
                prime = false;
                break;
            }

            counter++;
        }

        return prime;
    }


    console.log(isPrime(5)); // true
    console.log(isPrime(7)); // true
    console.log(isPrime(9)); // false
    console.log(isPrime(19)); // true
    console.log(isPrime(111));

})();