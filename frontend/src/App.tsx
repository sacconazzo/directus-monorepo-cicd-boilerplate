import React from 'react';
import logo from './logo.svg';
import { countries } from 'utilities';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We have {Object.keys(countries).length} countries
        </p>
      </header>
    </div>
  );
}

export default App;
