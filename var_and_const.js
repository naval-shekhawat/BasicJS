(function() {
  //variables and constants
  
  const companyName = "XYZ Corporation"
  //companyName = "ABC Corporation"; //error

  // let and var  - changes
  // 1. let follows block scoping. var follows functional scoping
  // 2. let variables are not hoisted while var variables are hoisted
  // 3. cannot redeclare let keywords but var can be redeclared
  var empid = 12345;  
  let salary = 10000; 
  console.log(empid);
  console.log(salary);
  var empid = 3456; // redeclaring
  console.log(empid); // 3456
  // let salary = 100000;  // Error

  
})() // IIFE