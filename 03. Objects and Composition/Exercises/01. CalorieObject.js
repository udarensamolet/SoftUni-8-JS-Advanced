function calorieObject(input){
    return input.reduce((food, value, i) => {
        if (i % 2 === 0) {
            food[value] = Number(input[i + 1])
        }
        return food
    }, {})
}