(function(){
 // Global Scope
  var company = "XYZ Corporation"; // global variable

  // Functional Scope - var
  function getEmployeeDetails(){
    let empName = "Devavrata";
    return empName + " works for " + company;
  }

  console.log(getEmployeeDetails());
  console.log("Company name " + company);
 //  console.log("emp name  " + empName); // Error. local variable not defined

  // Block Scope - let and const
  // if, switch, for, while or {} is a block
   function getEmployeeSalary(){
        let salary = 1000000;
        if(salary > 100000) {
            let tax = 0.1 * salary;
            salary = salary - tax;
        }

        console.log("salary after tax " + salary);
       //  console.log("tax applied " + tax); // Error. block scoped variable
   }

   getEmployeeSalary();


})()