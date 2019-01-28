function solve(inputArray){
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    let matrix = [];
    for (let row = 0; row < inputArray.length; row++) {
        matrix[row] = inputArray[row].split(' ').map(x => Number(x));
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col){
                firstDiagonal += matrix[row][col];
            }

            if (row + col === matrix[row].length - 1)
            {
                secondDiagonal += matrix[row][col];
            }
        }
    }

    if (firstDiagonal === secondDiagonal){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && row + col !== matrix[row].length - 1){
                    matrix[row][col] = firstDiagonal;
                }
            }
        }
    }


    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));;
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)