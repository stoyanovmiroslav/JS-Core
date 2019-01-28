function solve(matrix){
    let rowArray = [];
    let colArray = [];

    for (let row = 0; row < matrix.length; row++) {
        rowArray[row] = matrix[row].reduce((a, b) => a + b, 0);
        for (let col = 0; col < matrix[row].length; col++) {
           colArray[col] = colArray[col] === undefined ? matrix[row][col] : colArray[col] + matrix[row][col];
        }
    }

    let magicNumber = colArray[0];
    let isMagicMatrix = !(colArray.some(x => x !== magicNumber) || rowArray.some(x => x !== magicNumber));
    console.log(isMagicMatrix);
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);