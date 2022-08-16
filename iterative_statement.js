(function(){
    let sum_even = 0;
    // for loop
    for(let i = 1 ; i <= 20; i++){
       if(i % 2 == 0) {
        sum_even += i;
       }
    }

    console.log("The sum of first 10 even numbers " + sum_even);


    // while loop
     let sum_odd = 0;
     let counter = 1;
     while (counter<=20) {
        if(counter % 2 != 0) {
            sum_odd += counter;
        }

        counter++;
     }

     console.log("The sum of first 10 odd numbers " + sum_odd);

})();