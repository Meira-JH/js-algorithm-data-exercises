export function performanceCheck(functionToCheck) {
  let t1 = performance.now();
  console.log(functionToCheck());
  let t2 = performance.now();
  console.log(`Time to perform: ${t2 - t1} miliseconds`);
}
