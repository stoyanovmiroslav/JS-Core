function solve() {
    let buttons = document.querySelectorAll('#exercise button');

    let milkButton = buttons[0].addEventListener('click', addProduct);
    let breadButton = buttons[1].addEventListener('click', addProduct);
    let tomatoesButton = buttons[2].addEventListener('click', addProduct);
    let buyButton = buttons[3].addEventListener('click', buyProducts);

    let textArea = document.querySelector('textarea');
    let boughtProducts = [];
    
    function buyProducts() {
        let listOfProducts = boughtProducts.map(x => x.name).join(', ');
        let totalPrice = boughtProducts.map(x => x.totalPrice).reduce((a, b) => a + b);

        textArea.value += `You bought ${listOfProducts} for ${totalPrice.toFixed(2)}.\n`;
        boughtProducts = [];
    }

    function addProduct(e) {
        let productDetails = e.target.parentNode.children;
        let productName = productDetails[1].textContent;
        let productPrice = Number(productDetails[2].textContent.replace('Price: ', ''));

        if (!boughtProducts.some(x => x.name === productName)){
            let product = {
                name: productName,
                totalPrice: productPrice,
            };
            boughtProducts.push(product);
        } else {
            boughtProducts.filter(x => x.name === productName)[0].totalPrice += productPrice;
        }

        textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
    }
}