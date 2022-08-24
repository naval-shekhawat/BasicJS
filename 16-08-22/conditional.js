(function(){

    let empName = "Vijay",
        annualSalary = 200000;

    // salary is less than 5Lac no tax
    // simple if else
    if(annualSalary <= 500000) {
        console.log("No Tax")
    } else {
        console.log("You will be taxed");
    }

    // else if
    if(annualSalary >= 1000000) {
        console.log("30% tax")
    } else if(annualSalary >= 500000) {
        console.log("20 % tax")
    } else {
        console.log("No tax")
    }

    // switch statement 
    switch (true) { // 200000
        case annualSalary >= 1000000:
            console.log("30 % tax");
            break;
        case annualSalary >= 500000:
            console.log("20 % tax");
            break;
        default:
            console.log("no tax")
            break;
    }

    // another switch. Looking for Vijay
    empName = "Jayesh";
   switch (empName) {
    case "Vijay":
        console.log("Vijay Found")
        break;
   
    default:
        console.log("Employee name is " + empName)
        break;
   }


})();