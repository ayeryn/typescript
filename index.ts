import { getPizzaDetail } from "./pizza.ts";
//TODO: Group things in functions or classes
// Inferred
let myName = "Eryn";

// Explicit-typing
let numberOfWheels: number = 4;
let isStudent: boolean = false;

// Custom Types
type Food = string;
const favoriteFood: Food = "hotpot";

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
function unionTypes() {
  type UserRole = "guest" | "admin" | "member" | "support";

  // let userRole: UserRole = "Admin" -> type error;
  // let userRole: UserRole = "admin";

  type User = {
    username: string;
    role: UserRole;
  };

  const users: User[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "mary-sue", role: "guest" },
  ];

  // Explicitly type return data
  // Useful for when refactoring code
  function fetchUserDetails(username: string): User {
    const user = users.find((user) => user.username === username);
    if (!user) {
      throw new Error(`User with username ${username} not found.`);
    }

    return user;
  }
}

// Using an imported function
// console.log(getPizzaDetail(false));  => throws a TypeError
console.log(getPizzaDetail(1));
