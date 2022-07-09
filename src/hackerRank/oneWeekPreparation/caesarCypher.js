/* 
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c. 
*/

export function ceasarCypher(s, k) {
    //array to sort each cyphered element
    let cypheredSentence = [];
    //array with all elements to be cyphered
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    //loop iterating the string to be cyphered
    for (const character of s) {
        let char = character;
        if (/^[a-zA-Z]+$/.test(character)) {
            alphabet.forEach((letter, index) => {
                if (letter === character.toLowerCase()) {
                    if (index + k < alphabet.length) {
                        char = alphabet[index + k];
                    } else {
                        char = alphabet[index + k - alphabet.length];
                    }
                }
            });
        }
        cypheredSentence.push(char);
    }

    cypheredSentence.join("");

    return cypheredSentence;
}
