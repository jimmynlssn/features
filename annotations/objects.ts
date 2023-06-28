const profile = {
  name: 'jimmy',
  age: 35,
  coordinates: {
    long: 714,
    lat: 817,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const age1 = profile.age;
// OR
// using destructuring
const { age }: { age: number } = profile;
const {
  coordinates: { lat, long },
}: { coordinates: { lat: number; long: number } } = profile;
