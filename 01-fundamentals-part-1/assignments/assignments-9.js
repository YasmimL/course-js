/* ASSIGNMENT #9 - Logical Operators */

let population = 212;
const country = "Brazil";
let language = "Portuguese";
let isIsland = false;

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
