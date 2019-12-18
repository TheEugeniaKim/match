import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Match!</h1> 
        
        <div>
          <GameBoard />
        </div>
      </header>
    </div>
  );
}

export default App;
