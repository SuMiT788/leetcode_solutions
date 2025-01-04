/**
 * https://leetcode.com/problems/valid-sudoku/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be
 * validated according to the following rules:
 *
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Note:
 *
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 */

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function (board) {
//   for (let i = 0; i < board.length; i++) {
//     const horizontalSet = new Set();
//     const verticalSet = new Set();
//     const subMatrixSet = new Set();
//     const subMatrixStartI = (i % 3) * 3;
//     const subMatrixStartJ = i > 2 ? (i > 5 ? 6 : 3) : 0;
//     for (let j = 0; j < board[i].length; j++) {
//       const subMatrixI = subMatrixStartI + (j > 2 ? (j > 5 ? 2 : 1) : 0);
//       const subMatrixJ = subMatrixStartJ + (j % 3);

//       if (board[i][j] !== ".") {
//         if (horizontalSet.has(board[i][j])) {
//           return false;
//         }

//         horizontalSet.add(board[i][j]);
//       }

//       if (board[j][i] !== ".") {
//         if (verticalSet.has(board[j][i])) {
//           return false;
//         }

//         verticalSet.add(board[j][i]);
//       }

//       if (board[subMatrixI][subMatrixJ] !== ".") {
//         if (subMatrixSet.has(board[subMatrixI][subMatrixJ])) {
//           return false;
//         }

//         subMatrixSet.add(board[subMatrixI][subMatrixJ]);
//       }
//     }
//   }

//   return true;
// };

var isValidSudoku = function (board) {
  let rows = new Array(9).fill(0).map(() => new Set());
  let column = new Array(9).fill(0).map(() => new Set());
  let boxes = new Array(9).fill(0).map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let val = board[i][j];

      if (val === ".") continue;

      // Calculate box index
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i].has(val) || column[j].has(val) || boxes[boxIndex].has(val)) {
        return false;
      }

      rows[i].add(val);
      column[j].add(val);
      boxes[boxIndex].add(val);
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ])
);
