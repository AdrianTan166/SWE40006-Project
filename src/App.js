import './App.css';
import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/Home" element={<Home/>}/>
                    <Route exact path="/Recipe" element={<Recipe/>}/>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
