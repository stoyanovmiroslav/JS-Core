function solve() {
    let firstNumber = Number(document.getElementById('num1').value);
    let secondNumber = Number(document.getElementById('num2').value);

    let result = document.getElementById('result');

    if (firstNumber > secondNumber) {
        result.textContent = 'Try with other numbers.';
        return;
    }

    for (let i = firstNumber; i <= secondNumber; i++) {
        let p = document.createElement('p');
        p.textContent = `${i} * ${secondNumber} = ${i * secondNumber}`;
        result.appendChild(p);
    }
}