// An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

//     The player with the highest score is ranked number on the leaderboard.

//     Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

// Example

//     ranked = [100, 90, 90, 80]
//     player = [70, 80, 105]

// The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80, and 105, their rankings after each game are 4th, 3rd, and 1st. The return array is [4, 3, 1].

// Function Description

// Complete the function climbingLeaderboard in the editor below. It should return an integer array where each element represents the player's rank after each game.

// climbingLeaderboard has the following parameter(s):

//     int ranked[n]: the leaderboard scores
//     int player[m]: the player's scores

// Input Format

// The first line contains an integer n, the number of players on the leaderboard.
// The next line contains n space-separated integers ranked[i], the leaderboard scores in decreasing order.
// The next line contains an integer, m, the number of games the player plays.
// The last line contains m space-separated integers player[j], the player's scores in ascending order.

// Constraints

//     1 ≤ n ≤ 2x10^5

//     1 ≤ m ≤ 2x10^5

//     1 ≤ ranked[i] ≤ 10^9 for 0 ≤ i < n

//     1 ≤ player[j] ≤ 10^9 for 0 ≤ j < m

//     The existing leaderboard, ranked, is in descending order.

//     The player's scores, player, are in ascending order.

// Sample Input

// 7
// 100 100 50 40 40 20 10
// 4
// 5 25 50 120

// Sample Output

// 6
// 4
// 2
// 1

//please make a summary of the command above

// Sample Explanation

// The ranked players will have ranks 1, 1, 2, 3, 3, 4, and 5, respectively. If the player's scores are 5, 25, 50, and 120, their rankings after each game are 6th, 4th, 2nd, and 1st. The return array is [6, 4, 2, 1].
// The player is ranked 6th after the first game, 4th after the second game, 2nd after the third game, and 1st after the fourth game.

// Constraints
// 1 ≤ n ≤ 2x10^5
// 1 ≤ m ≤ 2x10^5
// 1 ≤ ranked[i] ≤ 10^9 for 0 ≤ i < n
// 1 ≤ player[j] ≤ 10^9 for 0 ≤ j < m
// The existing leaderboard, ranked, is in descending order.
// The player's scores, player, are in ascending order.
// Note: The ranked array may contain duplicates, but the player array will not.

// Example

// ranked = [100, 90, 90, 80]
// player = [70, 80, 105]

// The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80, and 105, their rankings after each game are 4th, 3rd, and 1st. The return array is [4, 3, 1].

// Function Description

// Complete the climbingLeaderboard function in the editor below. It should return an integer array where each element represents the player's rank after each game.

// climbingLeaderboard has the following parameter(s):

//     int ranked[n]: the leaderboard scores
//     int player[m]: the player's scores

export const climbingLeaderboardMock = {
  // number of players on the leaderboard.
  n: 7,
  //leaderboard scores in decreasing order.
  ranked: [100, 100, 50, 40, 40, 20, 10],
  // number of games the player plays.
  m: 4,
  //player's scores in ascending order.
  player: [5, 25, 50, 120],
};

function eraseDuplicatesInArray(array) {
  let rankedArrayWithoutDuplicates = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      continue;
    }
    rankedArrayWithoutDuplicates = [...rankedArrayWithoutDuplicates, array[i]];
  }

  return rankedArrayWithoutDuplicates;
}

export function climbingTheLeaderboard(ranked, player) {
  const rankedArrayWithoutDuplicates = eraseDuplicatesInArray(ranked);
  const playersRankAfterGame = [];
  let rankedIndex = rankedArrayWithoutDuplicates.length - 1;

  for (let i = 0; i < player.length; i++) {
    while (
      rankedIndex >= 0 &&
      player[i] >= rankedArrayWithoutDuplicates[rankedIndex]
    ) {
      rankedIndex--;
    }

    playersRankAfterGame.push(rankedIndex + 2);
  }

  console.log(playersRankAfterGame);
}
