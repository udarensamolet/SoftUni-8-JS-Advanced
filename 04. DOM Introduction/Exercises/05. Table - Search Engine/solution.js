function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById("searchField").value;

      let rows = document.querySelectorAll("tbody tr");
      let rowsArr = Array.from(rows);

      for (let i = 0; i < rowsArr.length; i++){
         rows[i].classList.remove("select");
         let cells = rowsArr[i].children;
         for (let j = 0; j < cells.length; j++){
            if (cells[j].textContent.includes(searchText)){
               rows[i].classList.add("select");
            }
         }
      }
   }
}