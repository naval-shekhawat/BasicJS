(function(){

    function swap(arr, i ,j) {
        let temp;
        temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
    }
    
    function transpose(matrix, total_rows, total_cols) {
        for(let row = 0; row < total_rows; row++){
            for(let col = 0 ; col < row; col++){
                swap(matrix,row,col);
            }
        }

        return matrix;
    }

    function rotate(matrix, rows, cols){
        let transposed = transpose(matrix, rows, cols);
        for(let row = 0; row < parseInt(rows/2); row++) {
            for(let col =0 ; col < cols; col++){
                let temp;
                temp = transposed[row][col];
                transposed[row][col] = transposed[rows - 1 -row][col];
                transposed[rows - 1 -row][col] = temp;
            }
        }

        console.log(transposed)
    }

    let matrix = [[1,2,3], [4,5,6], [7,8,9]]
    rotate(matrix,3,3);
})()