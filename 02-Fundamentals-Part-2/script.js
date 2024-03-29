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



/*CODING CHALLENGE #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill valueas an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data below
3. Create an array 'tips' containg the tip value for each bill,calculated from the function you created before

Test data: 125, 555 and 44 */

const calcTip = function (billValueas) {
    if (billValueas > 50 && billValueas < 300) {
        return 15 * billValueas / 100;
    } else {
        return 20 * billValueas / 100;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);



//INTRODUCTION TO OBJECTS
/*const myCountry = {
    country: 'Poland',
    capital: 'Warsaw',
    language: 'polish',
    population: 37,
    neighbours: ['Germany', 'Czech']
};



//DOT VS. BRACKET NOTATION
console.log(`${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbourng countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);*/



//OBJECT METHODS
const myCountry = {
    country: 'Poland',
    capital: 'Warsaw',
    language: 'polish',
    population: 37,
    neighbours: ['Germany', 'Czech'],

    describe: function () {
        return `${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbourng countries and a capital called ${this.capital}`;
    },

    checkIsland: function () {
        (neighbours.length > 0) ? myCountry.isIsland = false : myCountry.isIsland = true;
    }
};

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);



//CODING CHALLENGE #3
/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI(the same method on both objects). Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higherBMI,to get her with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.*/

const mark = {
    name: 'Masza',
    mass: 51,
    height: 1.62,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const jhon = {
    name: 'Palina',
    mass: 50,
    height: 1.65,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

mark.calcBMI();
jhon.calcBMI()


if (mark.BMI < jhon.BMI) {
    console.log(`${jhon.name}'s BMI (${jhon.BMI}) is higher than ${mark.name} (${mark.BMI})!`);
} else {
    console.log(`${mark.name}'s BMI (${mark.BMI}) is higher than ${jhon.name} (${jhon.BMI})!`);
}


//LOOPING ARRAYS, BRAEKING AND CONTINUING
/*const populations = [33, 14, 12];
console.log(populations);

for (let i = 0; i < populations.length; i++) {
    populations[i] = percentageOfWorld1(populations[i]);
}
console.log(populations);*/



//LOOPING BACKWARDS AND LOOPS IN LOOPS
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}



//THE WHILE LOOP
const populations = [33, 14, 12];
console.log(populations);

let i = 0;
while (i < populations.length) {
    populations[i] = percentageOfWorld1(populations[i]);
    i++;
}

console.log(populations);



//CODING CHALLENG #4
/*Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and sum values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉

Bonus:Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)!*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [], totals = [];

const calcTip = function (billValueas) {
    if (billValueas > 50 && billValueas < 300) {
        return 15 * billValueas / 100;
    } else {
        return 20 * billValueas / 100;
    }
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
    let counter = 0, sum = 0, average = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        counter++;
    }

    return sum / counter;
}

console.log(calcAverage(totals));
