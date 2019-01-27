function solve() {
    let number = document.getElementById('num').value;
    let arr = JSON.parse(document.getElementById('arr').value);

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i].toString().indexOf(number);
        result.push(index < 0 ? `false -> ${index}` : `true -> ${index}`);
    }

    document.getElementById('result').textContent = result.join(',');
}