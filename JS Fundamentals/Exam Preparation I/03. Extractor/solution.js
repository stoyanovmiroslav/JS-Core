function solve() {
    let button = document.querySelector('#exercise button');
    button.addEventListener('click', clickEvent);

    function clickEvent(e) {
        let input = document.getElementById('input').value;
        let numberOfCharacter = Number(input.match(/[0-9]+/)[0]);

        let numberOfCharacterLength = numberOfCharacter.toString().length;

        input = input.split('').slice(numberOfCharacterLength, numberOfCharacter + numberOfCharacterLength);

        let separator = input.pop();
        let inputArgs = input.join('').split(separator);

        let regex = new RegExp(`[${inputArgs[0]}]+`, 'g');
        let result = inputArgs[1].split(regex).join('').split('#').join(' ');

        document.getElementById('output').value = result;
    }
}