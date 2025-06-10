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

    function checkCurrentLetter(letter) {
       return alpha.findIndex(char => char === letter);
    };

    for (let i = 0; i <= string.length - 1; i++) {
        let letter = checkCurrentLetter(string[i].toLowerCase());

        let cipheredLetter = '';

        if (letter + key >= alpha.length) {
            cipheredLetter = (letter + key) - alpha.length;
        } else {
            cipheredLetter = letter + key;
        };

        cipher += alpha[cipheredLetter];
    };

    return cipher;
};