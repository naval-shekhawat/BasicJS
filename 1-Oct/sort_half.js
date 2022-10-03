function halfSort(arr, N){
    let rightHalfIndex = 0;
    for(let i = 0; i< N - 1; i++) {
        if(arr[i] > arr[i+ 1]) {
            rightHalfIndex = i + 1;
            break;
        }
    }
    // leftSortedArray = [0 to rightHalfIndex - 1]
    // rightSortedArray = [rightHalfIndex to N]

    let leftIndex = 0, rightIndex = rightHalfIndex, mergedIndex = 0,
        merged = [];
    while(leftIndex < rightHalfIndex && rightIndex < N) {
       if(arr[leftIndex] <= arr[rightIndex]) {
            merged[mergedIndex] = arr[leftIndex];
            leftIndex++;
       } else {
            merged[mergedIndex] = arr[rightIndex];
            rightIndex++;
       }

       mergedIndex++;
    }

    while(rightIndex < N) {
        merged[mergedIndex] = arr[rightIndex];
        rightIndex++;
        mergedIndex++;
    }

    while(leftIndex < rightHalfIndex) {
        merged[mergedIndex] = arr[leftIndex];
        leftIndex++;
        mergedIndex++;
    }

    return merged;
}

let arr = [1,4,5, 3,99,109];
console.log(halfSort(arr, arr.length))

 arr = [3,99,109, 1,4,5];
console.log(halfSort(arr, arr.length))

arr = [1,2,3,4,99,109];
console.log(halfSort(arr, arr.length))