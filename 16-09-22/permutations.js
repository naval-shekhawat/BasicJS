function printStringPermutations(str,level,stringLength){
    if(level == stringLength) {
        console.log(str);
    }

    for(let i = level; i<= stringLength; i++) {
        str = swap(str, i, level);
        printStringPermutations(str,level + 1,stringLength);
    }
}

function swap(str, a, b) {
    let strArray = str.split("");
    let temp;
    temp = strArray[a];
    strArray[a] = strArray[b];
    strArray[b] = temp;

    return strArray.join("");
}


let str = "ABCD";
printStringPermutations(str, 0, str.length - 1)