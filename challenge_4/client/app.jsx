
import React from 'react';
import Board from './board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: false,
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ],
      player: 'yellow'
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    console.log('Clicked!');
    var id = event.target.id
    var row = id[0];
    var col = id[1];
    //need to check if all the lower rows at the same column are filled yet
    for (var i = this.state.board.length - 1; i >= 0; i--) {
      if (this.state.board[i][col] === 0) {
        if (this.state.player === 'yellow') {
          var newBoard = this.state.board;
          newBoard[i][col] = 1;
          this.setState({
            board: newBoard,
            player: 'red'
          })
          break;
        } else {
          var newBoard = this.state.board;
          newBoard[i][col] = 2;
          this.setState({
            board: newBoard,
            player: 'yellow'
          })
          break;
        }
      }
    }
  }

  checkForWinner() {
    //check for winner needs to a have a direct row, col, minor diag, or major diag of 4 of the same
  }

  render() {
    return (
     <div>
       <h1>Connect Four</h1>
       <Board board={this.state.board} handleClick={this.handleClick}/>
     </div>
    );
  }
}

export default App;