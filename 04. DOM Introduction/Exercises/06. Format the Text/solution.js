function solve() {
  let sentences = document.getElementById("input").value.split('.');

  let output = document.getElementById("output");
  let outputText = output.textContent;
  outputText = "";

  let p = document.createElement("p");
  for (let i = 1; i <= sentences.length; i++){
    let currentSentence = sentences[i - 1].trim() + '.';
    p.innerHTML += currentSentence;
    if (i % 3 === 0){
      output.appendChild(p);
      p = document.createElement("p");
      continue;
    }
    if (i === sentences.length - 1){
      output.appendChild(p);
      break;
    }
  } 
}