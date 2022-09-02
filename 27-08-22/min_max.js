(function(){
    function getMinMax(arr, n){
        if(n == 1) {
            return arr[0];
        }
        let min = arr[0], max = arr[1];
        if(arr[0] > arr[1]) {
            min = arr[1];
            max = arr[0];
        }

        for(let i = 2 ; i < n; i++) {
            if(arr[i] > max) {
                max = arr[i]
            }

            if(arr[i] < min) {
                min = arr[i];
            }
        }

        return [min,max];
        
    }


    console.log(getMinMax([3,6,87,23,1], 5));
    console.log(getMinMax([2,3,15,6], 4));
     
})()