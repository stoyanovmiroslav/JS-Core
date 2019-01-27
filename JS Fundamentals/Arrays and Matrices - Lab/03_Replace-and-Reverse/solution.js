function solve() {
    document.getElementById('result').textContent = (JSON.parse(document.getElementById('arr').value)
        .map((x)=> x[x.length - 1].toUpperCase() + x.split('').reverse().slice(1).join(''))).join(' ');
}