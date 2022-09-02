(function(){

    function reverse(arr,left,right){
        if(left >= right){
            return arr;
        }
        let temp;
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        return reverse(arr,left+1,right-1);
    }
    
    console.log(reverse([1,2,3,5,6],0,5));
})();