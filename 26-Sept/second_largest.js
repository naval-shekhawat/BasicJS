function getSecondLargestNumber(arr, N){ // nlogn 
        if(N == 1) {
          return "There is no second element";
        }
        arr.sort(function(a,b){
            return b - a;
        }); // nlogn

        for(let i = 1; i< N;i++){
            if(arr[i] != arr[0]) {
                return arr[i]
            }
        } //n

        return "There is no second element";
}

function getSecondLargestNumber2(arr, N){
    if(N == 1) {
        return "There is no second element";
    }

    let largest =  secondLargest = -24637;
    for(let i = 0; i< N; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i]; 
        }
    }

    return secondLargest == -24637 ? "There is no second element": secondLargest;
}


console.log("Method 1")
console.log(getSecondLargestNumber([87,-3,5,1,0,13], 6));
console.log(getSecondLargestNumber([87,87,28], 3));
console.log(getSecondLargestNumber([87], 1));
console.log(getSecondLargestNumber([87,87,87,87], 4));
console.log(getSecondLargestNumber([87,-3,-5], 3));

console.log("Method 2")
console.log(getSecondLargestNumber2([87,3,5,1,0,13], 6))
console.log(getSecondLargestNumber2([87,87,28], 3));
console.log(getSecondLargestNumber2([87], 1));
console.log(getSecondLargestNumber2([87,87,87,87], 4));
console.log(getSecondLargestNumber2([87,-3,-5], 3));