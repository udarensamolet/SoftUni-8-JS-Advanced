function search() {
   let result = document.getElementById("result");
   result.textContent = "";
   const searchText = document.getElementById("searchText");
   let counter = 0;
   let listElements = document.getElementsByTagName("li");
   let listElementsArr = Array.from(listElements);
   for (let i = 0; i < listElementsArr.length; i++){
      listElementsArr[i].style.fontWeight = "";
      listElementsArr[i].style.textDecoration = "";
      if (listElementsArr[i].textContent.includes(searchText.value)){
         counter++;
         listElementsArr[i].style.fontWeight = "bold";
         listElementsArr[i].style.textDecoration = "underline";
      }
   }
   result.textContent = `${counter} matches found`;
}