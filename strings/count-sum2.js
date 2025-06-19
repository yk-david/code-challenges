const shoppingCart = [
  {
    item: "🍭",
    price: 2.99,
    type: "sweet",
    onSale: true,
  },
  {
    item: "🍫",
    price: 1.99,
    type: "sweet",
    onSale: true,
  },
  {
    item: "🥫",
    price: 1.99,
    type: "savory",
    onSale: false,
  },
  {
    item: "🍬",
    price: 0.89,
    type: "sweet",
    onSale: false,
  },
  {
    item: "🥦",
    price: 3.99,
    type: "savory",
    onSale: false,
  },
  {
    item: "🍖",
    price: 3.99,
    type: "savory",
    onSale: true,
  },
];

/* Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44 (Note: This example output in the comment is incorrect based on the data, the actual total is 15.84)
*/

/*Plan
Reduce to the sum of accumulator (with initial value of 0) and currentValue.price
Round the result to 2 decimal places.
Return the final result of those above steps.
 */

function total(arr) {
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  return Number(sum.toFixed(2));
}

console.log(total(shoppingCart)); // Output: 15.84
// console.log(typeof total(shoppingCart))

/*Retrospective
At first, I thought `round` method have a second parameter to determine the round decimal point, but after documentating, it turned out `round` makes the result a whole integer.
I then turned to `toFixed` method, which is great, but surprisingly its return type is a string and not number! As return value of a total getting function should be number type, I wrapped the return value with `Number` function. */
