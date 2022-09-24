function bubbleSort(arr){
    let N = arr.length;
    for(let i = 0; i < N; i++) {
        for(let j =0; j < N; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}

function swap(arr,a,b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

let arr = [8,5,0,2,1]
console.log(bubbleSort(arr));