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
  address: {
    street: string;
    city: string;
    zipCode: number;
  };
};

let person: Person = {
  name: "Amy",
  age: 42,
  isStudent: true,
  address: {
    street: "123 Main",
    city: "Ashville",
    zipCode: 12345,
  },
};

let person2: Person = {
  name: "Bob",
  age: 19,
  isStudent: false,
  address: {
    street: "456 Market",
    city: "Boston",
    zipCode: 65432,
  },
};
