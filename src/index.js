import { capitalizeWords } from "./5-extra-problems/capitalizeWords";

const array1 = [-1, -2, -2, 2, 4, 4, 4, 5, 6, 7, 7, 7, 9, 10];
const array2 = [-1, -2, 2, 4, 5, 6, 7, 9, 10];
const array3 = [2, 4, 6];
const arrayOfArrays1 = [1, 2, [2, 3], [7, 5, 24], 0, [0, 0, 1]];
const number1 = 123123121231231212312312222;
const number2 = 998890099988900999889009333;
const number3 = 321;
const number4 = 123;
const string1 = "abc";
const string2 = "abracadabra";
const arrayOfString1 = ["lol", "omg", "wtf"];
const arrayOfString2 = ["i", "aM", "learning", "recursion"];
const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
        },
    },
};
const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
};

console.log(capitalizeWords(arrayOfString1));
