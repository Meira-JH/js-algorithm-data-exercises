export function someRecursive(array, callbackFn) {
    for (let value of array) {
        if (callbackFn(value)) {
            return true;
        }
    }

    return false;
}
