function reducedArray(arr, N){
    let temp = [...arr];
    temp.sort((a,b) => a - b); 
    let map = {};
    for(let i = 0; i< N; i++) {
        map[temp[i]] = i;
    }

    for(let i =0; i< N; i++) {
        arr[i] = map[arr[i]];
    }
}


let arr = [90,35,12,80, 7]; // output = [4,2,1,3,0]
reducedArray(arr, arr.length);
console.log(arr);