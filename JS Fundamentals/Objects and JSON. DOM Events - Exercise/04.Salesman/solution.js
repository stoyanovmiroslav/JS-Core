function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', load);
    document.getElementsByTagName('button')[1].addEventListener('click', buy);
    document.getElementsByTagName('button')[2].addEventListener('click', endDay );

    let logResult = document.getElementsByTagName('textarea')[2];
    let products = [];
    let profit = 0;

    function load(e) {
        let loadProducts = JSON.parse(document.getElementsByTagName('textarea')[0].value);

        loadProducts.forEach(x => {
            if (!products.some(p => p.name === x.name)){
                products.push(x);
            } else {
               let product = products.filter(p => p.name === x.name)[0];
                product.price = x.price;
                product.quantity += x.quantity;
            }

            logResult.value += `Successfully added ${x.quantity} ${x.name}. Price: ${x.price}\n`;
        });
    }

    function buy(e) {
        let buyProduct = JSON.parse(document.getElementsByTagName('textarea')[1].value);

        if (!products.some(p => p.name === buyProduct.name)) {
            logResult.value += `Cannot complete order.\n`;
        }

        let product = products.filter(p => p.name === buyProduct.name)[0];

        if (product.quantity >= buyProduct.quantity){
            product.quantity -= buyProduct.quantity;

            let orderMoney = product.price * buyProduct.quantity;
            profit += orderMoney;

            logResult.value += `${buyProduct.quantity} ${buyProduct.name} sold for ${orderMoney}.\n`;
        } else {
            logResult.value += `Cannot complete order.\n`;
        }
    }

    function endDay(e) {
        logResult.value += `Profit: ${profit.toFixed(2)}.\n`;

        document.getElementsByTagName('button')[0].removeEventListener('click', load);
        document.getElementsByTagName('button')[1].removeEventListener('click', buy);
        document.getElementsByTagName('button')[2].removeEventListener('click', endDay);
    }
}