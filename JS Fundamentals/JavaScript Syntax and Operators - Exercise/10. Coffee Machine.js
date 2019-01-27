function coffeeMachine(orders){
   let coffeeCaffeinePrice = 0.80;
   let coffeeDecafPrice = 0.90;
   let teaPricePrice = 0.80;

   let income = 0;

    for (let order of orders) {
        let drinkPrice = 0;

        let orderDetails = order.split(', ');
        let money = orderDetails[0];
        let drink = orderDetails[1];

        if (drink === 'coffee'){
            let coffeeType = orderDetails[2];
            drinkPrice += coffeeType == 'caffeine' ? coffeeCaffeinePrice : coffeeDecafPrice;
        }else {
            drinkPrice += teaPricePrice;
        }

        let isAnyMilk = orderDetails.includes('milk');
        if (isAnyMilk){
            let milkPrice = (drinkPrice * 0.10).toFixed(1);
            drinkPrice += Number(milkPrice);
        }

        let sugar = orderDetails[orderDetails.length - 1];
        if (sugar !== '0'){
            drinkPrice += 0.10;
        }

        let diff = Math.abs(money - drinkPrice);

        if (money >= drinkPrice){
            console.log(`You ordered ${drink}. Price: ${drinkPrice.toFixed(2)}$ Change: ${diff.toFixed(2)}$`);
            income += drinkPrice;
        }else{
            console.log(`Not enough money for ${drink}. Need ${diff.toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${income.toFixed(2)}$`);
}

coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);