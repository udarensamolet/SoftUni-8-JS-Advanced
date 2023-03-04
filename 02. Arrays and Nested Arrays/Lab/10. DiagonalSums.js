function diagonalSums(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    let diagonals = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == col){
                primaryDiagonal += matrix[row][col];
            }
            if (row + col == matrix.length - 1){
                secondaryDiagonal += matrix[row][col];
            }
        }
    }
    diagonals.push(primaryDiagonal, secondaryDiagonal);
    console.log(diagonals.join(' '));
}