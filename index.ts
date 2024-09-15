// A simple pizza restaurant program
// Setup
const menu = [
  { name: "Sausage", price: 10.5 },
  { name: "Truffle", price: 12 },
  { name: "Cheese", price: 8 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

/**
 * Challenge 1
 * Add a utility function "addNewPizza" that takes a pizza object and adds it
 * to the menu
 */
function addNewPizza(newPizza) {
  menu.push(newPizza);
}

/**
 * Challenge 2
 * Add a utility function "placeOrder" that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu
 * 2. adds the income to the cashInRegister
 * 3. pushes a new "order object" to the orderQueue
 * 4. returns the new order object (jic we need to later)
 */
function placeOrder(pizzaName) {
  // Find pizza
  const pizza = menu.find((pizza) => pizza.name === pizzaName);
  if (!pizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }

  // Update cash
  cashInRegister += pizza.price;

  // Add order to queue
  const newOrder = {
    id: nextOrderId++,
    name: pizzaName,
    status: "ordered",
  };
  orderQueue.push(newOrder);

  // Return the order object
  return newOrder;
}

/**
 * Challenge 3
 * Add a utility function "completeOrder" that takes an orderId parameter and:
 * 1. find the correct order in the orderQueue and mark as "completed"
 * 2. return the found order
 */
function completeOrder(orderId) {
  const currOrder = orderQueue.find((order) => order.id === orderId);
  currOrder.status = "completed";
  return currOrder;
}

// Add some tests that would fail some places
addNewPizza({ name: "Chicken", price: 11 });
addNewPizza({ name: "Seafood", price: 15 });
addNewPizza({ name: "Deep Dish", price: 13.5 });

placeOrder("Deep Dish");
completeOrder("1");

console.log("Menu: ", menu);
console.log("Orders: ", orderQueue);
console.log("Cash: ", cashInRegister);
