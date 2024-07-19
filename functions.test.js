const capitalize = require("./functions/capitalize.js");
const reverseString = require("./functions/reverseString.js");
const calculator = require("./functions/calculator.js");
const cesarCipher = require("./functions/cesarCipher.js");
const analyzeArray = require("./functions/analyzeArray.js");

// ---- capitalize() ----
test("First letter capitalized -> 'capitalized'", () => {
    expect(capitalize("capitalized")).toMatch(/Capitalized/);
});

test("First letter capitalized -> 'word'", () => {
    expect(capitalize("word")).toMatch(/Word/);
});

// ---- reverseString ----
test("String reversed -> 'reversed'", () => {
    expect(reverseString("reversed")).toMatch(/desrever/);
});

// ---- calculator ----
test("Calculator -> add", () => {
    expect(calculator.add(10, 6)).toBe(16);
});

test("Calculator -> subtract", () => {
    expect(calculator.subtract(20, 3)).toBe(17);
});

test("Calculator -> divide", () => {
    expect(calculator.divide(50, 5)).toBe(10);
});

test("Calculator -> multiply", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
});

// ---- cesarCipher ----
test("Cesar cipher", () => {
    expect(cesarCipher("Today is a beautiful day! :-)", 10)).toMatch(
        "Dynki sc k lokedspev nki! :-)",
    );
});

// ---- analyzeArray ----
test("Analyze array -> Avarage", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).avarage).toBe(4);
});

test("Analyze array -> Min", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("Analyze array -> Max", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("Analyze array -> Length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
