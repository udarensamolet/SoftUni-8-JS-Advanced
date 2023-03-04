function extractIncreasingSubsequenceFromArray(arr) {
    let sequence = [];
    let biggerNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) >= biggerNumber) {
            biggerNumber = Number(arr[i]);
            sequence.push(biggerNumber);
        }
    }
    return sequence;
}