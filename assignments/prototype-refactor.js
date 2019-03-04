/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
  constructor(objects) {
    this.createdAt = objects.createdAt;
    this.name = objects.name;
    this.dimensions = objects.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`
  }
}

class CharacterStats extends GameObject {
  constructor(stats) {
    super(stats)
    this.healthPoints = stats.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(stuff) {
    super(stuff)
    this.team = stuff.team;
    this.weapons = stuff.weapons;
    this.language = stuff.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

class Hero extends Humanoid {
  constructor(good) {
    super(good)
  }

  counterSpell(){
    return `Using lighting fast reflexes ${this.name} deflects the attack!`;
  };

  healingSpell(){
    return `Summoning the Spirit of Uru ${this.name} heals herself and those around him for ${this.healthPoints} health points!`;
  };

  missStep(){
    return `Our Hero ${this.name} tripped over her own foot and fell of the edge and ${whiteWizard.destroy()}`;
  };

}

class Villian extends Hero {
  constructor(evil) {
    super(evil)
  }

  fireBlast(){
    return `${this.name} lets loose a blast of fire!`
  };

  summonDemon(){
    return `Using the energy of the black moon, ${this.name} brings forth a Demon to wreak havoc on the battlefield!`;
  };

  sliverOfHope(){
    return `${this.name} realizes he is bringing about the destruction of life itself decides to take his own life! ${blackWizard.destroy()}`;
  };

}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

const whiteWizard = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1.5,
    width: 2.5,
    height: 6,
  },
  healthPoints: 25,
  name: 'Luaranthalis',
  team: 'White Wizards',
  weapons: [
    'Staff of Magius',
    'Dagger',
  ],
  language: 'Elvish, Human',
});

const blackWizard = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: .5,
    width: .5,
    height: 3,
  },
  healthPoints: 17,
  name: 'Raistlin',
  team: 'Tekkisis',
  weapons: [
    'Orb of Sorrow',
    'Dagger',
  ],
  language: 'Elvish, Human, Draconian',
});

console.log(blackWizard.fireBlast());

console.log(whiteWizard.counterSpell());

console.log(blackWizard.summonDemon());

console.log(whiteWizard.healingSpell());

console.log(blackWizard.sliverOfHope());

console.log(whiteWizard.missStep());
// missStep healingSpell counterSpell
// console.log(blackWizard.destroy());
// sliverOfHope summonDemon fireBlast