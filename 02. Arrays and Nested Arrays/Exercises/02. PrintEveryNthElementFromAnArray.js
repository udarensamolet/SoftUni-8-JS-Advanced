function printAnArrayWithAGivenDelimeter(arr, number) {
    let result = [];
    for (let i = 0; i < arr.length; i += number) {
        result.push(arr[i]);
    }
    return result;
}