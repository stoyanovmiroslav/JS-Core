function solve() {
  let arr = JSON.parse(document.getElementById('arr').value);

    let resultElement = document.getElementById('result');

    for (let i = 0; i < arr.length; i++) {
        let p = document.createElement('p');
        p.textContent = `${i} -> ${arr.length * arr[i]}`;

        resultElement.appendChild(p);
    }
}