function rotateArray(arr, num) {
    for (let i = 0; i < num; i++){
        let lastElement = arr[arr.length - 1];
        arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(' '));
}