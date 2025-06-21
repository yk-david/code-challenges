/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

const title = ":htraE no od ot ffutS";
const messages = [
  "maerc eci yrT",
  "rewoT leffiE tisiV",
  "noom eht ot snamuh etacoleR",
  "egrahc ni stac tuP",
];

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/

/*Plan
📌`reverseString` part
Initialize an empty array, `resultArr`
Loop over each letter of `str`
Put each letter at the head of `resultArr`
Convert `resultArray` into string to return.

📌`reverseStringsInArray` part
Run `reverseString` function for each str of the array and return.
 */

function reverseString(str) {
  return reverseStringManually(str);
  // return reverseStringWithBuiltInMethod(str);
}

function reverseStringManually(str) {
  const resultArr = [];

  str.split("").forEach((letter) => resultArr.unshift(letter));
  return resultArr.join("");
}

function reverseStringWithBuiltInMethod(str) {
  return str.split("").reverse().join("");
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/

function reverseStringsInArray(arr) {
  return arr.map((str) => reverseString(str));
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));

/*Retrospective
Using built-in methods are good in that they simplify the workaround for getting the output. That said, sometimes there might not built-in methods for the result I want and in occurrence, I have to make a custom function to get things done. 
In this challenge, for `reverseString` function, I tried both manual and built-in way. Especially, knowing the `unshift` array method was the key in solving the problem.  
 */
