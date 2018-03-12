$(document).ready(function() {



let score = {
  X: 0,
  O: 0
};



let gameOutcome = [ '_' , '_' , '_' , '_' , '_' , '_' , '_' , '_' , '_' ];

let winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6]
];
let playerTurn = '';
let turn = 0;
let chosenArray = [];



let playGame = function () {
  parseInt(this.id);
  console.log(this.id.parseInt());
}
$('.square').on('click', playGame);



// PLAYER TURN//////////////////////////////////////////

// const newTurn = function (turn) {
//   if (turn % 2 === 0) {
//     playerTurn = 'O';     //Player 2 goes
//
//     console.log('Player 2');
//   } else if (turn % 2 !== 0) {
//     playerTurn = 'X';    //Player 1 goes
//
//     console.log('Player 1');
//   }
//   return turn += 1
//   console.log('we are on turn number ' +turn);
//   console.log(playerTurn);
// };
//
// ////CHOOSE THE MOVEMENT/////////////////////////////////////////
//
// $("html").click(function () {    /////CLICK ANYWHERE ON THE SCREEN
//   turn = newTurn(turn)
// });

////////////////////////////////////////////////////////TEST//////

// let play = function (chosenArray) {
//   if (turn < 9) {
// console.log(chosenArray);
//     for (var i = 0; i < winCombinations.length; i++) {
//
//       matchedMoves = 0;
//       // console.log('hola');
//       for (var j = 0; j < chosenArray.length; j++) {
//
//         if (winCombinations[i][j] === chosenArray[j]) {
// console.log('is');
//         return matchedMoves += 1
//         }
//       }
//     }
//   }
// };
// play(chosenArray);
});
