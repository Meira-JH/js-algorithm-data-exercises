const stringifyObjectProperties = (object) => {
    // variable to store newObject
    let newObject = Object.assign({}, object);

    function helper(helperInput) {
        // needs helper() with value declared outside recursion. If not, recursion will reset value.
        for (let property in helperInput) {
            // check if object
            if (
                typeof helperInput[property] === "object" &&
                helperInput[property] !== null
            ) {
                helper(helperInput[property]);
                // if number, stringify
            } else if (typeof helperInput[property] === "number")
                helperInput[property] = helperInput[property].toString();
        }
        return helperInput;
    }

    return helper(newObject);
};
