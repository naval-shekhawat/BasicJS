(function(){
    let numbers = [12, 33, 87, 25,23, 30,45];

    let divibleBy5 = numbers.find(function(number) {
        return number % 5 ==0;
    })

    console.log(divibleBy5);

    let employees = [
        {
            name: "Vijay",
            role: "Lead"
        },
        {
            name: "Ajay",
            role: "Senior"
        },
        {
            name: "Vishal",
            role: "SSE"
        },
        {
            name: "Atul",
            role: "Lead"
        },
    ]

    let lead = employees.find((emp) => emp.role == "Manager");
    console.log(lead);

})()