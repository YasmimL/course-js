/* ASSIGNMENT #2 - Function Declarations vs. Expressions */

const percentageOfWorld1 = (country, population) => {
  const partWorldPopulation = (population / 7900) * 100;

  return `${country} has ${population} million people, so it's about ${partWorldPopulation}% of the world population.`;
};

const brazil = percentageOfWorld1("Brazil", 212);
const china = percentageOfWorld1("China", 1441);

console.log(brazil);
console.log(china);
