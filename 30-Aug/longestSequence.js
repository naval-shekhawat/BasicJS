(function(){
    function longestSequence(arr, n){
        let count = 1, max = 1;
        arr.sort((a,b) => a - b);
        for(let i = 0; i < n; i++) {
            if(arr[i] == arr[i+1]){
                continue;
            }

            if(arr[i] + 1 == arr[i + 1]) {
                count++;
            }
            else {
                max = count > max ? count : max;
                count = 1;
            }
        }
        console.log("The sorted array is " + arr);

        return max;
    }

    let sample = [34,54,1,2,8, 10, 9, 4,3,2];
    console.log("longest sequence is " + longestSequence(sample, sample.length))
})()