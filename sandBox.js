// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// const oddNumbers = numbers.filter((number) => number % 2 === 1);

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
//   { id: 4, name: "Dave" },
// ];

// const greaterOne = users.filter((user) => user.id > 1);

// const lessTwo = users.filter((user) => user.id < 2);

// const equalThree = users.filter((user) => user.id === 3);

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// const quotient = numbers.reduce((acc, curr) => acc / curr);

// const product = numbers.reduce((acc, curr) => acc * curr);

// const subtract = numbers.reduce((acc, curr) => acc - curr);

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Dave" },
];

const userIds = users.reduce((acc, curr) => {
  acc.push(curr.id);
  return acc;
});

console.log(userIds);
