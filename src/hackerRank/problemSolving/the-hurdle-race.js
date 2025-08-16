// A video game character competes in a hurdle race. Hurdles are of varying heights, and the
// character has a maximum height they can jump. There is a magic potion they can take that
// will increase their maximum jump height by 1 unit for each dose. How many doses of the
// potion must the character take to be able to jump all of the hurdles? If the character can
// already clear all of the hurdles, return 0.

// Function Description

// Complete the hurdleRace function:

// Parameters:

// int k: the height the character can jump naturally
// int height[n]: the heights of each hurdle
// Returns:

// int: the minimum number of doses required, always 0 or more
// Input Format

// The first line contains two space-separated integers n and k, the number of hurdles and the
// maximum height the character can jump naturally.
// The second line contains n space-separated integers height[i], the heights of each hurdle.

// Constraints

// 1 ≤ n, k ≤ 100
// 1 ≤ height[i] ≤ 100
// Sample Input 0

// Sample Output 0

// Sample Input 1

// Sample Output 1

export const hurdleRaceMock = {
  k: 4,
  height: [1, 6, 3, 5, 2],
};

function potionHelper(maxHurdleHeight, maxJumpHeightOfCharacter) {
  if (maxHurdleHeight <= maxJumpHeightOfCharacter) {
    return 0;
  }

  return maxHurdleHeight - maxJumpHeightOfCharacter;
}

export function hurdleRace(k, height) {
  const maxJumpHeightOfCharacter = k;
  const arrayOfHurdlesHeight = height;
  let maxHurdleHeight = 0;

  for (let i = 0; i < arrayOfHurdlesHeight.length; i++) {
    if (maxHurdleHeight < arrayOfHurdlesHeight[i]) {
      maxHurdleHeight = arrayOfHurdlesHeight[i];
    }
  }

  const potionQuantity = potionHelper(
    maxHurdleHeight,
    maxJumpHeightOfCharacter
  );

  console.log('potionQuantity', potionQuantity);
  return potionQuantity;
}
