
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
      ]
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    console.log('Clicked!');
    console.log(this)
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