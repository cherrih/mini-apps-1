import React from 'react';
import Column from './Column.jsx';

const Board = props => {
  return (
    <div id='board'>
      {props.board.map((column, index) => <Column column={column} index={index}/>)}
    </div>
  )
}


export default Board;