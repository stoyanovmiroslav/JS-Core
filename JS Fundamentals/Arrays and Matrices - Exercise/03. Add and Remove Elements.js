function solve(commands){
    let array = [];
    for (let i = 1; i <= commands.length ; i++) {
        commands[i - 1] === 'add' ? array.push(i) : array.splice(array.length - 1 ,1);
    }

    array.length === 0 ?  console.log('Empty') : array.forEach(x => console.log(x));
}

solve(['add', 'add', 'add', 'add']);