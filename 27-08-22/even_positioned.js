(function(){

    function rearrangeArray(arr, n) {
        let rightPointer = n - 1;
        let leftPointer = 0;
        let result = [];

        arr.sort(); 

        for(let i = 0 ; i < n; i++) {
            if(i % 2 == 0) { 
                result[i] = arr[rightPointer]; 
                rightPointer = rightPointer - 1; 
            } else {
                result[i] = arr[leftPointer]; 
                leftPointer = leftPointer + 1; 
            }
        }

        return result;
    }

    let arr = [3,1,2,2,5];
    console.log(rearrangeArray(arr, arr.length));

    let arr1 = [9 ,5, 7, 8, 6, 98];
    console.log(rearrangeArray(arr1, arr1.length));

})();