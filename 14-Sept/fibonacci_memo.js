function fibonacci(n){
    let outputArr = [];
    outputArr[0] = 0;
    outputArr[1] = 1;
    for(let i = 2; i<= n; i++) {
        outputArr[i] = outputArr[i - 1] + outputArr[i - 2];
        console.log(outputArr);
    }

    return outputArr[n]
}

console.log(fibonacci(10));