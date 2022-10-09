// Sort the one side of the array recursively
const quickSort = (arr, low, high, kSmall, KHigh) => {
    if (low >= high) {
        return;
    }
    let start = low;
    let end = high;
    const pi = Math.ceil((low + high) / 2);
    const pivot = arr[pi];
    while (start < end) {
        while (arr[start] < pivot) {
            start++;           
        }

        while (arr[end] > pivot) {
            end--;
        }

        if (start <= end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }

    if (kSmall === pi){
        return arr[kSmall];
    }
    if (kSmall < start){
        quickSort(arr, low, end,  kSmall, KHigh);
    }
    else {
        quickSort(arr, start, high,  kSmall, KHigh);
    }

    if (KHigh === pi){
        return arr[KHigh];
    }
    if (KHigh < start){
        quickSort(arr, low, end,  kSmall, KHigh);
    }
    else {
        quickSort(arr, start, high,  kSmall, KHigh);
    }
}

// quick select function to format the input
const quickSelect = (arr) => {
    const start = 0;
    const end = arr.length - 1;
    quickSort(arr, start, end, 0, arr.length - 1)
    return (arr[start] * arr[end]);
}

// Swapping two index value in an array
const swap = (arr, a, b) =>{
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


const unsortedArray = [4, 3, 10, 24, 2, 1, 7, 6, 5]
const product = quickSelect(unsortedArray)
console.log(product)