function printTriplets(arr, n) {
    let found = false;
    for(let i = 0; i < n; i++) {
        let left = i + 1;
        let right = n -1;

        while(left <= right) {
            let tripletSum = arr[i] + arr[left] + arr[right];
            if(tripletSum == 0) {
                console.log(`The triplets are ${arr[i]} ${arr[left]} ${arr[right]}`)
                left++;
                right--;
                found = true;
            } else if(tripletSum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    if(!found) {
        console.log("No triplet found")
    }

}

let arr = [1,-1,2,0,3,2,-2]
printTriplets(arr, arr.length);