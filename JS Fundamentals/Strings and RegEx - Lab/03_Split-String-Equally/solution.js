function solve() {
    let text = document.getElementById('str').value;
    let number = document.getElementById('num').value;

    let diff = text.length % number;
    let result = '';
    if (diff !== 0){
        let neededCharacters = number - diff;
        text = text + text.substring(0, neededCharacters);
    }

    text.split('').forEach((x, i) => {
        if (i % number === 0 && i !== 0){
            result += ' ';
        }
        result += x;
    });

    document.getElementById('result').textContent = result;
}