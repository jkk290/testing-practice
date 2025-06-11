import { 
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
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

test('Caesar cipher xyz becomes abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Caesar cipher HeLLo becomes KhOOr', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Caesar cipher Hello, World! becomes Khoor, Zruog', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Object average is 4', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test('Object min is 1', () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test('Object max is 8', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test('Object length is 6', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});

