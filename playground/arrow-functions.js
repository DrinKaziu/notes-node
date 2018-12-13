let square = x => x * x;
console.log(square(9));

let user = {
  name: 'Drin',
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`); //arrow functions do not bind this
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`); //reg functions do
  }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);
