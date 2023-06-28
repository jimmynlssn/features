const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias for the tuple
type Drink = [string, boolean, number]

// This is tuples using the type alias
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['green', false, 0]

// This is a tuple using regular type annotation
const cocaCola: [string, boolean, number] = ['brown', true, 40];

pepsi[0] = 40;

// Tuples gives no information on what the values represent
const carSpecs: [number, number] = [400, 3543];

// Instead if we use objects we can add key to give some information
const carStats = {
  horsepower: 400,
  weight: 3543
}