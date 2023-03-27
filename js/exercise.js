const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const { name, price } = newPotion;
    for (let i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === name)
        return `Error! Potion ${name} is already in your inventory!`;
    }

    this.potions.push({ name, price });
  },
  removePotion(potionName) {
    let potionIndex = -1;

    for (let i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === potionName) potionIndex = i;
      // console.log(this.potions[i].name);
      //break;
    }

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    let potionIndex = -1;

    for (let i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === oldName) potionIndex = i;
      //break;
    }

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions[potionIndex].name = newName;
  },
  // Change code above this line
};

console.log(atTheOldToad.potions);
atTheOldToad.removePotion("Dragon breath");
console.log(atTheOldToad.potions);
