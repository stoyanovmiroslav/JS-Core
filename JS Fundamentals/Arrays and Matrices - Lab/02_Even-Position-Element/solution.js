function solve() {
    let arr = JSON.parse(document.getElementById('arr').value)
        .filter((x, i)=> i % 2 === 0);

    document.getElementById('result').textContent = arr.join(' x ');
}