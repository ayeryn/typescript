// A simple pizza restaurant program
// Create custom types
type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

// Setup
const menu: Pizza[] = [
  { id: 1, name: "Sausage", price: 10.5 },
  { id: 2, name: "Truffle", price: 12 },
  { id: 3, name: "Cheese", price: 8 },
  { id: 4, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

/**
 * Challenge 1
 * Add a utility function "addNewPizza" that takes a pizza object and adds it
 * to the menu
 */
function addNewPizza(newPizza: Pizza) {
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
function placeOrder(pizzaName: string) {
  // Find pizza
  const pizza: Pizza | undefined = menu.find(
    (pizza) => pizza.name === pizzaName
  );
  if (!pizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }

  // Update cash
  cashInRegister += pizza.price;

  // Add order to queue
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: pizza,
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
function completeOrder(orderId: number) {
  const currOrder: Order | undefined = orderQueue.find(
    (order) => order.id === orderId
  );
  if (!currOrder) {
    console.error(`${orderId} does not exist in the queue`);
    return;
  }
  currOrder.status = "completed";
  return currOrder;
}

// Add some tests that would fail some places
addNewPizza({ id: 5, name: "Chicken", price: 11 });
addNewPizza({ id: 6, name: "Seafood", price: 15 });
addNewPizza({ id: 7, name: "Deep Dish", price: 13.5 });

placeOrder("Deep Dish");
completeOrder(1);

console.log("Menu: ", menu);
console.log("Orders: ", orderQueue);
console.log("Cash: ", cashInRegister);
