interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic: Vehicle = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return `${this.name}, ${this.year}, ${this.broken}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

// New section

interface Reportable {
  summary(): string;
}

const newCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `${this.name}, ${this.year}, ${this.broken}`;
  },
};

const beverage = {
  name: 'pepsi',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `${this.name}, ${this.carbonated}, ${this.sugar}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(newCivic);
printSummary(beverage)
