(function(){

        function getColumnSum(matrix,rows, cols){
            let sum = [];
            for(let col = 0; col < cols; col++){ //M
                sum[col] = 0;
                for(let row = 0; row < rows; row++){ //N
                  sum[col] = sum[col] + matrix[row][col];
                }
            }

            return sum;
        }


        function getColumnSumWithReduce(matrix,rows, cols){
            return matrix.reduce((prevRow, currentRow) => {
               return currentRow.map((item, index) => {
                    return item + prevRow[index]
               })
            })
        }

        // N * M

        let matrix = [[1,5,7],[2,5,3],[0,5,10],[9,9,9]];
        let rows = matrix.length;
        let cols = matrix[0].length;
        console.log(getColumnSum(matrix, rows, cols))
        console.log(getColumnSumWithReduce(matrix, rows, cols))
})()