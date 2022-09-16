function printLexNumbers(start, range, tempArray){
    if(start > range) return;

    tempArray.push(start);
    console.log(start);
    printLexNumbers(start * 10, range, tempArray);
    if(start % 10 !=9) {
        printLexNumbers(start + 1,range,tempArray)
    }
}

let tempArray = [], range = 15, start = 1;
printLexNumbers(start, range, tempArray);
console.log(tempArray);