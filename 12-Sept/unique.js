function getUniqueElement(arr){
    let dictionary = {};
    for(let i = 0; i < arr.length; i++){
        if(dictionary[arr[i]] == undefined){
            dictionary[arr[i]] = 1;
        } else {
            dictionary[arr[i]] +=  1
        }
    }

    console.log(dictionary)
}

function getUniqueByBitWise(arr){
    let output = arr[0];
    for(let i = 1; i< arr.length; i++){
        output = output ^ arr[i];
    }

    return output;
}

let arr = [21, 13,21,90,90,12,12]
getUniqueElement(arr);
console.log(getUniqueByBitWise(arr));