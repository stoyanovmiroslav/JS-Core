function solve() {
    let buttons = document.querySelectorAll('#exercise button');
    buttons[0].addEventListener('click', generate);
    buttons[1].addEventListener('click', buy);

    function generate(e) {
        let furnitureArray = JSON.parse(document.getElementsByTagName('textarea')[0].value);
        let paragraph = document.createElement('p');

        let furnitureList = document.getElementById('furniture-list');

        furnitureArray.forEach(x => {
            let div = document.createElement('div');
            div.classList.add('furniture');

            let p1 = paragraph.cloneNode();
            p1.textContent = `Name: ${x.name}`;

            let p2 = paragraph.cloneNode();
            p2.textContent = `Price: ${x.price}`;

            let p3 = paragraph.cloneNode();
            p3.textContent = `Decoration factor: ${x.decFactor}`;

            let img = document.createElement('img');
            img.src = x.img;

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            div.appendChild(p1);
            div.appendChild(img);
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(checkbox);

            furnitureList.appendChild(div);
        });

    }

    function buy(e) {
       let furnitureList = Array.from(document.querySelectorAll('#furniture-list .furniture'));
       let boughtFurnitureList = [];
       furnitureList.filter(x => x.children[4].checked).forEach(x => {
           let name = x.children[0].textContent.split(': ')[1];
           let price = Number(x.children[2].textContent.split(': ')[1]);
           let decFactor = Number(x.children[3].textContent.split(': ')[1]);

           let furniture = {
               name: name,
               price: price,
               decFactor: decFactor
           };

           boughtFurnitureList.push(furniture);
       });


        let totalPrice = boughtFurnitureList.map(x => x.price).reduce((a, b) => a + b);
        let averageDecoration = boughtFurnitureList.map(x => x.decFactor).reduce((a, b) => a + b) / boughtFurnitureList.length;

        document.getElementsByTagName('textarea')[1].value += `Bought furniture: ${boughtFurnitureList.map(x => x.name).join(', ')}\n`;
        document.getElementsByTagName('textarea')[1].value += `Total price: ${totalPrice.toFixed(2)}\n`;
        document.getElementsByTagName('textarea')[1].value += `Average decoration factor: ${averageDecoration}`;
    }
}