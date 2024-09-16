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
    id: number;
    username: string;
    role: UserRole;
  };

  type UpdatedUser = Partial<User>;
  let nextUserId = 1;

  const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_doe", role: "admin" },
    { id: nextUserId++, username: "mary-sue", role: "guest" },
    { id: nextUserId++, username: "jack-sue", role: "support" },
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

  function updateUser(id: number, updates: UpdatedUser) {
    // Find the user in the array by the id
    const user = users.find((user) => user.id === id);
    if (!user) {
      console.error("User not found!");
      return;
    }

    // Use Object.assign to update the found user in place
    return Object.assign(user, updates);
  }

  // updateUser(1, { username: "new_john_doe" });
  // updateUser(4, { role: "admin" });

  function addNewUser(newUser: Omit<User, "id">): User {
    // Create a new variable called "user"
    // Add an id property to it and spread in all the properties of newUser

    const user: User = {
      id: nextUserId++,
      ...newUser,
    };

    users.push(user);
    return user;
  }
  // addNewUser({ username: "test_user", role: "member" });
  // console.log(users);
}
unionTypes();

// Using an imported function
// console.log(getPizzaDetail(false));  => throws a TypeError
console.log(getPizzaDetail(1));

function genericTypes() {
  const gameScores = [14, 21, 33, 42, 59];
  const favoriteThings = [
    "deep house music",
    "martin garrix",
    "spicy food",
    "autumn weather",
  ];
  const voters = [
    { name: "Amy", age: 42 },
    { name: "Betty", age: 77 },
  ];

  function getLastItem<T>(array: T[]): T {
    return array[array.length - 1];
  }

  console.log(getLastItem(gameScores));
  console.log(getLastItem(favoriteThings));
  console.log(getLastItem(voters));
}

// genericTypes();
