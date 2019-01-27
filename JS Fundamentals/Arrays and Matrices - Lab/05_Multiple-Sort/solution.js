function solve() {
    let arr = JSON.parse(document.getElementById('arr').value);

    let arrayAscendingOrder  = document.createElement('div');
    arrayAscendingOrder .textContent = arr.sort((a, b) => a - b).join(', ');
    document.getElementById('result').appendChild(arrayAscendingOrder );

    let arrayAlphabeticallyOrder = document.createElement('div');
    arrayAlphabeticallyOrder.textContent = arr.sort((a,b)=> a.localeCompare(b)).join(', ');
    document.getElementById('result').appendChild(arrayAlphabeticallyOrder);
}