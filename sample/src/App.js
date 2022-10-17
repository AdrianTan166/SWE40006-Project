import logo from './logo.svg';
import './App.css';

const express = require("express");
const app = express();

app.get("/home", (_req, res) =>  {
  res.status(200).send("Hello world")
})
module.exports = app;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

module.exports = app;
