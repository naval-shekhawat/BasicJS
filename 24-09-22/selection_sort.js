function selectionSort(arr){
    let N = arr.length;
    for(let i = 0; i< N; i++){
        let min = i;
        for(let j = i; j < N; j++){
            if(arr[j + 1] < arr[j]) {
                min = j + 1;
            }
        }

        swap(arr,i,min);
    }

    return arr;
}

function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

let arr = [14,4,5,14,0]
console.log(selectionSort(arr))