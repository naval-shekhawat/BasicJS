function findMinimum(arr, start, end){
    let mid = Math.floor((parseInt(end - start) /2));
    if(mid < end && arr[mid] > arr[mid +1]) {
        return arr[mid + 1];
    }
    if(mid >start && arr[mid] < arr[mid - 1]) {
        return arr[mid];
    }

    if(arr[end] > arr[mid]) {
            findMinimum(arr,start, mid - 1)
    } else {
        findMinimum(arr,mid + 1, end)
    }
}

// let arr = [5,6,1,2,3,4];
let arr = [4,3,2,6,5];
console.log(findMinimum(arr, 0, arr.length - 1));