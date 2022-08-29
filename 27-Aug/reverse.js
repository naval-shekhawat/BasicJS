(function(){
  //swap(5,6)
    function swap(arr, left,right) {
        let temp;
        temp = arr[left]; // temp = 5 , a = 5 ,b =6
        arr[left] = arr[right];  // temp = 5, a = 6, b = 6
        arr[right] = temp // temp = 5, a = 6, b = 5
    }

    function reverse(arr){
        if(arr.length == 1) {
            return arr[0];
        }
 
        let leftPointer = 0;
        let rightPointer = arr.length - 1;

        while(leftPointer <= rightPointer) {
           swap(arr, leftPointer, rightPointer);
           leftPointer++;
           rightPointer--;
        }

        return arr;

    }

    console.log(reverse([2,5,6,9])) // [9,6,5,2]
})()