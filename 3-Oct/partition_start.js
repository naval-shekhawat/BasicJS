function partitionWithPivotAtStart(arr, start, end){
  let pivot = arr[start];
  let i = start + 1;
  let pi = end;

  while(pi >= i) {
    if(pivot > arr[pi]) {
        swap(arr, i, pi);
        i++;
    } else{
        pi--;
    }
  }

  swap(arr,0,pi);

  console.log("i = " + i + " pi =  " + pi )
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] =  arr[j];
    arr[j] = temp;
}

let arr1 = [40,80,30,50,70,10,20];
partitionWithPivotAtStart(arr1,0, arr1.length - 1);
 console.log(arr1);

let arr2 = [24,3,45,6,1,5,27];
partitionWithPivotAtStart(arr2,0, arr2.length - 1);
console.log(arr2);