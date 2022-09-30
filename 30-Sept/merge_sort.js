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
        }
}

function mergeSort(arr, start, end){
    if(start >= end) return;
    let mid = start + parseInt((end - start)/ 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr,start,mid,end);
}

let arr = [9,10,13,4,2,11,1,11];
mergeSort(arr,0, arr.length - 1);
console.log(arr);