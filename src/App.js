import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomepageImage from './components/HomepageImage'
import Catalog from './Catalog'

function App() {
  return (
    <div className="App">
    <Catalog />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    <HomepageImage />

        <p>
          My first React website!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
