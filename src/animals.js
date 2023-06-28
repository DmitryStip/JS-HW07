'use strict';

class Animals {
  constructor(age, name, weight, limbAmount) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }

  move() {
    console.log(`${this.name} двигается.`);
  }

  say() {
    console.log(`${this.name} издает звук.`);
  }

  eat() {
    console.log(`${this.name} ест.`);
  }
}

class Mammals extends Animals {}

class Birds extends Animals {}

class Fish extends Animals {}

class Predators extends Mammals {
  static isPredators(obj) {
    return obj instanceof Predators;
  }
}

class Whales extends Mammals {
  static isWhales(obj) {
    return obj instanceof Whales;
  }
}

class Primates extends Mammals {
  static isPrimates(obj) {
    return obj instanceof Primates;
  }
}

class Dog extends Predators {
  static isDog(obj) {
    return obj instanceof Dog;
  }
}

class Dolphin extends Whales {
  static isDolphin(obj) {
    return obj instanceof Dolphin;
  }
}

class Human extends Primates {
  static isHuman(obj) {
    return obj instanceof Human;
  }
}

Animals.maxAge = 100;
Animals.maxWeight = 1000;
Birds.maxAge = 20;
Birds.maxWeight = 10;
Fish.maxAge = 10;
Fish.maxWeight = 5;

const mammal1 = new Mammals(5, "Mammal 1", 50, 4);
const mammal2 = new Mammals(3, "Mammal 2", 30, 4);
const bird1 = new Birds(1, "Bird 1", 0.5, 2);
const bird2 = new Birds(2, "Bird 2", 0.3, 2);
const fish1 = new Fish(2, "Fish 1", 0.2, 0);
const fish2 = new Fish(1, "Fish 2", 0.1, 0);
const predator1 = new Predators(8, "Predator 1", 100, 4);
const predator2 = new Predators(6, "Predator 2", 80, 4);
const whale1 = new Whales(20, "Whale 1", 5000, 0);
const whale2 = new Whales(15, "Whale 2", 4000, 0);
const primate1 = new Primates(30, "Primate 1", 70, 2);
const primate2 = new Primates(25, "Primate 2", 60, 2);
const dog1 = new Dog(4, "Dog 1", 20, 4);
const dog2 = new Dog(3, "Dog 2", 15, 4);
const dolphin1 = new Dolphin(12, "Dolphin 1", 2000, 0);
const dolphin2 = new Dolphin(10, "Dolphin 2", 1800, 0);
const human1 = new Human(40, "Human 1", 70, 2);
const human2 = new Human(35, "Human 2", 65, 2);

mammal1.move();
mammal2.say();
console.log(`Возраст: ${bird1.age}, Вес: ${bird1.weight}`);
bird2.eat();
console.log(`Количество конечностей: ${fish1.limbAmount}`);
fish2.move();
predator1.say();
console.log(`Это собака? ${Dog.isDog(predator2)}`);
whale1.eat();
console.log(`Это дельфин? ${Dolphin.isDolphin(whale2)}`);
primate1.move();
primate2.say();
console.log(`Это человек? ${Human.isHuman(primate1)}`);
dog1.eat();
dolphin2.move();
human1.say();
