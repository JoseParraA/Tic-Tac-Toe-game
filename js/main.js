
let score = {
  X: 0,
  O: 0
};



//let playgame = [ _ , _ , _ , _ , _ , _ , _ , _ , _ ];
let wincombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7]
];
let playerTurn = '';
let turn = 0;

// PLAYER TURN//////////////////////////////////////////

const newTurn = function (turn) {
  if (turn % 2 === 0) {
    playerTurn = 'O';     //Player 2 goes

    console.log('Player 2');
  } else if (turn % 2 !== 0) {
    playerTurn = 'X';    //Player 1 goes

    console.log('Player 1');
  }
  return turn += 1
  console.log('we are on turn number ' +turn);
  console.log(playerTurn);
};

$("html").click(function () {    /////CLICK ANYWHERE ON THE SCREEN
  turn = newTurn(turn)
});

///PLAY GAME///////////////////////////////////////////////////
