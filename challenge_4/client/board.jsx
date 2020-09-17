import React from 'react';

var Board = (props) => (
  <table>
    <tbody>
      {props.board.map((row, index) => <tr key={index} id={index}>{row.map((col, index2) => <td key={index, index2} id={[index.toString() + index2.toString()]} onClick={props.handleClick}></td>)}</tr>)}
    </tbody>
  </table>
);

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state ={
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(event) {
//     console.log('Clicked!');
//     console.log(this)
//   }
//   render() {
//     return (
//       <table>
//         <tbody>
//           {this.props.rows.map((row) => <tr key={row}>{this.props.columns.map((col) => <td key={col} onClick={this.handleClick}></td>)}</tr>)}
//         </tbody>
//       </table>
//     )
//   }
// }

export default Board;