import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getCsrfToken} from "../utils/csrf";

function App() {
  console.log(getCsrfToken())
  return (
    <div className="App">
      <header className="flex flex-col justify-center items-center h-screen text-white text-3xl bg-blue-900">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
