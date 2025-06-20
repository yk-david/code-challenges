const podcasts = [
  {
    id: 1,
    title: "Scrimba Podcast",
    duration: 50,
    tags: ["education", "jobs", "technology"],
    hosts: ["Alex Booker"],
    rating: 10,
    genre: "education",
    paid: false,
  },
  {
    id: 2,
    title: "Crime Fan",
    duration: 150,
    tags: ["crime", "entertainment", "mature"],
    hosts: ["Bob Smith", "Camilla Lambert"],
    genre: "true crime",
    rating: 5,
    paid: true,
  },
  {
    id: 3,
    title: "Mythical Creatures",
    duration: 99,
    tags: ["entertainment", "general", "unicorns"],
    hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"],
    genre: "fantasy",
    rating: 8,
    paid: true,
  },
  {
    title: "Crime Crime Crime",
    duration: 70,
    tags: ["crime", "entertainment", "mature"],
    hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"],
    genre: "true crime",
    rating: 6,
    paid: true,
  },
  {
    title: "Something about Witches",
    duration: 35,
    tags: ["fantasy", "entertainment"],
    hosts: ["Frewin Wyrm", "Evanora Highmore"],
    genre: "fantasy",
    rating: 8,
    paid: false,
  },
  {
    title: "Coding Corner",
    duration: 55,
    tags: ["education", "jobs", "technology"],
    hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"],
    genre: "education",
    rating: 9,
    paid: false,
  },
];

/* Welcome Aboard Scrimba Airlines 

Our Scrimba Airlines in-flight entertainment package 
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long. 

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest. 

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of 
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Scrimba Podcast, 50 minutes
6. Something about Witches, 35 minutes

*/

/*Plan
Initialize an empty array.
Loop over podcast and extract only title and duration to store them in the array.
Sort the array with conditions:
  If flight length provided: sort from shortest to that flight time.
  If any flight length: sort all podcast from shortest to longest.
Return the array.
Format string for output and print out.
*/

function sortByDuration(data, flightLength) {
  // Extracting title and duration
  const podcasts = data
    .map(({ title, duration }) => {
      return {
        title,
        duration,
      };
    })
    // Sort early on by duration: longest to shortest
    .sort((a, b) => b.duration - a.duration);

  // Make a new array to work with depending on flight duration
  const podcastsCustomized =
    flightLength <= 60 ? [...podcasts].reverse() : [...podcasts];

  // Final format and print
  podcastsCustomized.forEach(({ title, duration }, index) =>
    console.log(`${index + 1}. ${title}, ${duration} minutes`)
  );
}

sortByDuration(podcasts, 60);

/*Retrospective
Coding took me more time and steps than planned. As the functions envolvings multiple steps, I had to break down codes into small steps for the readability. Final function got quite lengthy, but it remains clean, which I think important for maintainability.
*/
