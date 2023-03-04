function solve() {
  let fighter = (name) => {
    return {
      name,
      health: 100,
      stamina: 100,
      fight() {
        this.stamina--;
        console.log(`${name} slashes at the foe!`);
      }
    }
  }

  let mage = (name) => {
    return {
      name,
      health: 100,
      mana: 100,
      cast(spell) {
        this.mana--;
        console.log(`${this.name} cast ${spell}`);
        
      }
    }
  }
  return {fighter: fighter, mage: mage};
}
