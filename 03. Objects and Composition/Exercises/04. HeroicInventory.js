function heroicInventory(inputs) {
  let heroes = [];
  for (let input of inputs) {
    let tokens = input.split(" / ");
    let hero = {};
    hero.name = tokens[0];
    hero.level = Number(tokens[1]);
    if (tokens[2] != undefined) {
      hero.items = tokens[2].split(", ");
    } else {
        hero.items = [];
    }
    heroes.push(hero);
  }
  return JSON.stringify(heroes);
}