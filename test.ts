// Inferred
let myName = "Eryn";

// Explicit-typing
let numberOfWheels: number = 4;
let isStudent: boolean = false;

// Custom Types
let favoriteFood: string = "hotpot";

type Food = string;
favoriteFood = "sichuan";

// Nested types
type Address = {
  street: string;
  city: string;
  zipCode: number;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address; // nested and optional
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
};

function displayInfo(p: Person) {
  // ? means optional
  console.log(`${p.name} lives at ${p.address?.street}`);
}

displayInfo(person); // Amy lives at 123 Main
displayInfo(person2); // Bob lives at undefined

// Literal Types
let studentName = "Alice";
const teacherName = "Bella";

// Unions
type UserRole = "guest" | "admin" | "member" | "support";
// let userRole: UserRole = "Admin" -> type error;
let userRole: UserRole = "admin";
