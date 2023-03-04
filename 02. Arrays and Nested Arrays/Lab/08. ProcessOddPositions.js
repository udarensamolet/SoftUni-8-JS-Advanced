function processOddPositions(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++){
        if (i % 2 != 0 ){
            output.push(arr[i] * 2);
        }
    }
    output.reverse();
    console.log(output.join(' '));
}