function solve() {
    let input = document.getElementById('str').value;

    let words = [];
    let numbers = [];

    input.split(' ').forEach(x => isNaN(x) ? words.push(x) : numbers.push(x));

    let result = document.getElementById('result');
    let paragraph = document.createElement('p');

    words.map(x => x.split('')
            .map((ch, i) => ch.charCodeAt(0))
                .join(' '))
                    .forEach(x => {
        let p = paragraph.cloneNode();
        p.textContent = x;
        result.appendChild(p);
    });

    let p = paragraph.cloneNode();
    p.textContent = numbers.map(x => String.fromCharCode(x)).join('');

    result.appendChild(p);
}