export function javaScriptSort(arrayInput, order) {
  const orderOptions = {
    descent: (array) => array.sort((a, b) => b - a),
    ascent: (array) => array.sort((a, b) => a - b),
  };

  return orderOptions[order](arrayInput);
}
