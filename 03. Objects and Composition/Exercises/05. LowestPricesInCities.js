function lowestPricesInCities(inputs){
    const products = [];
    for (let input of inputs){
        let tokens = input.split(' | ');
        let city = tokens[0];
        let name = tokens[1];
        let price = Number(tokens[2]);

        let isEntered = false;
        for (let product of products){
            if (product.name == name){
                if (product.price > price){
                    
                    product.price = price;
                    product.city = city;
                }
                isEntered = true;
            }
        }
        if (!isEntered){
            products.push({name, price, city});
        }
    }

    for (let product of products){
        console.log(`${product.name} -> ${product.price} (${product.city})`);
    }
}