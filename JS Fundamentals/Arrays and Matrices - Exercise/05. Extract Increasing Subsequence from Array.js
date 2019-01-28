function solve(input){
    let minNumber = 0;
    let sortedArray = [];

    for (let i = 0; i < input.length; i++) {
        if(input[i] >= minNumber)
        {
            sortedArray.push(input[i]);
            minNumber = input[i];
        }
    }
    console.log(sortedArray.join('\n'));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);