import podcasts from "./data.js";

/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/ 

/*Plan
Get hosts
    - Loop over podcast data and reduce each hosts into single array of hosts.
    - Return the single array of hosts 

Assign awards
    - Make random index with Math.random()
    - Loop over hosts from `getHosts` and using random index, attribute a random awards to each host.
 */

const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data){
    return data.reduce((accumulator, currentValue) => {
        accumulator.push(...currentValue.hosts)
        return accumulator
    }, [])
}

function assignAwards(data){
    return getHosts(data).reduce((accumulator, currentValue) => {
        accumulator.push(`${awards[getRandIndex(awards)]} ${currentValue}`);
        return accumulator;
    }, [])
}

function getRandIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

console.log(getHosts(podcasts));
console.log(assignAwards(podcasts));

/*Retrospective
Knowing how to make a random index is key to solve this challenge. Overall, it worked as planned.
 */
