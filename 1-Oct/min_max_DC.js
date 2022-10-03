function getMinAndMax(arr, start, end){
    if (end < start) return;
    let min = -1, max = -1;
    if(start == end) {
        min = arr[start];
        max = arr[start];
    } else if(start + 1 == end) {
        if(arr[start] >= arr[end]) {
            min = arr[end];
            max = arr[start];
        } else {
            min = arr[start];
            max = arr[end];
        } 
    } else {
        let left = []; let right = [];
        let mid = start + parseInt((end - start)/2);
        left = getMinAndMax(arr,start, mid);
        right = getMinAndMax(arr,mid + 1, end);

        if(left[0] < right[0]) {
            min = left[0];
        } else {
            min = right[0];
        }
    
        if(left[1] > right[1]) {
            max = left[1];
        } else {
            max = right[1];
        }
    }

   return [min, max]
}

let arr = [7,-1,4,2,10,-3];
console.log(getMinAndMax(arr,0, arr.length - 1))