function calc() {
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");

    let result = Number(num1.value) + Number(num2.value);

    let sum = document.querySelector("#sum");
    sum.value = result;
}
