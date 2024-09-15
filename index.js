// A simple pizza restaurant program
// Setup
const menu = [
  { name: "Sausage", price: 10.5 },
  { name: "Truffle", price: 12 },
  { name: "Cheese", price: 8 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];

/** Challenge 1
 * Add a utility function "addNewPizza" that takes a pizza object and adds it
 * to the menu
 */

function addNewPizza(newPizza) {
  // console.log("Original Menu: " + menu);
  menu.push(newPizza);
  // console.log("New menu => " + menu);
}

// addNewPizza({ name: "Hawaiian", price: 11 });
