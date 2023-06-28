//Generics with classes!

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

const arrOfNum = new ArrayOfNumbers([1, 2, 3]);
console.log(arrOfNum.get(1));

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

const arrOfStrings = new ArrayOfStrings(['hej', 'där', 'karl']);
console.log(arrOfStrings.get(2));

// By using generics we can change the datatype that is used upon creation of the object.
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number) {
    return this.collection[index];
  }
}

const arrOfAnythingNr = new ArrayOfAnything<number>([6, 7, 8]);
console.log(arrOfAnythingNr.get(2));

const arrOfAnythingStr = new ArrayOfAnything<string>(['kalle', 'anka']);
console.log(arrOfAnythingStr.get(1));

// Generics with functions

function printStrings(strings: string[]): void {
  for (let i = 0; i < strings.length; i++) {
    console.log(strings[i]);
  }
}
printStrings(['hej', 'san', 'kalle']);

function printNumbers(numbers: number[]): void {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}
printNumbers([1, 2, 3, 4, 5]);

function printAnything<T>(arrOfAny: T[]): void {
  for (let i = 0; i < arrOfAny.length; i++) {
    console.log(arrOfAny[i]);
  }
}
printAnything<string>(['karl', 'heter', 'anka']);
printAnything<number>([9, 8, 7]);

// Generic constraints
class Car implements Printable {
  print(): void {
    console.log('I am a car');
  }
}

class House implements Printable {
  print(): void {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void
}

// To assert typescript that print always is gonna exist on type T it must extend an interface that defines that function
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars([new Car(), new House()]);