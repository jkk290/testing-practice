export function capitalize(string){
    let capitalizedLetter = string[0].toUpperCase();
    return string.replace(string[0], capitalizedLetter);
};