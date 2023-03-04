function wordUppercase(input) {
  let regex = /\w+/g;
  let result = input.toUpperCase().match(regex).join(", ");
  console.log(result);
}