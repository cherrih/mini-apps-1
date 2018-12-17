import React from 'react';
import Square from './square.jsx';

const Column = props => {
  console.log(props.column)
  return(
      <div id="column">{props.column.map((row, id) => <Square row={row} id={id}/>)}</div>
  )
}

export default Column;