import { subarrayLengthSumIsEqualOrGreater } from "./3-problem-solving-patterns/slidingWindow";
import { productOfAll } from "./4-recurssion/2-helperMethod";
import { productOfArray } from "./4-recurssion/3-pureRecursion";
import { capitalizeFirstLetter } from "./5-extra-problems/capitalizeFirst";
import { sumOfAllEvenElements } from "./5-extra-problems/evenElementsSum";
import { flatten } from "./5-extra-problems/flattenArray";
import { reverseString } from "./5-extra-problems/reverseString";
import { someRecursive } from "./5-extra-problems/someRecursive";
import { linearSearch } from "./6-searching-algorithms/linearSearch";

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

console.log(sumOfAllEvenElements(obj2));
