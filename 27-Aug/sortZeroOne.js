(function(){
    //  [1,0,0,1,1,0,1]
    // arr[left] = 1, arr[right] = 1
    function sortZeroOne(arr, n){
        let left = 0, right = n - 1, temp;
        let count = 0;
        while(left <= right){
            count++;
            if(arr[left] >= arr[right]) {
                temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;  //[1,0,0,1,1,0,1]
                right--; 
            } else{
                left++;
            }
        }

        return arr;

    }

    let arr = [1,0,0,1,1,0,1];  // [0,1,1,0,0,1,0,0,1,0,1] Sir this program is not working with this input
    console.log(sortZeroOne(arr, arr.length))
})();
