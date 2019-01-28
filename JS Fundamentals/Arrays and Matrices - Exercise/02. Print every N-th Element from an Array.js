function solve(input){
    let step = input.pop();
    input.filter((x, i) => i % step === 0).forEach(x => console.log(x));
}

solve(['1', '2', '3', '4', '5', '6']);