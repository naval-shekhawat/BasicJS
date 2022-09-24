function findLargestAtPosition(arr, position){
    let N = arr.length;
    for(let i = 0; i < position; i++) {
        for(let j =0; j < N; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr[N - position];
}

function swap(arr,a,b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

let arr = [8,5,0,2,1];
let position = 3;
console.log(findLargestAtPosition(arr, position));