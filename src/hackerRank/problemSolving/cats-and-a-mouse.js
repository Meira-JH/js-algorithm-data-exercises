// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// You are givenqueries in the form of , ,
// and representing the respective positions for cats and , and for mouse .
// Complete the function to return the appropriate answer to each query, which will be printed on a new line.

// If cat catches the mouse first, print Cat A.
// If cat catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

// The cats are at positions (Cat A) and (Cat B), and the mouse is at position . Cat B, at position will arrive first since it is only unit away while the other is units away. Return 'Cat B'.

// Function Description
// Complete the catAndMouse function in the editor below.

// catAndMouse has the following parameter(s):
//     int x: Cat A's position
// int y: Cat B's position
// int z: Mouse C's position

// Returns

//     string: Either 'Cat A', 'Cat B', or 'Mouse C'

// Input Format

// The first line contains a single integer,
// , denoting the number of queries.
// Each of the subsequent lines contains three space-separated integers describing the respective values of (cat A's location), (cat B's location), and (mouse C's location).
export function catAndMouse(x, y, z) {
  const differenceCatAToMouse = Math.abs(x - z);
  const differenceCatBToMouse = Math.abs(y - z);

  if (differenceCatAToMouse === differenceCatBToMouse) {
    console.log('Mouse C');
    return 'Mouse C';
  }
  if (differenceCatAToMouse < differenceCatBToMouse) {
    console.log('Cat A');
    return 'Cat A';
  }
  if (differenceCatBToMouse < differenceCatAToMouse) {
    console.log('Cat B');
    return 'Cat B';
  }
}
