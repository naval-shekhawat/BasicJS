(function(){

    let employee= {
        name: "Peter",
        lastName: "Parker",
        printName: function () {
            console.log(this.name + " " + this.lastName)
        }
       }

       employee.printName();

     let newEmployee = Object.create(employee);
     let anotherEmployee = Object.create(employee);
     console.log(newEmployee); // 
     for(let i in newEmployee){
         console.log(i);
     }

     console.log("is Equal " + newEmployee == anotherEmployee)
     let first = [1,2];
     let second = [1,2];
     console.log(first == second);
     console.log(Object.is("5", 5));
  
})();