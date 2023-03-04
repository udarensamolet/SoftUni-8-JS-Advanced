function negativePositiveNumbers(inputArr) {
  let outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] >= 0) {
      outputArr.push(inputArr[i]);
    } else {
      outputArr.unshift(inputArr[i]);
    }
  }

  for (let i = 0; i < outputArr.length; i++) {
    console.log(outputArr[i]);
  }
}