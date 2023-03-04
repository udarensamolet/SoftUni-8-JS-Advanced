function solve() {
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;

  let textArr = text.split(' ');
  let resultWord = '';
  if (namingConvention == 'Camel Case'){
    for (let i = 0; i < textArr.length; i++){
      textArr[i] = textArr[i].toLowerCase();
      if (i === 0){
        resultWord = textArr[i].charAt(0).toLowerCase() + textArr[i].slice(1);
      } else {
        let tempWord = textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1);
        resultWord += tempWord;
      }
    }
  } else if (namingConvention == 'Pascal Case'){
    for (let i = 0; i < textArr.length; i++){
      textArr[i] = textArr[i].toLowerCase();
      if (i === 0){

        resultWord = textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1);
      } else {
        let tempWord = textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1);
        resultWord += tempWord;
      }
    }
  } else {
    resultWord = "Error!";
  }

  let result = document.getElementById("result");
  result.textContent = resultWord;
}