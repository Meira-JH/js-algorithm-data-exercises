export function collectStrings(object) {
  let newObject = Object.assign({}, object);
  let stringsCollected = [];
  if (!newObject) return [];

  function helper(helperInput) {
    for (let property in helperInput) {
      let thisProperty = helperInput[property];
      if (!thisProperty) return null;
      if (typeof thisProperty === 'object') {
        helper(thisProperty);
      }
      if (typeof thisProperty === 'string') {
        stringsCollected.push(thisProperty);
      }
    }
  }
  helper(newObject);
  return stringsCollected;
}
