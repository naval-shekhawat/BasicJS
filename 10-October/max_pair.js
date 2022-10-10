function maxPair(arr, N){
    let sum = 0;
    arr.sort((a,b) => a - b);
    for(let i = 0; i < N; i= i + 2){
        sum = sum + arr[i];
    }

    return sum;
}

let arr = [2,1,4, 3, 100,90];
// [1,2,3,4,90,100]  = 1 + 3 + 90
console.log("max sum is " + maxPair(arr, arr.length - 1))