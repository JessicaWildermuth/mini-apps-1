import React from 'react';

var Board = (props) => (
  <table>
    <tbody>

      {props.board.map((row, index) =>
         <tr key={index} id={index}>{row.map((col, index2) =>
          { switch(col) {
            case 0 :
              return <td key={index, index2} id={[index.toString() + index2.toString()]} onClick={props.handleClick} ></td>;
              break;
            case 1 :
              var trStyle = {
                backgroundColor: "yellow"
              }
              return <td key={index, index2} id={[index.toString() + index2.toString()]} onClick={props.handleClick} style={trStyle}></td>;
              break;
            case 2 :
              var trStyle = {
                backgroundColor: "red"
              }
              return <td key={index, index2} id={[index.toString() + index2.toString()]} onClick={props.handleClick} style={trStyle}></td>;
              break;
          }})}</tr>)}
    </tbody>
  </table>
);

export default Board;