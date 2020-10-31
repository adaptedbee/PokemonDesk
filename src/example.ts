// Task 1

function concat(first: string, second: string): string {
  return `${first}${second}`;
}

concat('Hello ', 'World'); // -> Hello World;

// Task 2

type NumberStringArray = Array<number|string>;

interface Data {
  [n: string]: string | NumberStringArray;
}

interface MyHomeTaskInterface {
  [n: string]: string | NumberStringArray | Array<Data>;
};

const MyHometask: MyHomeTaskInterface = {
  howIDoIt: "I Do It Wel",
  someArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", someArray: ["string one", 23] }],
};

// Task 3

interface MyArray<T> {
  [n: number]: T;

  reduce<U>(fn: (accumulator: U, currentValue: T, index?: number, array?: MyArray<T>) => U, initialValue?: U): U;
}

const tsArray: Array<number> = [1, 2, 3, 4];
tsArray.reduce((accumulator: number, currentValue: number) => accumulator + currentValue);
