import React from 'react'
import {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBowlFood} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


function Navbar(){

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () =>{
        if(window.scrollY >= 100) {
            setNavbar(true);
        }
        else
        {
            setNavbar(false);
        }

        
    };

    window.addEventListener('scroll', changeBackground);

    return(

        <div>
        <nav className = {navbar ? 'navbar active' : 'navbar'}>
            
            <ul >
                <li ><a href = "Home.js">Home</a></li>
                <li ><a href = "Recipe.js"></a>Recipe</li>
                
            </ul>
            
            
        </nav>

        <ul className = "logo">
            <FontAwesomeIcon icon = {faBowlFood}/>
        </ul>

        </div>


    )
}

export default Navbar