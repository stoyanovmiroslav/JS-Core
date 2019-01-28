function solve(rowNumber, colNumber){
    let matrix = [];

    for (let row = 0; row < rowNumber; row++) {
        matrix[row] = [];
        for (let col = 0; col < colNumber ; col++) {
            matrix[row][col] = 0;
        }
    }

    let steps = rowNumber * colNumber;
    let currentRow = 0;
    let currentCol = 0;
    let currentDirection = 'right';

    for (let i = 1; i <= steps; i++) {
        matrix[currentRow][currentCol] = i;

        if (currentDirection === 'right'){
            if (currentCol === colNumber - 1 || matrix[currentRow][currentCol + 1] !== 0){
                currentDirection = 'down';
                currentRow++;
            }else {
                currentCol++;
            }
        }else if (currentDirection === 'down'){
            if (currentRow === rowNumber - 1 || matrix[currentRow + 1][currentCol] !== 0){
                currentDirection = 'left';
                currentCol--;
            }else {
                currentRow++;
            }
        }else if (currentDirection === 'left'){
            if (currentCol + 1 === 0 || matrix[currentRow][currentCol - 1] !== 0){
                currentDirection = 'up';
                currentRow--;
            }else {
                currentCol--;
            }
        }else if (currentDirection === 'up'){
            if (currentRow <= 0 || matrix[currentRow - 1][currentCol] !== 0){
                currentDirection = 'right';
                currentCol++;
            }else {
                currentRow--;
            }
        }
    }

    for (let array of matrix) {
        console.log(array.join(' '));;
    }
}

solve(5, 5);