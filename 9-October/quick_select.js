function quickSelect(arr, start, end,target){
    if(start >= end) return;
   partition(arr, start, end,target);
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] =  arr[j];
    arr[j] = temp;
}

function partition(arr, low, high, target) {
    if (low >= high) {
        return;
    }
    let start = low;
    let end = high;
    let pi = Math.floor((end + start) / 2);
    let pivot = arr[pi];

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

    if(target == start) {
        return arr[pi];
    }

    console.log("pivot index " + pi)

    if(target < start) {
        partition(arr, low, end, target);
    } else {
        partition(arr,start, high, target);
    }
}

const arr = [4, 3, 10, 24, 2, 1, 7, 6, 5];
let k = arr.length - 3;
// [1,2,3,4,5,6,7,10,24]
console.log("Initial array " +  arr);
quickSelect(arr, 0, arr.length - 1,k);
console.log(arr[k]);