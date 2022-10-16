import React from 'react'
import {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBowlFood} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
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

        <div className = "home_area">
        <nav className = {navbar ? 'navbar active' : 'navbar'}>
            
        <input type = "checkbox" id="check"></input>
            <label for = "check" className ="checkbtn">
                <FontAwesomeIcon icon={faBars} />
            </label>

            <ul >
                {/* <li ><a href = "Home.js">Home</a></li>
                <li ><a href = "Recipe.js"></a>Recipe</li> */}

                  <li> <NavLink className = "nav-link" to = "/Home">Home</NavLink> </li>
                  <li> <NavLink className = "nav-link" to = "/Recipe">Recipes</NavLink></li>
                
            </ul>
            
            
        </nav>

        <ul className = "logo">
            <FontAwesomeIcon icon = {faBowlFood}/>
        </ul>

        </div>


    )
}

export default Navbar