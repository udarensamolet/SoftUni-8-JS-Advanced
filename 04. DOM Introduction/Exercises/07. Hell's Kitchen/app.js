function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurantsInfoInput = document.getElementsByTagName("textarea")[0].value;
      let restaurantsInfo = restaurantsInfoInput.split(', ');
      console.log("asd");



   }
}