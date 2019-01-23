function sameNumbers(numbers) {
    let sum = 0;
    let isEqual = true;

    let numbersArray = Array.from(numbers.toString());
    numbersArray.forEach(function(number) {
        sum += Number(number);
        if (number !== numbersArray[0]){
            isEqual = false;
        }
    });

    console.log(isEqual);
    console.log(sum);
}

sameNumbers(2222222);