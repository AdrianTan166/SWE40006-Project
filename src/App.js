import './App.css';
import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carbonara from './components/Carbonara'
import Ramen from './components/Ramen'


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
              <Route exact path = "/" element = {<Home/>} />
              <Route exact path = "/Recipe" element = {<Recipe/>} />
              <Route exact path = "/Carbonara" element = {<Carbonara/>} />
              <Route exact path = "/Ramen" element = {<Ramen/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
