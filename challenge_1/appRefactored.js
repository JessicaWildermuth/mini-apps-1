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
}

var checkForWinner = function() {

}

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
        console.log(currentCol);
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