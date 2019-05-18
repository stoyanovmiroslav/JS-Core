function solve(){
   // TODO: Add the functionality here.
    let kindomArray = ['CASTLE', 'DUNGEON', 'FORTRESS', 'INFERNO', 'NECROPOLIS', 'RAMPART', 'STRONGHOLD', 'TOWER', 'CONFLUX'];

    let button = document.querySelector('#kingdom div button');
    let buttonJoin = document.querySelector('#characters div button');
    button.addEventListener('click', test);
    buttonJoin.addEventListener('click', join);

    console.log(buttonJoin);

    function join(e){
        let educationForm = $('input[name=characterType]:checked').val();

        if (!educationForm) {
            console.log('in1');
            return;
        }

        let character = document.querySelectorAll('#characters div input[type="text"]')[0];
        let kingdom = document.querySelectorAll('#characters div input[type="text"]')[1];

        if (character.length < 2) {
            console.log('in2');
            return;
        }

        if (kindomArray.includes(kingdom.value.toUpperCase())) {
            let kingdomElement = document.querySelector(`#map #${kingdom.value.toLowerCase()} fieldset`);

            let div =  kingdomElement.querySelector('div');
            div.textContent += `${character.value} `;

            if(educationForm === 'tank'){
                let p = kingdomElement.querySelectorAll('p')[0];

                let number = p.textContent.split(' - ')[1];

                p.textContent = `TANKS - ${Number(number)+1}`;
            }else if(educationForm === 'fighter'){
                let p = kingdomElement.querySelectorAll('p')[1];

                let number = p.textContent.split(' - ')[1];

                p.textContent = `FIGHTERS - ${Number(number) + 1}`;

            }else if(educationForm === 'mage'){
                let p = kingdomElement.querySelectorAll('p')[2];

                let number = p.textContent.split(' - ')[1];
                p.textContent = `MAGES - ${Number(number) + 1}`;
            }



            console.log(kingdomElement);

            console.log(character);
            console.log(kingdom);
            console.log(e.target);
        }
    }

    function test(e) {
        console.log(e.target);
        let kindom = document.querySelectorAll('#kingdom div input')[0];
        let king = document.querySelectorAll('#kingdom div input')[1];

        //check
        //Тhe king's name should be a string with length greater or equal than two.
        //The kingdom's name can be one of the following: CASTLE, DUNGEON, FORTRESS, INFERNO, NECROPOLIS, RAMPART, STRONGHOLD, TOWER or CONFLUX. (case insensitive)

        if (king.value.length >= 2 &&  kindomArray.includes(kindom.value.toUpperCase())){

        let kingdomElement = document.querySelector(`#map #${kindom.value.toLowerCase()}`);

        let h1 = document.createElement('h1');
        h1.textContent = kindom.value.toUpperCase();

        let div = document.createElement('div');
        div.classList.add('castle');

        let h2 = document.createElement('h2');
        h2.textContent = king.value.toUpperCase();

        let fieldset = document.createElement('fieldset');

        let legent = document.createElement('legend');
        legent.textContent = 'Army';

        let p1 = document.createElement('p');
        p1.textContent = 'TANKS - 0';

        let p2 = document.createElement('p');
        p2.textContent = 'FIGHTERS - 0';

        let p3 = document.createElement('p');
        p3.textContent = 'MAGES - 0';

        fieldset.appendChild(legent);
        fieldset.appendChild(p1);
        fieldset.appendChild(p2);
        fieldset.appendChild(p3);

        let div2 = document.createElement('div');
        div2.classList.add('armyOutput');

            fieldset.appendChild(div2);



        kingdomElement.style = 'display: inline block';
        console.log(kingdomElement);

        kingdomElement.appendChild(h1);
        kingdomElement.appendChild(div);
        kingdomElement.appendChild(h2);
        kingdomElement.appendChild(fieldset);


//       •	h1 element for the kingdom name
//	div element with class="castle"
//           •	h2 element for the king's name
//	fieldset element for the army information



        console.log(kingdomElement);
        console.log(kindom.value);
        console.log(king.value);
        }

    }
}

solve();


