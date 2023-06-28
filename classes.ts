class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('choo chooo');
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }

  private drive(): void {
    console.log('ugh');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle_car = new Car('red', 4);
vehicle_car.startDrivingProcess();
console.log(vehicle_car.color);
console.log(vehicle_car.wheels);
