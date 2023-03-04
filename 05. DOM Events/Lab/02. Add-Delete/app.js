function addItem() {
    let text = document.getElementById("newItemText").value;
    
    let li = document.createElement("li");
    li.textContent = text;
    
    document.getElementById("items").appendChild(li);
    document.getElementById("newItemText").value = "";


    let removeBtn = document.createElement("a");
    let removeBtnText = document.createTextNode("[Delete]");
    removeBtn.appendChild(removeBtnText);
    removeBtn.href = "#";
    removeBtn.addEventListener("click", deleteItem);

    li.appendChild(removeBtn);
        
    function deleteItem(){
        li.remove();
    }
}