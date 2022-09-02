(function() {

  let arr1 = [1,1,1],
      arr2 = [2,2,2],
      arr3 = [3,3,3]

   //let matrix = [arr1,arr2,arr3];
   let matrix = [[1,1,1], [2,2,2], [3,3,3]]

   // add item at the end
  // matrix.push([0,0,0])

  //remove item from the end
   // matrix.pop()
    // insert an item at 2nd index
  // matrix.splice(2,0, [9,9,9]);

   for(let i = 0; i< matrix.length;i++){
    for(let j = 0; j < matrix[i].length;j++) {
        console.log(matrix[i][j])
    }
   }
  
})();