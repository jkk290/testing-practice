import { capitalize } from "./main.js";

test('hello becomes Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});
