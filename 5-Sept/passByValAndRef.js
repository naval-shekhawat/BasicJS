(function(){

     function swap(a,b){ // swap([1,2], [3,4])
        let temp;
        temp = a;
        a = b;
        b = temp;
     }

     // Pass By Value
     let num1 = 13;
     let num2 = 45;
    // console.log(`Original numbers before swap are ${num1} and ${num2}`);
    // swap(num1,num2); //passing values to swap method
    // console.log(`Original numbers after swap are ${num1} and ${num2}`);


     // Pass By Reference

     function addItem(arr, item) {
         arr.push(item);
         console.log("Inside add Method " + arr);
     }

     let first = [1,2];
     let second = [3,4];
     console.log(`Original array before ${first} and  ${second}`);
     addItem(first, 3)
     console.log(`Original array after ${first} and  ${second}`);
   
     // Object

     function addMiddleName(employee, middleName){
         employee.middleName = middleName;
         console.log("Passed Object " + employee.hasOwnProperty('middleName'));
     }

     let employee= {
      name: "Peter",
      lastName: "Parker"
     }

     swap(employee.name, employee.lastName)
     addMiddleName(employee, "J");
     console.log(`Original object after swap ${employee.name} and  ${employee.lastName}`);
     console.log("Original object " + employee.hasOwnProperty('middleName'))

})();