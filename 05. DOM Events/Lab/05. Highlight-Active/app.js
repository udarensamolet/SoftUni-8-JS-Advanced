function focused() {
    let inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener("focus", (event) => {
            event.target.parentElement.style.background = "grey";
            event.target.parentElement.classList.add("focused");
        }); 

        inputs[i].addEventListener('blur', (event) => {
            event.target.parentElement.style.background = '';
            event.target.parentElement.classList.remove("focused");
          });
    }
}