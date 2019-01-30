function solve() {
    let input = document.getElementById('arr').value;
    let newWord = document.getElementById('str').value;

    let arr = JSON.parse(input);
    let oldWord = arr[0].split(' ').filter(x => x)[2];

    let paragraph = document.createElement('p');
    let result = document.getElementById('result');

    let regex = new RegExp(oldWord,"gi");

    arr.forEach(x => {
        let p = paragraph.cloneNode();
        p.textContent = x.replace(regex, newWord);
        result.appendChild(p);
    });
}