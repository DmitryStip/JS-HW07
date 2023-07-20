'use strict';

class Animals {
  constructor(age, name, weight, limbAmount){
      this.age = age;
      this.name = name;
      this.weight = weight;
      this.limbAmount = limbAmount;
  }
 move(){
  return `Animals moving`
 }
 say(){
  return `Animals say`
 }
 eat(){
  return `Animals are eating`
 }
};

class Mammals extends Animals{};
class Predators extends Mammals{};
class Whales extends Mammals{};
class Primates extends Mammals{};

class Birds extends Animals{
  static maxAge = 15;
  static maxWeight = 30;

constructor(age, name, weight, limbAmount){
      super(age, name, weight, limbAmount);
  }
  move(){
      return `Birds flying`
         }
  say(){
      return `Birds chirping `
         }
  eat(){
      return `Birds are eating`
         }
  static isBirds(obj) {
      return obj instanceof Birds;
  } 
};

class Fish extends Animals{
  static maxAge = 15;
  static maxWeight = 100;

constructor(age, name, weight, limbAmount){
      super(age, name, weight, limbAmount);
  }
  move(){
      return `Fishes swim`
         }
  say(){
      return `Fishes dont speak`
         }
  eat(){
      return `Fishes are eating`
         }
  static isFish(obj) {
      return obj instanceof Fish;
      }
};

class Dog extends Predators{
  static maxAge = 18;
  static maxWeight = 150;

constructor(age, name, weight, limbAmount){
      super(age, name, weight, limbAmount);
  }
  move(){
      return `Dogs run`
         }
  say(){
      return `Dogs barking`
         }
  eat(){
      return `Dogs are eating`
         }

  static isDog(obj) {
      return obj instanceof Dog;
      };
}

class Dolphin extends Whales{
  static maxAge = 20;
  static maxWeight = 120;

constructor(age, name, weight, limbAmount){
      super(age, name, weight, limbAmount);
  }
  move(){
      return `Dolphins swim`
          }
  say(){
      return `Dolphins dont speak`
          }
  eat(){
      return `Dolphins are eating`
          }

  static isDolphin(obj) {
      return obj instanceof Dolphin;
  };
}
class Human extends Primates{
  static maxAge = 120;
  static maxWeight = 300;

constructor(age, name, weight, limbAmount){
      super(age, name, weight, limbAmount);
  }
  move(){
      return `People walking`
          }
  say(){
      return `People talk`
          }
  eat(){
      return `People are eating`
          }

  static isHuman(obj) {
      return obj instanceof Human;
  };
}

const lizard = new Animals(1, 'lizard', '200g', 4);
console.log(lizard);
console.log(lizard.move());
console.log(lizard.say());
console.log(lizard.eat());

const fox = new Animals(4, 'fox', '8 kg', 4);
console.log(fox);
console.log(fox.move());
console.log(fox.say());
console.log(fox.eat());

const sparrow = new Birds(2, 'sparrow', '40g', 4)
console.log(sparrow);
console.log(sparrow.move());
console.log(sparrow.say());
console.log(sparrow.eat());

const eagle = new Birds(10, 'Eagle', '3kg', 4)
console.log(eagle);
console.log(eagle.move());
console.log(eagle.say());
console.log(eagle.eat());

const pike = new Fish(10, 'pike', '3kg', 3)
console.log(pike);
console.log(pike.move());
console.log(pike.say());
console.log(pike.eat());

const terrier= new Dog(4, 'terrier', '3.2kg', 4)
console.log(terrier);
console.log(terrier.move());
console.log(terrier.say());
console.log(terrier.eat());

const dolphin = new Dolphin(10, 'Dolphin', '100kg', 3)
console.log(dolphin);
console.log(dolphin.move());
console.log(dolphin.say());
console.log(dolphin.eat());

const biden = new Human(80, 'Biden', '70kg', 4)
console.log(biden);
console.log(biden.move());
console.log(biden.say());
console.log(biden.eat());

console.log(Human.isHuman(sparrow));
console.log(Human.isHuman(biden));
console.log(Dolphin.isDolphin(lizard));

