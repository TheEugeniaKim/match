import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Match!</h1> 
      </header>
      <body>
          <GameBoard />
      </body>
    </div>
  );
}

export default App;
