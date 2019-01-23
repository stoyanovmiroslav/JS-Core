function solve() {
    let elementIds = ['firstStep', 'secondStep', 'thirdStep'];
    let steps = 0;

    let buttons = document.getElementById('buttons').children;
    let next = buttons[0];
    let cancel = buttons[1];

    next.addEventListener('click', clickEvent)
    cancel.addEventListener('click', clickEvent)

    function clickEvent(e) {
        let content = document.getElementById('content');

        if(steps === 3 || e.target.textContent === 'Cancel'){
            document.getElementById('exercise').getElementsByTagName('section')[0].style.display = 'none';
            return;

        }else if (steps === 2){
            cancel.style.display = 'none';
            next.textContent = 'Finish';

        }else if (steps === 1){
            let lastElement = document.getElementById(elementIds[steps - 1]);
            let checkedButton = Array.from(lastElement.getElementsByTagName('input'))
                .filter(x => x.checked)[0];

            if (checkedButton.value === 'disagree')
            {
                return;
            }

            next.style.display = 'none';
            setTimeout(() => next.style.display = 'inline', 3000);

        }else if (steps === 0){
            console.log(content);
            content.style.backgroundImage = 'none';
        }

        if (steps !== 0){
            let lastElement = document.getElementById(elementIds[steps - 1]);
            lastElement.style.display = 'none';
        }

        let elementId = elementIds[steps];
        let element = document.getElementById(elementId);
        element.style.display = 'inline';

        console.log(element);
        steps++;
    }
}