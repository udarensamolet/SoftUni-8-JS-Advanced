function deleteByEmail() {
    let textDelete = document.getElementsByTagName("input")[0].value;
    let cells = document.getElementsByTagName("td");

    let result = document.getElementById("result");
    let found = false;
    for (let i = 0; i < cells.length; i++){
        if (cells[i].textContent.includes(textDelete)){
            result.textContent = "Deleted";
            let rowDelete = cells[i].parentElement;
            rowDelete.remove();
            found = true;
            break;
        }
    }

    if (!found){
        result.textContent = "Not found.";
    }
}