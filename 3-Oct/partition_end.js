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
  console.log("pi = " + pi + " i = " + i)
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] =  arr[j];
    arr[j] = temp;
}

let arr = [10,70,30,80,30,50,40,70];
partitionWithPivotAtEnd(arr,0, arr.length - 1);
console.log(arr);

let arr2 = [24,3,45,6,1,5,27];
partitionWithPivotAtEnd(arr2,0, arr2.length - 1);
console.log(arr2);