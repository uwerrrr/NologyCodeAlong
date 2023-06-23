import { sum } from "./sum-tdd.js";

describe("Test cases for sum function", () => {
  test("inputs: 2 num -> correct sum", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-2, 3)).toBe(1);
    expect(sum(0, -3)).toBe(-3);
    expect(sum(0, -3.5)).toBe(-3.5);
  });
  test("inputs: only 1 input -> error", () => {
    const error = new Error("One or more parameters are missing");
    expect(() => {
      sum(3);
    }).toThrow(error);
    expect(() => {
      sum("text");
    }).toThrow(error);
    expect(() => {
      sum();
    }).toThrow(error);
  });
  test("inputs: not number -> error", () => {
    const error = new Error("One or more parameters are not number");
    expect(() => {
      sum("3", 3);
    }).toThrow(error);
    expect(() => {
      sum(true, "true");
    }).toThrow(error);
    expect(() => {
      sum([3], 0);
    }).toThrow(error);
  });
  test("inputs: more than 2 inputs -> error", () => {
    const error = new Error("More than one parameters are passed");
    expect(() => {
      sum("3", 3, [3]);
    }).toThrow(error);
    expect(() => {
      sum(true, "true", 4);
    }).toThrow(error);
    expect(() => {
      sum([3], 0, "string");
    }).toThrow(error);
  });
});
