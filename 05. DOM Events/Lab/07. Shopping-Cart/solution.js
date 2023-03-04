function solve() {
   let text = document.getElementsByTagName("textarea")[0];
   text.value = "";

   let btns = document.getElementsByClassName("add-product");
   let totalPrice = 0;

   let productsSet = new Set();
   for (let i = 0; i < btns.length; i++){
      btns[i].addEventListener("click", (event) => {
         let name = btns[i].parentNode.parentNode.children[1].children[0].textContent;
         console.log(event);
         let money = btns[i].parentNode.parentNode.children[3].textContent;
         text.value += `Added ${name} for ${Number(money).toFixed(2)} to the cart.\n`;
         totalPrice += Number(money);
         productsSet.add(name);
       
      });
   }
   
   let checkoutBtns = document.getElementsByClassName("checkout")[0];
   checkoutBtns.addEventListener("click", (event) => {
      let btnsAll = Array.from(document.getElementsByTagName("button"));
      btnsAll.forEach(btn => btn.disabled = true);
      let myString = '';
      let counter = 0;

      for (let product of productsSet){
         if (counter === productsSet.size - 1){
            myString  += `${product}`;
            break;
         }
         counter++;
         myString += (product + ", ");
      }
      text.value += `You bought ${myString.trimEnd()} for ${totalPrice.toFixed(2)}.`;
   });
}