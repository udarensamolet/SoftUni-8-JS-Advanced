function mathOperations(num1, num2, operand) {
  let result;
  if (operand == "+") {
    result = num1 + num2;
  } else if (operand == "-") {
    result = num1 - num2;
  } else if (operand == "*") {
    result = num1 * num2;
  } else if (operand == "/") {
    result = num1 / num2;
  } else if (operand == "%") {
    result = num1 % num2;
  } else if (operand == "**") {
    result = num1 ** num2;
  }
  console.log(result);
}