(function(){

    function add(a,b, multiplFunc){
        let c =  a + b;
        return multiplFunc(c, 2)
    }

    function mul(a,b){ // function declaration
        return a * b;
    }

    const mul1 = function(a,b){ // Function expression
        return a * b;
    }

    const mul2 = (a,b) =>  a * b;

    let numbers = [1,2,3,4,5];
    let multipleOfFive  = numbers.map(function(value, index){
        return value * 5;
    })

    let multipleOfFive2  = numbers.map((value) => value * 5)

    let output = add(5,6, mul);
    console.log(output)
})();