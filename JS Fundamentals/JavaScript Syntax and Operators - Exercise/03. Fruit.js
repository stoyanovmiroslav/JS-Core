function fruit(name, weightGrams, price) {

    let weightKg = weightGrams / 1000;

    let neededMoney = price * weightKg;

    console.log(`I need ${neededMoney.toFixed(2)} leva to buy ${weightKg.toFixed(2)} kilograms ${name}.`)
}

fruit('orange', 2500, 1.80)