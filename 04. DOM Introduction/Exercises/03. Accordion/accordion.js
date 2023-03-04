function toggle() {
    let text = document.getElementById("extra");
    let btn = document.querySelector(".button")

    if (text.style.display == "none"){
        text.style.display = "block";
        btn.textContent = "Less";

    } else {
        text.style.display = "none";
        btn.textContent = "More";
    }
}