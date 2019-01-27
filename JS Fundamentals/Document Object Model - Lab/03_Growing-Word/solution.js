function solve() {
    let button = document.querySelector('#exercise').children[1].addEventListener('click', clickEvent);
    let count = 0;

    function clickEvent(e) {
        let growingText = document.querySelector('#exercise p');

        if (count % 3 === 0){
            growingText.style.color = 'blue';
        } else if (count % 3 === 1){
            growingText.style.color = 'green';
        } else if (count % 3 === 2){
            growingText.style.color = 'red';
        }

        count++;
        growingText.style.fontSize = `${count * 2}px`;
    }
}