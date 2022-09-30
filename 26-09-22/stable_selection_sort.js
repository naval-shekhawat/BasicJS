function selectionSort(arr){
    let N = arr.length;
    for(let i = 0; i< N - 1; i++){ // i = 2
        let min = i;
        for(let j = i + 1; j < N; j++){ // [1,4,6,8,4]
            if(arr[j + 1] < arr[j]) {
                min = j + 1;  // 4
            }
        }
        let minimum = arr[min]; // 4

        while(min > i){ // min = 2, i = 2
            arr[min] = arr[min - 1]; // [1,4,6,6,8]
            min--;
        }

        arr[i] = minimum; // [1,4,4,6,8]

    }

    return arr;
}

let arr = [14,4,5,14,0]
console.log(selectionSort(arr))