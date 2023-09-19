function identity<T>(value: T): T {
  return value;
}

console.log(identity(1)); // 1
console.log(identity("Hello")); //
console.log(identity(true)); // true

function typeOfidentity<T>(value: T): string {
  return typeof value;
}

console.log(typeOfidentity(1)); // Number
console.log(typeOfidentity("Hello")); // String
console.log(typeOfidentity(true)); // Boolean
