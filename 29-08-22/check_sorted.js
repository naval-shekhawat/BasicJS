(function(){
    function checkSorted(arr, n) {
        let i = 0 ,j;
       while(i <=n) {
            if(arr[i + 1] >= arr[i]) { //2>1 // 5>2 //4>5
                i++; // 2
            } else {
                break;
            }
        }

        j = i + 1;
        while(j<=n ) { // j = 4
            if(arr[j] <= arr[j-1]) { // 9 <= 4
                j++;// j =4
            } else {
                break;
            }
        }
        return j == n;

    }


    console.log(checkSorted([1,2,5,4,3], 5)) // true
    console.log(checkSorted([1,2,5,4,9], 5)) // false
})();