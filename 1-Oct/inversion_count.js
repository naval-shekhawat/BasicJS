let inv_count = 0;

function merge(arr, start, mid, end){
    let firstArrLength = mid - start + 1;
    let secondArrLength = end - mid;
    let firstArr =  new Array(firstArrLength);
    let secondArr =  new Array(secondArrLength);

    for(let i = 0 ; i< firstArrLength; i++) {
        firstArr[i] = arr[start + i];
    }

    for(let j = 0; j < secondArrLength; j++){
        secondArr[j] = arr[mid + 1 + j]
    }

    let first = 0, second = 0, final = start;
    
    while(first < firstArrLength && second < secondArrLength){
        if(firstArr[first] <= secondArr[second]) {
            arr[final] = firstArr[first];
            first++;
        } else {
            inv_count += (firstArrLength - first);
           // inv_count += 1;
            arr[final] = secondArr[second];
            second++;
        }

        final++;
    }

    while(first < firstArrLength) {
        arr[final] = firstArr[first];
        first++;
        final++;
    }

    while(second < secondArrLength) {
        arr[final] = secondArr[second];
        second++;
        final++;
       // inv_count += second + 1;
    }
}

function getInversionCount(arr, start, end){
if(start >= end) return;
let mid = start + parseInt((end - start)/ 2);
getInversionCount(arr, start, mid);
getInversionCount(arr, mid + 1, end);
merge(arr,start,mid,end);
}

// let arr = [9,10,13,4,2,11,1,11];
let arr = [12,11,13,5,6,7];
getInversionCount(arr,0, arr.length - 1);
console.log(inv_count);