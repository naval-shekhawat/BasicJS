(function(){
    // hoisting moves all variable declaration at the top
    console.log(empName);
    // hoisting works with var keyword only
    var empName = "Vijay";
    // var empName is declaration and empName = 34 is initialization

    printName() // using it before declaration
     // function declarations are also hoisted
     function printName() {
        console.log(empName);
     }


     // function expressions
     console.log(typeof(print2));
     //print2(); //ERROR : print2 is not a function
     var print2 = function(){
        console.log(empName)
     }
     console.log(typeof(print2));
})();