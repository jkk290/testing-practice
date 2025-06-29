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
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const punctuation = [' ', '.', ',', ';', '!', '?'];

    let cipher = '';   

    function checkCurrentLetter(letter) {
       return alpha.findIndex(char => char === letter);
    };

    function isCapitalized(letter) {
        return letter === letter.toUpperCase();
    };

    for (let i = 0; i <= string.length - 1; i++) {
        let letter = checkCurrentLetter(string[i].toLowerCase());

        let cipheredLetterIndex = undefined;
        let cipheredLetter = '';

        if (punctuation.includes(string[i])) {
            cipheredLetter = string[i];

        } else if ((letter + key >= alpha.length) && isCapitalized(string[i])) {
            cipheredLetterIndex = (letter + key) - alpha.length;
            cipheredLetter = alpha[cipheredLetterIndex].toUpperCase();

        } else if ((letter + key < alpha.length) && isCapitalized(string[i])) {
            cipheredLetterIndex = (letter + key);
            cipheredLetter = alpha[cipheredLetterIndex].toUpperCase();

        } else if ((letter + key >= alpha.length) && !isCapitalized(string[i])) {
            cipheredLetterIndex = (letter + key) - alpha.length;
            cipheredLetter = alpha[cipheredLetterIndex]
        } else {            
            cipheredLetterIndex = (letter + key);
            cipheredLetter = alpha[cipheredLetterIndex]
        };

        cipher += cipheredLetter;
    };

    return cipher;
};

export function analyzeArray(array) {

    function average() {
        let sum = 0;

        array.forEach((number) => {
            sum += number;
        })

        return average = sum / array.length;
    };

    function min() {
        let minNum = array[0];

        array.forEach((number) => {
            if (number <= minNum) {
                minNum = number;
            } else {
                return;
            }
        });

        return minNum;
    };

    function max() {
        let maxNum = array[0];

        array.forEach((number) => {
            if (number >= maxNum) {
                maxNum = number;
            } else {
                return;
            }
        });

        return maxNum;
    };

    function length() {
        return array.length;
    }

    let analyzedObject = {
        average: average(),
        min: min(),
        max: max(),
        length: length()
    }

    return analyzedObject;
};