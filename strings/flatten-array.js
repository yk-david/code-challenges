/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

/*Plan
1. With loop
Initialize a result array.
Loop over outer array.
    - type check required here:
        - If element in outer loop is an object, loop over inner array and push each element to result array. 
        - If it isn't an object, push the element of outer loop directly to result array.
Return result array.

2. With spread operator
Initialize a result array. 
Run array method forEach on `arr` argument.
    - Type check with Array.isArray().
    - If element is an array, push `...element` to result array.
    - If not, push just the element.
Return result array.
 */

const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"],
  "🏆",
  "💐",
  "💵",
  ["💵", "🏆"],
  ["🐟", "💐", "💐"],
  "💵",
  "💵",
  ["🐟"],
  "🐟",
];

function flatten(arr) {
  const result = [];

  for (const element of arr) {
    if (typeof element === "object") {
      for (const subElement of element) {
        result.push(subElement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
}

function conciseFlatten(arr) {
  const result = [];

  arr.forEach((element) =>
    Array.isArray(element) ? result.push(...element) : result.push(element)
  );

  return result;
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));

console.log(conciseFlatten(kittyPrizes));
console.log(conciseFlatten(kittyScores));

/*Retrospective
Using array methods simplifies lots of work. Especially, `Array.isArray()` is more accurate than `typeof` in that it only recognizes array in boolean. On the other hand, typeof can bring confusion, when an array has for element an object. In this case, `typeof` wouldn't distinguish array from object, because both returns to "object".
 */
