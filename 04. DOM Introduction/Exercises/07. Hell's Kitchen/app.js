function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const input = document.querySelector('#inputs>textarea');
   const bestRestaurantText = document.querySelector('#bestRestaurant>p');
   const workersText = document.querySelector('#workers>p');

   function onClick () {
      const inputArray = JSON.parse(input.value);
      
      let restaurants = {};
      inputArray.forEach((item) => {
         const splitedArray = item.split(' - ');
         const restaurant = splitedArray[0];
   
         let workers = [];
         splitedArray[1].split(', ').forEach((worker) => {
           const tokens = worker.split(' ');
           const workerName = tokens[0];
           const workerSalary = Number(tokens[1]);
   
           workers.push({workerName, workerSalary });
         });

         if(restaurants[restaurant]){
            workers = workers.concat(restaurants[restaurant].workers);
         }
         
         workers.sort((a, b) => b.workerSalary - a.workerSalary);

         const bestSalary = workers[0].workerSalary;
         const averageSalary = workers.reduce((acc, curr) => 
            acc + curr.workerSalary, 0) / workers.length;
         restaurants[restaurant] = {workers, bestSalary, averageSalary};
      });

      let bestAverageSalaryAll = 0;
      let bestRestaurantAll = undefined;

      for(const name in restaurants){
         if (restaurants[name].averageSalary > bestAverageSalaryAll) {
            bestAverageSalaryAll = restaurants[name].averageSalary;
            bestRestaurantAll = {name, ...restaurants[name]};
         }
      }

      bestRestaurantText.textContent = `Name: ${bestRestaurantAll.name} Average Salary: ${bestRestaurantAll.averageSalary.toFixed(2)} Best Salary: ${bestRestaurantAll.bestSalary.toFixed(2)}`;
      let workerResult = [];
      bestRestaurantAll.workers.forEach((worker) =>{
         workerResult.push(`Name: ${worker.workerName} With Salary: ${worker.workerSalary.toFixed(2)}`);
      });

      workersText.textContent = workerResult.join(' ');
   }
}