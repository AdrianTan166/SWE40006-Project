import './App.css';
import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
            <Navbar/>

            <Routes>
              <Route path = "./" exact component = {() => <Home/>} />
              <Route path = "./Recipe" exact component = {() => <Recipe/>} />
            </Routes>

            </Router>

            <div>

                  <header className ="web-name">FOOD NATION</header>
              </div>
    </div>
  );
}

export default App;
