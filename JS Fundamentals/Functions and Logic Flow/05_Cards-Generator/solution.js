function solve() {
    let carts = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    document.querySelector('#exercise button').addEventListener('click', clickEvent);

    function clickEvent(e) {
        let from = document.getElementById('from');
        let to = document.getElementById('to');

        let option = Array.from(document.querySelector('#exercise select').children).filter(x => x.selected)[0];

        let fromIndex = carts.indexOf(from.value.toUpperCase());
        let toIndex = carts.indexOf(to.value.toUpperCase());
        let suit = option.value.substr(option.value.length - 1, 1);

        if (fromIndex < 0 || toIndex < 0) {
            return;
        }

        for (let i = fromIndex; i <= toIndex ; i++) {
            let div = document.createElement('div');
            div.classList.add('card');

            let p1 = document.createElement('p');
            p1.textContent = carts[i];

            let p2 = document.createElement('p');
            p2.textContent = suit;

            let p3 = document.createElement('p');
            p3.textContent = suit;

            document.getElementById('cards').appendChild(div);

            div.appendChild(p2);
            div.appendChild(p1);
            div.appendChild(p3);
        }
    }
}