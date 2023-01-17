// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise`);
//   }
// }

// // extends 부모 클래스 연동
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog("siba");
d.speak();
let cat = new Animal("cat");
cat.speak();

// class Person {
//   constructor(name, first, second) {
//     this.name = name;
//     this.first = first;
//     this.second = second;
//   }

//   sum() {
//     return this.first + this.second;
//   }
// }

// class PersonPlus extends Person {
//   constructor(name, first, second, third) {
//     super(name, first, second);
//     this.third = third;
//   }
//   sum() {
//     return super.sum() + this.third;
//   }
//   avg() {
//     return (this.first + this.second + this.third) / 3;
//   }
// }

// const hun = new PersonPlus("hun", 1, 2, 3);
// console.log(hun.sum());
// console.log(hun.avg());

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Lion extends Cat {
//   speak() {
//     super.speak();
//     console.log(`${this.name} roars`);
//   }
// }

// let lion = new Lion("fuzzy");
// lion.speak();
// const person = new Person("hun", 1, 2);
// console.log(person.sum());
