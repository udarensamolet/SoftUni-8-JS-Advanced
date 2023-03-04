function lastKNumbersElements(n, k) {
    let result = [];
    result[0] = 1;
    
    while (result.length < n) {
        let sum = 0;
        if (result.length < k) {
            for (let i = result.length - 1; i >= 0; i--) {
                sum += result[i];
            }
        } else {
            for (let i = result.length - k; i < result.length; i++) {
                sum += result[i];
            }
        }
        result.push(sum);
    }
    return result;
}