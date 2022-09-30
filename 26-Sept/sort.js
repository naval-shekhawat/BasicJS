let numbers = [15,20,100,50,1,250];
let countries = ["India", "Italy", "Brazil","Bhutan", "China", "Austria"];
let stringNumbers = ['15','20','100','50','1','250'];

function compareFunction(a,b){
    return b - a;
}

numbers.sort(compareFunction);
console.log(numbers);

countries.sort();
console.log(countries);

stringNumbers.sort();
console.log(stringNumbers);

stringNumbers.sort(compareFunction);
console.log(stringNumbers); 

let mixedNumbers = ['15',20,'100',50,1,'250'];
mixedNumbers.sort(compareFunction);
console.log(mixedNumbers); 


let sparseArray = [5, 1, 79,-1, 0, -5,"","false", false, ,true, "true", undefined, "zero"];
sparseArray.sort();
console.log(sparseArray); 

let superHeroes = [{
    name: "Spiderman",
    rating: 7,
    strength: 8
},
{
    name: "Iron man",
    rating: 8,
    strength: 10
},
{
    name: "Captain America",
    rating: 6,
    strength: 9
},
{
    name: "Hawk Eye",
    rating: 5,
    strength: 4
},
{
    name: "Hulk",
    rating: 9,
    strength: 10
}];

function sortByProperty(arr, property){
    arr.sort(function(curr, prev) {
        return curr[property] - prev[property];
    });
}

// sort it by rating
console.log("using rating");
sortByProperty(superHeroes,"rating");
console.log(superHeroes);

// sort it by strength
console.log("using strength")
sortByProperty(superHeroes,"strength");
console.log(superHeroes);
