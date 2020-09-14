//want to use a 2d model to represent my game board
//game board is empty to start
//a zero in the array index indicates no X or O
var gameBoard = [
  ['a', 0, 0],
  [0, 'a', 0],
  [0, 0, 'a'],
];

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

console.log(gameBoard);