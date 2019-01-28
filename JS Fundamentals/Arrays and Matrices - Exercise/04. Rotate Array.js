function solve(array){
    let rotations = array.pop();

    for (let i = 0; i < rotations % array.length ; i++) {
        let element = array.pop();
        array.unshift(element);
    }

    console.log(array.join(' '));;
}

solve(['1', '2', '3', '4', '2']);