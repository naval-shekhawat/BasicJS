
function partitionWithPivotAtEnd(arr, start, end){
    let pivot = arr[end];
    let i = -1;
    let pi;
 
    for(pi = start; pi < end; pi++){
         if(arr[pi] < pivot) {
             i++;
             swap(arr,pi,i)
         }
    }
    
   swap(arr,i+1,end);
   return pi;
}
 
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] =  arr[j];
    arr[j] = temp;
}

function kthSmallest(arr, start, end, k) {
    if (k > 0 && k <= end - start + 1) {
        var pivotIndex = partitionWithPivotAtEnd(arr, start, end);

        // k - 1 as array is index based
        // subtracting start if the array is right subarray else start will be zero anyway
        if (pivotIndex - start == k - 1)
            return arr[pivotIndex];

        // if the number is located on the left subarray
        if (pivotIndex - start > k - 1)
            return kthSmallest(arr, start, pivotIndex - 1, k);

        // subtracting pi and left from k 
        // if k is on the right subarray
        // if k = 6 and if pivot is at 3rd position we don't need the left elements
        // and hence can be skipped
        return kthSmallest(arr, pivotIndex + 1, end,
        k - pivotIndex + start - 1);
    }

    // if k is greater than arr length return maximum value or
     // this can be an error message 'k is greater than array length
    return Number.MAX_VALUE;
}

var arr = [10,90,50,30,25,70,80];
var k = 7;
console.log("K'th smallest element is " +
kthSmallest(arr, 0, arr.length - 1, k));

