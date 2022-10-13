function mergeCards(firstArr, secondArr, firstArrLength, secondArrLength, output){ 
    let first = 0, second = 0, final = 0;
    while(first < firstArrLength && second < secondArrLength){
        if(firstArr[first] <= secondArr[second]) {
            output[final] = firstArr[first];
            first++;
        } else {
            output[final] = secondArr[second];
            second++;
        }

        final++;
    }

    while(first < firstArrLength) {
        output[final] = firstArr[first];
        first++;
        final++;
    }

    while(second < secondArrLength) {
        output[final] = secondArr[second];
        second++;
        final++;
    }
}

function mergeAllCards(arr,i,j,output){
    if(i == j) { 
        for (let p = 0; p < n; p++)
        output[p] = arr[i][p];
        return;
    }

    if( j - i == 1) {
        mergeCards(arr[i], arr[j], arr[i].length, arr[j].length, output)
        return output;
    }

    let o1 = [];
    let o2 = []; 
    mergeAllCards(arr, i, (i + j)/2, o1);  // start -> mid
    mergeAllCards(arr, (i + j)/2 + 1, j, o2);  // mid+ 1 -> end
    mergeCards(o1, o2, n * ((i+j)/2 - i + 1), n *(j - (i+j)/2), output);
}

let n = 3;
let a = [1,5,7];
let b = [2,4,6];
let c = [3,8,9]

let arr = [a,b,c]; // [[1,5,7], [2,4,6], [3,8,9]]
let totalCards = [];
mergeAllCards(arr, 0,arr.length -1, totalCards);
console.log(totalCards)

