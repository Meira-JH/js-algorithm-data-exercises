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
        //create a dynamic variable for manipulation inside loop
        let char = character;
        //checks if it is a lower case letter
        if (/^[a-z]+$/.test(character)) {
            //loop inside alphabet to find index of matching letter
            alphabet.forEach((letter, index) => {
                //look for matching letter
                if (letter === character) {
                    //cypher the letter
                    if (index + k < alphabet.length) {
                        char = alphabet[index + k];
                    } else {
                        //jump to the start of alphabet when out of range
                        char = alphabet[index + k - alphabet.length];
                    }
                }
            });
        }
        //same logic but with upper case considerations
        if (/^[A-Z]+$/.test(character)) {
            alphabet.forEach((letter, index) => {
                if (letter.toUpperCase() === character) {
                    if (index + k < alphabet.length) {
                        char = alphabet[index + k].toUpperCase();
                    } else {
                        char =
                            alphabet[index + k - alphabet.length].toUpperCase();
                    }
                }
            });
        }
        //construct sentence order
        cypheredSentence.push(char);
    }

    //return cyphered sentence string
    return cypheredSentence.join("");
}
