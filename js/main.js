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
// let chosenArray = [];
// let chosenSquare;

let playGame = function () {
  let num = parseInt(this.id);
  console.log(num);
  indexNum(num)
  winner();
};




const winner = function () {
if (
      (gameOutcome[0] === 'X' && gameOutcome[1] === 'X' && gameOutcome[2] === 'X')||
      (gameOutcome[3] === 'X' && gameOutcome[4] === 'X' && gameOutcome[5] ==='X')||
      (gameOutcome[6] === 'X' && gameOutcome[7] === 'X' && gameOutcome[8] ==='X')||
      (gameOutcome[0] === 'X' && gameOutcome[4] === 'X' && gameOutcome[8] ==='X')||
      (gameOutcome[0] === 'X' && gameOutcome[3] === 'X' && gameOutcome[6] ==='X')||
      (gameOutcome[1] === 'X' && gameOutcome[4] === 'X' && gameOutcome[7] ==='X')||
      (gameOutcome[2] === 'X' && gameOutcome[5] === 'X' && gameOutcome[8] ==='X')||
      (gameOutcome[2] === 'X' && gameOutcome[4] === 'X' && gameOutcome[6] ==='X')
) {
  console.log('Player 1 win!');
} else if (
      (gameOutcome[0] === 'O' && gameOutcome[1] === 'O' && gameOutcome[2] === 'O')||
      (gameOutcome[3] === 'O' && gameOutcome[4] === 'O' && gameOutcome[5] ==='O')||
      (gameOutcome[6] === 'O' && gameOutcome[7] === 'O' && gameOutcome[8] ==='O')||
      (gameOutcome[0] === 'O' && gameOutcome[4] === 'O' && gameOutcome[8] ==='O')||
      (gameOutcome[0] === 'O' && gameOutcome[3] === 'O' && gameOutcome[6] ==='O')||
      (gameOutcome[1] === 'O' && gameOutcome[4] === 'O' && gameOutcome[7] ==='O')||
      (gameOutcome[2] === 'O' && gameOutcome[5] === 'O' && gameOutcome[8] ==='O')||
      (gameOutcome[2] === 'O' && gameOutcome[4] === 'O' && gameOutcome[6] ==='O')
) {
  console.log('Player 2 win!');
}
};




// PLAYER TURN//////////////////////////////////////////
function indexNum(num){

  if (turn % 2 === 0) {
    playerTurn = 'X';

    console.log('Player 1');
  } else if (turn % 2 !== 0) {
    playerTurn = 'O';    //Player 1 goes

    console.log('Player 2');
  }

////STORE THE INDEX IN THE ARRAY//////////////////

  gameOutcome.splice(num, 1, playerTurn)
  console.log(gameOutcome)
  turn +=1
}

$('.square').on('click', playGame);


//////CHECK FOR WINNER/////////////////////////////


  for (let i = 0; i < winCombinations.length; i++) {
    let winCombination = winCombinations[i];
    for (let j = 0; j < winCombination.length; j++) {
    console.log(winCombinations[i][j]);



    // if (indexOf.gameOutcome === winCombinations[i][j]) {
    //   console.log('urra')
    }
  };


  //   let c1 = winCombinations[0];
  //   let c2 = winCombinations[1];
  //   let c3 = winCombinations[2];
  //
  // gameOutcome[c1] == gameOutcome[c2] && gameOutcome[c2] == gameOutcome[c3]



//////RESET THE GAME WHEN SOMEONE PRESS RESTART//////////////////

let restart = function () {
  turn = 0;
  gameOutcome = [ '_' , '_' , '_' , '_' , '_' , '_' , '_' , '_' , '_' ];
};

$('.restart').on('click',restart)



});
// PLAYER TURN//////////////////////////////////////////

// const newTurn = function (turn) {
//   if (turn % 2 === 0) {
//     playerTurn = 'O';
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
  // turn = newTurn(turn)
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
