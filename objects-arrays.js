/*  OBJECTS
  Given the following information about students, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, height, occupation
*/

//Example
const student1 = {
    name: "Derek",
    diet: "Everything",
    weight: "200 lbs", 
    height: "6 ft", 
    occupation: "Front-end developer",
  }
  
  // Stacy, vegetarian, 120 lbs, 5 ft 5 in, Back-end developer
  const student2 = {}
  // Kevin, Pescatarian, 150 lbs, 5 ft 11 in, iOS developer
  const student3 = {}
  
  // Using your student objects, log answers to these questions:

// How much did Derek weigh?


// What was the diet of Stacy?


// How tall was Kevin?


// What is Kevin's job?




// Create a new Greeting method for Stacy.  When called, return "Hello, my name is {name}!" Log the result.



// ARRAYS



// Given an array of basketball players.  Complete the following requests using any array method you like

const players = [
    { id: 1, name: "Michael Jordan", team: "Bulls", position: "Shooting Guard" },
    { id: 2, name: "Kobe Bryant", team: "Lakers", position: "Shooting Guard" },
    { id: 3, name: "Shaquille O Neal", team: "Heat", position: "Center" },
    { id: 4, name: "Tim Duncan", team: "Spurs", position: "Center" },
    { id: 5, name: "Kevin Garnett", team: "Celtics", position: "Center" },
    { id: 6, name: "Nate Robinson", team: "Knicks", position: "Point Guard" },
    { id: 7, name: "Andre Miller", team: "Nuggets", position: "Shooting Guard" },
    { id: 8, name: "Lebron James", team: "Cavaliers", position: "Power Forward" },
    { id: 9, name: "Klay Thompson", team: "Warriors", position: "Shooting Guard" },
    { id: 10, name: "Ricky Rubio", team: "Timberwolves", position: "Point Guard" },
  ];
  
  /* Request 1: Create a new array called teams that contains all the teams in the players array. This will be an array of strings.
  
  Once you have the new array created, sort the teams alphabetically and log the result. */

  /* Request 2: Create a new array called playerProfile that contains both the name and position of each player. This will be an array of strings.
  The resulting contact information strings should have a space between the name and the position, like this: 
  "Allen Point Guard"
  
  Log the result of your new array. */

  
  /* Request 3: Find out how many players have the position "Shooting Guard". Create a new array called shootingGuardArray that contains them all. This will be an array of objects. Log the result. */
  
  
  // ==== ADVANCED Array Methods ====
  
  // Given this city data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.
  
  const cities = [
    { city: "Los Angeles", population: 5000000, state: "California", nickname: "CITY OF ANGELS" },
    { city: "New York", population: 2000000, state: "New York", nickname: "THE BIG APPLE" },
    { city: "Denver", population: 800000, state: "Colorado", nickname: "MILE HIGH CITY" },
    { city: "Chicago", population: 1000000, state: "Illinois", nickname: "THE WINDY CITY" },
    { city: "Atlanta", population: 750000,  state: "Georgia", nickname: "THE BIG PEACH" },
    { city: "Las Vegas", population: 900000,  state: "Nevada", nickname: "SIN CITY" },
    { city: "Houston", population: 500000, state: "Texas", nickname: "SPACE CITY"},
    { city: "Memphis", population: 100000, state: "Tennessee", nickname: "HOME OF THE BLUES" },
    { city: "Minneapolis", population: 450000, state: "Minnesota", nickname: "THE CITY OF LAKES"},
    { city: "San Francisco", population: 1000000, state: "California", nickname: "THE BAY" },
  ];
  
  /* Request 1: .forEach()
  
  We want to display just the name of the city in front of the nickname. Populate a new array with just these two key value pairs for each object. 
  The final object should be an array of strings that looks like this:
  ["Name: Los Angeles, Nickname: CITY OF ANGELES", ... ]
  
  */

  
  /* Request 2: .map()
  
  We need a list of all the city's nicknames converted to lower case. Using map, create a new array of strings named lowCaseNicknames, each string following this pattern: "city of angeles". Log the resut.
  
  */
  

  
  /* Request 3: .filter() 
  
We want the cities with lower population count. 
Using filter, create a new array of objects called lowPopCities which contains only the cities with a population less than 1000000.
  
  */

  
  /* Request 4: .reduce() 
  
  We need to know the population for all the cities. Find the total population from all the cities using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.
  
  */
