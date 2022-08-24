(function() {
 // Number
 // Explicit data type
  var empid = Number(12345);

  // Implicit data typing
  var empAge = 33; // u defined empAge as a number variable

  console.log(typeof(empid));
  console.log(typeof(empAge));
 
  // JS is loosely typed language
  empAge = "45";//u redefined empAge as a string variable
  console.log(typeof(empAge));

  // String
  let empName = "Vijay"
  console.log(typeof(empName))

  let empAddress = String("Pune");
  console.log(typeof(empAddress))

  // Boolean
  let isEmpMarried = true;
  console.log(typeof(isEmpMarried)); //boolean

  let isEmpIndian = Boolean(false);
  console.log(typeof(isEmpIndian)); // boolean

  // undefined
  var empStatus;
  console.log(typeof(empStatus)); // undefined

  // null (it releases memory)
  var empPassportApplicationStatus = null;
  console.log(typeof(empPassportApplicationStatus)); // object
 

  // function
    var calculateEmpSalary = function() {
        // some logic
    }
    console.log(typeof(calculateEmpSalary)); // function

  // object
   var Employee = {}; // empty object
   console.log(typeof(Employee))

   Employee = "Vijay"
   console.log(typeof(Employee))

})() // IIFE