function extractText() {
    let itemNodes = document.querySelectorAll("ul#items li");
    let textArea = document.querySelector("textarea#result");
    for (let itemNode of itemNodes){
        textArea.value += itemNode.textContent + "\n";
    }
}