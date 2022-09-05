(function(){

    function getTriangleSum(matrix, rows, cols){
        let upperTriangleSum = 0, lowerTriangleSum = 0;
        for(let row = 0; row < rows; row++){
            for(let col = 0; col < cols; col++){
                if(row <= col) { // row =1, col =1
                    upperTriangleSum+= matrix[row][col];
                } 

                if(row >= col) { // row = 1, col =1
                    lowerTriangleSum+= matrix[row][col];
                }
            }
        }

        return {
            lowerTriangleSum,
            upperTriangleSum
        } ;
    }

    let matrix = [[1,9,1], [0,4,2], [11,6,3]];
    let rows = matrix.length;
    let cols = matrix[0].length;
    console.log(getTriangleSum(matrix,rows,cols))
})();