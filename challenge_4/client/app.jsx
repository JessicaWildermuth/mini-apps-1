
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
    console.log(event.target.id)
    var id = event.target.id
    var row = id[0];
    var col = id[1];
    if (this.state.board[row][col] === 0) {
      if (this.state.player === 'yellow') {
        var newBoard = this.state.board;
        newBoard[row][col] = 1;
        this.setState({
          board: newBoard,
          player: 'red'
        })
      } else {
        var newBoard = this.state.board;
        newBoard[row][col] = 2;
        this.setState({
          board: newBoard,
          player: 'yellow'
        })
      }
    }
    console.log(row, col, 'ROW AND COL')
    //need to change the state of the correct board array

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