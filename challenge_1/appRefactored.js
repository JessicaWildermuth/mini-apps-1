//want to use a 2d model to represent my game board
//game board is empty to start
//a zero in the array index indicates no X or O

//MODEL


var gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

var currentPlayer = 'X';
var winner;
var updateGameBoard = function(row, col) {
  if (gameBoard[row][col] !== 0) {
    return;
  }
  //update the gameboard with correct value
  gameBoard[row][col] = currentPlayer;
  //update current Player
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  renderGameBoard();
  if (checkForWinner()) {
    var winning = document.getElementById('winner');
    winning.innerHTML = `The Winner Is ${checkForWinner()}!`
  };
}

var clearBoard = function() {
  for (var i = 0; i < gameBoard.length; i++) {
    //update DOM space with correct value
    var row = gameBoard[i];
    for (var j = 0; j < row.length; j++) {
      //get the i+j id
      gameBoard[i][j] = 0;
      var correspondingDOM = document.getElementById(i.toString() + j.toString());
      correspondingDOM.innerHTML = '';
    }
  }
};
var isAllSame = function(array) {
  if (array.every(function(element) { return element === 'X' })) {
   return "X";
  }  else if (array.every(function(element) { return element === 'O' })) {
    return "O";
  }
};

var checkForWinner = function() {
  //check if three in a row


  for (var i = 0; i < gameBoard.length; i++) {
    var row = gameBoard[i];
    var column = gameBoard.map(row => row[i]);
    var majorDiag = [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]];
    var minorDiag = [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]];

    var possibleWinners = [row, column, majorDiag, minorDiag];

    for (var j = 0; j < possibleWinners.length; j++) {
      if(isAllSame(possibleWinners[j])) {
        winner = isAllSame(possibleWinners[j]);
        return isAllSame(possibleWinners[j]);
      }
    }
    //look if a row has three of a kind

  }
   //look at each column for three of a kind
    //get every column
    //for each column check for winner
   //look if a diagonal has three of kind
};

//VIEW
//have a function that renders the values that are in my gameboard array
function renderGameBoard() {
  //for each element in gameboard,
  for (var i = 0; i < gameBoard.length; i++) {
    //update DOM space with correct value
    var currentRow = gameBoard[i];
    for (var j = 0; j < currentRow.length; j++) {
      var currentCol = currentRow[j];
      //get the i+j id
      var correspondingDOM = document.getElementById(i.toString() + j.toString());
      if (currentCol !== 0) {
        correspondingDOM.innerHTML = currentCol;
      }
    }
  }
}



//CONTROLLER
var gameBoxes = document.getElementsByClassName('gamebox');
for (var i = 0; i < gameBoxes.length; i++) {
  var gamebox = gameBoxes[i];
  gamebox.addEventListener('click', function() {
    //add the right value to gameboard model
      //access the game model row and col
      var id = this.id;
      var row = Number(id[0]);
      var col = Number(id[1]);
    //update my game model
    updateGameBoard(row, col);
  });
}
//each gameboard element needs to be clickable
//when I click, it add an X or and O to the gameboard model array
//shows the current gameboard mopdel

console.log(gameBoard);