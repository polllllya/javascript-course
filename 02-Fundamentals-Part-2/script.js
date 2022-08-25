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


//FUNCTIONS CALLING OTHER FUNCTIONS
const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`;
console.log(describePopulation(country, population));

/*CODING CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to  calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 */

const calcAverage = (one, two, three) => (one + two + three) / 3;

const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins > avgKoalas * 2) {
        return `Dolhins win (${avgDolhins} vs. ${avgKoalas})`;
    } else if (avgKoalas > avgDolhins * 2) {
        return `Koalas win (${avgKoalas} vs. ${avgDolhins})`;
    } else {
        return 'A drow won';
    }
}

console.log(checkWinner(avgDolhins, avgKoalas));



//INTRODUCTION TO ARRAYS
const populations = [33, 14, 12];
console.log(population.length == 4);

const precentage = [percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2])];

console.log(precentage);


//BASIC ARRAY OPERATIONS(METHODS)
const neighbours = ['Germany', 'Czech'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany')) {
    console.log('Probably a central European country :D');
} else {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Czech')] = 'Czech Republic';
console.log(neighbours);
