function solve([matrixRows, matrixColumns, starRow, starCol]){
    let matrix = [];
    for (let row = 0; row < matrixRows; row++) {
        matrix[row] = [];
        for (let col = 0; col < matrixColumns ; col++) {
            matrix[row][col] = Math.max(Math.abs(starCol - col), Math.abs(starRow - row)) + 1;
        }
    }

    matrix.forEach(x => console.log(x.join(' ')));
}

solve([5, 5, 2, 2])