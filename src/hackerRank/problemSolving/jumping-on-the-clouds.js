// This function calculates the minimum number of jumps needed to reach the end of the cloud array.
// c =[(i+k) % n]
export const mockJumpingOnTheClouds = {
  arrayOfClouds: [0, 0, 1, 0, 0, 1],
  jumpIndexSize: 2,
};

export function jumpingOnTheClouds(c, k) {
  const arrayOfClouds = c;
  const jumpIndexSize = k;
  let jumpIndexPointer = -1;
  let jumpCounter = 0;
  const jumpLimit = 20000;
  let jumpEnergy = 100;

  while (jumpIndexPointer !== 0 && jumpCounter < jumpLimit && jumpEnergy > 0) {
    if (jumpIndexPointer < 0) {
      jumpIndexPointer = 0;
    }

    if (arrayOfClouds[jumpIndexPointer] === 1) {
      jumpEnergy -= 2;
    }

    if (jumpIndexPointer + jumpIndexSize > arrayOfClouds.length - 1) {
      jumpIndexPointer = jumpIndexPointer - arrayOfClouds.length;
    }

    jumpEnergy--;
    jumpCounter++;
    jumpIndexPointer += jumpIndexSize;
    console.log('jumpEnergy', jumpEnergy);
    console.log('jumpCounter', jumpCounter);
    console.log('jumpIndexPointer', jumpIndexPointer);
  }

  return jumpEnergy;
}
