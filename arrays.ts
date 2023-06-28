const carMakers = ['volvo', 'tesla', 'ford'];
const dates = [new Date(), new Date()];

const carMake = [['xc60'], ['model y'], ['focus']];

// Help with inference when extracting values
const volvo = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  // Since typescript knows every element is a string
  // we get help with properties on the element from intellisense
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2023-06-22');
importantDates.push(new Date());