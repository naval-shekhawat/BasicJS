function partition(arr, start, end) {
   let mid = Math.floor((start + end)/ 2);
   let pivot = arr[mid];
   console.log("mid " + mid + " pivot " + pivot);

   while(start < end) {
        while(arr[start] < pivot) {
            start++;
        }

        while(arr[end] > pivot) {
            end--;
        }

        if(start <= end) {
            swap(arr, start, end);
            start++;
            end--;
        }
   }
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] =  arr[j];
    arr[j] = temp;
}

let arr1 = [10,80,30,50,70,40,20];
partition(arr1,0, arr1.length - 1);
console.log(arr1);

let arr = [5, 6, 2, 4, 7, 3, 1];
partition(arr,0, arr.length - 1);
console.log(arr);