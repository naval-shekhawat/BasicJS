(function() {

    function multiply(first, second, r1,c1,r2,c2){
        if(c1 != r2) {
            console.log("Cannot multiple");
            return;
        }

        let sum = 0;
        let output = [[],[],[]];
        for(let i =0; i < r1; i++) {
            for(let j =0; j < c2; j++) { // column
                for(let k = 0 ; k < r2; k++) {
                    sum = sum + first[i][k] * second[k][j]
                }
                output[i][j] = sum;
            }
        }

        return output;
    }


    let matrix1= [[1,2,3,4], [3,5,4, 1], [1,1,1,1]];
    let matrix2= [[1,1], [2,2], [3,3], [4,4]];
    let row_first = 3, col_first = 4;
    let row_second = 4, col_second = 2;
    console.log(multiply(matrix1, matrix2, row_first, col_first, row_second,col_second))
})();