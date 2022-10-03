function quickSort(arr, start, end){
    if(start >= end) return;
    let pi = partition(arr, start, end);
    quickSort(arr, start, pi - 1);
    quickSort(arr, pi + 1, end);
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] =  arr[j];
    arr[j] = temp;
}

function partition(arr,start, end){
    let pivot = arr[end];
    let left = start; right = start;
    while(left < arr.length) {
        if(arr[left] > pivot) {
            left++;
        } else {
            swap(arr, left, right);
            left++;
            right++;
        }
    }

    return right-1;

}

let arr = [39,12,9,7,15,10,14,1,8,21];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
