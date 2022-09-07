(function(){
    name = "Vijay";

    function printName(){
        console.log(this.name);
    }

    const anotherPrint = () => {
        console.log(this.name)
    }

    let student1 = {
        name: "Sushovan"
    }

    let student2 = {
        name : "Manpreet"
    }

    printName(); // global name
    printName.call(student1); // Sushovan
    printName.call(student2); // Manpreet

    console.log("With arrow function")
    anotherPrint.call(student1); // Sushovan
    anotherPrint.call(student2); // Manpreet

    name ="Jayesh";
    let obj = { // this context is obj
        name: "Vijay",
        outerFunction : function() {
            let self = this; // obj'context.Now self contains obj
            return function innerFunction() {
                console.log("From Inner " + self.name)
                console.log("From Inner this " + this.name)
            }
        }
    }

    let inner = obj.outerFunction();
    inner();



})();