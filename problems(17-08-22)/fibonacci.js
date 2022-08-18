(function() {
    function fibonacci(number) {
        let previous  = 0, current = 1, output = 0;
        console.log(previous); // 0
        console.log(current);  // 1
        for(let i = 1 ; i <=number ; i++) {
            output = previous + current; 
            console.log(output); //2
            previous = current;  
            current = output; 
        }
    }

    console.log(fibonacci(5));

})();