function triplet_sum(arr, target){
    arr.sort((a,b) => a -b); // nlogn

    for(let i = 0; i< arr.length - 1; i++) { 
        let left = i + 1;
        let right = arr.length - 1;
        let sum = 0;

        while(left < right) { 
            sum = arr[i] + arr[left] + arr[right];

            if(sum === target) return {
                first : arr[i],
                second: arr[left],
                third : arr[right]
            }
            if(sum > target) {
                right--
            } else {
                left++;
            }
        }
    }

    return "No triplet found";
}


let arr = [1,3,6,5,2,10,15];
console.log(triplet_sum(arr,140))