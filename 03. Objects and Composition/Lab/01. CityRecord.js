function cityRecord(name, population, treasury){
  const city = {name: name, population: population, treasury: treasury};
  return city;
}

function cityRecord2(name, population, treasury){
  return {
    name,
    population,
    treasury
  };
}

function cityRecord3(name, population, treasury){
  return {
    name: name,
    population: population,
    treasury: treasury
  };
}