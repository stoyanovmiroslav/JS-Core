function solve() {
    document.querySelector('[name="myBtn"]').addEventListener('click', clickEvent);
    document.querySelector('[name="peshoBtn"]').addEventListener('click', clickEvent);

    function clickEvent(e) {
        let sender = e.target;

        let div = document.createElement('div');
        let span = document.createElement('span');
        let paragraph = document.createElement('p');

        if (sender.name === 'myBtn'){
            span.textContent = 'Me';

            let inputText = document.getElementById('myChatBox');
            paragraph.textContent = inputText.value;
            inputText.value = '';


            div.style.textAlign = 'left';
        }else{
            span.textContent = 'Pesho';

            let inputText = document.getElementById('peshoChatBox');
            paragraph.textContent = inputText.value;
            inputText.value = '';

            div.style.textAlign = 'right';
        }

        div.appendChild(span);
        div.appendChild(paragraph);

        let chat = document.getElementById('chatChronology');

        chat.appendChild(div);
    }
}