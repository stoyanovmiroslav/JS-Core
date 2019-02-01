function solve() {
    let input = document.getElementById('str').value;
    let sumOfNumbers = getSumOfNumbers(input);

    document.getElementById('result').textContent = input.split('')
        .slice(sumOfNumbers, input.length - sumOfNumbers)
        .join('')
        .split(/(\d{8})/)
        .map(convertBinaryToCharacter)
        .filter(x => x.match(/[A-Za-z\s]/g))
        .join('');

    function convertBinaryToCharacter(value) {
        return String.fromCharCode(parseInt(value, 2));
    }

    function getSumOfNumbers(value){
        value = value.split('').map(Number).reduce((a, b) => a + b).toString();
        return value.length > 1 ? getSumOfNumbers(value) : value;
    }
}