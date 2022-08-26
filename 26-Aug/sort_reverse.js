(function(){
    let numbers = [43, 90 ,25, 3,12,0, 31];
    let names = ["Arnab", "Vijay","Jayesh", "Aarav"];
    numbers.sort(function (a,b) {
        return a - b;
    })

    names.sort();
    console.log(numbers);
    console.log(names);

    let otherNumbers = [23,1,45,6,0,99];
    otherNumbers.reverse();
    console.log(otherNumbers);

})()