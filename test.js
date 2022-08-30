(function(){
    function swap(arr,left,right){

        temp = arr[left];
        arr[left] =  arr[right]
        arr[right] = temp;
    }

    function reverseArray(arr){

        let temp;

        if(arr.length==1){
            return arr[o];
        }

        let leftPointer = 0;
        rightPointer = arr.length-1;

        while(leftPointer<=rightPointer) {

            swap (arr,leftPointer, rightPointer);
            leftPointer++;
            rightPointer--;
        }

        return arr;

    }

    console.log (reverseArray([1,2,3,4,5])); //5,4,3,2,1

})();
