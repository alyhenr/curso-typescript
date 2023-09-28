import calculator from "../src/calculator";

describe("Arithmetic functions", () => {
  it("Should sums 5 + 18 correctly", () => {
    expect(calculator.sum(5, 18)).toEqual(23);
  });

  it("Should not divide by zero", () => {
    expect(() => calculator.div(1, 0)).toThrow(Error);
  });

  it("Should subtract 60 from 160 correctly", () => {
    expect(calculator.sub(160, 60)).toEqual(100);
  });

  it("Should multiply 36 times 12 correctly", () => {
    expect(calculator.mul(36, 12)).toEqual(432);
  });
});
