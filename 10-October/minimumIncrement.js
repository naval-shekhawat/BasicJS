function minimumIncrement(arr, N){
    if(N < 2) return 0;
    let moves = 0;
    arr.sort((a,b) => a - b);
    for(let i = 1 ; i< N; i++) {
        if(arr[i] <= arr[i - 1]) {
            moves = moves + arr[i - 1] - arr[i] + 1;
            arr[i] = arr[i - 1] + 1;
        }
    }

    return moves;

}

let arr = [1,5,5,6,5]; // 5
console.log(minimumIncrement(arr, arr.length))
