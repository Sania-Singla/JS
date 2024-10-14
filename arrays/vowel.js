function isVowel(char) {
    char = char.toLowerCase();

    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}

let letter = 'E';
if (isVowel(letter)) {
    console.log(`${letter} is a vowel.`);
} else {
    console.log(`${letter} is not a vowel.`);
}
