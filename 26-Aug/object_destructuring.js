(function(){
    let learner = {
        name : "XYZ",
        age: 24,
        location: "Jaipur"
    }

    console.log(learner.age);

    let {name:firstName, age,location,course} = learner;
    console.log(course);

    let Employee = {
        personal : {
            name:"",
            age:"",
            gender: ""
        },
        identification : {
            aadhar: "",
            pan: ""
        },
        marks : {
            pcm : {
                physics: 70,
                chemistry: 98
            }
        }
    }

    let chem = Employee.marks.pcm.chemistry;
    let physic = Employee.marks.pcm.physics;
    let {marks : {pcm : {chemistry, physics}}} = Employee;
    console.log(chemistry);
    console.log(physics);

})();