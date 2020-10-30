const greeting = 'hi';
const age = 1;
const hasAge = true;

function add(a: number, b: number): number {
  return a + b;
}

const names = ['spot', 'rover', 'bingo'];

function longestString(strs: string[]): string {
  return strs.reduce((acc, str) => {
    if(acc.length < str.length) return str;
    return acc;
  });
}

console.log(longestString(names));

type Dog = {
  name: string
  age: number
  weight?: string
}

function createDog(name: string, age: number, weight: string): Dog {
  return {
    name,
    age,
    weight
  };
}

type Person = {
  name: string,
  age: number,
  phoneNumber: string,
  nice: boolean
}

const oldestPerson = (ps: Person[]): Person => {
  return ps.reduce((oldest, person) => {
    if(person.age > oldest.age) return person;
    return oldest;
  });
};

const people = [
  { name: 'a', age: 10, phoneNumber: '', nice: false },
  { name: 'b', age: 15, phoneNumber: '', nice: false },
  { name: 'c', age: 50, phoneNumber: '', nice: true },
  { name: 'd', age: 30, phoneNumber: '', nice: false }
];

console.log(oldestPerson(people));

type HasName = {
  name: string
}

function findByName(hs: HasName[], name: string): HasName | undefined {
  return hs.find(h => h.name === name);
}

const hasName = findByName(people, 'a');
console.log(hasName);

function findByNameGeneric<T extends HasName>(hs: T[], name: string): T | undefined {
  return hs.find(h => h.name === name);
}

const hasNameGen = findByNameGeneric<Person>(people, 'b');
console.log(hasNameGen?.nice);


enum Colors {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green'
}

type Fruit = 'apple' | 'banana' | 'pear';

type DogPerson = Dog & Person;

console.log(Colors.RED);


