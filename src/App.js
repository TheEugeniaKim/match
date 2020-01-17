import React from 'react';
import './App.css';
import GameArea from './components/GameArea';
import {connect} from 'react-redux'

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to Match!</h1> 
      <button onClick={null}>Directions</button> */}
      <GameArea />  
      <footer><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
  );
}



const connectedApp = connect(null, null)(App)

export default connectedApp;
