function solve() {
	let myNumbers = document.getElementById('myNumbers');

    let button = myNumbers.getElementsByTagName('button')[0];
    button.addEventListener('click', clickEvent)

    function clickEvent(e) {
        let input = myNumbers.getElementsByTagName('input')[0];

        let numbers = input.value.split(' ');
        let unique = numbers.filter((v, i, a) => a.indexOf(v) === i);

        if (numbers.length !== 6 || numbers.some(x => Number(x) < 1 || Number(x) > 49)
        || numbers.some(x => isNaN(x)) || unique.length !== 6)
        {
            console.log(unique.length);
            return;
        }
        button.disabled = true;

        let allNumbers = document.getElementById('allNumbers');

        for (let i = 1; i <= 49 ; i++) {
            let div = document.createElement('div');
            div.classList.add('numbers');

            if (numbers.some(x => Number(x) === i)) {
                div.style.background = 'orange';
            }

            div.textContent = i;

            allNumbers.appendChild(div);
        }

        input.disabled = true;
    }
}