function sumTriangle(arr){ //arr = [1 2 3 4 5]
    if(arr.length < 1) return;
    let temp = [];
    for(let i =0; i < arr.length - 1; i++) {
        temp[i] = arr[i] + arr[i+1];
    }
   
    sumTriangle(temp); // [3,5,7,9]
    console.log(arr);
}

let arr= [1,2,3,4,5] ;
sumTriangle(arr);