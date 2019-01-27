function solve() {
    let input = document.querySelector("#string").value.split('');

    let uniqueCharactersArray  = [];

    for(i = 0; i < input.length; i++){
        if (input[i] === " "){
            uniqueCharactersArray .push(input[i]);
        }
        else if(!uniqueCharactersArray.includes(input[i])){
            uniqueCharactersArray.push(input[i]);
        }
    }

    document.querySelector("#result").textContent = uniqueCharactersArray .join("");
}