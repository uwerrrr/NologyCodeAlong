// TDD - writing tests first

import { sum } from "./sum2.js";

const noArgsError = new Error("At least one argument must be passed");
describe("sum tests", () => {
  it("Should throw an error if one or more parameters are not a number", () => {
    expect(() => {
      sum(1, "test");
    }).toThrow();

    expect(() => {
      sum("4242", "test");
    }).toThrow();

    expect(() => {
      sum(1, "test", 2, 3, 4, 5, 6, 7, 8);
    }).toThrow();
  });

  it("Should throw an error if no parameters are passed", () => {
    expect(() => {
      sum();
    }).toThrow(noArgsError);
  });

  it("Should sum up any number of inputs (inputs >= 1)", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
    expect(sum(100)).toBe(100);
  });
});
