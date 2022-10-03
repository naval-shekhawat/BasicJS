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
            merged[mergedIndex] =right[rightIndex];
            rightIndex++;
        }

        mergedIndex++;
    }

    return mergedIndex % 2 == 0  
                ? merged[mergedIndex - 1] / 2
                : (merged[mergedIndex - 1] + 1)/2;
}

function getMedian2(left,right){
    let leftIndex = 0, rightIndex = 0;
    let leftArrLength = left.length;
    let m1 = -1, m2 = -1;
   for(let count = 0; count <= leftArrLength; count++){
        if(left[leftIndex] <= right[rightIndex]) {
            m1 = m2;
            m2 = left[leftIndex];
            leftIndex++;
        } else {
            m1 = m2;
            m2 = right[rightIndex]; 
            rightIndex++;
        }
    }
    console.log(m1 + " " + m2)
    return (m2 + m1) /2;
}

let left = [11, 12, 25, 26, 38],
    right =  [2, 23, 17, 20, 45];

  // [2,11,12,17,20,23,25,26,38,45]

console.log(getMedian(left, right));
console.log(getMedian2(left, right));