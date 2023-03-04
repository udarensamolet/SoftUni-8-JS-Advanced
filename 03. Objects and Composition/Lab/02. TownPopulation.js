function townPopulation(input){
  const towns = {};
  for (let town of input){
    let [name, population] = town.split(' <-> ');
    population = Number(population);

    if (towns[name] != undefined){
      population += towns[name];
    }
    towns[name] = population;
  }
  
  for (let town in towns){
    console.log(`${town} : ${towns[town]}`);
  }
}