
let compareFunction = function(a,b) {
    return a - b;
}

let numbers = [15,20,100,50,1,250];
let countries = ["India", "Italy", "Brazil", "China", "Austria"]
let stringNumbers = ['15', '20', '100','50','1','250'];
let mixedNumbers = ['15', 1, "23", 22 , undefined,17, 150, "Sushovan"];

console.log("numbers" + numbers.sort());
console.log("numbers with compare" + numbers.sort(compareFunction));
console.log("str Number " + stringNumbers.sort());
console.log("str Number with Compare " + stringNumbers.sort(compareFunction));
console.log(countries.sort());
console.log("mixed Number " + mixedNumbers.sort());
console.log("mixed Number with Compare " + mixedNumbers.sort(compareFunction));


let employees = [
    {
        name: "Sushovan",
        salary: 120000
    },
    {
        name: "Jayesh",
        salary: 100000
    },
    {
        name: "Preeti",
        salary: 115000
    }];


    employees.sort(function(a,b){
        return a.salary - b.salary;
    });

    for(let i in employees) {
        console.log(employees[i])
    }

