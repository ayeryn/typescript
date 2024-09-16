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
let nextPizzaId = 1;
let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];
const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Sausage", price: 10.5 },
  { id: nextPizzaId++, name: "Truffle", price: 12 },
  { id: nextPizzaId++, name: "Cheese", price: 8 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

/**
 * Challenge 1
 * Add a utility function "addNewPizza" that takes a pizza object and adds it
 * to the menu
 */
function addNewPizza(newPizza: Omit<Pizza, "id">): void {
  const pizza = {
    id: nextPizzaId++,
    ...newPizza,
  };
  menu.push(pizza);
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

/**
 * Challenge 4
 * Add a utility function "getPizzaDetail"
 * Param: "identifier": either the string name of the pizza OR the number ID
 * Checks if the param is a string or number, then find the pizza accordingly.
 */
export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  let ret: Pizza | undefined;
  if (typeof identifier === "number") {
    ret = menu.find((pizza) => pizza.id === identifier);
  } else if (typeof identifier === "string") {
    ret = menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else {
    throw new TypeError("Parameter 'identifier' must be a string or number!");
  }

  if (!ret) {
    console.log("Pizza {", identifier, "} not found");
    return;
  }

  return ret;
}

// Add some tests that would fail some places
function runTests() {
  addNewPizza({ name: "Chicken", price: 11 });
  addNewPizza({ name: "Seafood", price: 15 });
  addNewPizza({ name: "Deep Dish", price: 13.5 });

  placeOrder("Deep Dish");
  completeOrder(1);

  console.log("Menu: ", menu);
  console.log("Orders: ", orderQueue);
  console.log("Cash: ", cashInRegister);

  getPizzaDetail(1);
  getPizzaDetail(8);
  getPizzaDetail("VEGGIE");
  getPizzaDetail("BBQ");
}

// runTests();

/**
 * Challenge: add types our generic `addToArray` function. It should work
 * for adding new pizzas to the `menu` and adding new orders to the `orderQueue`
 */

function addToArray<T>(array: T[], item: T) {
  array.push(item);
  return array;
}

// example usage:
addToArray<Pizza>(menu, {
  id: nextPizzaId++,
  name: "Chicken Bacon Ranch",
  price: 12,
});
addToArray<Order>(orderQueue, {
  id: nextOrderId++,
  pizza: menu[2],
  status: "completed",
});

console.log("Menu: ", menu);
console.log("Orders: ", orderQueue);

// function completeOrder(orderId: number): Order | undefined {
//   const order = orderQueue.find((order) => order.id === orderId);
//   if (!order) {
//     console.error(`${orderId} was not found in the orderQueue`);
//     return;
//   }
//   order.status = "completed";
//   return order;
// }

// export function getPizzaDetail(identifier: string | number): Pizza | undefined {
//   if (typeof identifier === "string") {
//     return menu.find(
//       (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
//     );
//   } else if (typeof identifier === "number") {
//     return menu.find((pizza) => pizza.id === identifier);
//   } else {
//     throw new TypeError(
//       "Parameter `identifier` must be either a string or a number"
//     );
//   }
// }

// addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
// addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 12 });
// addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11 });
