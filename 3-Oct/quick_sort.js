function quickSort(arr, start, end){ 
    console.log("start " + start + " end = " + end)
    if(start >= end) return;
    let pi = partition(arr, start, end);
    // quickSort(arr, start, pi - 1); 
    // quickSort(arr, pi + 1, end); 
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] =  arr[j];
    arr[j] = temp;
}

function partitionWithPivotAtEnd(arr,start, end){
    let pivot = arr[end],
        i = start - 1;

    for (let pi = start; pi < end; pi++) {
        if(arr[pi] < pivot) {
            i++;
            swap(arr, pi, i);
        } 
    }
    swap(arr, i + 1, end);
    console.log(" arr after partition " + arr);

    return i + 1;
}

function partitionWithPivotAtStart(arr, start, end){
    let pivot = arr[start],
        i = start + 1,
        pi = end;
   while(pi >= i){
        if(arr[pi] < pivot) {
            swap(arr, pi, i);
            i++;
        } else{
            pi--;
        }
    }
    swap(arr, pi , start);

    return pi;
}

function partition(arr, low, high) {
    if (low >= high) {
        return;
    }
    let start = low;
    let end = high;
    let mid = Math.floor((end + start) / 2);
    let pivot = arr[mid];

    while(start < end) {
        while(arr[start] < pivot) {
            start++;
        }
        while(arr[end] > pivot) {
            end--;
        }

        if(start <= end){
            swap(arr, start, end);
            start++;
            end--;
        }
    }
    console.log(arr)
    partition(arr, low, end);
    partition(arr,start, high);
}

let arr = [80,50,60,70,30,10,90]; // 0 - 9 elemts and 21's position is 8th. which is my pivot position
console.log("Initial array " +  arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);

