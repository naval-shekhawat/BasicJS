function merge(firstArr, secondArr){
    let first = 0, second = 0, final = 0;
    let firstArrLength = firstArr.length,
        secondArrLength = secondArr.length,
        merged = [];

    while(final < (firstArrLength + secondArrLength)){
        if(firstArr[first] <= secondArr[second]) {
            merged[final] = firstArr[first];
            first++;
        } else {
            merged[final] = secondArr[second];
            second++;
        }

        final++;
    }

    return merged;
}

let A = [1,5,6,7,7];
let B = [2,3,9,9,11,13];
console.log(merge(A,B));