export function sumOfAllEvenElements(object) {
    if (!object) {
        return 0;
    } else {
        let sumOfEven = 0;

        for (const prop in object) {
            if (object[prop] % 2 === 0) {
                sumOfEven += object[prop];
            }
            if (typeof object[prop] === "object") {
                console.log(object[prop]);
                sumOfEven = sumOfEven + sumOfAllEvenElements(object[prop]);
            }
        }

        return sumOfEven;
    }
}
