function insertionSort(arr, N){
    for(let i = 1; i < N; i++) {  
        let previousIndex = i - 1; 
        let currentItem = arr[i];  

        while(previousIndex > -1 && currentItem < arr[previousIndex]) {
            arr[previousIndex + 1] = arr[previousIndex];
            previousIndex--; // -1
        }
        console.log("Pass " + i +  " " + arr)
        arr[previousIndex + 1] = currentItem;
    }

    return arr;
}


const arr = [12,11,13,1, 5];
console.log(insertionSort(arr, arr.length))