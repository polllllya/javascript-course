//BEGINING
/*let js = 'amazing';
if (js == 'amazing') alert('JS is fun');

console.log(100 + 100);*/



//VALUES AND VARIABLES
/*let country = 'Poland';
let continent = 'Europe';
let population = 37.95;

console.log(country, continent, population);*/



//DATA TYPES 
/*let isIsland = false;
let language;
let continent = 'Europe';
let population = 37.95;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof continent);
console.log(typeof population);*/



//LET, CONST AND VAR
//let - change varible later or a declaration without values
//const - a varible should not change
//var - avoid
/*const birthYear = 2000;
let age = 21;
age = 22;

console.log(birthYear, age);*/



//BASIC OPERATORS
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
/*let population = 37.95;
let newPopulation = 37.95 / 2;
console.log(population, newPopulation);

population++;
console.log(population);

let result = population > 6;
console.log(result);

let country = 'Poland';
let continent = 'Europe';

let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak polish.';
console.log(description);*/



// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMI susing the formula(you can even implement both versions)
// 3. Createa Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

/*const massMark = 78, massJohn = 92;
const heightMark = 1.69, heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log('Marks BMI is ' + bmiMark);
console.log('Johns BMI is ' + bmiJohn);

console.log('Mark has a higher BMI than John: ' + markHigherBMI);*/