import { 
    capitalize,
    reverseString,
    calculator
} from "./main.js";

test('hello becomes Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('hello becomes olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('calculator operations: 1 + 1 equals 2', () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test('calculator operations: 1 - 1 equals 0', () => {
    expect(calculator.subtract(1, 1)).toBe(0);
});

test('calculator operations: 10 / 2 equals 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('calculator operations: 3 * 3 equals 9', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
});



