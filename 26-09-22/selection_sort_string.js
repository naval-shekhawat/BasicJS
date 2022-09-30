function selectionSort(arr){
    let N = arr.length;
    for(let i = 0; i< N - 1; i++){
        let min = i;
        for(let j = i + 1; j < N; j++){
            if(((arr[j]).localeCompare(arr[min])) == 1){
                min = j;
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

let arr = ["India", "Italy", "Brazil", "China", "Austria"]
console.log(selectionSort(arr))