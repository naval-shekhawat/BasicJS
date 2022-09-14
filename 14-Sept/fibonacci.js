let count = 0
function fibonacci(n){
    if(n == 0) return 0 ;
    if(n == 1) return 1;
    console.log(count++);
    return fibonacci(n - 1) + fibonacci(n -2);
}

console.log(fibonacci(10));

// 5 = 0 1 1 2 3 5 8