function cookingByNumbers(input, com1, com2, com3, com4, com5) {
    let number = Number(input);
    let commands = [com1, com2, com3, com4, com5];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == 'chop'){
            number /= 2;
        }else if (commands[i] == 'dice') {
            number = Math.sqrt(number); 
        } else if (commands[i] == 'spice') {
            number++;
        } else if (commands[i] == 'bake') {
            number *= 3;
        } else if (commands[i] == 'fillet') {
            number -= (0.2 * number);
        }
        console.log(number);
    }
}