function getMedian(left, right){
    let leftIndex = 0, rightIndex = 0, mergedIndex = 0;
    let leftArrLength = left.length,
        rightArrLength = right.length;
    let merged = [];
    while(mergedIndex < (leftArrLength + rightArrLength)){
        if(left[leftIndex] <= right[rightIndex]) {
            merged[mergedIndex] = left[leftIndex];
            leftIndex++;
        } else {
            merged[mergedIndex] = right[rightIndex];
            rightIndex++;
        }

        mergedIndex++;
    }

    console.log(merged);
    let totalItems = leftArrLength + rightArrLength;
    let n  = mergedIndex;
    console.log(merged[parseInt(mergedIndex / 2)]);
    console.log(merged[parseInt((mergedIndex -1) / 2)])

    return (totalItems) % 2 == 0  
                ? ((merged[parseInt(mergedIndex / 2)]
                     + merged[parseInt((mergedIndex -1) / 2)]))/2
                : (merged[mergedIndex - 1])/2;
}


var left = [11, 12, 25, 26, 38];
var right = [2, 23, 17, 20, 45];


console.log(getMedian(left, right));