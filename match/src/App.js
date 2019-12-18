import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
      <body>
        <h1>Welcome to Match!</h1> 
          <div className="board">
            <GameBoard />
          </div>
      </body>
    </div>
  );
}

export default App;
