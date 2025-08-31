/* ASSIGNMENT #6 - Taking Decisions: if / else Statements */

let population = 212;
const country = "Brazil";
let continent = "South America";
let language = "Portuguese";

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million
    below average`
  );
}
