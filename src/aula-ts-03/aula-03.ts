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
    console.log(`The result is ${result} and it's not even!`);
  }
}

function generateNumbers(): Array<number> {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);

  return [number1, number2];
}

const [n1, n2] = generateNumbers();
const [n3, n4] = generateNumbers();
const aula03 = () => showResult(sum(multiply(n1, n2), multiply(n3, n4)));

export default aula03;
