// // dummy test to check jest setting up correctly
// test("check that jest is set up correct", () => {
//   expect(true).toBe(true);
// });

// import { function } from "js file url";

///// general syntax
// describe("describe test block", () => {
//    // 1st test cases group - correct group
//   test("name of test cases group", () => {
//     // test cases (diff inputs - diff expected results)
//     expect(function(param)).toBe(result);
//     expect(function(param)).toBe(result);
//   });

//   // 2nd test cases group - error group 1
//   test("name of test cases group", () => {
//      // test cases (diff inputs - expected errors)
//     expect(() => {function(param)}).tothrow(new Error("error message"));
//     expect(() => {function(param)}).tothrow(new Error("error message");
//   });

//     // 3rd test cases group - error group 2
//   test("name of test cases group", () => {
//      // test cases (diff inputs - expected error)
//     const errorObj = new Error ("error message")
//     expect(() => {function(param)}).tothrow(errorObj);
//     expect(() => {function(param)}).tothrow(errorObj);
//   });
// });


import { rectangleArea } from "./reactangleArea.js";

// // dummy test to see if I set everything up correct
// test("check that jest is set up correct", () => {
//     expect(true).toBe(true);
// });
const negativeOrZeroError = new Error(
    "Height and width should be greater than 0"
);

const paramsMustBeNumbersError = new Error(
    "Height and width need to be numbers"
);

const invalidArgumentNumber = new Error("One or more parameters are missing");

describe("Test cases for a rectangle area function", () => {
    it("should calculate the area of a rectangle if given two positive numbers", () => {
        expect(rectangleArea(2, 3)).toBe(6);
        expect(rectangleArea(100, 120)).toBe(12000);
        expect(rectangleArea(2.1, 1.2)).toBe(2.52);
    });

    it("should throw an error if height or width are 0 or a negative number", () => {
        expect(() => {
            rectangleArea(-2, -6);
        }).toThrow(negativeOrZeroError);
        expect(() => {
            rectangleArea(-8, 4);
        }).toThrow(negativeOrZeroError);
        expect(() => {
            rectangleArea(0, 6);
        }).toThrow(negativeOrZeroError);

        expect(() => {
            rectangleArea(0, 0);
        }).toThrow(negativeOrZeroError);
    });

    it("should throw an error when one or more argument are not a number", () => {
        expect(() => {
            rectangleArea("hi", "hello");
        }).toThrow(paramsMustBeNumbersError);
        expect(() => {
            rectangleArea("apple", 0);
        }).toThrow(paramsMustBeNumbersError);
        expect(() => {
            rectangleArea(true, [1, 3]);
        }).toThrow(paramsMustBeNumbersError);
    });

    it("should throw an error if less than 2 parameters are passed", () => {
        expect(() => {
            rectangleArea();
        }).toThrow(invalidArgumentNumber);
        expect(() => {
            rectangleArea(1);
        }).toThrow(invalidArgumentNumber);
        expect(() => {
            rectangleArea("hello");
        }).toThrow(invalidArgumentNumber);
    });
});

// matchers (functions that compare things)
