(function() {
    //  function pushNegativeToEnd(arr){
    //     arr.sort((a,b) => b -a)
    //     console.log("new Arr " +arr); // n logn
    //  }

     function pushNegativeToEnd(arr){
        let left =0, right = arr.length -1;
        while(left <= right){
            if(arr[left] >=0 && arr[right] >=0) {
                left++;
            } else if(arr[left] < 0 && arr[right] < 0) {
               right--;
            } else if(arr[left] < 0 && arr[right] >= 0) {
                let temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            } else {
                left++;
                right--;
            }
        }

        return arr;
     }


     let sample = [-1,1,8,-5,0,-3];
     console.log(pushNegativeToEnd(sample))
})();