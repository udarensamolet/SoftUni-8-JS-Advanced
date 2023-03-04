function stringLength(str1, str2, str3) {
    let lengthSum = str1.length + str2.length + str3.length;
    let lengthAverage = (str1.length + str2.length + str3.length) / 3;
    console.log(lengthSum);
    console.log(Math.floor(lengthAverage));
}