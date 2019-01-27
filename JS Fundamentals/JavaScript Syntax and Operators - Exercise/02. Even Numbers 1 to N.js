function evenNumbers(input) {

    let number = Number(input);

    for (let i = 2; i <= number; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

evenNumbers(7)