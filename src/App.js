import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sqrt } from 'mathjs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The top of the page</p>
      </header>
        <p>
          square root of -4: {sqrt(-4).toString()}
        </p>

      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
