$(document).ready(function() {


let score = {
  X: 0,
  O: 0
};
//displayObject('O', score.O);




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
gameOver = false;


//////////////////////////////////////////////////////////// PLAYER TURN//////////////////////////////////////////
function indexNum(num, choosenSquare){

  if (turn % 2 === 0) {
    playerTurn = 'X';

    console.log('Player 1');
  } else if (turn % 2 !== 0) {
    playerTurn = 'O';    //Player 1 goes

    console.log('Player 2');
  }

/////////////////////////////////////////////////STORE THE INDEX IN THE ARRAY//////////////////

  gameOutcome.splice(num, 1, playerTurn)
  console.log(gameOutcome)
  choosenSquare.text(playerTurn)
  turn +=1

}


/////////////////////////////////////////////////////////////PLAY GAME/////////


let playGame = function () {
  if (gameOver === false ) {
    let num = parseInt(this.id);
    let choosenSquare = $(this)
    console.log(choosenSquare);
    if (gameOutcome[num] ==='X' || gameOutcome[num] === 'O') {
      console.log('this position is taken');
      return
    }

    console.log(num);
    indexNum(num, choosenSquare)
    winner();
  }
};
////////////////////////////////////////////////////////////

$('.square').on('click', playGame);

///////////////////////////////////////////////////////////
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
          score.X += 1;
          console.log(score);
          gameOver = true;
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
          score.O += 1;
          console.log(score);
          gameOver = true;
}
};


///////////////////////////////////////RESET THE GAME WHEN SOMEONE PRESS RESTART//////////////////

let nextRound = function () {
  turn = 0;
  gameOutcome = [ '_' , '_' , '_' , '_' , '_' , '_' , '_' , '_' , '_' ];
  gameOver = false;

  $('.square').text('');
};


$('.restart').on('click',nextRound)


/////////////////////////////////////////////////////////////////NEW GAME BUTTON////////

let newGame = function () {
  turn = 0;
  gameOutcome = [ '_' , '_' , '_' , '_' , '_' , '_' , '_' , '_' , '_' ];
  gameOver = false;
  score = {
    X: 0,
    O: 0
  };
  $('.square').text('');
}
$('.newGame').on('click',newGame)

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

//////////////////////////////////////////////////////////////////
// $('.square').on('click', function() { //it is to click in every object in that array
//       //checking weather the class player 1 or player 2 is added to see if the box is already taken
//       if (gameOver === false) { //to check if anyone won and stop the game
//           if ($(this).hasClass("player1") || $(this).hasClass("player2")) {
//               console.log('not in this box');
//           } else {
//               //because the box is not taken you can add a class to take it
//               //============== adding class to the div
//               $(this).addClass(playerTurn);
//               $(this).css("background-image", "url('" + playerImage[playerTurn] + "')");
//
//               // this is taking one object with the class square any time you click, before I tryed with .square instead of this and it added the class player 1 in all the divs
//               //============check winner with a function
//               checkWinner();
//               //==========to check the turn
//               newTurn();
//           }
//       }
//   });
