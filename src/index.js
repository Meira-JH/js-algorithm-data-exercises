import {
  jumpingOnTheClouds,
  mockJumpingOnTheClouds,
} from './hackerRank/problemSolving/jumping-on-the-clouds.js';

function main() {
  const result = jumpingOnTheClouds(
    mockJumpingOnTheClouds.arrayOfClouds,
    mockJumpingOnTheClouds.jumpIndexSize
  );

  console.log('RESULT', result);
}

main();
