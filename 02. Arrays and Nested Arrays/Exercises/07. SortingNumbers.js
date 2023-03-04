function sortingNumbers(input) {
    input.sort((a, b) => a - b);
    
    let smallElements = [];
    let largeElements = [];
    let result = [];
    if (input.length % 2 == 0){
        for (let i = 0; i < input.length / 2; i++){
            smallElements[i] = input[i];
        }
        for (let i = 0; i < input.length / 2; i++) {
            largeElements[i] = input[i + input.length / 2];
        }
        largeElements.reverse();
        for (let i = 0; i < input.length / 2; i++) {
            result.push(smallElements[i]);
            result.push(largeElements[i]);
        }

    } else {
        let middleElement = input[Math.floor(input.length / 2)];
        for (let i = 0; i < Math.floor(input.length / 2); i++){
            smallElements[i] = input[i];
        }
        for (let i = 0; i < Math.floor(input.length / 2); i++) {
            largeElements[i] = input[i + Math.floor(input.length / 2) + 1];
        }
        largeElements.reverse();
        for (let i = 0; i < Math.floor(input.length / 2); i++) {
            result.push(smallElements[i]);
            result.push(largeElements[i]);
        }
        result.push(middleElement);
    }

   return result;
}