/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

/*Plan
Access to the values of the object with `Object.keys()` method.
Chain this with `reduce` method reducing to the element which the value is the highest of.
    ❓But I've got a problem in setting `initial value` of reduce method. 
Split the array from `reduce` and format with template literal to return.
 */

const gameNightFood = {
  "🍕 pizza": 3,
  "🌮 tacos": 10,
  "🥗 salads": 7,
  "🍝 pasta": 5,
};

function findTheWinner(obj) {
  const foods = Object.entries(obj);
  let theWinner = foods[0];

  foods.forEach((food) => {
    if (food[1] > theWinner[0][1]) {
      theWinner = food;
    }
  });

  return `The winner is ${theWinner[0]} with ${theWinner[1]} votes!`;
}

console.log(findTheWinner(gameNightFood));

/*Retrospective
Things didn't work as planned at first. I couldn't come up with `reduce` method, so I had to manage differently. 
1. Transform `obj` into an array of `key, value` pair of array and store it inside a variable.
2. For the winner food, initiate `theWinner` variable with initial value of first item of `foods`.
3. Iterate through `foods` and compare if each food's value (at index 1) is greater than the value of food inside `theWinner`. If current `food`s value is greater, reassign the `food`, with `food`.
4. Extract necessary data from `theWinner` and return final string.
 */
