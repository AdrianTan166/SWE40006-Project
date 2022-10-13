import './App.css';
import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Recipe/>
    </div>
  );
}

export default App;
