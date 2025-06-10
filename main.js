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

export const calculator = {
    add(num1, num2) {
        return num1 + num2;
    },
    subtract(num1, num2) {
        return num1 - num2;
    },
    divide(num1, num2) {
        return num1 / num2;
    },
    multiply(num1, num2) {
        return num1 * num2;
    }
};


export function caesarCipher(string, key) {
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
    let cipher = ''; 
    for (let i = string.length -1; i >= 0; i--) {
        
    }

};