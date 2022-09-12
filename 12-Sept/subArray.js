function printSubArray(arr){
    for(let i = 0 ; i < arr.length; i++){ // N
        for(let j = i; j < arr.length; j++) { // N
           for(let k = i; k <= j;k++){ // N
            console.log(arr[k]);
           }
           console.log("After j iteration " + j)
        }
    }
}

let arr = [1,2,3,4]
printSubArray(arr);