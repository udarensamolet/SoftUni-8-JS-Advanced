function validate() {
    let input = document.getElementById("email");
    let pattern = /(?<name>[a-z]+)(@{1})(?<domain>[a-z]+)(\.{1})(?<ext>[a-z]+)/;

    input.addEventListener("change", ({target}) => {
        if (pattern.test(target.value)){
            target.classList.remove("error");
        } else {
            target.classList.add("error");
        }
    });
}