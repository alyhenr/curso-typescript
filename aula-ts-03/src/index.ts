//Aula 03:
function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

function sum(num1: number, num2: number): number {
  return num1 * num2;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function showResult(result: number): void {
  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's odd!`);
  }
}

function generateNumbers(): Array<number> {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);

  return [number1, number2];
}

const [n1, n2] = generateNumbers();
const [n3, n4] = generateNumbers();
showResult(multiply(sum(n1, n2), sum(n3, n4)));
