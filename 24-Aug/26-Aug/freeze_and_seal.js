(function() {
    "use strict";

    // Freeze
    let learner = {};
    learner.name = "Jayesh";
    learner.lastName ="Chauhan"

    Object.freeze(learner);
   //  learner.middleName = "XYX";  //Error
   //  delete learner.lastName;  // Error
  

   // Seal

   let student = {};
   student.name ="Salman";
   student.lastName = "Shaikh"

   Object.seal(student);
   student.name = "Shahrukh";
   console.log(student.name);

   delete student.name;

})();