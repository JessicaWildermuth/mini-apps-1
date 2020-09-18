
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
    this.checkForWinner()
  }

  checkForWinner() {
    //check for winner needs to a have a direct row, col, minor diag, or major diag of 4 of the same
    //see if there is a path of 4 of same digit other than zero in any direction or way
    if (this.checkRowsYellowForWinner()) {
      this.setState({
        winner: "yellow"
      })
    }
    console.log(this.checkRowsRedForWinner);
    if (this.checkRowsRedForWinner()) {
      this.setState({
        winner: "red"
      })
    }
  }

  checkRowsYellowForWinner() {
   //need to see if four in a row are the same color
    for (var i = 0; i < this.state.board.length; i++) {
      var row = this.state.board[i];
      if (row[0] === 1 && row[1] === 1 && row[2] === 1 && row[3] === 1) {
        return true;
      } else if(row[1] === 1 && row[2] === 1 && row[3] === 1 && row[4] === 1) {
        return true;
      } else if(row[2] === 1 && row[3] === 1 && row[4] === 1 && row[5] === 1) {
        return true;
      }  else if(row[3] === 1 && row[4] === 1 && row[5] === 1 && row[6] === 1) {
        return true;
      }
    }
    return false;
  }

  checkRowsRedForWinner() {
    //need to see if four in a row are the same color
    for (var i = 0; i < this.state.board.length; i++) {
      var row = this.state.board[i];
      if (row[0] === 2 && row[1] === 2 && row[2] === 2 && row[3] === 2) {
        return true;
      } else if (row[2] === 2 && row[2] === 2 && row[3] === 2 && row[4] === 2) {
        return true;
      } else if (row[2] === 2 && row[3] === 2 && row[4] === 2 && row[5] === 2) {
        return true;
      }  else if (row[3] === 2 && row[4] === 2 && row[5] === 2 && row[6] === 2) {
        return true;
      }
    }
    return false;
  }

  checkColumnsYellowForWinner() {

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