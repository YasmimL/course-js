/* ASSIGNMENT #1 - Functions */

const describeCountry = (country, population, capitalCity) => {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
};

const brazil = describeCountry("Brazil", 212, "Brasília");
const finland = describeCountry("Finland", 6, "Helsinki");
const portugal = describeCountry("Portugal", 10, "Lisbon");

console.log(brazil);
console.log(finland);
console.log(portugal);
