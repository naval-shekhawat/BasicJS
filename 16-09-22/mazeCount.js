function getMazeCount(m,n){
    if(m == 1 || n == 1) return 1;
    return getMazeCount(m - 1, n) + getMazeCount(m, n - 1)
}

let rows = 3;
let columns = 3;
console.log(getMazeCount(rows, columns));