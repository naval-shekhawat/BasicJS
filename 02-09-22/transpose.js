(function(){

    function swap(arr, i ,j) {
        let temp;
        temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
    }

    function transpose(matrix, total_rows, total_cols) {
        for(let row =0; row<total_rows; row++){
            for(let col = 0 ; col < row; col++){
                swap(matrix,row,col);
            }
        }

        return matrix;
    }

    let matrix = [[1,2,3],[4,5,6], [7,8,9]];
    console.log(transpose(matrix,3,3))
})();