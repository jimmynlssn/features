// Annotations
// We as developers explicitly write what type the variables has
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let emtpy: void;
let nothingMuch: undefined = undefined;

// Built in object
let now: Date = new Date();

// Array
let color: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];

// Classes
//class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations

// 1) Function that returns the 'any' type
// JSON.parse() returns the 'any' type because
// typescript cant guess what the function
// will return since it depends on the input-argument

const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line then initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

// Better way would be
// let foundWord = false;

for (let index = 0; index < words.length; index++) {
  if (words[index] === 'green') {
    foundWord = true;
  }
}

// 3) When we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > 0) {
    numberAboveZero = numbers[index];
  }
}
