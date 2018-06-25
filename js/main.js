$(document).ready(function() {

//////////////////////////////////////////////////////Change the name///////////
  let playerOneName = "Player X"
  let playerTwoName = "Player O"

    $('#xSubmit').on('click', function() {   //Add Name to X Player
    playerOneName = $('#nameX').val()        // Take the name from the input box
    $('#X').html(playerOneName + ' ' + score.X);
    })
    $('#oSubmit').on('click',function() {    // Add Name to O Player
    playerTwoName = $('#nameY').val()        // Take the name from the input box
    $('#O').html(playerTwoName + ' ' + score.X);
    });

////////////////////////////////////////////////////////////////variables//////

  let score = {         //Keep the score during the macth
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
  let gameOver = false;


//////////////////////////////////////////////////////////// PLAYER TURN////////
  function indexNum(num, choosenSquare){

    if (turn % 2 === 0) {             //Change turn every time one square is taken
      playerTurn = 'X';               //Player 1 goes
      console.log('Player 1');

    } else if (turn % 2 !== 0) {
      playerTurn = 'O';               //Player 2 goes
      console.log('Player 2');
    }

/////////////////////////////////////////////STORE THE INDEX IN THE ARRAY//////


    gameOutcome.splice(num, 1, playerTurn) //Add a X or an O in the empty array on the index number (num)
    console.log(gameOutcome)
    choosenSquare.text(playerTurn)    //Add a X or an O inthe variable playerTurn
    turn +=1

  }

////////////////////////////////////////////////////////PLAY GAME///////////////


  let playGame = function () {
    if (gameOver === false ) { //Check that game over is false first
      let num = parseInt(this.id);   //Change the string into a number
      let choosenSquare = $(this)     //Give choosenSquare same value to export outside of the function
      if (gameOutcome[num] ==='X' || gameOutcome[num] === 'O') {     //Check if thr square is already taken
        console.log('this position is taken');
        return
      }
      console.log(num);
      indexNum(num, choosenSquare)
      winner();
    }
  };
////////////////////////////////////////////////Click on any square event///////

  $('.square').on('click', playGame);

///////////////////////////////////////////////////////////Check for a winner
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
        score.X += 1;
        if (score.X === 3) {
            window.alert(`${playerOneName} wins the match, press New Game to play again`);
            };////Alert Box

        $('#X').html(playerOneName + ' ' + score.X);      //Update the score

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
        score.O += 1;
        if (score.O === 3) {
            window.alert(`${playerTwoName} wins the match, press New Game to play again`);
            }; ////Alert Box

        $('#O').html(playerTwoName + ' ' + score.O);      //Update the score

      }
  };


////////////////////////RESET THE GAME WHEN SOMEONE PRESS BUTTON RESTART///////

  let nextRound = function () {
    turn = 0;
    gameOutcome = [ '_' , '_' , '_' , '_' , '_' , '_' , '_' , '_' , '_' ];
    gameOver = false;
    $('.square').text('');
  };


  $('.restart').on('click',nextRound)


/////////////////////////////////////////////////////////NEW GAME BUTTON////////

  let newGame = function () {
    turn = 0;
    gameOutcome = [ '_' , '_' , '_' , '_' , '_' , '_' , '_' , '_' , '_' ];
    gameOver = false;
    score = {
      X: 0,
      O: 0 };
    $('.square').text('');
  }

  $('.newGame').on('click',newGame)


});
