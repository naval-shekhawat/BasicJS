(function(){
    function unique(matrix,rows, cols){
        let oneDArray = [] ;
        for(let row = 0; row < rows; row++) {
            for(let col = 0; col < cols; col++) {
                oneDArray.push(matrix[row][col]);
            }
        }

        console.log(oneDArray);

        let output = oneDArray.filter((item, index, self) => 
             self.indexOf(item) !== index )

        console.log(output);
    }

    let mat = [
        [11, 2, 2, 20], 
        [5, 16, 20, 7],
        [1, 13, 5, 16],
        [6, 7, 18, 15]
      ];

      unique(mat,4,4)
      
})();