function getInversionCount(arr, N){
    let count = 0;
    for(let i = 0;i < N -1; i++) {
        for(let j = i + 1; j< N; j++){
            if(arr[i] >= arr[j]) {
                count++;
            }
        }
    }

    return count;
}

let arr = [12,11,13,5,6,7];
console.log(getInversionCount(arr, arr.length));