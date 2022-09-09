function binarySearch(arr, item, start, end){
        middle = parseInt((end + start)/2);

        if(arr[middle] == item) {
            return middle;
        }

        if(arr[middle] < item) {
            start = middle + 1
        } else {
            end = middle -1
        }

        return binarySearch(arr,item,start,end)
}


let numbers = [10,20,30,40,50,60,70,80,90,100];
console.log(binarySearch(numbers, 80, 0, numbers.length - 1))