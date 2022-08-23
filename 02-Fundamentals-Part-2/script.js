'use strict'; // STRICT MODE - should be the very first line of code!!!



//FUNCTIONS
function describeCountry(country, population, capitalCity) {
    let result = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return result;
}
console.log(describeCountry('Poland', 37, 'Warsaw'));



//FUNCTION DECLARATIONS VS. EXPRESSIONS

//function declaration
const population = 37;
const country = 'Poland';
function percentageOfWorld1(population) {
    return population * 100 / 7900;
}
console.log(`FUNCTION DECLARATION: ${country} has ${population} million people, so it's ${percentageOfWorld1(population)}% of the world population.`);

//function expression
const percentageOfWorld2 = function (population) {
    return population * 100 / 7900;
}
console.log(`FUNCTION EXPRESSION: ${country} has ${population} million people, so it's ${percentageOfWorld2(population)}% of the world population.`);



//ARROW FUNCTION
const percentageOfWorld3 = populations => population * 100 / 7900;
console.log(`FUNCTION ARROW: ${country} has ${population} million people, so it's ${percentageOfWorld3(population)}% of the world population.`);
