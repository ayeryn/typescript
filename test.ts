// Inferred
let myName = "Eryn";

// Explicit-typing
let numberOfWheels: number = 4;
let isStudent: boolean = false;

// Custom Types
let favoriteFood: string = "hotpot";

type Food = string;
favoriteFood = "sichuan";

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person: Person = {
  name: "Amy",
  age: 42,
  isStudent: true,
};

let person2: Person = {
  name: "Bob",
  age: 19,
  isStudent: false,
};
