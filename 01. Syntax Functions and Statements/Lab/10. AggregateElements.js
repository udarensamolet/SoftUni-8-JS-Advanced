'use strict';

function aggregateElements(arr) {
    let numbersArray = arr.map(Number);
    let sum = numbersArray.reduce((a, b) => a + b);
    let sumInverse = numbersArray.reduce((a, b) => a + 1/b, 0);
    let sumConcat = numbersArray.join('');
    console.log(sum);
    console.log(sumInverse);
    console.log(sumConcat);
} 