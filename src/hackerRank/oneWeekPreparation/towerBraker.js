/* 
Two players are playing a game of Tower Breakers! Player

always moves first, and both players always play optimally.The rules of the game are as follows:
Initially there are n towers.Each tower is of height m.
The players move in alternating turns.
In each turn, a player can choose a tower of height x
and reduce its height to y, where 1<=y <= x and y evenly divdes x.
If the current player is unable to make a move, they lose the game.
Given the values of n and m , determine which player will win. If the first player wins, return 1. Otherwise, return 2 
*/

export function towerBreaker(n, m) {
  let towers = [];
  for (let i = 0; i < n; i++) {
    towers = [...towers, m];
  }

  function bestMove(towerHeight) {
    Array(towerHeight).map((move) => {
      if (towerHeight % move === 0) {
        return move;
      }
    });
  }

  console.log(bestMove(m));
}
