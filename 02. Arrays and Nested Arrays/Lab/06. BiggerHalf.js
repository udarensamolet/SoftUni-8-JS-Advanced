function biggerHalf(arr) {
    let output = [];
    arr.sort((a, b) => a - b);
    if (arr.length % 2 == 0) {
        for (let i = arr.length / 2; i < arr.length; i++) {
            output.push(arr[i]);
        }
    } else {
        for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
            output.push(arr[i]);
        }
    }
    return output;
    //console.log(output.join(' '));
}