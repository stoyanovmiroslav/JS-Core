function solve(input){
    console.log(input.sort(function (a, b) {
        return a.length - b.length || a.localeCompare(b);
    }).join('\n'));
}

solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);