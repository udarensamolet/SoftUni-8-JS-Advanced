function pieceOfPie(inputArr, flavour1, flavour2) {
    let outputArr = [];
    let startIndex = inputArr.indexOf(flavour1);
    let endIndex = inputArr.indexOf(flavour2);

    for (let i = startIndex; i <= endIndex; i++) {
        outputArr.push(inputArr[i]);
    }
    
    return outputArr;
}