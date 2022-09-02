(function(){
    
    // function getPositiveNegativArray(numbers) {
    //     // n
    //     let positives = numbers.filter((item) => item > -1);
    //     // n
    //     let negatives = numbers.filter((item) => item < 0);
    //     console.log("Positive Array " + positives);
    //     console.log("Negative Array " + negatives);
    // }

    function getPositiveNegativArray(numbers) {
     let positives = [], negatives = [];
     for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 0) {
            negatives.push(numbers[i]);
        } else{
            positives.push(numbers[i]);
        }
     }
     console.log("Positive Array " + positives);
     console.log("Negative Array " + negatives);

    }

    // n + n = 2n

    // n = 9
    getPositiveNegativArray([-1,2,-9,1,0,-6,89,12,-2345])
})()