let count = 0;
function printSubArray(arr, currentIndex) {
    count++;
    if (currentIndex == arr.length) return count;
  
    let result = "";
    for (let i = currentIndex; i < arr.length; i++) {
      result = result + arr[i];
      console.log(result);
      count++;
    }
    return printSubArray(arr, currentIndex + 1)
  }
  
  let arr = [1, 2, 3, 4,5,6];
  console.log(printSubArray(arr, 0));
  