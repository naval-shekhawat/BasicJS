(function(){
    function search(matrix, rows, cols, numberToFind){
        let row = 0, col = cols - 1 ;
        while(row < rows && cols >=0) {
            if(matrix[row][col] == numberToFind) {
                return true;
            }else if(matrix[row][col] < numberToFind) {
                row++;
            }else if(matrix[row][col] > numberToFind) {
               col--
            }
        }

        return false;
    }

    let matrix = [[1,5,7, 8],[9,11,13,19],[21,24,26,39]];
    let rows = matrix.length;
    let cols = matrix[0].length;
    let numberToFind = 261;
    console.log(search(matrix, rows, cols, numberToFind))
})()