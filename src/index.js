import {
  circularArrayMock,
  circularArrayRotation,
} from './hackerRank/problemSolving/circular-array-rotation.js';

function main() {
  const result = circularArrayRotation(
    circularArrayMock.array,
    circularArrayMock.numberOfRotations,
    circularArrayMock.positionsToShow
  );

  console.log('RESULT', result);
}

main();
