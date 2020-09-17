import React from 'react';

var Board = (props) => (
  <table>
    <tbody>
      {props.board.map((row, index) => <tr key={index} id={index}>{row.map((col, index2) => <td key={index, index2} id={[index.toString() + index2.toString()]} onClick={props.handleClick}></td>)}</tr>)}
    </tbody>
  </table>
);

export default Board;