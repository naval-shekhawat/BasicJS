(function(){

    function wave(matrix, total_rows, total_cols){
        let col= 0;
        while(col <= total_cols ){ // 4
            if(col % 2 == 0) {
                for(let row = 0; row < total_rows; row++){
                    console.log(matrix[row][col]);
                } // N
            } else {
                for(let row = total_rows - 1; row >=0; row--){
                    console.log(matrix[row][col]);
                } // N
            } 

            col++;
        }
    }

    // external loop * internal_loop N
    //M * (N)

    let matrix = [[1,2,3,4],[5,6,7,8], [9,10,11,12]]
    console.log(wave(matrix, 3,4))
})()