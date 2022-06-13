import { collectStrings } from "./5-extra-problems/collectStrings";
import { bubbleSort } from "./7-sort/bubbleSort";
import { javaScriptSort } from "./7-sort/javascriptSort";
import { selectionSort } from "./7-sort/selectionSort";
import { bonAppetit } from "./hackerRank/bonAppetit";
import { findDayOfTheProgrammer } from "./hackerRank/dayOfTheProgrammer";

const array1 = [-1, -2, -2, 2, 4, 4, 4, 5, 6, 7, 7, 7, 9, 10];
const array2 = [-1, -2, 2, 4, 5, 6, 7, 9, 10];
const array3 = [1, -2, 4, 2, 4, -10, 5, 6, 30, 7, 23, 9, 10, 0];
const array5 = [-1, -2, 2, 4, 5, 6, 7, 9, 8, 10];
const array4 = [2, 4, 6];
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

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                    },
                },
            },
        },
    },
};

console.log(bonAppetit([4, 1], [3, 10, 2, 9], 12))
