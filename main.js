export function capitalize(string) {
    let capitalizedLetter = string[0].toUpperCase();
    return string.replace(string[0], capitalizedLetter);
};

export function reverseString(string) {
    let reversed = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};