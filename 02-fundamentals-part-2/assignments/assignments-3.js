/* ASSIGNMENT #3 - Functions Calling Other Functions */

const describePopulation = (country, population) => {
  const partWorldPopulation = (population / 7900) * 100;

  return `${country} has ${population} million people, which is about ${partWorldPopulation}% of the world.`;
};

const brazil = describePopulation("Brazil", 212);
const china = describePopulation("China", 1441);

console.log(brazil);
console.log(china);
