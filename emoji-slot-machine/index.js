/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/

const slotMachine = document.querySelector(".emoji-slots-game");
const url = "https://apis.scrimba.com/emojihub/api/all/category/food-and-drink";

async function makeFruitArray(callbackFn) {
  return await callbackFn.then((foodArray) =>
    foodArray.filter((food) => food.group === "food fruit")
  );
}

async function getRandomFruits(callbackFn) {
  // How can I get 9 random numbers?
  const fruits = await makeFruitArray(getFruits())
    .then((data) => data)
    .catch((error) => console.log(`Something went wrong...: ${error}`));

  const randomFruits = [];

  while (randomFruits.length <= 8) {
    if (!randomFruits.includes(fruits[getRandomIndex(fruits)])) {
      randomFruits.push(fruits[getRandomIndex(fruits)]);
    }
    console.log(`randomFruits has now ${randomFruits.length} fruits!`);
  }

  randomFruits.forEach(
    (fruit) => (slotMachine.innerHTML += `<li>${fruit.htmlCode}</li>`)
  );
  // return randomFruits;
}

// write your fetch request here
async function getFruits() {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Getting randomly fruits icons and render
const renderFruitsIcon = getRandomFruits(makeFruitArray(getFruits())).then(
  (data) => data
);
