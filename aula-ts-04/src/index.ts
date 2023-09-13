function multiply(num1: number, num2: number) {
  return num1 * num2;
}

function sum(num1: number, num2: number) {
  return num1 * num2;
}

function isEven(num: number) {
  return num % 2 === 0;
}

function showResult(result: number): void {
  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's even!`);
  }
}

(() => {
  let num1: string | null = null;
  let num2: string | null = null;
  while (!Number(num1) || !Number(num2)) {
    if (!Number(num1)) {
      num1 = prompt("First Number");
    }
    if (!Number(num2)) {
      num2 = prompt("Second Number");
    }
  }

  let result = sum(Number(num1), Number(num2));
  result += multiply(1, 2);
  showResult(result);
})();
