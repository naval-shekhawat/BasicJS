(function(){
    let numbers = [1,2,3,4,5,6,7,8,9,10];  
    //expected output  [5,10,15,20,25];
    // let multiples = numbers.map(function(value){
    //     return value * 5;
    // });

    // Arrow functions => (only for one line code)
    let multiples = numbers.map((value) => value * 5);

    console.log(multiples);

    // expected output [1, 4, 9, 16, 25]
    // let squares = numbers.map(function(number){
    //     return number * number;
    // })

     let squares = numbers.map((number) => number * number)

    console.log("Squares are " + squares);

    let names = ["Peter", "Tony", "Steve"];
    let newNames = names.map((name) =>  "Mr " + name)

    console.log(newNames);

    let newnumbersadded2 = numbers.map((value) => value + 2);
    console.log(newnumbersadded2);

    let cubes = numbers.map((number) => number * number *number)

    console.log("Cubes are " + cubes);


})();