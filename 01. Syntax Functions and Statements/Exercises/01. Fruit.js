function fruit(fruitType, weightInGrams, pricePerKg) {
    weightInGrams = Number(weightInGrams);
    let weigthInKgs = weightInGrams / 1000;
    pricePerKg = Number(pricePerKg);
    let neededMoney = weigthInKgs * pricePerKg;
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weigthInKgs.toFixed(2)} kilograms ${fruitType}.`);
}