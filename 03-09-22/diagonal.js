(function(){
    function diagonal(matrix, rows, cols){
        for(let row = 0; row < rows; row++){
            for(let col =0; col < cols; col++) {
                if(row != col && matrix[row][col] !=0) {
                    return false;
                }
            }
        }

        return true;
    }


    let matrix = [[0,0,0], [0,0,0], [0,0,0]];
    let rows = matrix.length;
    let cols = matrix[0].length;
    console.log(diagonal(matrix,rows,cols))
})();