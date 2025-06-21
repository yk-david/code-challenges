/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

/* Plan
1. Element way: `reduce` method
Set starting number to 0.
Make return value as `accumulator + currentValue`.
Just return the expression with `reduce`.

2. Easy way: `forEach` method
Initialize `sum` variable and set it to `0`.
Iterate over `arr` and increments `sum` by each number of `arr`.
Return `sum` array.
 */

const studentCount = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];

function sumArray(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  // let sum = 0;

  // arr.forEach(num => sum += num);
  // return sum;
}

console.log(sumArray(studentCount));

/*Retrospective
This challenge is quite straight forward with array methods. And this is the ideal occasion to use `reduce` that reduces to the sum of accumulator and currentValue.
 */
