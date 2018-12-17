// To satisfy the basic requirements of this challenge, you must detect a win or tie and display an appropriate message. 
// Refreshing the page should restart the game. 
// Write at least four tests (one test for each of horizontal, vertical, diagonal wins and one for ties) to verify your end-of-game detection logic. 
// You may choose to write your tests to run either with node or within the browser.

// Build your client app inside the client folder. 
import React from 'react';
import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        
        [0,1,2,3,4,5],
        [0,1,2,3,4,5],
        [0,1,2,3,4,5],
        [0,1,2,3,4,5],
        [0,1,2,3,4,5],
        [0,1,2,3,4,5],
        [0,1,2,3,4,5]
      ]
    }
  }

  render() {
    return <Board board={this.state.board}/>
  }
}


export default App;