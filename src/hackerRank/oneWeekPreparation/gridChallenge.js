/* 
Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.
*/

export function gridChallenge(grid) {
    //separate the strings into characters to form the grid
    const completeGrid = grid.map((row) => row.split(""));

    //sort all rows
    const orderedRows = completeGrid.map((row) => row.sort());

    //compare bellow letters with above, return NO if bellow < above
    for (let i = 0; i < completeGrid.length; i++) {
        for (let j = 0; j < completeGrid[i].length; j++) {
            //if there is another row bellow and the above character is bigger
            //return NO
            if (
                completeGrid[i + 1] &&
                completeGrid[i][j].charCodeAt() >
                    completeGrid[i + 1][j].charCodeAt()
            ) {
                return "NO";
            }
        }
    }
    //return YES if grid is alphabetically ordered
    return "YES";
}
