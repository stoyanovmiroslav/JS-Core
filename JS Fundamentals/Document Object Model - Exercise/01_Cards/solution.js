function solve() {
    Array.from(document.getElementsByTagName('img')).forEach(img =>
        img.addEventListener('click', clickEvent))

    function clickEvent(e) {
        let cart = e.target;
        cart.src = 'images/whiteCard.jpg';
        cart.removeEventListener('click', clickEvent);

        let cartNumber = Number(cart.name);

        let spans = document.getElementById('result').children;
        let leftSpan = spans[0];
        let rightSpan = spans[2];

        let parent = cart.parentNode;

        if (parent.id === 'player1Div')
        {
            firstElement = cart;
            leftSpan.textContent = cart.name;
        }
        else if(parent.id === 'player2Div'){
            secondElement = cart;
            rightSpan.textContent = cart.name;
        }

        if (leftSpan.textContent && rightSpan.textContent){
            let firstNumber = Number(firstElement.name);
            let secondNumber = Number(secondElement.name);

            if (firstNumber > secondNumber){
                firstElement.style.border = '2px solid green';
                secondElement.style.border = '2px solid darkred';
            } else {
                firstElement.style.border = '2px solid darkred';
                secondElement.style.border = '2px solid green';
            }

            let history = document.getElementById('history');
            history.textContent += `[${firstNumber} vs ${secondNumber}] `;

            leftSpan.textContent = '';
            rightSpan.textContent = '';
        }
    }
}