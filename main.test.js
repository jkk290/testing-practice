import { 
    capitalize,
    reverseString 
} from "./main.js";

test('hello becomes Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('hello becomes olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});

