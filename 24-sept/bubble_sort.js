function bubbleSort(arr){
    let N = arr.length;
    let count = 0;
    let swapped = false;
    for(let i = 0; i < N; i++) {
        swapped = false;
        for(let j =0; j < N; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j+1);
                swapped = true;
            }

            count++;
        }

        if(!swapped) {
            break;
        }
    }

    console.log("Count " + count);
    return arr;
}

function swap(arr,a,b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

let arr = [1,0,3,6,7];
console.log(bubbleSort(arr));