function sameNumber(input) {
  input = input.toString();
  let sum = 0;
  let same = false;

  if ((input.length == 1)) {
    same = true;
    sum = Number(input[0]);
  } else {
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] == input[i + 1]) {
        same = true;
      } else {
        same = false;
        break;
      }
    }
  }

  for (let i = 0; i < input.length; i++) {
    sum += Number(input[i]);
  }

  console.log(same);
  console.log(sum);
}