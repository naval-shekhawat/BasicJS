(function(){
  // Assignment operator (= , +=, -=, *=, /*)
  let empName = "Vijay";
  let age = 33;
  let salary = 100000;
  let currentMonthSalary = 100000;
  // salary = salary + currentMonthSalary;
     salary += currentMonthSalary; // shorthand version in case u need previous value


  // comparison operators
  // >, >=, <, <= , ==, != 

  console.log(age>=33); // true
  console.log(age != 34); // true
  console.log(age == "33"); // true (this is value check)

  // strict type check for equality (===, !==)
  console.log(age === "33") // false. value check plus type check and type is string but age is number
  
  // Logical operators
  // &&(AND) , || (OR) , ! (NOR) operators
  // && - both conditions should be true
   // true && true = true
   // false && true = false
   // true && false = false
   // false && false = false

  console.log("============= AND Check ========")
  console.log("AND check " + (empName == "Vijay" && age == 33));// true
  console.log("AND check " + (empName == "Ajay" && age == 33));// false

   // || - atleast one condition should be true
   // true && true = true
   // false && true = true
   // true && false = true
   // false && false = false

  console.log("============= OR Check ========")
  console.log("AND check " + (empName == "Vijay" || age == 33));// true
  console.log("AND check " + (empName == "Ajay" || age == 33));// true

  // ! NOR operator
  console.log("============= NOR Check ========")
  console.log(!(empName == "Vijay")) // false

  // Increment and decrement operator
  let counter = 0;
  // ++var means first print and then increment
  console.log("counter " + counter++);
  console.log(counter); // 1

  // another version var++ means increment first and then print
  console.log(++counter);

  // ternary operator ( ? :)
  let isEmployeeOverThirty = age > 30 ? "Over thirty" : "Under Thirty";
  console.log(isEmployeeOverThirty);

  

})();