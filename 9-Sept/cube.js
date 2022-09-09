function square(n){
    return n*n;
}

function cube(callback, n){
  return n * callback(n);
}

console.log(cube(square,3));


// Change array name to uppercase
function changeToUppercase(str, index){
    return str.toUpperCase()
}
let companies = ['apple' ,'meta', 'microsoft', 'google'];
let newArr = companies.map(changeToUppercase);
console.log(newArr);

let str = "this is my day";
let strArr = str.split(" ");
let strOutput = strArr.map(changeToUppercase);
console.log(strOutput.join(" "))

//Composibility

function add(a,b){ //f1
    return a + b;
}

function mul(a,b){//f2
    return a * b;
}

console.log(mul(add(5,3),7));
